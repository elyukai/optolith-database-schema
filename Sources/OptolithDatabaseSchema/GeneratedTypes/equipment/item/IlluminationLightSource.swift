//
//  IlluminationLightSource.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct IlluminationLightSource: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost
    
    /// The weight in kg.
    public let weight: Weight
    
    /// The complexity of crafting the item.
    public let complexity: Complexity?
    
    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    public let structurePoints: StructurePoints
    
    /// The burning time is the time how long the light source can be lit. After that time you have to use a new light source.
    public let burningTime: BurningTime
    
    /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
    public let combatUse: CombatUse?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DefaultItemTranslation>

    public init(cost: Cost, weight: Weight, complexity: Complexity? = nil, structurePoints: StructurePoints, burningTime: BurningTime, combatUse: CombatUse? = nil, src: PublicationRefs, translations: LocaleMap<DefaultItemTranslation>) {
        self.cost = cost
        self.weight = weight
        self.complexity = complexity
        self.structurePoints = structurePoints
        self.burningTime = burningTime
        self.combatUse = combatUse
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case weight = "weight"
        case complexity = "complexity"
        case structurePoints = "structure_points"
        case burningTime = "burning_time"
        case combatUse = "combat_use"
        case src = "src"
        case translations = "translations"
    }
}

@DiscriminatedEnum
public enum BurningTime: EntitySubtype {
    case unlimited
    case limited(LimitedBurningTime)
}

public struct LimitedBurningTime: EntitySubtype {
    /// The (unitless) time value.
    public let value: Double
    
    /// The time unit.
    public let unit: LimitedBurningTimeUnit

    public init(value: Double, unit: LimitedBurningTimeUnit) {
        self.value = value
        self.unit = unit
    }
}

public enum LimitedBurningTimeUnit: String, EntitySubtype {
    case hours = "Hours"
}
