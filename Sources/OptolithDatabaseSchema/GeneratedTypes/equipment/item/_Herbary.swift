//
//  _Herbary.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Effect type categories of a plant or recipe.
public enum EffectType: String, EntitySubtype {
    case healing = "Healing"
    case poison = "Poison"
    case physicalEffect = "PhysicalEffect"
    case psychicEffect = "PsychicEffect"
    case beneficial = "Beneficial"
    case defensive = "Defensive"
    case supernatural = "Supernatural"
}

public enum LaboratoryLevel: String, EntitySubtype {
    case archaicLaboratory = "ArchaicLaboratory"
    case witchKitchen = "WitchKitchen"
    case alchemistsLaboratory = "AlchemistsLaboratory"
}

public struct RecipeTradeSecret: EntitySubtype {
    /// The AP value of the trade secret.
    public let apValue: Double
    
    /// The prerequisites of the trade secret, if any.
    public let prerequisites: PlainGeneralPrerequisites?    
    
    private enum CodingKeys: String, CodingKey {
        case apValue = "ap_value"
        case prerequisites = "prerequisites"
    }
}
