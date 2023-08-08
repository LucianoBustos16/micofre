import frasesData from '../db/frases.json';

export function obtenerFraseAleatoria() {
  const frases = frasesData; // No es necesario acceder a frasesData.frases
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  return frases[indiceAleatorio];
}
