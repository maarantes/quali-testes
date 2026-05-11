export type TriangleType = "Equilátero" | "Isósceles" | "Escaleno" | "Inválido";

export function checkTriangle(a: number, b: number, c: number): TriangleType {
  if (a <= 0 || b <= 0 || c <= 0) return "Inválido";
  if (a + b <= c || a + c <= b || b + c <= a) return "Inválido";

  if (a === b && b === c) return "Equilátero";
  if (a === b || a === c || b === c) return "Isósceles";
  return "Escaleno";
}