import FileDB

@Model
public struct CloseCombatTechnique {

  /// Special rules for the combat technique that apply to all weapons in this category.
  @Relationship(CloseCombatTechniqueSpecialRules)
  let special: CloseCombatTechniqueSpecialRules.ID

  /// The primary attribute(s).
  let primary_attribute: Array(AttributeIdentifier(), { minItems: 1, maxItems: 2, uniqueItems: true })

  /// The *Breaking Point Rating* of the respective combat technique.
  let breaking_point_rating: Integer({ minimum: 1 })

  /// States which column is used to improve the combat technique.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CloseCombatTechniqueTranslation

        /// The combat technique’s name.
        let name: String({ minLength: 1 })

        /// Additional rules for the combat technique, if applicable.
        let special: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}

/// Special rules for the combat technique that apply to all weapons in this category.
@Embedded
public struct CloseCombatTechniqueSpecialRules {

  /// Is parrying possible with this combat technique?
  let can_parry: Boolean()
      has_damage_threshold: Required({ type: Boolean() }),
      has_reach: Required({ type: Boolean() }),
      has_length: Required({ type: Boolean() }),
      has_shield_size: Required({ type: Boolean() }),
  }

@Model
public struct RangedCombatTechnique {

  /// Special rules for the combat technique that apply to all weapons in this category.
  @Relationship(RangedCombatTechniqueSpecialRules)
  let special: RangedCombatTechniqueSpecialRules.ID

  /// The primary attribute(s).
  let primary_attribute: Array(AttributeIdentifier(), { minItems: 1, maxItems: 2, uniqueItems: true })

  /// The *Breaking Point Rating* of the respective combat technique.
  let breaking_point_rating: Integer({ minimum: 1 })

  /// States which column is used to improve the combat technique.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // RangedCombatTechniqueTranslation

        /// The combat technique’s name.
        let name: String({ minLength: 1 })

        /// Additional rules for the combat technique, if applicable.
        let special: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}

/// Special rules for the combat technique that apply to all weapons in this category.
@Embedded
public struct RangedCombatTechniqueSpecialRules {
      has_ammunition: Required({ type: Boolean() }),
  }
