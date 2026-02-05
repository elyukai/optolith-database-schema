import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const Element = DB.Entity(import.meta.url, {
  name: "Element",
  namePlural: "Elements",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Element",
        DB.Object({
          name: DB.Required({
            comment: "The element’s name.",
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
