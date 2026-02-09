import type { TSONDB } from "tsondb"
import type { TSONDBTypes } from "../main.ts"
import type { IdMap } from "./index.ts"

export type CacheBuilder<T = unknown, Args extends unknown[] = []> = (
  db: TSONDB<TSONDBTypes>,
  idMap: IdMap,
  ...args: Args
) => T
