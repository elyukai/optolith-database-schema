import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"

export const Brew = DB.Entity(import.meta.url, {
  name: "Brew",
  namePlural: "Brews",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Brew",
        DB.Object({
          name: DB.Required({
            comment: "The brew’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
