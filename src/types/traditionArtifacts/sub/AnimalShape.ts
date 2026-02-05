import * as DB from "tsondb/schema/dsl"
import { AnimalShapePathIdentifier, AnimalShapeSizeIdentifier } from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"

export const AnimalShape = DB.Entity(import.meta.url, {
  name: "AnimalShape",
  namePlural: "AnimalShapes",
  type: () =>
    DB.Object({
      path: DB.Required({
        comment: "The animal shape’s path.",
        type: AnimalShapePathIdentifier(),
      }),
      size: DB.Required({
        comment: "The animal shape’s size.",
        type: AnimalShapeSizeIdentifier(),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "AnimalShape",
        DB.Object({
          name: DB.Required({
            comment: "The animal shape’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
