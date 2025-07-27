import FileDB

@Model
public struct DerivedCharacteristic {
      prerequisites: Optional({
        type: IncludeIdentifier(DerivedCharacteristicPrerequisites),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // DerivedCharacteristicTranslation

        /// The derived characteristic’s name.
        let name: String({ minLength: 1 })

        /// The derived characteristic’s abbreviation.
        let abbreviation: String({ minLength: 1 })

        /// Possible calculation strings for the final value.
        let calculation: IncludeIdentifier(CalculationTranslation)?
    }
}

@Embedded
public struct CalculationTranslation {

  /// The default calculation string.
  let default: String({ minLength: 1 })
  /// The calculation string if only half of the primary attribute is used.
  let half_primary: String({ minLength: 1 })?
  /// The calculation string if no primary attribute is used.
  let no_primary: String({ minLength: 1 })?
  }
