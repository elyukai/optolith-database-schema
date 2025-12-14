import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../../../Locale.js"

export const Reach = Entity(import.meta.url, {
  name: "Reach",
  namePlural: "Reaches",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Reach",
        Object({
          name: Required({
            comment: "The reach’s name.",
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
