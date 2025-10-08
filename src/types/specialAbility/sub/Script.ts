import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LanguageIdentifier } from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { AssociatedContinent } from "./_LanguageScript.js"

export const Script = Entity(import.meta.url, {
  name: "Script",
  namePlural: "Scripts",
  type: () =>
    Object({
      ap_value: Optional({
        comment: "The script’s adventure point value",
        type: Integer({ minimum: 2, multipleOf: 2 }),
      }),
      associated_languages: Required({
        comment: "A list of languages that use this script.",
        type: Array(LanguageIdentifier()),
      }),
      continent: Required({
        comment: "The continents this language is present on.",
        type: Array(IncludeIdentifier(AssociatedContinent), { minItems: 1 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Script",
        Object({
          name: Required({
            comment: "The script’s name.",
            type: String({ minLength: 1 }),
          }),
          alternative_names: Optional({
            comment: "A list of alternative names.",
            type: Array(IncludeIdentifier(AlternativeName), { minItems: 1 }),
          }),
          alphabet: Optional({
            comment: "The description of the alphabet.",
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
