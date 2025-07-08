import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "../Locale.js"

export const Tribe = Entity(import.meta.url, {
  name: "Tribe",
  namePlural: "Tribes",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "TribeTranslation",
        Object({
          name: Required({
            comment: "The tribe’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
