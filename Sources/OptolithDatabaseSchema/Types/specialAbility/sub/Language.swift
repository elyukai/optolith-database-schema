import FileDB

@Model
public struct Language {

  /// The continents this language is present on.
  let continent: Array(IncludeIdentifier(AssociatedContinent), { minItems: 1 })
  /// Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization.
  @Relationship(Specializations)
  let specializations: Specializations.ID?
      prerequisites: Optional({
        type: IncludeIdentifier(LanguagePrerequisites),
      }),
  /// The maximum possible level of the language. Only specified if lower than default of 3.
  let max_level: Integer({ minimum: 1, maximum: 2 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // LanguageTranslation

        /// The language’s name.
        let name: String({ minLength: 1 })

        /// A list of alternative names.
        let alternative_names: Array(IncludeIdentifier(AlternativeName), { minItems: 1 })?

        /// The description of the language.
        let description: String({ minLength: 1 })?

        let errata: Errata?
    }
}

@ModelEnum
public enum Specializations {
    case Specific(IncludeIdentifier(SpecificSpecializations))
    case Indefinite(IncludeIdentifier(IndefiniteSpecializations))
}

@Embedded
public struct SpecificSpecializations {

  /// A list of specific possible specializations.
  let list: Array(IncludeIdentifier(SpecificSpecialization), { minItems: 1 })
  }

@Embedded
public struct SpecificSpecialization {

  /// The specialization’s identifier.
  let id: Integer({ minimum: 1 })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SpecificSpecializationTranslation

        /// The specialization’s name.
        let name: String({ minLength: 1 })
          description: Optional({
            comment:
              "The specialization description. It will be appended to the name in parenthesis.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
  }

@Embedded
public struct IndefiniteSpecializations {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteSpecializationsTranslation

        /// The specializations description.
        let description: String({ minLength: 1 })
          label: Optional({
            comment:
              "An input label or placeholder text for an UI element if it differs from the `description`.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
  }
