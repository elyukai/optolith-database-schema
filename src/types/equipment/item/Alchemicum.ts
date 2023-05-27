/**
 * @main Alchemicum
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Alchemicum = DefaultItem

export const config: TypeConfig<Alchemicum> = {
  name: "Alchemicum",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Alchemicum"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
