import FileDB

/// Adventure Points and maximum values at hero creation.
@Model
public struct ExperienceLevel {
    /// The AP value you get.
    let adventure_points: Int

    /// The highest possible attribute value.
    let max_attribute_value: Int

    /// The highest possible skill rating.
    let max_skill_rating: Int

    /// The highest possible combat technique rating.
    let max_combat_technique_rating: Int

    /// The limit for the sum of all attribute values.
    let max_attribute_total: Int

    /// The maximum of spells/chants you can activate.
    let max_number_of_spells_liturgical_chants: Int

    /// The maximum of spells of an unfamiliar tradition you can activate.
    let max_number_of_unfamiliar_spells: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // ExperienceLevelTranslation
        /// The experience level’s name.
        @MinLength(1)
        let name: String
    }
}
