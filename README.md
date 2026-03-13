# 🧪 Test Strategy – MinhasFinanças FullStack

Este projeto implementa uma estratégia de testes baseada na **Pirâmide de Testes**, garantindo qualidade, confiabilidade e rápida detecção de regressões tanto no Backend (API) quanto no Frontend (Interface).

## 📐 Estratégia de Qualidade

A solução segue o modelo de pirâmide, distribuindo os testes em três níveis:

1.  **Testes Unitários (.NET):** Validação de regras de negócio isoladas.
2.  **Testes de Integração (.NET):** Validação do fluxo entre Controllers, Services e Repositórios.
3.  **Testes End-to-End (Playwright):** Validação do fluxo completo do usuário no navegador.

---

## 📂 Estrutura do Projeto

```text
├── MinhasFinancas.API              # Aplicação Principal
├── MinhasFinancas.UnitTests         # Testes Unitários (.NET 9)
├── MinhasFinancas.IntegrationTests  # Testes de Integração (.NET 9)
├── frontend-tests/                  # Suite de Testes E2E
│   └── tests/e2e/criar-pessoa.spec.ts
└── playwright.config.ts             # Configuração do Playwright

▶️ Como Executar os Testes
1. Testes de Backend (.NET)
Na raiz da solução, execute o comando padrão do dotnet:

# Executa todos os testes (Unitários e Integração)
dotnet test MinhasFinancasTests.sln

2. Testes de Frontend (Playwright)
Certifique-se de que as dependências estão instaladas e o servidor local está ativo:

# Instalar dependências
npm install

# Instalar navegadores do Playwright
npx playwright install chromium

# Rodar os testes (com o servidor dev ativo)
npx playwright test

🐞 Bugs Identificados e Melhorias
Durante a implementação da suite de testes, foram aplicadas melhorias para garantir a consistência dos dados:

Validação de Transações: Implementação de testes para garantir que a API rejeite valores inválidos.

Resiliência de UI: Uso de localizadores robustos (getByRole) e esperas automáticas no Playwright para evitar flakiness (testes que falham intermitentemente).

Isolamento de Ambiente: Configuração de arquivos de teste para evitar conflitos entre bibliotecas de teste (Vitest vs Playwright).

⚙️ Tecnologias Utilizadas
Linguagens: C# (.NET 9), TypeScript.

Frameworks de Teste: xUnit, Playwright.

Ferramentas: Vite (Frontend), GitHub Actions (CI/CD).

🚀 Continuous Integration (CI)
O projeto utiliza GitHub Actions para validar cada alteração automaticamente. O workflow CI - Full Stack Tests realiza:

Restore e Build da solução .NET.

Execução dos testes Unitários e de Integração.

Instalação do ambiente Node.js e navegadores.

Execução dos testes E2E do Playwright.

Isso garante que nenhuma alteração quebre os fluxos críticos da aplicação.
