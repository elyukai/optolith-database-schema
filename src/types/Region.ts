import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const Region = DB.Entity(import.meta.url, {
  name: "Region",
  namePlural: "Regions",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Region",
        DB.Object({
          name: DB.Required({
            comment: "The region’s name.",
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
