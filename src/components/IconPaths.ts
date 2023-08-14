/**
 * Como agregar más íconos:
 * 1. Buscá el ícono que querés.
 * 2. Copiá el SVG.
 * 3. Pegá el código SVG en el editor.
 * 4. Eliminá el contenedor `<svg>` para que solo tengas elementos como `<path>`, `<circle>`, `<rect>`, etc.
 * 5. Eliminá cualquier atributo `stroke="#000000"`.
 * 6. Reemplazá cualquier atributo `fill="#000000"` con `stroke="none"`
 *    (o agrega `stroke="none"` en formas que no tengan `fill` o `stroke` especificados).
 */

export const iconPaths = {

// Sun
	sun: `
    <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
    `,

// Moon-starts
	'moon-stars': `
    <path    
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="16"
    d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,

};









