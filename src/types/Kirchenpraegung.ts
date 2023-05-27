/**
 * @main Kirchenpraegung
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { Influence } from "./_Influence.js"

/**
 * @title Kirchenprägung
 */
export type Kirchenpraegung = Influence

export const config: TypeConfig<Kirchenpraegung> = {
  name: "Kirchenpraegung",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Kirchenpraegung"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
