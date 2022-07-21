/**
 * @main RopeOrChain
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type RopeOrChain = DefaultItem

export const validateSchema = validateSchemaCreator<RopeOrChain>(import.meta.url)
