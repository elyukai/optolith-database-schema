import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "../../Locale.js"

export const Brew = Entity(import.meta.url, {
  name: "Brew",
  namePlural: "Brews",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "BrewTranslation",
        Object({
          name: Required({
            comment: "The brew’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
