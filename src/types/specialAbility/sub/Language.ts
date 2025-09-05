import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LanguageIdentifier, LanguageSpecializationIdentifier } from "../../_Identifier.js"
import { LanguagePrerequisites } from "../../_Prerequisite.js"
import { NestedLocaleMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { AssociatedContinent } from "./_LanguageScript.js"

export const Language = Entity(import.meta.url, {
  name: "Language",
  namePlural: "Languages",
  type: () =>
    Object({
      continent: Required({
        comment: "The continents this language is present on.",
        type: Array(IncludeIdentifier(AssociatedContinent), { minItems: 1 }),
      }),
      specializations: Optional({
        comment:
          "Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization.",
        type: IncludeIdentifier(Specializations),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(LanguagePrerequisites),
      }),
      max_level: Optional({
        comment:
          "The maximum possible level of the language. Only specified if lower than default of 3.",
        type: Integer({ minimum: 1, maximum: 2 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "LanguageTranslation",
        Object({
          name: Required({
            comment: "The language’s name.",
            type: String({ minLength: 1 }),
          }),
          alternative_names: Optional({
            comment: "A list of alternative names.",
            type: Array(IncludeIdentifier(AlternativeName), { minItems: 1 }),
          }),
          description: Optional({
            comment: "The description of the language.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const Specializations = Enum(import.meta.url, {
  name: "Specializations",
  values: () => ({
    Specific: EnumCase({ type: IncludeIdentifier(SpecificSpecializations) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteSpecializations) }),
  }),
})

const SpecificSpecializations = TypeAlias(import.meta.url, {
  name: "SpecificSpecializations",
  type: () =>
    Object({
      list: Required({
        comment: "A list of specific possible specializations.",
        type: Array(LanguageSpecializationIdentifier(), { minItems: 1 }),
      }),
    }),
})

export const LanguageSpecialization = Entity(import.meta.url, {
  name: "LanguageSpecialization",
  namePlural: "LanguageSpecializations",
  type: () =>
    Object({
      parent: Required({
        comment: "The language this specialization belongs to.",
        type: LanguageIdentifier(),
      }),
      translations: NestedLocaleMap(
        Required,
        "LanguageSpecializationTranslation",
        Object({
          name: Required({
            comment: "The specialization’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment:
              "The specialization description. It will be appended to the name in parenthesis.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})

const IndefiniteSpecializations = TypeAlias(import.meta.url, {
  name: "IndefiniteSpecializations",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "IndefiniteSpecializationsTranslation",
        Object({
          description: Required({
            comment: "The specializations description.",
            type: String({ minLength: 1 }),
          }),
          label: Optional({
            comment:
              "An input label or placeholder text for an UI element if it differs from the `description`.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})
