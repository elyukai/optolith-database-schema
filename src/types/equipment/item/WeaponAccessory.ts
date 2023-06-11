/**
 * @main WeaponAccessory
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type WeaponAccessory = DefaultItem

export const config: TypeConfig<WeaponAccessory> = {
  name: "WeaponAccessory",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("WeaponAccessory"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
