import FileDB

@Model
public struct Armor {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight

    /// The complexity of crafting the item.
    let complexity: Complexity

    /// The PRO value.
    let protection: Protection

    /// The ENC value.
    let encumbrance: Encumbrance

    /// Does the armor have additional penalties (MOV -1, INI -1)?
    let has_additional_penalties: HasAdditionalPenalties

    /// The armor type..
    @Relationship(ArmorType.self)
    let armor_type: ArmorType.ID

    /// Specify if armor is only available for a specific hit zone.
    let hit_zone: HitZone?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ArmorTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// The armor advantage text.
        @MinLength(1)
        @Markdown
        let advantage: String?

        /// The armor disadvantage text.
        @MinLength(1)
        @Markdown
        let disadvantage: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }

    public static let namePlural = "Armor"
}

@Embedded
public struct SecondaryArmor {
    /// The PRO value.
    let protection: Protection

    /// The ENC value.
    let encumbrance: Encumbrance

    /// Does the armor have additional penalties (MOV -1, INI -1)?
    let has_additional_penalties: HasAdditionalPenalties

    /// The armor type..
    @Relationship(ArmorType.self)
    let armor_type: ArmorType.ID

    /// Specify if armor is only available for a specific hit zone.
    let hit_zone: HitZone?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // SecondaryArmorTranslation
        /// The armor advantage text.
        @MinLength(1)
        @Markdown
        let advantage: String?

        /// The armor disadvantage text.
        @MinLength(1)
        @Markdown
        let disadvantage: String?
    }
}

/// The PRO value.
@TypeAlias
public struct Protection {
    @Minimum(0)
    let type: Int
}

/// The ENC value.
@TypeAlias
public struct Encumbrance {
    @Minimum(0)
    let type: Int
}

/// Does the armor have additional penalties (MOV -1, INI -1)?
@TypeAlias
public struct HasAdditionalPenalties {
    let type: Bool
}

/// Specify if armor is only available for a specific hit zone.
@ModelEnum
public enum HitZone {
    case head(HeadHitZone)
    case torso
    case arms
    case legs
}

@Embedded
public struct HeadHitZone {
    /// In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others.
    let combination_possibilities: HeadHitZoneCombinationPossibilities?
}

@Embedded
public struct HeadHitZoneCombinationPossibilities {
    /// A list of armors that can be combined with this armor.
    @MinItems(1)
    @UniqueItems
    @Relationship(Armor.self)
    let armors: [Armor.ID]

    /// The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value.
    @Minimum(0)
    let protection: Int?
}
