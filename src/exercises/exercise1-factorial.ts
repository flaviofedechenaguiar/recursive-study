//Faça um programa que calcule o fatorial de um número qualquer.

import { expect } from "../expect";

function factorial(value: number): number {
  if (value === 0) {
    return 1;
  }
  return value * factorial(value - 1);
}

expect(factorial(7)).toBe(5040);
