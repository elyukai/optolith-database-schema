/**
 * Map the second element of a pair using a function that receives both
 * elements.
 */
export const mapSecond = <A, B, C>(f: (second: B, first: A) => C) =>
  (pair: [A, B]): [A, C] => [pair[0], f(pair[1], pair[0])]

/**
 * Map the second element of a pair using a function that receives both
 * elements and returns a `Promise`.
 */
export const mapSecondAsync = <A, B, C>(f: (second: B, first: A) => Promise<C>) =>
  async (pair: [A, B]): Promise<[A, C]> => [pair[0], await f(pair[1], pair[0])]

/**
 * Map a value using a function into the second value of a pair with the
 * original value.
 */
export const mapToSecond = <A, B>(f: (value: A) => B) =>
  (value: A): [A, B] => [value, f(value)]

/**
 * Map a value using a function that returns a `Promise` into the second value
 * of a pair with the original value.
 */
export const mapToSecondAsync = <A, B>(f: (value: A) => Promise<B>) =>
  async (value: A): Promise<[A, B]> => [value, await f(value)]
