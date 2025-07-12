import { Entity, Object, Required, String } from "tsondb/schema/def"
import { AnimalShapePathIdentifier, AnimalShapeSizeIdentifier } from "../../_Identifier.js"
import { NestedLocaleMap } from "../../Locale.js"

export const AnimalShape = Entity(import.meta.url, {
  name: "AnimalShape",
  namePlural: "AnimalShapes",
  type: () =>
    Object({
      path: Required({
        comment: "The animal shape’s path.",
        type: AnimalShapePathIdentifier(),
      }),
      size: Required({
        comment: "The animal shape’s size.",
        type: AnimalShapeSizeIdentifier(),
      }),
      translations: NestedLocaleMap(
        Required,
        "AnimalShapeTranslation",
        Object({
          name: Required({
            comment: "The animal shape’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
