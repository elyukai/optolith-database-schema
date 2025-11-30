import {
  Array,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Condition = Entity(import.meta.url, {
  name: "Condition",
  namePlural: "Conditions",
  type: () =>
    Object({
      src,
      translations: NestedTranslationMap(
        Required,
        "Condition",
        Object({
          name: Required({
            comment: "The condition’s name.",
            type: String({ minLength: 1 }),
          }),
          rules: Optional({
            comment: "Additional rules for the condition, if applicable.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          effects: Required({
            comment: "The effects for level 1 to 4.",
            type: Array(String({ minLength: 1, isMarkdown: true }), {
              minItems: 4,
              maxItems: 4,
            }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})
