import { expect } from "../expect";

function fib(
  n: number,
  arr: number[] = [],
  count = 0,
  previous = 0,
  next = 1
): number[] {
  arr.push(next);
  if (n - 1 == count) return arr;
  const result = previous + next;
  return fib(n, arr, count + 1, next, result);
}

const mock = [1, 1, 2, 3, 5, 8, 13, 21];

expect(fib(8)).toEqual(mock);
