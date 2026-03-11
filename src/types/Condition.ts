import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Condition = DB.Entity(import.meta.url, {
  name: "Condition",
  namePlural: "Conditions",
  type: () =>
    DB.Object({
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Condition",
        DB.Object({
          name: DB.Required({
            comment: "The condition’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          rules: DB.Optional({
            comment: "Additional rules for the condition, if applicable.",
            type: DB.String({ minLength: 1, markdown: "block" }),
          }),
          effects: DB.Required({
            comment: "The effects for level 1 to 4.",
            type: DB.Array(DB.String({ minLength: 1, markdown: "block" }), {
              minItems: 4,
              maxItems: 4,
            }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
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
