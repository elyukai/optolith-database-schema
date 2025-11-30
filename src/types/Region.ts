import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const Region = Entity(import.meta.url, {
  name: "Region",
  namePlural: "Regions",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Region",
        Object({
          name: Required({
            comment: "The region’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
})
