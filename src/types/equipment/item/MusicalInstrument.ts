/**
 * @main MusicalInstrument
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type MusicalInstrument = DefaultItem

export const validateSchema = validateSchemaCreator<MusicalInstrument>(import.meta.url)
