import { IntegrityValidator } from "./validation/builders/integrity.js"
import { FileNameValidator } from "./validation/builders/naming.js"
import { SchemaValidator } from "./validation/builders/schema.js"

export type TypeConfig<T, ID extends string | number, N extends string> = {
  name: N
  id: (data: T, filepath: string) => ID
  integrityValidator: IntegrityValidator<T>
  schemaValidator: SchemaValidator<T>
  fileNameValidator: FileNameValidator
}
