import { Person, Email, PersonDAO } from "../src/person";

describe("Exercício 2 - Validação PersonDAO", () => {
  let dao: PersonDAO;

  beforeEach(() => {
    dao = new PersonDAO();
  });

  test("Validação do Nome (2 partes e letras)", () => {
    const p1 = new Person(1, "Joao", 25, [new Email(1, "a@b.c")]);
    expect(dao.isValidToInclude(p1)).toContain("O nome deve ser composto por pelo menos 2 partes e apenas letras");

    const p2 = new Person(2, "Joao Silva123", 25, [new Email(1, "a@b.c")]);
    expect(dao.isValidToInclude(p2)).toContain("O nome deve ser composto por pelo menos 2 partes e apenas letras");
  });

  test("Validação da Idade [1, 200]", () => {
    const p1 = new Person(1, "Joao Silva", 0, [new Email(1, "a@b.c")]);
    expect(dao.isValidToInclude(p1)).toContain("A idade deve estar no intervalo [1, 200]");

    const p2 = new Person(2, "Joao Silva", 201, [new Email(1, "a@b.c")]);
    expect(dao.isValidToInclude(p2)).toContain("A idade deve estar no intervalo [1, 200]");
  });

  test("Validação de Presença de Email", () => {
    const p = new Person(1, "Joao Silva", 25, []);
    expect(dao.isValidToInclude(p)).toContain("O objeto Person deve ter pelo menos um objeto da classe Email associado");
  });

  test("Validação do Formato do Email (partes com caracteres)", () => {
    const emailsInvalidos = ["@.", "a@.", "@b.", "a@b.", ".@b.c", "a@b.c"]; 
    
    const p1 = new Person(1, "Joao Silva", 25, [new Email(1, "a@.c")]);
    expect(dao.isValidToInclude(p1)[0]).toMatch(/Email inválido/);

    const p2 = new Person(2, "Joao Silva", 25, [new Email(1, "joao@gmail.com")]);
    expect(dao.isValidToInclude(p2)).toHaveLength(0); // Sucesso total
  });

  test("Deve chamar o método save sem lançar erros", () => {
    const p = new Person(1, "Joao Silva", 25, [new Email(1, "a@b.com")]);
    expect(() => dao.save(p)).not.toThrow();
  });
});