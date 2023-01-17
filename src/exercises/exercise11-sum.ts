//Faça uma rotina recursiva para calcular a somatória de todos os número de 1 a N

import { expect } from "../expect";

function sum(n: number): number {
  if (n === 1) return n;
  return n + sum(n - 1);
}

expect(sum(100)).toBe(5050);