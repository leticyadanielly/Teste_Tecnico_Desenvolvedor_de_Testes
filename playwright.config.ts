import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Config - Ajustado para evitar conflitos e timeouts
 */
export default defineConfig({
  // 1. Onde estão os teus testes
  testDir: './frontend-tests/tests',
  
  // 2. Tempo máximo de cada teste (30 segundos)
  timeout: 30000,
  
  // 3. Garante que ele só tenta correr ficheiros de teste reais
  testMatch: /.*\.spec\.ts/,

  // 4. Impede que o Playwright tente ler a pasta 'src' ou 'node_modules' 
  // Isso evita o erro: "TypeError: Cannot redefine property: Symbol($$jest-matchers-object)"
  testIgnore: '**/src/**',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // 5. URL Base - O Playwright usará isto se page.goto("/") for chamado
    // Se o teu Vite estiver noutra porta (ex: 3000), muda aqui.
    baseURL: 'http://localhost:5173',

    // Regista vídeo/rastro se o teste falhar à primeira
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },

  /* 6. Configuração do Navegador */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* 7. WEB SERVER (Opcional)
    Se quiseres que o Playwright tente ligar o teu site sozinho, descomenta as linhas abaixo.
    Como estás a usar o Windows e o Bun deu erro, configuramos para usar 'npm run dev'.
  */
  /*
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000, // Dá 2 minutos para o Vite compilar tudo
  },
  */
});