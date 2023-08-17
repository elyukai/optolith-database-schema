import { ValidResults } from "./main.js"

export type CacheConfig<T> = {
  builder: (data: ValidResults) => T
}
