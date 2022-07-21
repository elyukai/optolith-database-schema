/**
 * @main Animal
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Animal = DefaultItem

export const validateSchema = validateSchemaCreator<Animal>(import.meta.url)
