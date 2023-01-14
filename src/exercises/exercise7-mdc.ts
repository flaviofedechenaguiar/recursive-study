// O máximo divisor comum (MDC) de dois números
// inteiros x e y pode ser calculado usando-se uma
// definição recursiva:
//   MDC(x, y) = MDC(x − y, y), se x > y
//   MDC(x,y) = MDC(y,x)
//   MDC(x,x) = x

import { expect } from "../expect";

function mdc(p: number, q: number): number {
  if (p == q) return p;
  if (p < q) return mdc(q, p);
  return mdc(p - q, q);
}

expect(mdc(21, 9)).toBe(3);
