import { Entity, Object, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"

export const Brew = Entity(import.meta.url, {
  name: "Brew",
  namePlural: "Brews",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Brew",
        Object({
          name: Required({
            comment: "The brew’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
