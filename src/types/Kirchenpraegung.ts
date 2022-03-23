/**
 * @main Kirchenpraegung
 */

import { validateSchemaCreator } from "../validation/schema.js"
import { Influence } from "./_Influence.js"

/**
 * @title Kirchenprägung
 */
export type Kirchenpraegung = Influence

export const validateSchema = validateSchemaCreator<Kirchenpraegung>(import.meta.url)
