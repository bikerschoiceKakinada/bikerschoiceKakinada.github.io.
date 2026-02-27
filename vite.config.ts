import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",        // correct base for https://bikerschoicekakinada.github.io
  plugins: [react()],
  build: {
    outDir: "dist",
  },
})
