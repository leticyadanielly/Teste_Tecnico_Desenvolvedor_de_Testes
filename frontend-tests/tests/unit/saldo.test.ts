import { describe, it, expect } from "vitest"

function calcularSaldo(transacoes: any[]) {
  return transacoes.reduce((saldo, t) => {
    if (t.tipo === "receita") return saldo + t.valor
    if (t.tipo === "despesa") return saldo - t.valor
    return saldo
  }, 0)
}

describe("Cálculo de saldo", () => {

  it("deve calcular saldo corretamente com receitas e despesas", () => {

    const transacoes = [
      { valor: 100, tipo: "receita" },
      { valor: 50, tipo: "despesa" }
    ]

    const saldo = calcularSaldo(transacoes)

    expect(saldo).toBe(50)

  })

})
