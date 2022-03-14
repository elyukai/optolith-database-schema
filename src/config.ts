import * as Attribute from "./types/Attribute.js"
import * as Region from "./types/Region.js"
import { SchemaValidator } from "./validation/schema.js"

export type TypeMap = {
  attributes: Attribute.Attribute
  regions: Region.Region
}

export const schemaMap: { [K in keyof TypeMap]: SchemaValidator<TypeMap[K]> } = {
  attributes: Attribute.validateSchema,
  regions: Region.validateSchema,
}
