// Escreva uma função recursiva que determine quantas
// vezes um dígito K ocorre em um número natural N. Por
// exemplo, o dígito 2 ocorre 3 vezes em 762021192.

import { expect } from "../expect";

function countDigit(num: number, k: number): number {
  if (num === 0) {
    return 0;
  }
  return Number(num % 10 === k) + countDigit(Math.trunc(num / 10), k);
}

expect(countDigit(123910239123, 3)).toBe(3);
