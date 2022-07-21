/**
 * @main Stationary
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Stationary = DefaultItem

export const validateSchema = validateSchemaCreator<Stationary>(import.meta.url)
