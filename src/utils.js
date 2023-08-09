import contenidoData from '../db/contenido.json';


export function obtenerFraseAleatoria() {
  const contenido = contenidoData; // No es necesario acceder a contenidoData.contenido
  const indiceAleatorio = Math.floor(Math.random() * contenido.length);
  return contenido[indiceAleatorio];
}

