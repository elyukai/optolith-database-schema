import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const HairColor = Entity(import.meta.url, {
  name: "HairColor",
  namePlural: "HairColors",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "HairColor",
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
