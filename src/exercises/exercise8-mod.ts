// Pode-se calcular o resto da divisão, MOD, de x por y, dois
// números inteiros positivos, usando-se a seguinte definição:
//  MOD(x,y) = MOD(x - y, y) se x > y
//  MOD(x,y) = x se x < y
//  MOD(x,y) = 0 se x = y

import { expect } from "../expect";

function mod(x: number, y: number): number {
  if (x === y) return 0;
  if (x < y) return x;
  return mod(x - y, y);
}

expect(mod(50, 2)).toBe(0);
