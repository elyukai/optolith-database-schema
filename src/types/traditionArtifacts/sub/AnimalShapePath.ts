import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "../../Locale.js"

export const AnimalShapePath = Entity(import.meta.url, {
  name: "AnimalShapePath",
  namePlural: "AnimalShapePaths",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "AnimalShapePathTranslation",
        Object({
          name: Required({
            comment: "The animal shape path’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
