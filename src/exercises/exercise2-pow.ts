// Implemente uma função recursiva que,
// dados dois números inteiros x e n, calcula o
// valor de xn.

import { expect } from "../expect";

function pow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }
  return x * pow(x, n - 1);
}

expect(pow(3, 4)).toBe(81);
