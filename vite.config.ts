import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://sdutechnopark.kz/',
  plugins: [react()],
  server: {
    port: 3000
  }
})
