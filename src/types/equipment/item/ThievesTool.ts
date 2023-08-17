/**
 * @main ThievesTool
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type ThievesTool = DefaultItem

export const config: TypeConfig<ThievesTool> = {
  name: "ThievesTool",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("ThievesTool"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
