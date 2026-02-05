import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const AnimalType = DB.Entity(import.meta.url, {
  name: "AnimalType",
  namePlural: "AnimalTypes",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "AnimalType",
        DB.Object({
          name: DB.Required({
            comment: "The animal type’s name.",
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
