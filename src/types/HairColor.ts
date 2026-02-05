import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const HairColor = DB.Entity(import.meta.url, {
  name: "HairColor",
  namePlural: "HairColors",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "HairColor",
        DB.Object({
          name: DB.Required({
            comment: "The hair color’s name.",
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
