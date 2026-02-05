import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"

export const AnimalShapePath = DB.Entity(import.meta.url, {
  name: "AnimalShapePath",
  namePlural: "AnimalShapePaths",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "AnimalShapePath",
        DB.Object({
          name: DB.Required({
            comment: "The animal shape path’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
