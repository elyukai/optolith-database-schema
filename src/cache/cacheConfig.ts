import { ValidResults } from "../main.js"

export type CacheConfig<T, D extends unknown[] = []> = {
  builder: (data: ValidResults, ...deps: D) => T
}
