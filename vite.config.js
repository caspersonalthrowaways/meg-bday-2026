import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves the site at https://<user>.github.io/<repo>/
  // Change this if the GitHub repo name differs from 'meg-bday-2026'.
  base: '/meg-bday-2026/',
})
