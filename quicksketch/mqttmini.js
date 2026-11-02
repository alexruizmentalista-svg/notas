/* Cliente MQTT 3.1.1 mínimo sobre WebSocket (solo QoS 0) para Notas */
(function(){
  function enc(s){ return new TextEncoder().encode(s); }
  function dec(b){ return new TextDecoder().decode(b); }
  function strField(s){ const b = enc(s); const o = new Uint8Array(2 + b.length); o[0] = b.length >> 8; o[1] = b.length & 255; o.set(b, 2); return o; }
  function remLen(n){ const out = []; do { let d = n % 128; n = Math.floor(n / 128); if (n > 0) d |= 128; out.push(d); } while (n > 0); return out; }
  function packet(type, flags, body){ const rl = remLen(body.length); const o = new Uint8Array(1 + rl.length + body.length); o[0] = (type << 4) | flags; o.set(rl, 1); o.set(body, 1 + rl.length); return o; }
  function cat(){ let n = 0; for (const a of arguments) n += a.length; const o = new Uint8Array(n); let i = 0; for (const a of arguments){ o.set(a, i); i += a.length; } return o; }

  function Client(url, opts){
    this.url = url; this.opts = opts || {}; this.subs = []; this.ws = null; this.ok = false; this.buf = new Uint8Array(0);
    this.pid = 1; this.retry = 1000; this.closed = false; this.onmessage = null; this.onstate = null; this.queue = [];
    this._open();
  }
  Client.prototype._state = function(s){ this.ok = s; if (this.onstate) try { this.onstate(s); } catch(e){} };
  Client.prototype._open = function(){
    const self = this;
    let ws;
    try { ws = new WebSocket(this.url, ['mqtt']); } catch(e){ return this._later(); }
    ws.binaryType = 'arraybuffer';
    this.ws = ws;
    ws.onopen = function(){
      const cid = 'notas' + Math.random().toString(36).slice(2, 12);
      const body = cat(strField('MQTT'), new Uint8Array([4, 2, 0, 30]), strField(cid));
      ws.send(packet(1, 0, body));
    };
    ws.onmessage = function(ev){ self._data(new Uint8Array(ev.data)); };
    ws.onclose = function(){ self._state(false); clearInterval(self.ping); if (!self.closed) self._later(); };
    ws.onerror = function(){ try { ws.close(); } catch(e){} };
  };
  Client.prototype._later = function(){ const self = this; clearTimeout(this.rt); this.rt = setTimeout(function(){ self._open(); }, this.retry); this.retry = Math.min(this.retry * 1.6, 8000); };
  Client.prototype._data = function(chunk){
    this.buf = cat(this.buf, chunk);
    while (this.buf.length >= 2){
      let mult = 1, len = 0, i = 1, b;
      do { if (i >= this.buf.length) return; b = this.buf[i++]; len += (b & 127) * mult; mult *= 128; } while (b & 128);
      if (this.buf.length < i + len) return;
      const type = this.buf[0] >> 4, body = this.buf.slice(i, i + len);
      this.buf = this.buf.slice(i + len);
      this._packet(type, body);
    }
  };
  Client.prototype._packet = function(type, body){
    const self = this;
    if (type === 2){ // CONNACK
      if (body[1] !== 0) return;
      this.retry = 1000; this._state(true);
      this.subs.forEach(function(t){ self._sub(t); });
      clearInterval(this.ping); this.ping = setInterval(function(){ self._send(new Uint8Array([0xC0, 0])); }, 20000);
      const q = this.queue; this.queue = []; q.forEach(function(p){ self._send(p); });
    } else if (type === 3){ // PUBLISH (QoS 0)
      const tl = (body[0] << 8) | body[1];
      const topic = dec(body.slice(2, 2 + tl)), payload = dec(body.slice(2 + tl));
      if (this.onmessage) try { this.onmessage(topic, payload); } catch(e){}
    }
  };
  Client.prototype._send = function(p){ try { if (this.ws && this.ws.readyState === 1) { this.ws.send(p); return true; } } catch(e){} return false; };
  Client.prototype._sub = function(topic){
    const id = this.pid++ & 0xffff || 1;
    this._send(packet(8, 2, cat(new Uint8Array([id >> 8, id & 255]), strField(topic), new Uint8Array([0]))));
  };
  Client.prototype.subscribe = function(topic){ if (this.subs.indexOf(topic) === -1) this.subs.push(topic); if (this.ok) this._sub(topic); };
  Client.prototype.publish = function(topic, msg){
    const p = packet(3, 0, cat(strField(topic), enc(msg)));
    if (this.ok) this._send(p); else { this.queue.push(p); if (this.queue.length > 60) this.queue.shift(); }
  };
  Client.prototype.close = function(){ this.closed = true; clearInterval(this.ping); clearTimeout(this.rt); try { this.ws.close(); } catch(e){} };

  // Varios brokers públicos a la vez: se publica en todos y se descartan duplicados al recibir
  function Multi(urls){
    const self = this; this.clients = urls.map(function(u){ return new Client(u); });
    this.seen = {}; this.seenList = []; this.onmessage = null; this.onstate = null;
    this.clients.forEach(function(c){
      c.onstate = function(){ if (self.onstate) self.onstate(self.clients.filter(function(x){ return x.ok; }).length); };
      c.onmessage = function(topic, payload){
        let m; try { m = JSON.parse(payload); } catch(e){ return; }
        if (m && m._m){ if (self.seen[m._m]) return; self.seen[m._m] = 1; self.seenList.push(m._m); if (self.seenList.length > 400) delete self.seen[self.seenList.shift()]; }
        if (self.onmessage) self.onmessage(topic, m);
      };
    });
  }
  Multi.prototype.subscribe = function(t){ this.clients.forEach(function(c){ c.subscribe(t); }); };
  Multi.prototype.publish = function(t, obj){
    obj._m = obj._m || (Date.now().toString(36) + Math.random().toString(36).slice(2, 7));
    const s = JSON.stringify(obj); this.clients.forEach(function(c){ c.publish(t, s); });
  };
  Multi.prototype.connected = function(){ return this.clients.filter(function(x){ return x.ok; }).length; };
  Multi.prototype.close = function(){ this.clients.forEach(function(c){ c.close(); }); };
  window.MQTTMini = { Client: Client, Multi: Multi };
})();
