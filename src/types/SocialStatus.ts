import { Entity, Integer, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const SocialStatus = Entity(import.meta.url, {
  name: "SocialStatus",
  namePlural: "SocialStatuses",
  type: () =>
    Object({
      position: Required({
        comment:
          "The social status’ position. The higher the position, the more powerful the social status. This has to be a unique value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "SocialStatus",
        Object({
          name: Required({
            comment: "The social status’ name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    { keyPath: "position" },
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
