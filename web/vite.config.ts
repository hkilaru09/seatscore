/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works under https://<you>.github.io/seatscore/
  base: './',
  test: {
    environment: 'node',
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
