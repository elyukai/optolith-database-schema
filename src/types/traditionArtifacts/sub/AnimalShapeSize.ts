import { Entity, Integer, Object, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"

export const AnimalShapeSize = Entity(import.meta.url, {
  name: "AnimalShapeSize",
  namePlural: "AnimalShapeSizes",
  type: () =>
    Object({
      volume: Required({
        comment: "The animal shape size’s volume points",
        type: Integer({ minimum: 1 }),
      }),
      ap_value: Required({
        comment: "The animal shape size’s adventure point value",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "AnimalShapeSize",
        Object({
          name: Required({
            comment: "The animal shape size’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
