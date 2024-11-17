//
//  Weapon.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Weapon: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
    
    /// The complexity of crafting the item.
    public let complexity: Complexity
    
    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints?
    
    /// A list of stat blocks for each combat technique this weapon can be used with.
    public let uses: [WeaponUse]
    
    /// If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.
    public let sanctifiedBy: SanctifiedBy?
    
    /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
    public let restrictedToCultures: RestrictedToCultures?
    
    /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
    public let restrictedToTraditions: [MagicalTraditionReference]?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<WeaponTranslation>

    public init(cost: Cost, weight: Weight, complexity: Complexity, structurePoints: StructurePoints? = nil, uses: [WeaponUse], sanctifiedBy: SanctifiedBy? = nil, restrictedToCultures: RestrictedToCultures? = nil, restrictedToTraditions: [MagicalTraditionReference]? = nil, src: PublicationRefs, translations: LocaleMap<WeaponTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.structurePoints = structurePoints
        self.uses = uses
        self.sanctifiedBy = sanctifiedBy
        self.restrictedToCultures = restrictedToCultures
        self.restrictedToTraditions = restrictedToTraditions
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case uses = "uses"
        case sanctifiedBy = "sanctified_by"
        case restrictedToCultures = "restricted_to_cultures"
        case restrictedToTraditions = "restricted_to_traditions"
        case src = "src"
        case translations = "translations"
    }
}

public struct WeaponTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString
    
    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?
    
    /// Note text.
    public let note: NonEmptyMarkdown?
    
    /// Special rules text.
    public let rules: NonEmptyMarkdown?
    
    /// The weapon advantage text.
    public let advantage: NonEmptyMarkdown?
    
    /// The weapon disadvantage text.
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

public struct SecondaryWeapon: EntitySubtype {
    /// A list of stat blocks for each combat technique this weapon can be used with.
    public let uses: [WeaponUse]
    
    /// If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.
    public let sanctifiedBy: SanctifiedBy?
    
    /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
    public let restrictedToCultures: RestrictedToCultures?
    
    /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
    public let restrictedToTraditions: [MagicalTraditionReference]?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ImprovisedWeaponTranslation>?

    public init(uses: [WeaponUse], sanctifiedBy: SanctifiedBy? = nil, restrictedToCultures: RestrictedToCultures? = nil, restrictedToTraditions: [MagicalTraditionReference]? = nil, translations: LocaleMap<ImprovisedWeaponTranslation>? = nil) {
        self.uses = uses
        self.sanctifiedBy = sanctifiedBy
        self.restrictedToCultures = restrictedToCultures
        self.restrictedToTraditions = restrictedToTraditions
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case uses = "uses"
        case sanctifiedBy = "sanctified_by"
        case restrictedToCultures = "restricted_to_cultures"
        case restrictedToTraditions = "restricted_to_traditions"
        case translations = "translations"
    }
}

public struct ImprovisedWeaponTranslation: EntitySubtype {
    /// The weapon advantage text.
    public let advantage: NonEmptyMarkdown?
    
    /// The weapon disadvantage text.
    public let disadvantage: NonEmptyMarkdown?

    public init(advantage: NonEmptyMarkdown? = nil, disadvantage: NonEmptyMarkdown? = nil) {
        self.advantage = advantage
        self.disadvantage = disadvantage
    }
}

public struct WeaponUse: EntitySubtype {
    /// An increasing integer for use identification.
    public let id: Int
    
    public let values: WeaponUseValues

    public init(id: Int, values: WeaponUseValues) {
        self.id = id
        self.values = values
    }
}

@DiscriminatedEnum
public enum WeaponUseValues: EntitySubtype {
    case melee(MeleeWeapon)
    case ranged(RangedWeapon)
}

/// If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.
public typealias SanctifiedBy = [BlessedTraditionReference]

/// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
@DiscriminatedEnum
public enum RestrictedToCultures: EntitySubtype {
    case culturesOfRace(RaceReference)
    case cultures(RestrictedToSpecificCultures)
}

public struct RestrictedToSpecificCultures: EntitySubtype {
    public let list: [CultureReference]

    public init(list: [CultureReference]) {
        self.list = list
    }
}
