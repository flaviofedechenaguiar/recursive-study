function success(message: string) {
  console.log("\x1b[42m%s\x1b[0m", message);
}

function error(message: string) {
  console.log("\x1b[41m%s\x1b[0m", message);
  throw new Error(message);
}

export function expect(expected: any) {
  function handleMessage(accepted: boolean, expected: any, value: any) {
    if (!accepted) error(`Expected ${expected} but got ${value}`);
    success("Test passed");
  }
  return {
    toBe: (value: any) => {
      handleMessage(expected === value, expected, value);
    },
    toEqual(value: any[]) {
      handleMessage(
        JSON.stringify(expected) === JSON.stringify(value),
        expected,
        value
      );
    },
  };
}
