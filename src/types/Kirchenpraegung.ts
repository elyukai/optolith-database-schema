/**
 * @main Kirchenpraegung
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { validateEntityFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../validation/filename.js"
import { Influence } from "./_Influence.js"

/**
 * @title Kirchenprägung
 */
export type Kirchenpraegung = Influence

export const config: TypeConfig<Kirchenpraegung, Kirchenpraegung["id"], "Kirchenpraegung"> = {
  name: "Kirchenpraegung",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Kirchenpraegung"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
