/**
 * @main Container
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Container = DefaultItem

export const config: TypeConfig<Container> = {
  name: "Container",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("Container"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
