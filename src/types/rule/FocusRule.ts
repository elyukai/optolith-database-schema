import * as DB from "tsondb/schema/dsl"
import { SubjectIdentifier } from "../_Identifier.js"
import { RulePrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const FocusRule = DB.Entity(import.meta.url, {
  name: "FocusRule",
  namePlural: "FocusRules",
  type: () =>
    DB.Object({
      subject: DB.Required({
        comment: "The associated subject.",
        type: SubjectIdentifier(),
      }),
      level: DB.Required({
        comment: "The focus rule’s level.",
        type: DB.Integer({ minimum: 1, maximum: 4 }),
      }),
      isMissingImplementation: DB.Required({
        comment:
          "Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.",
        type: DB.Boolean(),
      }),
      prerequisites: DB.Optional({
        type: DB.IncludeIdentifier(RulePrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "FocusRule",
        DB.Object({
          name: DB.Required({
            comment: "The focus rule’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          description: DB.Required({
            comment: "The description of the focus rule.",
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
