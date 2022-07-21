/**
 * @main OrienteeringAid
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type OrienteeringAid = DefaultItem

export const validateSchema = validateSchemaCreator<OrienteeringAid>(import.meta.url)
