import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../Locale.js"

export const Subject = DB.Entity(import.meta.url, {
  name: "Subject",
  namePlural: "Subjects",
  comment: "Subjects or Subject Areas are the categories of Focus Rules.",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Subject",
        DB.Object({
          name: DB.Required({
            comment: "The subject.",
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
