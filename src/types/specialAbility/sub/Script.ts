import * as DB from "tsondb/schema/dsl"
import { AlternativeName } from "../../_AlternativeNames.js"
import { LanguageIdentifier } from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { AssociatedContinent } from "./_LanguageScript.js"

export const Script = DB.Entity(import.meta.url, {
  name: "Script",
  namePlural: "Scripts",
  type: () =>
    DB.Object({
      ap_value: DB.Optional({
        comment: "The script’s adventure point value",
        type: DB.Integer({ minimum: 2, multipleOf: 2 }),
      }),
      associated_languages: DB.Required({
        comment: "A list of languages that use this script.",
        type: DB.Array(LanguageIdentifier()),
      }),
      continent: DB.Required({
        comment: "The continents this language is present on.",
        type: DB.Array(DB.IncludeIdentifier(AssociatedContinent), { minItems: 1 }),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Script",
        DB.Object({
          name: DB.Required({
            comment: "The script’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          alternative_names: DB.Optional({
            comment: "A list of alternative names.",
            type: DB.Array(DB.IncludeIdentifier(AlternativeName), { minItems: 1 }),
          }),
          alphabet: DB.Optional({
            comment: "The description of the alphabet.",
            type: DB.String({ minLength: 1 }),
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
