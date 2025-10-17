import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  base: process.env.NODE_ENV === 'production ? "/ssr-editor_frontend/" : "/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
});
