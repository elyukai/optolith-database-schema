import FileDB

/// A personality trait describes character aspects of a person from a certain region. Higher trait levels only cover a part of the region covered by lower-level traits.
@Model
public struct PersonalityTrait {
    /// The personality trait’s level.
    @Minimum(1)
    @Maximum(3)
    let level: Int

    let prerequisites: PersonalityTraitPrerequisites?

    /// The lower-level personality trait(s) this trait can be combined with.
    @MinItems(1)
    @UniqueItems
    @Relationship(PersonalityTrait.self)
    let combination_options: [PersonalityTrait.ID]?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // PersonalityTraitTranslation
        /// The personality trait’s name.
        @MinLength(1)
        let name: String
        /// The effects of the personality trait. They should be sorted like they are in the book.
        @MinItems(1)
        let effects: [PersonalityTraitEffect]

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct PersonalityTraitEffect {
    /// A label that is displayed and placed before the actual text.
    @MinLength(1)
    let label: String?

    /// The effect text.
    @MinLength(1)
    let text: String
}
