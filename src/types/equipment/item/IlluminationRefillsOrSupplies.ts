/**
 * @main IlluminationRefillsOrSupplies
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type IlluminationRefillsOrSupplies = DefaultItem

export const validateSchema = validateSchemaCreator<IlluminationRefillsOrSupplies>(import.meta.url)
