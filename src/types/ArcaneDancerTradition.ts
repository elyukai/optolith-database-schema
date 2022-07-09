/**
 * @main ArcaneDancerTradition
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { ArcaneTradition } from "./_ArcaneTradition.js"

/**
 * @title Arcane Dancer Tradition
 */
export type ArcaneDancerTradition = ArcaneTradition

export const validateSchema = validateSchemaCreator<ArcaneDancerTradition>(import.meta.url)
