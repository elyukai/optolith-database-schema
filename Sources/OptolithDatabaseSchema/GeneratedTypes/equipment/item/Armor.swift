//
//  Armor.swift
//  OptolithDatabaseSchema
//

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

    public init(cost: Cost, weight: Weight, complexity: Complexity, protection: Protection, encumbrance: Encumbrance, hasAdditionalPenalties: HasAdditionalPenalties, armorType: ArmorTypeReference, hitZone: HitZone? = nil, src: PublicationRefs, translations: LocaleMap<ArmorTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.protection = protection
        self.encumbrance = encumbrance
        self.hasAdditionalPenalties = hasAdditionalPenalties
        self.armorType = armorType
        self.hitZone = hitZone
        self.src = src
        self.translations = translations
    }

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

    public init(name: NonEmptyString, secondaryName: NonEmptyString? = nil, note: NonEmptyMarkdown? = nil, rules: NonEmptyMarkdown? = nil, advantage: NonEmptyMarkdown? = nil, disadvantage: NonEmptyMarkdown? = nil, errata: Errata? = nil) {
        self.name = name
        self.secondaryName = secondaryName
        self.note = note
        self.rules = rules
        self.advantage = advantage
        self.disadvantage = disadvantage
        self.errata = errata
    }

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

    public init(protection: Protection, encumbrance: Encumbrance, hasAdditionalPenalties: HasAdditionalPenalties, armorType: ArmorTypeReference, hitZone: HitZone? = nil, translations: LocaleMap<SecondaryArmorTranslation>? = nil) {
        self.protection = protection
        self.encumbrance = encumbrance
        self.hasAdditionalPenalties = hasAdditionalPenalties
        self.armorType = armorType
        self.hitZone = hitZone
        self.translations = translations
    }

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

    public init(advantage: NonEmptyMarkdown? = nil, disadvantage: NonEmptyMarkdown? = nil) {
        self.advantage = advantage
        self.disadvantage = disadvantage
    }
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

    public init(id: Int) {
        self.id = id
    }
}

/// Specify if armor is only available for a specific hit zone.
public enum HitZone: EntitySubtype {
    case head(HeadHitZone)
    case torso
    case arms
    case legs

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case head = "head"
        case torso = "torso"
        case arms = "arms"
        case legs = "legs"
    }

    private enum Discriminator: String, Decodable {
        case head = "Head"
        case torso = "Torso"
        case arms = "Arms"
        case legs = "Legs"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .head:
            self = .head(try container.decode(HeadHitZone.self, forKey: .head))
        case .torso:
            self = .torso
        case .arms:
            self = .arms
        case .legs:
            self = .legs
        }
    }
}

public struct HeadHitZone: EntitySubtype {
    /// In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others.
    public let combinationPossibilities: HeadHitZoneCombinationPossibilities?

    public init(combinationPossibilities: HeadHitZoneCombinationPossibilities? = nil) {
        self.combinationPossibilities = combinationPossibilities
    }

    private enum CodingKeys: String, CodingKey {
        case combinationPossibilities = "combination_possibilities"
    }
}

public struct HeadHitZoneCombinationPossibilities: EntitySubtype {
    /// A list of armors that can be combined with this armor.
    public let armors: [ArmorReference]

    /// The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value.
    public let protection: Int?

    public init(armors: [ArmorReference], protection: Int? = nil) {
        self.armors = armors
        self.protection = protection
    }
}
