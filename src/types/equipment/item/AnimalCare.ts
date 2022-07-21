/**
 * @main AnimalCare
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type AnimalCare = DefaultItem

export const validateSchema = validateSchemaCreator<AnimalCare>(import.meta.url)
