/**
 * @main BandageOrRemedy
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type BandageOrRemedy = DefaultItem

export const validateSchema = validateSchemaCreator<BandageOrRemedy>(import.meta.url)
