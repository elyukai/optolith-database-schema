/**
 * @main AusruestungDerGeweihtenschaft
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { DefaultItem } from "./_Item.js"

export type AusruestungDerGeweihtenschaft = DefaultItem

export const validateSchema = validateSchemaCreator<AusruestungDerGeweihtenschaft>(import.meta.url)
