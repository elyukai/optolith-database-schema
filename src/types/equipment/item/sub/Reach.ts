import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "../../../Locale.js"

export const Reach = Entity(import.meta.url, {
  name: "Reach",
  namePlural: "Reaches",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "ReachTranslation",
        Object({
          name: Required({
            comment: "The reach’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
