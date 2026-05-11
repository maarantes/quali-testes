export enum Cargo {
  DESENVOLVEDOR = "DESENVOLVEDOR",
  DBA = "DBA",
  TESTADOR = "TESTADOR",
  GERENTE = "GERENTE"
}

export class Funcionario {
  constructor(
    public nome: string,
    public email: string,
    public salarioBase: number,
    public cargo: Cargo
  ) {}
}

export function calcularSalario(f: Funcionario): number {
  let desconto = 0;

  switch (f.cargo) {
    case Cargo.DESENVOLVEDOR:
      desconto = f.salarioBase >= 3000 ? 0.20 : 0.10;
      break;
    case Cargo.DBA:
    case Cargo.TESTADOR:
      desconto = f.salarioBase >= 2000 ? 0.25 : 0.15;
      break;
    case Cargo.GERENTE:
      desconto = f.salarioBase >= 5000 ? 0.30 : 0.20;
      break;
  }

  return f.salarioBase * (1 - desconto);
}