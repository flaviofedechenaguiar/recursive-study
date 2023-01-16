//Dado um array de inteiros e o seu número
//de elementos, inverta a posição dos seus
//elementos.

import { expect } from "../expect";

function invertArray(array: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  const aux = array[right];
  array[right] = array[left];
  array[left] = aux;
  return invertArray(array, left + 1, right - 1);
}

const arr = [1, 2, 3, 4, 5];
invertArray(arr, 0, 4);
expect(arr).toEqual([5, 4, 3, 2, 1]);
