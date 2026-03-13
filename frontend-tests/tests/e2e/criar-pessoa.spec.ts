import { test, expect as playwrightExpect } from "@playwright/test";

test("deve criar uma nova pessoa", async ({ page }) => {
  // 1. Navega para a URL base (definida pelo ambiente de quem executa)
  await page.goto("/");

  // 2. Localiza o botão "Nova Pessoa" de forma robusta
  // Usamos regex /i para ignorar maiúsculas/minúsculas
  const btnNovaPessoa = page.getByRole('button', { name: /nova pessoa/i });
  
  // Espera explícita para garantir que o JS da página carregou
  await playwrightExpect(btnNovaPessoa).toBeVisible({ timeout: 10000 });
  await btnNovaPessoa.click();

  // 3. Preenche o formulário
  // locators por 'name' são estáveis em testes de integração
  await page.locator('input[name="nome"]').fill("Leticya");
  await page.locator('input[name="dataNascimento"]').fill("1995-01-01");

  // 4. Salva o registro
  await page.getByRole('button', { name: /salvar/i }).click();

  // 5. Validação: O nome deve aparecer na lista após o salvamento
  // O Playwright tentará localizar o texto por alguns segundos antes de falhar
  await playwrightExpect(page.getByText("Leticya")).toBeVisible();
});