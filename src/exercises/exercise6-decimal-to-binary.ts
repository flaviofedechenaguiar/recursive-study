// Um problema típico em ciência da computação consiste
// em converter um número da sua forma decimal para a
// forma binária. 

function decimalToBinary(value: number): string {
  if (value === 0) {
    return "";
  }
  return (
    decimalToBinary(Math.trunc(value / 2)) + (Math.trunc(value) % 2).toString()
  );
}

console.log(decimalToBinary(45));
