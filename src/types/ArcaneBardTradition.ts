/**
 * @main ArcaneBardTradition
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { ArcaneTradition } from "./_ArcaneTradition.js"

/**
 * @title Arcane Bard Tradition
 */
export type ArcaneBardTradition = ArcaneTradition

export const config: TypeConfig<ArcaneBardTradition, ArcaneBardTradition["id"], "ArcaneBardTradition"> = {
  name: "ArcaneBardTradition",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("ArcaneBardTradition"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
