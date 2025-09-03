import FileDB

@Model
public struct CloseCombatTechnique {
    /// Special rules for the combat technique that apply to all weapons in this category.
    let special: CloseCombatTechniqueSpecialRules

    /// The primary attribute(s).
    @MinItems(1)
    @MaxItems(2)
    @UniqueItems
    @Relationship(Attribute.self)
    let primary_attribute: [Attribute.ID]

    /// The *Breaking Point Rating* of the respective combat technique.
    @Minimum(1)
    let breaking_point_rating: Int

    /// States which column is used to improve the combat technique.
    let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // CloseCombatTechniqueTranslation
        /// The combat technique’s name.
        @MinLength(1)
        let name: String

        /// Additional rules for the combat technique, if applicable.
        @MinLength(1)
        @Markdown
        let special: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Special rules for the combat technique that apply to all weapons in this category.
@Embedded
public struct CloseCombatTechniqueSpecialRules {
    /// Is parrying possible with this combat technique?
    let can_parry: Bool
    let has_damage_threshold: Bool
    let has_reach: Bool
    let has_length: Bool
    let has_shield_size: Bool
}

@Model
public struct RangedCombatTechnique {
    /// Special rules for the combat technique that apply to all weapons in this category.
    let special: RangedCombatTechniqueSpecialRules

    /// The primary attribute(s).
    @MinItems(1)
    @MaxItems(2)
    @UniqueItems
    @Relationship(Attribute.self)
    let primary_attribute: [Attribute.ID]

    /// The *Breaking Point Rating* of the respective combat technique.
    @Minimum(1)
    let breaking_point_rating: Int

    /// States which column is used to improve the combat technique.
    let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // RangedCombatTechniqueTranslation
        /// The combat technique’s name.
        @MinLength(1)
        let name: String

        /// Additional rules for the combat technique, if applicable.
        @MinLength(1)
        @Markdown
        let special: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// Special rules for the combat technique that apply to all weapons in this category.
@Embedded
public struct RangedCombatTechniqueSpecialRules {
    let has_ammunition: Bool
}
