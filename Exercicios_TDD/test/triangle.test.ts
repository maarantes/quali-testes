import { checkTriangle } from "../src/triangle";

describe("Exercício 1 - Triângulos", () => {
  test("Escaleno válido", () =>
    expect(checkTriangle(3, 4, 5)).toBe("Escaleno"));
  test("Equilátero válido", () =>
    expect(checkTriangle(5, 5, 5)).toBe("Equilátero"));

  test("Isósceles válido (permutações)", () => {
    expect(checkTriangle(5, 5, 3)).toBe("Isósceles");
    expect(checkTriangle(5, 3, 5)).toBe("Isósceles");
    expect(checkTriangle(3, 5, 5)).toBe("Isósceles");
  });

  test("Valor zero ou negativo", () => {
    expect(checkTriangle(0, 4, 5)).toBe("Inválido");
    expect(checkTriangle(-1, 4, 5)).toBe("Inválido");
    expect(checkTriangle(0, 0, 0)).toBe("Inválido");
  });

  test("Soma de dois lados igual ao terceiro (permutações)", () => {
    expect(checkTriangle(1, 2, 3)).toBe("Inválido");
    expect(checkTriangle(3, 1, 2)).toBe("Inválido");
    expect(checkTriangle(2, 3, 1)).toBe("Inválido");
  });

  test("Soma de dois lados menor que o terceiro (permutações)", () => {
    expect(checkTriangle(1, 2, 4)).toBe("Inválido");
    expect(checkTriangle(4, 1, 2)).toBe("Inválido");
    expect(checkTriangle(2, 4, 1)).toBe("Inválido");
  });
});
