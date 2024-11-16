//
//  _RangedWeapon.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.
@DiscriminatedEnum
public enum RangedDamage: EntitySubtype {
    case `default`(DefaultRangedDamage)
    case notApplicable
    case special
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
public struct DefaultRangedDamage: EntitySubtype {
    /// How many dice of which type are rolled to get the damage.
    public let dice: Dice
    
    /// Flat damage, if any. It gets added to the result of the dice rolls.
    public let flat: Int?
}

public struct RangedWeapon: EntitySubtype {
    /// The combat techniques and dependent values.
    public let combatTechnique: RangedCombatTechniqueReference
    
    /// The damage of a weapon consists of a random part using dice and an optional flat part.
    public let damage: RangedDamage
    
    /// One or multiple reload times.
    public let reloadTime: [ReloadTime]
    
    /// The range brackets for the weapon: close, medium, far. Distances in m.
    public let range: RangeBrackets
    
    /// The needed ammunition.
    public let ammunition: AmmunitionReference?
    
    /// The length of the weapon in cm/halffingers.
    public let length: Length
    
    /// Is the weapon an improvised weapon?
    public let isImprovisedWeapon: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case combatTechnique = "combat_technique"
        case damage = "damage"
        case reloadTime = "reload_time"
        case range = "range"
        case ammunition = "ammunition"
        case length = "length"
        case isImprovisedWeapon = "is_improvised_weapon"
    }
}

public struct AmmunitionReference: EntitySubtype {
    /// The item's identifier.
    public let id: AmmunitionIdentifier
}

public struct RangeBrackets: EntitySubtype {
    /// The close range bracket for the weapon. Distance in m.
    public let close: Int
    
    /// The medium range bracket for the weapon. Distance in m.
    public let medium: Int
    
    /// The far range bracket for the weapon. Distance in m.
    public let far: Int
}

public struct ReloadTime: EntitySubtype {
    /// A reload time value in actions.
    public let value: Int
}
