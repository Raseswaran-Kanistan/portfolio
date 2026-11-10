import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Project Pages URL: https://raseswaran-kanistan.github.io/portfolio/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio/',
})
