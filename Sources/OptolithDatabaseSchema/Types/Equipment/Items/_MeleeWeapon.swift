/// Auxiliary types for melee weapons.

import FileDB

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct MeleeDamage {
    /// How many dice of which type are rolled to get the damage.
    let dice: Dice

    /// Flat damage, if any. It gets added to the result of the dice rolls.
    let flat: Int?
}

/// The shield size and potential size-depending values.
@ModelEnum
public enum ShieldSize {
    case small
    case medium
    case large(LargeShieldSize)
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct LargeShieldSize {
    /// The attack penalty from the shield, if any.
    let attack_penalty: Int?
}

@Embedded
public struct MeleeWeapon {
    /// The combat techniques and dependent values.
    @Relationship(CloseCombatTechnique.self)
    let combat_technique: CloseCombatTechnique.ID

    /// The damage of a weapon consists of a random part using dice and an optional flat part.
    let damage: MeleeDamage

    /// The primary attribute damage and threshold value.
    let damage_threshold: PrimaryAttributeDamageThreshold

    /// The AT modifier.
    let attackModifier: Int

    /// The PA modifier.
    let parryModifier: Int?

    /// The reach of the weapon.
    @Relationship(Reach.self)
    let reach: Reach.ID?

    /// The length of the weapon in cm/halffingers.
    let length: Length?

    /// The shield size and potential size-depending values.
    let size: ShieldSize?

    /// Is the weapon a parrying weapon?
    let is_parrying_weapon: Bool

    /// Is the weapon a two-handed weapon?
    let is_two_handed_weapon: Bool

    /// Is the weapon an improvised weapon?
    let is_improvised_weapon: Bool
}
