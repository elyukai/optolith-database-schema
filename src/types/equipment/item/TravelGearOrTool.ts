/**
 * @main TravelGearOrTool
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type TravelGearOrTool = DefaultItem

export const config: TypeConfig<TravelGearOrTool, number, "TravelGearOrTool"> = {
  name: "TravelGearOrTool",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("TravelGearOrTool"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
