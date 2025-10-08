import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"

export const Tribe = Entity(import.meta.url, {
  name: "Tribe",
  namePlural: "Tribes",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Tribe",
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
