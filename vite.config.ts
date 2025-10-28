import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Harshit-portfolio/',
  server: {
    port: 5173,
    open: true
  }
})
