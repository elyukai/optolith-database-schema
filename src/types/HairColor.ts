import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const HairColor = Entity(import.meta.url, {
  name: "HairColor",
  namePlural: "HairColors",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "HairColorTranslation",
        Object({
          name: Required({
            comment: "The hair color’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
