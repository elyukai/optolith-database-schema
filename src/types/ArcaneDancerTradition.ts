/**
 * @main ArcaneDancerTradition
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { ArcaneTradition } from "./_ArcaneTradition.js"

/**
 * @title Arcane Dancer Tradition
 */
export type ArcaneDancerTradition = ArcaneTradition

export const config: TypeConfig<ArcaneDancerTradition> = {
  name: "ArcaneDancerTradition",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("ArcaneDancerTradition"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
