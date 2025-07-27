import FileDB

@Model
public struct Script {
  /// The script’s adventure point value
  let ap_value: Integer({ minimum: 2, multipleOf: 2 })?

  /// A list of languages that use this script.
  let associated_languages: Array(LanguageIdentifier())

  /// The continents this language is present on.
  let continent: Array(IncludeIdentifier(AssociatedContinent), { minItems: 1 })

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ScriptTranslation

        /// The script’s name.
        let name: String({ minLength: 1 })

        /// A list of alternative names.
        let alternative_names: Array(IncludeIdentifier(AlternativeName), { minItems: 1 })?

        /// The description of the alphabet.
        let alphabet: String({ minLength: 1 })?

        let errata: Errata?
    }
}
