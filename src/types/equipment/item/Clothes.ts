/**
 * @main Clothes
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Clothes = DefaultItem

export const validateSchema = validateSchemaCreator<Clothes>(import.meta.url)
