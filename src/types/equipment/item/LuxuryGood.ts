/**
 * @main LuxuryGood
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type LuxuryGood = DefaultItem

export const validateSchema = validateSchemaCreator<LuxuryGood>(import.meta.url)
