//
//  Patron.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Patron: LocalizableEntity {
    /// The patron's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The patron's category.
    public let category: PatronCategoryReference
    
    /// The patron-specific skills.
    public let skills: [SkillReference]
    
    /// The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures
    /// (difference).
    public let culture: PatronCulture
    
    /// The list of cultures where patrons from this category can be the primary patron of.
    public let primaryPatronCultures: [CultureReference]?
    
    /// The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons.
    public let powers: AnimalPowers?
    
    /// The patron-specific AE cost. Used by several animist forces for animal patrons.
    public let aeCost: Int?
    
    /// The patron-specific improvement cost. Used by several animist forces for animal patrons.
    public let improvementCost: ImprovementCost?
    
    /// The patron may grant common advantages that are taken into account during character creation.
    /// 
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    public let commonAdvantages: [AdvantageReference]?
    
    /// The patron may grant common disadvantages that are taken into account during character creation.
    /// 
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    public let commonDisadvantages: [DisadvantageReference]?
    
    /// The animist may learn spellworks common for this patron.
    /// 
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    public let commonSpellworks: [SpellworkReference]?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<PatronTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case category = "category"
        case skills = "skills"
        case culture = "culture"
        case primaryPatronCultures = "primary_patron_cultures"
        case powers = "powers"
        case aeCost = "ae_cost"
        case improvementCost = "improvement_cost"
        case commonAdvantages = "common_advantages"
        case commonDisadvantages = "common_disadvantages"
        case commonSpellworks = "common_spellworks"
        case translations = "translations"
    }
}

public struct PatronTranslation: EntitySubtype {
    /// The name of the patron.
    public let name: NonEmptyString
}

/// The patron cultures the patron is or is not part of. If the patron is part of all patron cultures, the set should be empty and the operation should be difference.
public struct PatronCulture: EntitySubtype {
    public let set: [CultureReference]
    
    public let operation: PatronCultureOperation
}

/// The set operation to combine the set of all patron cultures with the specified set of patron cultures: If they should intersect, the patron is only part of the given cultures. If they should differ, the patron is only part of the cultures that are not given.
public enum PatronCultureOperation: String, EntitySubtype {
    case intersection = "Intersection"
    case difference = "Difference"
}

public struct AnimalPowers: EntitySubtype {
    public let level1: AnimalPowersLevel1
    
    public let level2: AnimalPowersLevel2
    
    public let level3: AnimalPowersLevel3
}

public struct AdvantageAnimalPower: EntitySubtype {
    /// The advantage's identifier.
    public let id: AdvantageIdentifier
    
    /// It grants a higher level of the advantage.
    public let level: Int?
    
    /// It grants a specific general option of the advantage.
    public let option: Int?
}

public struct SkillAnimalPower: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier
    
    /// The points that gets added to the skill's rating.
    public let points: Int
}

@DiscriminatedEnum
public enum AnimalPowerLevel1: EntitySubtype {
    case advantage(AdvantageAnimalPower)
    case skill(SkillAnimalPower)
}

public typealias AnimalPowersLevel1 = [AnimalPowerLevel1]

public struct CombatAnimalPower: EntitySubtype {
    /// The combat value.
    public let id: CombatAnimalPowerType
    
    /// The value that gets added to the combat value.
    public let value: Int
}

public enum CombatAnimalPowerType: String, EntitySubtype {
    case attack = "Attack"
    case parry = "Parry"
    case rangedCombat = "RangedCombat"
    case dodge = "Dodge"
    case damagePoints = "DamagePoints"
    case protection = "Protection"
}

@DiscriminatedEnum
public enum AnimalPowerLevel2: EntitySubtype {
    case combat(CombatAnimalPower)
}

public typealias AnimalPowersLevel2 = [AnimalPowerLevel2]

public struct AttributeAnimalPower: EntitySubtype {
    /// The attribute's identifier.
    public let id: AttributeIdentifier
    
    /// The value that gets added to the attribute.
    public let value: Int
}

@DiscriminatedEnum
public enum AnimalPowerLevel3: EntitySubtype {
    case attribute(AttributeAnimalPower)
}

public typealias AnimalPowersLevel3 = [AnimalPowerLevel3]
