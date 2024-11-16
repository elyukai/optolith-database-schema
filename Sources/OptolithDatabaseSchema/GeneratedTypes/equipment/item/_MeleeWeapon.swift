//
//  _MeleeWeapon.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// The AT modifier.
public typealias AttackModifier = Int

/// The PA modifier.
public typealias ParryModifier = Int

/// The damage of a weapon consists of a random part using dice and an optional
/// flat part.
public struct MeleeDamage: EntitySubtype {
    /// How many dice of which type are rolled to get the damage.
    public let dice: Dice
    
    /// Flat damage, if any. It gets added to the result of the dice rolls.
    public let flat: Int?
}

/// The shield size and potential size-depending values.
@DiscriminatedEnum
public enum ShieldSize: EntitySubtype {
    case small
    case medium
    case large(LargeShieldSize)
}

public struct LargeShieldSize: EntitySubtype {
    /// The attack penalty from the shield.
    public let attackPenalty: Int    
    
    private enum CodingKeys: String, CodingKey {
        case attackPenalty = "attack_penalty"
    }
}

public struct MeleeWeapon: EntitySubtype {
    /// The combat techniques and dependent values.
    public let combatTechnique: CloseCombatTechniqueReference
    
    /// The damage of a weapon consists of a random part using dice and an optional
    /// flat part.
    public let damage: MeleeDamage
    
    /// The primary attribute damage and threshold value.
    public let damageThreshold: PrimaryAttributeDamageThreshold?
    
    /// The AT modifier.
    public let at: AttackModifier
    
    /// The PA modifier.
    public let pa: ParryModifier?
    
    /// The reach of the weapon.
    public let reach: ReachIdentifier?
    
    /// The length of the weapon in cm/halffingers.
    public let length: Length?
    
    /// The shield size and potential size-depending values.
    public let size: ShieldSize?
    
    /// Is the weapon a parrying weapon?
    public let isParryingWeapon: Bool
    
    /// Is the weapon a two-handed weapon?
    public let isTwoHandedWeapon: Bool
    
    /// Is the weapon an improvised weapon?
    public let isImprovisedWeapon: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case combatTechnique = "combat_technique"
        case damage = "damage"
        case damageThreshold = "damage_threshold"
        case at = "at"
        case pa = "pa"
        case reach = "reach"
        case length = "length"
        case size = "size"
        case isParryingWeapon = "is_parrying_weapon"
        case isTwoHandedWeapon = "is_two_handed_weapon"
        case isImprovisedWeapon = "is_improvised_weapon"
    }
}
