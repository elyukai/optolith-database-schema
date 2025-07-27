/**
 * Auxiliary types for ranged weapons.
 */

import FileDB

/// The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.
@ModelEnum
public enum RangedDamage {
    case Default(IncludeIdentifier(DefaultRangedDamage))
    case NotApplicable
    case Special
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct DefaultRangedDamage {

  /// How many dice of which type are rolled to get the damage.
  @Relationship(Dice)
  let dice: Dice.ID
  /// Flat damage, if any. It gets added to the result of the dice rolls.
  let flat: Integer()?
  }

@Embedded
public struct RangedWeapon {

  /// The combat techniques and dependent values.
  let combat_technique: RangedCombatTechniqueIdentifier()

  /// The damage of a weapon consists of a random part using dice and an optional flat part.
  @Relationship(RangedDamage)
  let damage: RangedDamage.ID
      reload_time: Required({
        comment: "One or multiple reload times.",
        type: Array(IncludeIdentifier(ReloadTime), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),

  /// The range brackets for the weapon: close, medium, far. Distances in m.
  @Relationship(RangeBrackets)
  let range: RangeBrackets.ID
  /// The needed ammunition.
  let ammunition: AmmunitionIdentifier()?

  /// The length of the weapon in cm/halffingers.
  @Relationship(Length)
  let length: Length.ID

  /// Is the weapon an improvised weapon?
  let is_improvised_weapon: Boolean()
  }

@Embedded
public struct RangeBrackets {

  /// The close range bracket for the weapon. Distance in m.
  let close: Integer({ minimum: 1 })

  /// The medium range bracket for the weapon. Distance in m.
  let medium: Integer({ minimum: 1 })

  /// The far range bracket for the weapon. Distance in m.
  let far: Integer({ minimum: 1 })
  }

@Embedded
public struct ReloadTime {

  /// A reload time value in actions.
  let value: Integer({ minimum: 1 })
  }
