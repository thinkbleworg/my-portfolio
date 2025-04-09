import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888', // Adjust if your local Netlify Dev port is different
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/.netlify/functions')
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for Netlify
    sourcemap: true
  },
  root: '.',  // Ensure Vite treats ui/ as the root
})
