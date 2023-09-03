import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  scripts: [
  // Agrega el soporte para JavaScript
  {
    type: 'module',
    src: '/src/utils.js'
  }],
  integrations: [tailwind(), partytown()]
});