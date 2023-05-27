import { TypeMap, configMap } from "./config.js"
import { IntegrityValidator } from "./validation/builders/integrity.js"
import { SchemaValidator } from "./validation/builders/schema.js"

export type TypeId<K extends keyof TypeMap> = ReturnType<(typeof configMap)[K]["id"]>

export type TypeConfig<T, ID extends string | number = number> = {
  name: string
  id: (data: T, filepath: string) => ID
  integrityValidator: IntegrityValidator<T>
  schemaValidator: SchemaValidator<T>
}
