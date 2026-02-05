import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const Continent = DB.Entity(import.meta.url, {
  name: "Continent",
  namePlural: "Continents",
  comment:
    "Continents are mostly referenced to in languages and scripts that occur on a specific continent.",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Continent",
        DB.Object({
          name: DB.Required({
            comment: "The continent name.",
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
