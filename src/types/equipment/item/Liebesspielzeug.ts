/**
 * @main Liebesspielzeug
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Liebesspielzeug = DefaultItem

export const validateSchema = validateSchemaCreator<Liebesspielzeug>(import.meta.url)
