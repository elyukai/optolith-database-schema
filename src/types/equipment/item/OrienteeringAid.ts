/**
 * @main OrienteeringAid
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type OrienteeringAid = DefaultItem

export const config: TypeConfig<OrienteeringAid> = {
  name: "OrienteeringAid",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("OrienteeringAid"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
