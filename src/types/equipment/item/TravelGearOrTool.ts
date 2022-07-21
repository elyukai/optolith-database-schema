/**
 * @main TravelGearOrTool
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type TravelGearOrTool = DefaultItem

export const validateSchema = validateSchemaCreator<TravelGearOrTool>(import.meta.url)
