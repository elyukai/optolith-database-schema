/**
 * @main Illumination
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Illumination = DefaultItem

export const validateSchema = validateSchemaCreator<Illumination>(import.meta.url)
