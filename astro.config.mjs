import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    scripts: [
        // Agrega el soporte para JavaScript
        {
          type: 'module',
          src: '/src/utils.js',
        },
      ],
});
