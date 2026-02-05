import * as DB from "tsondb/schema/dsl"
import { PlayerTypeIdentifier } from "../_Identifier.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const AlternativeRule = DB.Entity(import.meta.url, {
  name: "AlternativeRule",
  namePlural: "AlternativeRules",
  type: () =>
    DB.Object({
      playerTypes: DB.Required({
        comment: "The player types this alternative rule is suitable for.",
        type: DB.Array(PlayerTypeIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      isMissingImplementation: DB.Required({
        comment:
          "Has the alternative rule not been implemented in Optolith yet? This is also true if the alternative rule does not (currently) apply to any Optolith feature.",
        type: DB.Boolean(),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "AlternativeRule",
        DB.Object({
          name: DB.Required({
            comment: "The alternative rule’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          description: DB.Required({
            comment: "The description of the alternative rule.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
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
