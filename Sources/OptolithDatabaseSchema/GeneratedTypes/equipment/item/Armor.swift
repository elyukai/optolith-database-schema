//
//  Armor.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Armor: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
    
    /// The complexity of crafting the item.
    public let complexity: Complexity
    
    /// The PRO value.
    public let protection: Protection
    
    /// The ENC value.
    public let encumbrance: Encumbrance
    
    /// Does the armor have additional penalties (MOV -1, INI -1)?
    public let hasAdditionalPenalties: HasAdditionalPenalties
    
    /// The armor type.
    public let armorType: ArmorTypeReference
    
    /// Specify if armor is only available for a specific hit zone.
    public let hitZone: HitZone?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArmorTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case protection = "protection"
        case encumbrance = "encumbrance"
        case hasAdditionalPenalties = "has_additional_penalties"
        case armorType = "armor_type"
        case hitZone = "hit_zone"
        case src = "src"
        case translations = "translations"
    }
}

public struct ArmorTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    /// The armor advantage text.
    public let advantage: NonEmptyMarkdown?
    
    /// The armor disadvantage text.
    public let disadvantage: NonEmptyMarkdown?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case note = "note"
        case rules = "rules"
        case advantage = "advantage"
        case disadvantage = "disadvantage"
        case errata = "errata"
    }
}

public struct SecondaryArmor: EntitySubtype {
    /// The PRO value.
    public let protection: Protection
    
    /// The ENC value.
    public let encumbrance: Encumbrance
    
    /// Does the armor have additional penalties (MOV -1, INI -1)?
    public let hasAdditionalPenalties: HasAdditionalPenalties
    
    /// The armor type.
    public let armorType: ArmorTypeReference
    
    /// Specify if armor is only available for a specific hit zone.
    public let hitZone: HitZone?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SecondaryArmorTranslation>?    
    
    private enum CodingKeys: String, CodingKey {
        case protection = "protection"
        case encumbrance = "encumbrance"
        case hasAdditionalPenalties = "has_additional_penalties"
        case armorType = "armor_type"
        case hitZone = "hit_zone"
        case translations = "translations"
    }
}

public struct SecondaryArmorTranslation: EntitySubtype {
    /// The armor advantage text.
    public let advantage: NonEmptyMarkdown?
    
    /// The armor disadvantage text.
    public let disadvantage: NonEmptyMarkdown?
}

/// The PRO value.
public typealias Protection = Int

/// The ENC value.
public typealias Encumbrance = Int

/// Does the armor have additional penalties (MOV -1, INI -1)?
public typealias HasAdditionalPenalties = Bool

/// The armor type.
public struct ArmorTypeReference: EntitySubtype {
    /// The armor type's identifier.
    public let id: Int
}

/// Specify if armor is only available for a specific hit zone.
@DiscriminatedEnum
public enum HitZone: EntitySubtype {
    case head(HeadHitZone)
    case torso
    case arms
    case legs
}

public struct HeadHitZone: EntitySubtype {
    /// In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others.
    public let combinationPossibilities: HeadHitZoneCombinationPossibilities?    
    
    private enum CodingKeys: String, CodingKey {
        case combinationPossibilities = "combination_possibilities"
    }
}

public struct HeadHitZoneCombinationPossibilities: EntitySubtype {
    /// A list of armors that can be combined with this armor.
    public let armors: [ArmorReference]
    
    /// The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value.
    public let protection: Int?
}
