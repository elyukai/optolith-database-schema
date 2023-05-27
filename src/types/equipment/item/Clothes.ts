/**
 * @main Clothes
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Clothes = DefaultItem

export const config: TypeConfig<Clothes> = {
  name: "Clothes",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Clothes"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
