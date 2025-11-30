import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { PersonalityTraitIdentifier } from "./_Identifier.js"
import { PersonalityTraitPrerequisites } from "./_Prerequisite.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const PersonalityTrait = Entity(import.meta.url, {
  name: "PersonalityTrait",
  namePlural: "PersonalityTraits",
  comment:
    "A personality trait describes character aspects of a person from a certain region. Higher trait levels only cover a part of the region covered by lower-level traits.",
  type: () =>
    Object({
      level: Required({
        comment: "The personality trait’s level.",
        type: Integer({ minimum: 1, maximum: 3 }),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(PersonalityTraitPrerequisites),
      }),
      combination_options: Optional({
        comment: "The lower-level personality trait(s) this trait can be combined with.",
        type: Array(PersonalityTraitIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "PersonalityTrait",
        Object({
          name: Required({
            comment: "The personality trait’s name.",
            type: String({ minLength: 1 }),
          }),
          effects: Required({
            comment:
              "The effects of the personality trait. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(PersonalityTraitEffect), { minItems: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})

const PersonalityTraitEffect = TypeAlias(import.meta.url, {
  name: "PersonalityTraitEffect",
  type: () =>
    Object({
      label: Optional({
        comment: "A label that is displayed and placed before the actual text.",
        type: String({ minLength: 1 }),
      }),
      text: Required({
        comment: "The effect text.",
        type: String({ minLength: 1 }),
      }),
    }),
})
