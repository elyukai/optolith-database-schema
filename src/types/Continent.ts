import { Entity, Object, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const Continent = Entity(import.meta.url, {
  name: "Continent",
  namePlural: "Continents",
  comment:
    "Continents are mostly referenced to in languages and scripts that occur on a specific continent.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Continent",
        Object({
          name: Required({
            comment: "The continent name.",
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
