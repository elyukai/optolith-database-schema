import { Entity, Integer, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../../../Locale.js"

export const ArmorType = Entity(import.meta.url, {
  name: "ArmorType",
  namePlural: "ArmorTypes",
  type: () =>
    Object({
      sturdiness_rating: Optional({
        comment:
          "An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*.",
        type: Integer({ minimum: 1, maximum: 20 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "ArmorType",
        Object({
          name: Required({
            comment: "The armor type’s name.",
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
