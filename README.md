🧪 Test Strategy – MinhasFinanças FullStack
Este projeto implementa uma estratégia de testes baseada na Pirâmide de Testes, garantindo qualidade tanto na API (.NET) quanto na interface do usuário (React/Vite).

📐 Estratégia de Qualidade
A solução cobre o ciclo completo de desenvolvimento:

Testes Unitários & Integração (.NET): Garantem que as regras de negócio e o banco de dados funcionem.

Testes End-to-End (Playwright): Garantem que o usuário consiga realizar ações na tela (como criar pessoas).

📂 Estratégia e Estrutura
1. Backend (.NET 9 + xUnit)
MinhasFinancas.UnitTests: Valida regras de negócio sem dependências externas.

MinhasFinancas.IntegrationTests: Valida a comunicação entre Controllers, Services e Repositories usando TestServer.

2. Frontend E2E (Playwright)
frontend-tests/tests/e2e: Simula o comportamento real do usuário no navegador (Chrome/Chromium).

Tecnologias: Playwright, TypeScript e Vite.

▶️ Como Executar os Testes
Executar Testes de Backend (API)
Na raiz da solução, use os comandos do .NET:

Bash
# Executar todos os testes de C#
dotnet test MinhasFinancasTests.sln

# Executar apenas uma camada específica
dotnet test MinhasFinancas.UnitTests
dotnet test MinhasFinancas.IntegrationTests
Executar Testes de Frontend (Interface)
Certifique-se de que o site está rodando primeiro:

Bash
# 1. No terminal do frontend, suba o app:
npm run dev

# 2. Em outro terminal, rode os testes do Playwright:
npx playwright test
⚙️ Tecnologias Utilizadas
Backend: .NET 9, xUnit, FluentAssertions.

Frontend: React, Vite, Playwright.

CI/CD: GitHub Actions (configurado para validar cada Push).

🐞 Correções Aplicadas
Durante o desenvolvimento da suite de testes, foram aplicadas melhorias críticas:

Conflitos de Ambiente: Ajuste no playwright.config.ts para evitar conflitos entre o motor do Playwright e bibliotecas de teste de terceiros.

Estabilidade (Auto-waiting): Implementação de localizadores robustos (getByRole) para evitar falhas em ambientes de CI lentos.

Consistência de Dados: Garantia de que a API e o Frontend se comunicam corretamente antes de validar a UI.

🚀 Integração Contínua (CI)
O projeto conta com um workflow no GitHub Actions que:

Restaura e testa a solução .NET.

Instala dependências do Node.js.

Instala os navegadores do Playwright.

Executa a suite completa de testes em cada Pull Request.
