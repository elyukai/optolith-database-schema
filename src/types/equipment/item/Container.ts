/**
 * @main Container
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type Container = DefaultItem

export const validateSchema = validateSchemaCreator<Container>(import.meta.url)
