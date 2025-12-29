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

export const MetaCondition = Entity(import.meta.url, {
  name: "MetaCondition",
  namePlural: "MetaConditions",
  comment:
    "Meta Conditions are rule elements that work like conditions in the sense that they have four levels with different effects, but which are not explicitly listed as conditions.",
  type: () =>
    Object({
      src,
      translations: NestedTranslationMap(
        Required,
        "MetaCondition",
        Object({
          name: Required({
            comment: "The meta condition’s name.",
            type: String({ minLength: 1 }),
          }),
          rules: Optional({
            comment: "Additional rules for the meta condition, if applicable.",
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
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
