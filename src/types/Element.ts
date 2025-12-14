import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const Element = Entity(import.meta.url, {
  name: "Element",
  namePlural: "Elements",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Element",
        Object({
          name: Required({
            comment: "The element’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
