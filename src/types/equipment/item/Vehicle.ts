/**
 * @main Vehicle
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Vehicle = DefaultItem

export const validateSchema = validateSchemaCreator<Vehicle>(import.meta.url)
