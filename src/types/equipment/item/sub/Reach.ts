import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../../Locale.js"

export const Reach = DB.Entity(import.meta.url, {
  name: "Reach",
  namePlural: "Reaches",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Reach",
        DB.Object({
          name: DB.Required({
            comment: "The reach’s name.",
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
