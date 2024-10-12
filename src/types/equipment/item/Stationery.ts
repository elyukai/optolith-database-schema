/**
 * @main Stationery
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Stationery = DefaultItem

export const config: TypeConfig<Stationery, number, "Stationery"> = {
  name: "Stationery",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Stationery"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
