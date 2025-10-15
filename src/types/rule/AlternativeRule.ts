import {
  Array,
  Boolean,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { PlayerTypeIdentifier } from "../_Identifier.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const AlternativeRule = Entity(import.meta.url, {
  name: "AlternativeRule",
  namePlural: "AlternativeRules",
  type: () =>
    Object({
      playerTypes: Required({
        comment: "The player types this alternative rule is suitable for.",
        type: Array(PlayerTypeIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      isMissingImplementation: Required({
        comment:
          "Has the alternative rule not been implemented in Optolith yet? This is also true if the alternative rule does not (currently) apply to any Optolith feature.",
        type: Boolean(),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "AlternativeRule",
        Object({
          name: Required({
            comment: "The alternative rule’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The description of the alternative rule.",
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
