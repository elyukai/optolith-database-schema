import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const EyeColor = Entity(import.meta.url, {
  name: "EyeColor",
  namePlural: "EyeColors",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "EyeColor",
        Object({
          name: Required({
            comment: "The eye color’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
