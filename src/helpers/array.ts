declare global {
  interface Array<T> {
    /**
     * Returns a `Promise` that resolves when all `Promise`s in the array
     * resolve and rejects when any of the `Promise`s in the array rejects.
     */
    promiseAll<T>(this: Promise<T>[]): Promise<T[]>

    /**
     * Returns an object from an array of key-value pairs.
     */
    objectFromEntries<K extends string, T>(this: [key: K, value: T][]): Record<K, T>
  }
}

Object.defineProperty(Array.prototype, "promiseAll", {
  configurable: true,
  writable: true,
  value: function promiseAll<T>(this: Promise<T>[]): Promise<T[]> {
    return Promise.all(this)
  }
})

Object.defineProperty(Array.prototype, "objectFromEntries", {
  configurable: true,
  writable: true,
  value: function objectFromEntries<T>(this: [string, T][]): { [k: string]: T } {
    return Object.fromEntries(this)
  }
})
