/**
 * @main ArcaneBardTradition
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { ArcaneTradition } from "./_ArcaneTradition.js"

/**
 * @title Arcane Bard Tradition
 */
export type ArcaneBardTradition = ArcaneTradition

export const validateSchema = validateSchemaCreator<ArcaneBardTradition>(import.meta.url)
