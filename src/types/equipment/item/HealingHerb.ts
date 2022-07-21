/**
 * @main HealingHerb
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type HealingHerb = DefaultItem

export const validateSchema = validateSchemaCreator<HealingHerb>(import.meta.url)
