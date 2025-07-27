import FileDB

/// Adventure Points and maximum values at hero creation.
@Model
public struct ExperienceLevel {

  /// The AP value you get.
  let adventure_points: Integer()

  /// The highest possible attribute value.
  let max_attribute_value: Integer()

  /// The highest possible skill rating.
  let max_skill_rating: Integer()

  /// The highest possible combat technique rating.
  let max_combat_technique_rating: Integer()

  /// The limit for the sum of all attribute values.
  let max_attribute_total: Integer()

  /// The maximum of spells/chants you can activate.
  let max_number_of_spells_liturgical_chants: Integer()

  /// The maximum of spells of an unfamiliar tradition you can activate.
  let max_number_of_unfamiliar_spells: Integer()

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ExperienceLevelTranslation

        /// The experience level’s name.
        let name: String({ minLength: 1 })
    }
}
