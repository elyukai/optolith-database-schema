import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const EyeColor = DB.Entity(import.meta.url, {
  name: "EyeColor",
  namePlural: "EyeColors",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "EyeColor",
        DB.Object({
          name: DB.Required({
            comment: "The eye color’s name.",
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
