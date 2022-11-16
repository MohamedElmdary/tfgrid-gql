type AssertReturn = void | never;
function panic(message: string): never {
  throw new Error(message);
}

/**
 * @description
 * Assertion
 */
export function assertHasField(fields: any): AssertReturn {
  if (Object.keys(fields).length === 0)
    panic(`[Object] must contain at least 1 field.`);
  for (const key in fields) {
    if (fields[key] instanceof Object) assertHasField(fields[key]);
    else if (fields[key] !== true)
      panic(
        `Expected "${key}" of type [true | string] but got [${typeof fields[
          key
        ]}]`
      );
  }
}

/**
 * @description
 * Guards
 */
// export function isNum(value: unknown): value is number {
//   return typeof value === "number";
// }

/**
 * @description
 * Helpers
 */
// export function ifNum(name: string, value: any): string {
//   return isNum(value) || isNum(+value) ? `${name}:${value}` : "";
// }