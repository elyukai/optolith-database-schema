import * as DB from "tsondb/schema/dsl"
import { RulePrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const OptionalRule = DB.Entity(import.meta.url, {
  name: "OptionalRule",
  namePlural: "OptionalRules",
  type: () =>
    DB.Object({
      isMissingImplementation: DB.Required({
        comment:
          "Has the optional rule not been implemented in Optolith yet? This is also true if the optional rule does not (currently) apply to any Optolith feature.",
        type: DB.Boolean(),
      }),
      prerequisites: DB.Optional({
        type: DB.IncludeIdentifier(RulePrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "OptionalRule",
        DB.Object({
          name: DB.Required({
            comment: "The optional rule’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          description: DB.Required({
            comment: "The description of the optional rule, as stated in the optional rule box.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          additionalRules: DB.Optional({
            comment:
              "Sometimes, an optional rule does not only contain all the rules belonging to it in its rule box, but also in the main text.",
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
