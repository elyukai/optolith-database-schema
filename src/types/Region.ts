import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const Region = Entity(import.meta.url, {
  name: "Region",
  namePlural: "Regions",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "RegionTranslation",
        Object({
          name: Required({
            comment: "The region’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
