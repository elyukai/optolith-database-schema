/**
 * @main WeaponAccessory
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type WeaponAccessory = DefaultItem

export const validateSchema = validateSchemaCreator<WeaponAccessory>(import.meta.url)
