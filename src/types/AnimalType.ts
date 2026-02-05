import { Entity, Object, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const AnimalType = Entity(import.meta.url, {
  name: "AnimalType",
  namePlural: "AnimalTypes",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "AnimalType",
        Object({
          name: Required({
            comment: "The animal type’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
