/**
 * @main Alchemicum
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Alchemicum = DefaultItem

export const validateSchema = validateSchemaCreator<Alchemicum>(import.meta.url)
