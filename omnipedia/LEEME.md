# Omnipedia — enciclopedia en el móvil del espectador

El espectador abre un enlace (o QR) en SU móvil y busca lo que quiera. Los artículos son los reales de
Wikipedia, con el nombre de tu enciclopedia. Lo que escribe te llega a la página del mago (mago.html)
y a Vistazos en el Apple Watch.

## Cambiar el nombre (por ejemplo, PSIpedia)
Opción 1, en el código: abre `index.html`, busca «✏️ NOMBRE DE LA ENCICLOPEDIA» (al principio del
<script>, hacia la línea 144) y cambia:
- `NOMBRE_POR_DEFECTO` → el nombre (se cambia solo en toda la web: pestaña, barra de arriba, portada,
  buscador, menú, pie de página y artículos).
- `LEMA_POR_DEFECTO` → la frase de debajo («La enciclopedia abierta»).
- `LETRA_ICONO` → la letra del icono de la pestaña (Ω).
Opción 2, sin tocar el código: añade `&n=PSIpedia` al final del enlace del espectador.

## Código y Vistazos (reloj)
1. Abre mago.html → «Nuevo» y escribe tu propio código (mínimo 6 letras o números, p. ej. «alexpsi7»).
2. En el reloj: Vistazos → mantener pulsada la esfera (ajustes) → «Omnipedia (internet)» → escribe el
   mismo código. Debe poner «conectado». Hace falta que el reloj tenga internet (a través del iPhone o wifi).
3. Comparte el enlace o el QR de mago.html con el espectador.

Lo que llega al reloj:
- En directo, sin vibrar: lo que va escribiendo (🔍 coc…).
- 1 vibración: «Busca: coche» al pulsar buscar o tocar una sugerencia.
- Si toca una sugerencia distinta de lo que escribió: «coche · → Coche (receta)».
- Los enlaces que abre después, sin vibrar (→ artículo).

## Subir a Netlify
Arrastra `enciclopedia-netlify.zip` (o la carpeta con index.html y mago.html) a Netlify Drop.
Copias de antes de este cambio: `index.backup-prenombre.html`, `mago.backup-prenombre.html`.
