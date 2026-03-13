🧪 Test Strategy – MinhasFinanças API

Este projeto implementa uma estratégia de testes baseada na Pirâmide de Testes, garantindo qualidade, confiabilidade e rápida detecção de regressões.

A solução inclui três níveis de validação:

- Testes Unitários

- Testes de Integração

- Testes End-to-End

Essa abordagem permite validar desde regras isoladas de negócio até fluxos completos da aplicação.

📐 Test Pyramid

A estratégia segue o modelo clássico da pirâmide de testes.

                E2E Tests
           Integration Tests
              Unit Tests

Princípios aplicados:

- Maior quantidade de testes unitários

- Testes de integração validando contratos entre camadas

- Testes E2E cobrindo fluxos críticos do sistema

Esse modelo reduz tempo de execução, aumenta confiabilidade e facilita manutenção.

📂 Estrutura do Projeto de Testes
MinhasFinancas
│
├── MinhasFinancas.API
│
├── MinhasFinancas.UnitTests
│
├── MinhasFinancas.IntegrationTests
│
└── MinhasFinancas.E2ETests
Unit Tests
MinhasFinancas.UnitTests

Responsáveis por validar regras de negócio isoladas.

Características:

- Não dependem de banco de dados

- Não dependem de APIs externas

- Executam rapidamente

Exemplos de cenários testados:

- validação de regras de transação

- validação de cálculos

- validação de comportamento de serviços

Integration Tests
MinhasFinancas.IntegrationTests

Validam a integração entre componentes da aplicação:

- Controllers

- Services

- Repositories

- Persistência de dados

Esses testes garantem que as camadas da aplicação funcionem corretamente juntas.

Exemplo de cenário:

POST /transactions
↓
Controller recebe request
↓
Service processa regra
↓
Repository persiste dados
↓
API retorna resposta HTTP
End-to-End Tests
MinhasFinancas.E2ETests

Validam o fluxo completo da aplicação, simulando o comportamento real do usuário.

Objetivo: Garantir que o sistema funcione corretamente do início ao fim.

Exemplo de fluxo validado:

Criar transação
↓
Persistir no sistema
↓
Consultar transações
↓
Validar resposta da API

▶️ Como Executar os Testes
Executar todos os testes

Na raiz da solução:
dotnet test

Executar apenas testes unitários:
dotnet test MinhasFinancas.UnitTests

Executar apenas testes de integração:
dotnet test MinhasFinancas.IntegrationTests

Executar apenas testes E2E:
dotnet test MinhasFinancas.E2ETests

🐞 Bugs Encontrados Durante os Testes

Durante a implementação dos testes foram identificados comportamentos que poderiam gerar inconsistência de dados.

Regra de validação de transação

Problema observado: A API permitia a criação de registros sem validações suficientes.

Possíveis impactos:

- Dados inconsistentes

- Quebra de regras de negócio

- Falhas em relatórios financeiros

Solução aplicada:

Foram adicionados testes para garantir que:

- Valores inválidos sejam rejeitados

- As regras de negócio sejam respeitadas

- A API retorne códigos HTTP apropriados

Esses testes garantem que regressões não ocorram no futuro.

⚙️ Tecnologias Utilizadas

- .NET 9

- xUnit

- ASP.NET Core

- TestServer (para testes de integração)

- GitHub Actions (CI opcional)

🚀 Continuous Integration

O projeto pode ser integrado com GitHub Actions para executar testes automaticamente em cada push ou pull request.

Exemplo de pipeline: .github/workflows/tests.yml

Pipeline executa:

1- Restore das dependências

2- Build da aplicação

3- Execução dos testes

Isso garante que nenhuma alteração seja integrada sem validação automática.

📊 Resultado da Execução

Total de testes: 3
Sucesso: 3
Falhas: 0
Tempo de execução: ~11s

💡 Estratégia de Qualidade

A pirâmide de testes aplicada neste projeto traz benefícios importantes:

- Detecção rápida de erros

- Maior confiabilidade da aplicação

- Redução de regressões

- Feedback rápido durante desenvolvimento

Essa abordagem segue boas práticas utilizadas em times de engenharia modernos e ambientes de CI/CD.
