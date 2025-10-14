import {
  Boolean,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const OptionalRule = Entity(import.meta.url, {
  name: "OptionalRule",
  namePlural: "OptionalRules",
  type: () =>
    Object({
      isMissingImplementation: Required({
        comment:
          "Has the optional rule not been implemented in Optolith yet? This is also true if the optional rule does not (currently) apply to any Optolith feature.",
        type: Boolean(),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "OptionalRule",
        Object({
          name: Required({
            comment: "The optional rule’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The description of the optional rule, as stated in the optional rule box.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          additionalRules: Optional({
            comment:
              "Sometimes, an optional rule does not only contain all the rules belonging to it in its rule box, but also in the main text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
