import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const AnimalType = Entity(import.meta.url, {
  name: "AnimalType",
  namePlural: "AnimalTypes",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "AnimalTypeTranslation",
        Object({
          name: Required({
            comment: "The animal type’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
