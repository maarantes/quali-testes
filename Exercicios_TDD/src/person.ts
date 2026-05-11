export class Email {
  constructor(public id: number, public name: string) {}
}

export class Person {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public emails: Email[]
  ) {}
}

export class PersonDAO {
  isValidToInclude(p: Person): string[] {
    const errors: string[] = [];

    const nameParts = p.name.trim().split(/\s+/);
    const onlyLetters = /^[a-zA-Z\s]+$/.test(p.name);
    if (nameParts.length < 2 || !onlyLetters) {
      errors.push("O nome deve ser composto por pelo menos 2 partes e apenas letras");
    }

    if (p.age < 1 || p.age > 200) {
      errors.push("A idade deve estar no intervalo [1, 200]");
    }

    if (!p.emails || p.emails.length === 0) {
      errors.push("O objeto Person deve ter pelo menos um objeto da classe Email associado");
    } else {
      const emailRegex = /^[^@\s.]+@[^@\s.]+\.[^@\s.]+$/;
      
      p.emails.forEach((email) => {
        if (!emailRegex.test(email.name)) {
          errors.push(`Email inválido: ${email.name}`);
        }
      });
    }

    return errors;
  }

  save(p: Person): void {
    // Implementação do save conforme diagrama (opcional para o exercício)
  }
}