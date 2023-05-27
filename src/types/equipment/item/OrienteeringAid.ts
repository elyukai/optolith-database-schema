/**
 * @main OrienteeringAid
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type OrienteeringAid = DefaultItem

export const config: TypeConfig<OrienteeringAid> = {
  name: "OrienteeringAid",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("OrienteeringAid"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
