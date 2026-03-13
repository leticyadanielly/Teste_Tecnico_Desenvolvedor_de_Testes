import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'], // somente arquivos unitários
    environment: 'jsdom', // se for frontend
  },
})
