import { Funcionario, Cargo, calcularSalario } from "../src/salaryCalculator";
describe("Exercício 3 - Calculadora de Salário", () => {
  test("Desenvolvedor com salário >= 3000", () => {
    const f = new Funcionario("Bob", "b@b.com", 3000, Cargo.DESENVOLVEDOR);
    expect(calcularSalario(f)).toBe(2400);
  });

  test("Desenvolvedor com salário < 3000", () => {
    const f = new Funcionario("Bob", "b@b.com", 2000, Cargo.DESENVOLVEDOR);
    expect(calcularSalario(f)).toBe(1800);
  });

  test("DBA com salário >= 2000", () => {
    const f = new Funcionario("Alice", "a@a.com", 2000, Cargo.DBA);
    expect(calcularSalario(f)).toBe(1500);
  });

  test("Gerente com salário < 5000", () => {
    const f = new Funcionario("Boss", "b@b.com", 2500, Cargo.GERENTE);
    expect(calcularSalario(f)).toBe(2000);
  });

  test("DBA com salário < 2000", () => {
    const f = new Funcionario("Alice", "a@a.com", 1500, Cargo.DBA);
    expect(calcularSalario(f)).toBe(1275);
  });

  test("Testador com salário >= 2000", () => {
    const f = new Funcionario("Charlie", "c@c.com", 2500, Cargo.TESTADOR);
    expect(calcularSalario(f)).toBe(1875);
  });

  test("Testador com salário < 2000", () => {
    const f = new Funcionario("Charlie", "c@c.com", 1000, Cargo.TESTADOR);
    expect(calcularSalario(f)).toBe(850);
  });

  test("Gerente com salário >= 5000", () => {
    const f = new Funcionario("Boss", "b@b.com", 5000, Cargo.GERENTE);
    expect(calcularSalario(f)).toBe(3500);
  });
});