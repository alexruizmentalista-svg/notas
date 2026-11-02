// Dibujos para colorear: cada <path|circle|ellipse|rect class="r"> es una zona que se rellena al tocarla.
window.QS_DRAWINGS = [
 { id:'casa', n:'Casa', svg:`
  <rect class="r" x="0" y="230" width="300" height="70"/>
  <circle class="r" cx="245" cy="55" r="28"/>
  <rect class="r" x="185" y="70" width="24" height="50"/>
  <path class="r" d="M40 140 L150 55 L260 140 Z"/>
  <rect class="r" x="60" y="140" width="180" height="100"/>
  <rect class="r" x="130" y="175" width="40" height="65"/>
  <rect class="r" x="78" y="160" width="36" height="32"/>
  <rect class="r" x="186" y="160" width="36" height="32"/>
  <path class="l" d="M96 160v32M78 176h36M204 160v32M186 176h36"/>` },
 { id:'flor', n:'Flor', svg:`
  <path class="r" d="M95 250h110l-14 45H109z"/>
  <path class="r" d="M144 140h12v110h-12z"/>
  <path class="r" d="M150 215c-30-25-60-20-70-5 25 10 45 15 70 5z"/>
  <path class="r" d="M150 190c30-25 60-20 70-5-25 10-45 15-70 5z"/>
  <ellipse class="r" cx="150" cy="58" rx="22" ry="34"/>
  <ellipse class="r" cx="150" cy="142" rx="22" ry="34"/>
  <ellipse class="r" cx="108" cy="100" rx="34" ry="22"/>
  <ellipse class="r" cx="192" cy="100" rx="34" ry="22"/>
  <ellipse class="r" cx="120" cy="70" rx="20" ry="30" transform="rotate(-45 120 70)"/>
  <ellipse class="r" cx="180" cy="70" rx="20" ry="30" transform="rotate(45 180 70)"/>
  <ellipse class="r" cx="120" cy="130" rx="20" ry="30" transform="rotate(45 120 130)"/>
  <ellipse class="r" cx="180" cy="130" rx="20" ry="30" transform="rotate(-45 180 130)"/>
  <circle class="r" cx="150" cy="100" r="26"/>` },
 { id:'gato', n:'Gato', svg:`
  <path class="r" d="M215 250c45-5 60-50 40-80-10 20-20 45-50 55z"/>
  <ellipse class="r" cx="150" cy="215" rx="70" ry="60"/>
  <path class="r" d="M85 95 L92 30 L130 70 Z"/>
  <path class="r" d="M215 95 L208 30 L170 70 Z"/>
  <circle class="r" cx="150" cy="115" r="62"/>
  <ellipse class="r" cx="126" cy="105" rx="10" ry="14"/>
  <ellipse class="r" cx="174" cy="105" rx="10" ry="14"/>
  <path class="r" d="M140 128h20l-10 12z"/>
  <path class="l" d="M150 140v8M150 148c-6 8-16 8-20 2M150 148c6 8 16 8 20 2M120 135l-40-6M120 143l-40 6M180 135l40-6M180 143l40 6"/>` },
 { id:'pez', n:'Pez', svg:`
  <circle class="r" cx="60" cy="70" r="10"/><circle class="r" cx="40" cy="40" r="7"/><circle class="r" cx="70" cy="30" r="5"/>
  <path class="r" d="M220 150 L285 100 L285 200 Z"/>
  <path class="r" d="M120 105 L150 60 L185 108 Z"/>
  <ellipse class="r" cx="140" cy="150" rx="95" ry="58"/>
  <path class="r" d="M130 180 L160 210 L175 175 Z"/>
  <circle class="r" cx="85" cy="135" r="13"/>
  <path class="l" d="M160 105c20 20 20 70 0 90M185 110c15 20 15 60 0 80M60 170c10 5 20 5 28-2"/>` },
 { id:'coche', n:'Coche', svg:`
  <rect class="r" x="0" y="250" width="300" height="50"/>
  <path class="r" d="M30 230 L30 175 Q35 160 60 158 L95 155 L125 110 Q130 102 145 102 L205 102 Q215 102 222 112 L250 155 Q275 158 280 175 L280 230 Z"/>
  <path class="r" d="M108 155 L132 117 L170 117 L170 155 Z"/>
  <path class="r" d="M182 155 L182 117 L212 117 L236 155 Z"/>
  <circle class="r" cx="85" cy="232" r="30"/><circle class="r" cx="225" cy="232" r="30"/>
  <circle class="r" cx="85" cy="232" r="12"/><circle class="r" cx="225" cy="232" r="12"/>
  <rect class="r" x="262" y="175" width="18" height="14"/>` },
 { id:'arbol', n:'Árbol', svg:`
  <rect class="r" x="0" y="250" width="300" height="50"/>
  <path class="r" d="M130 160h40l10 95h-60z"/>
  <circle class="r" cx="105" cy="120" r="55"/>
  <circle class="r" cx="195" cy="120" r="55"/>
  <circle class="r" cx="150" cy="80" r="62"/>
  <circle class="r" cx="110" cy="105" r="10"/><circle class="r" cx="185" cy="80" r="10"/><circle class="r" cx="150" cy="135" r="10"/><circle class="r" cx="205" cy="140" r="10"/><circle class="r" cx="130" cy="55" r="10"/>` },
 { id:'barco', n:'Barco', svg:`
  <circle class="r" cx="60" cy="55" r="28"/>
  <path class="r" d="M0 240 Q25 225 50 240 T100 240 T150 240 T200 240 T250 240 T300 240 V300 H0 Z"/>
  <path class="r" d="M40 200 H260 L230 245 H70 Z"/>
  <rect class="r" x="146" y="40" width="8" height="160"/>
  <path class="r" d="M156 45 L156 185 L245 185 Z"/>
  <path class="r" d="M144 70 L144 185 L80 185 Z"/>
  <circle class="r" cx="110" cy="222" r="8"/><circle class="r" cx="150" cy="222" r="8"/><circle class="r" cx="190" cy="222" r="8"/>` },
 { id:'mariposa', n:'Mariposa', svg:`
  <path class="r" d="M145 140 C110 40 30 40 40 110 C45 150 110 150 145 145 Z"/>
  <path class="r" d="M155 140 C190 40 270 40 260 110 C255 150 190 150 155 145 Z"/>
  <path class="r" d="M145 155 C100 160 55 200 80 235 C100 255 135 215 145 165 Z"/>
  <path class="r" d="M155 155 C200 160 245 200 220 235 C200 255 165 215 155 165 Z"/>
  <ellipse class="r" cx="150" cy="160" rx="10" ry="62"/>
  <circle class="r" cx="95" cy="100" r="15"/><circle class="r" cx="205" cy="100" r="15"/>
  <circle class="r" cx="100" cy="205" r="10"/><circle class="r" cx="200" cy="205" r="10"/>
  <path class="l" d="M146 102 C140 80 125 70 115 65M154 102 C160 80 175 70 185 65"/>` },
 { id:'helado', n:'Helado', svg:`
  <path class="r" d="M100 150 L200 150 L150 290 Z"/>
  <path class="l" d="M122 178 L166 238M150 165 L180 202M178 178 L134 238M150 165 L120 202"/>
  <circle class="r" cx="120" cy="140" r="34"/>
  <circle class="r" cx="180" cy="140" r="34"/>
  <circle class="r" cx="150" cy="95" r="38"/>
  <path class="l" d="M157 39c3-12 10-20 20-24"/>
  <circle class="r" cx="155" cy="50" r="12"/>` },
 { id:'cohete', n:'Cohete', svg:`
  <path class="r" d="M120 230 L180 230 L170 270 L150 295 L130 270 Z"/>
  <path class="r" d="M115 175 L70 235 L115 225 Z"/>
  <path class="r" d="M185 175 L230 235 L185 225 Z"/>
  <path class="r" d="M115 95 L185 95 L185 230 L115 230 Z"/>
  <path class="r" d="M115 95 Q150 10 185 95 Z"/>
  <circle class="r" cx="150" cy="140" r="22"/>
  <circle class="r" cx="40" cy="50" r="6"/><circle class="r" cx="255" cy="70" r="8"/><circle class="r" cx="245" cy="150" r="5"/>` },
 { id:'globos', n:'Globos', svg:`
  <path class="l" d="M90 160 C100 200 130 220 150 280M210 150 C200 200 170 220 150 280M150 120 L150 280"/>
  <ellipse class="r" cx="90" cy="110" rx="45" ry="55"/>
  <ellipse class="r" cx="210" cy="100" rx="45" ry="55"/>
  <ellipse class="r" cx="150" cy="75" rx="45" ry="55"/>
  <path class="r" d="M84 164h12l-6 8z"/><path class="r" d="M204 154h12l-6 8z"/><path class="r" d="M144 129h12l-6 8z"/>
  <path class="r" d="M138 270h24l-4 22h-16z"/>` },
 { id:'taza', n:'Taza', svg:`
  <ellipse class="r" cx="150" cy="255" rx="120" ry="25"/>
  <path class="r" d="M215 140 C275 140 275 220 210 215 L212 198 C250 200 250 158 215 158 Z"/>
  <path class="r" d="M70 115 H230 L215 240 Q150 255 85 240 Z"/>
  <ellipse class="r" cx="150" cy="115" rx="80" ry="14"/>
  <path class="r" d="M110 165 a18 18 0 0 1 36 0 a18 18 0 0 1 36 0 Q178 195 146 215 Q114 195 110 165 Z"/>
  <path class="l" d="M120 85c-10-15 10-25 0-40M150 85c-10-15 10-25 0-40M180 85c-10-15 10-25 0-40"/>` }
];
