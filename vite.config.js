import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src/',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        destination: resolve(__dirname, 'destination/index.html'),
      },
    },
  },
});
