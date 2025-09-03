import FileDB

@Model
public struct DerivedCharacteristic {
    let prerequisites: DerivedCharacteristicPrerequisites?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // DerivedCharacteristicTranslation
        /// The derived characteristic’s name.
        @MinLength(1)
        let name: String

        /// The derived characteristic’s abbreviation.
        @MinLength(1)
        let abbreviation: String

        /// Possible calculation strings for the final value.
        let calculation: CalculationTranslation?
    }
}

@Embedded
public struct CalculationTranslation {
    /// The default calculation string.
    @MinLength(1)
    let `default`: String

    /// The calculation string if only half of the primary attribute is used.
    @MinLength(1)
    let half_primary: String?

    /// The calculation string if no primary attribute is used.
    @MinLength(1)
    let no_primary: String?
}
