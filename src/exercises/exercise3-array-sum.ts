//Usando recursividade, calcule a soma de
//todos os valores de um array de reais.

import { expect } from "../expect";

function sum(values: number[], index: number): number {
  const pos = index - 1;
  if (pos === 0) {
    return values[pos];
  }
  return values[pos] + sum(values, pos);
}

const numbers = [1, 2, 3, 3, 3, 39];
const size = 6;

expect(sum(numbers, size)).toBe(51);
