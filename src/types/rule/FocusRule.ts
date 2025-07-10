import {
  Boolean,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Required,
  String,
} from "tsondb/schema/def"
import { SubjectIdentifier } from "../_Identifier.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const FocusRule = Entity(import.meta.url, {
  name: "FocusRule",
  namePlural: "FocusRules",
  type: () =>
    Object({
      subject: Required({
        comment: "The associated subject.",
        type: SubjectIdentifier(),
      }),
      level: Required({
        comment: "The focus rule’s level.",
        type: Integer({ minimum: 1, maximum: 4 }),
      }),
      isMissingImplementation: Required({
        comment:
          "Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.",
        type: Boolean(),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "FocusRuleTranslation",
        Object({
          name: Required({
            comment: "The focus rule’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The description of the focus rule.",
            type: String({ minLength: 1 }),
          }),
          errata: Required({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
