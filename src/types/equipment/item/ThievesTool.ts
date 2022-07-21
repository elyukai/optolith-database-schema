/**
 * @main ThievesTool
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type ThievesTool = DefaultItem

export const validateSchema = validateSchemaCreator<ThievesTool>(import.meta.url)
