import {
  Array,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { InfluencePrerequisites } from "./_Prerequisite.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Influence = Entity(import.meta.url, {
  name: "Influence",
  namePlural: "Influences",
  type: () =>
    Object({
      prerequisites: Optional({
        type: IncludeIdentifier(InfluencePrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Influence",
        Object({
          name: Required({
            comment: "The influence’s name.",
            type: String({ minLength: 1 }),
          }),
          effects: Optional({
            comment:
              "The effects of the influence. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(InfluenceEffect), { minItems: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const InfluenceEffect = TypeAlias(import.meta.url, {
  name: "InfluenceEffect",
  type: () =>
    Object({
      label: Optional({
        comment: "An optional label that is displayed and placed before the actual text.",
        type: String({ minLength: 1 }),
      }),
      text: Required({
        comment: "The effect text.",
        type: String({ minLength: 1 }),
      }),
    }),
})
