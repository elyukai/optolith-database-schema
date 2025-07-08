import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const EyeColor = Entity(import.meta.url, {
  name: "EyeColor",
  namePlural: "EyeColors",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "EyeColorTranslation",
        Object({
          name: Required({
            comment: "The eye color’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
