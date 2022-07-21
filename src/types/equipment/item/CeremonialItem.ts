/**
 * @main CeremonialItem
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type CeremonialItem = DefaultItem

export const validateSchema = validateSchemaCreator<CeremonialItem>(import.meta.url)
