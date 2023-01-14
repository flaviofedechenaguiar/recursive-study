export function expect(expected: any) {
  function handleMessage(accepted: boolean, expected: any, value: any) {
    if (!accepted) {
      const message = `Expected ${expected} but got ${value}`;
      console.log("\x1b[41m%s\x1b[0m", message);
      throw new Error(message);
    }
    console.log("\x1b[42m%s\x1b[0m", "Test passed");
  }
  return {
    toBe: (value: any) => {
      handleMessage(expected === value, expected, value);
    },
    toBeArray(value: any[]) {
      handleMessage(
        JSON.stringify(expected) === JSON.stringify(value),
        expected,
        value
      );
    },
  };
}
