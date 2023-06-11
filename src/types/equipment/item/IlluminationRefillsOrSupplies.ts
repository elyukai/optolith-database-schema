/**
 * @main IlluminationRefillsOrSupplies
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type IlluminationRefillsOrSupplies = DefaultItem

export const config: TypeConfig<IlluminationRefillsOrSupplies> = {
  name: "IlluminationRefillsOrSupplies",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("IlluminationRefillsOrSupplies"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
