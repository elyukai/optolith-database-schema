import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const MetaCondition = DB.Entity(import.meta.url, {
  name: "MetaCondition",
  namePlural: "MetaConditions",
  comment:
    "Meta Conditions are rule elements that work like conditions in the sense that they have four levels with different effects, but which are not explicitly listed as conditions.",
  type: () =>
    DB.Object({
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "MetaCondition",
        DB.Object({
          name: DB.Required({
            comment: "The meta condition’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          rules: DB.Optional({
            comment: "Additional rules for the meta condition, if applicable.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          effects: DB.Required({
            comment: "The effects for level 1 to 4.",
            type: DB.Array(DB.String({ minLength: 1, isMarkdown: true }), {
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
