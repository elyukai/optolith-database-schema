import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../../Locale.js"

export const ArmorType = DB.Entity(import.meta.url, {
  name: "ArmorType",
  namePlural: "ArmorTypes",
  type: () =>
    DB.Object({
      sturdiness_rating: DB.Optional({
        comment:
          "An armor type can have a *sturdiness rating*. The higher the rating, the more durable the armor. Rolling higher than this rating during a sturdiness check means the armor receives one level of the new condition *Wear*.",
        type: DB.Integer({ minimum: 1, maximum: 20 }),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "ArmorType",
        DB.Object({
          name: DB.Required({
            comment: "The armor type’s name.",
            type: DB.String({ minLength: 1 }),
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
