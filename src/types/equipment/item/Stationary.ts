/**
 * @main Stationary
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Stationary = DefaultItem

export const config: TypeConfig<Stationary> = {
  name: "Stationary",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Stationary"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
