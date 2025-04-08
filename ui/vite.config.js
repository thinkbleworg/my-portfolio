import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8888' // when running netlify dev
    }
  },
  optimizeDeps: {
    exclude: ["express", "cors", "nodemailer", "dotenv", "serverless-http"]
  }
})
