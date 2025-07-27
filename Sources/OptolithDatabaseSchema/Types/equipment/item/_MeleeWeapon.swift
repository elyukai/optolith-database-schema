/**
 * Auxiliary types for melee weapons.
 */

import FileDB

export const AttackModifier = TypeAlias(import.meta.url, {
  name: "AttackModifier",
  comment: "The AT modifier.",
  type: () => Integer(),
})

export const ParryModifier = TypeAlias(import.meta.url, {
  name: "ParryModifier",
  comment: "The PA modifier.",
  type: () => Integer(),
})

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct MeleeDamage {

  /// How many dice of which type are rolled to get the damage.
  @Relationship(Dice)
  let dice: Dice.ID
  /// Flat damage, if any. It gets added to the result of the dice rolls.
  let flat: Integer()?
  }

/// The shield size and potential size-depending values.
@ModelEnum
public enum ShieldSize {
    case Small
    case Medium
    case Large(IncludeIdentifier(LargeShieldSize))
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct LargeShieldSize {
  /// The attack penalty from the shield, if any.
  let attack_penalty: Integer()?
  }

@Embedded
public struct MeleeWeapon {

  /// The combat techniques and dependent values.
  let combat_technique: CloseCombatTechniqueIdentifier()

  /// The damage of a weapon consists of a random part using dice and an optional flat part.
  @Relationship(MeleeDamage)
  let damage: MeleeDamage.ID

  /// The primary attribute damage and threshold value.
  @Relationship(PrimaryAttributeDamageThreshold)
  let damage_threshold: PrimaryAttributeDamageThreshold.ID

  /// The AT modifier.
  @Relationship(AttackModifier)
  let attackModifier: AttackModifier.ID
  /// The PA modifier.
  @Relationship(ParryModifier)
  let parryModifier: ParryModifier.ID?
  /// The reach of the weapon.
  let reach: ReachIdentifier()?
  /// The length of the weapon in cm/halffingers.
  @Relationship(Length)
  let length: Length.ID?
  /// The shield size and potential size-depending values.
  @Relationship(ShieldSize)
  let size: ShieldSize.ID?

  /// Is the weapon a parrying weapon?
  let is_parrying_weapon: Boolean()

  /// Is the weapon a two-handed weapon?
  let is_two_handed_weapon: Boolean()

  /// Is the weapon an improvised weapon?
  let is_improvised_weapon: Boolean()
  }
