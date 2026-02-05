import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const HomunculusType = DB.Entity(import.meta.url, {
  name: "HomunculusType",
  namePlural: "HomunculusTypes",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "HomunculusType",
        DB.Object({
          name: DB.Required({
            comment: "The homunculus type’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
})
