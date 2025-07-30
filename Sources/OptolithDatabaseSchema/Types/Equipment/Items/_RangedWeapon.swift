/**
 * Auxiliary types for ranged weapons.
 */

import FileDB

/// The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.
@ModelEnum
public enum RangedDamage {
    case Default(DefaultRangedDamage)
    case NotApplicable
    case Special
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
@Embedded
public struct DefaultRangedDamage {

  /// How many dice of which type are rolled to get the damage.
  let dice: Dice

  /// Flat damage, if any. It gets added to the result of the dice rolls.
  let flat: Int?
  }

@Embedded
public struct RangedWeapon {

  /// The combat techniques and dependent values.
  @Relationship(RangedCombatTechnique.self)
  let combat_technique: RangedCombatTechnique.ID

  /// The damage of a weapon consists of a random part using dice and an optional flat part.
  let damage: RangedDamage

      /// One or multiple reload times.
      @MinItems(1)
      @UniqueItems
      let reload_time: [ReloadTime]

  /// The range brackets for the weapon: close, medium, far. Distances in m.
  let range: RangeBrackets

  /// The needed ammunition.
  @Relationship(Ammunition.self)
  let ammunition: Ammunition.ID?

  /// The length of the weapon in cm/halffingers.
  let length: Length

  /// Is the weapon an improvised weapon?
  let is_improvised_weapon: Bool
  }

@Embedded
public struct RangeBrackets {

  /// The close range bracket for the weapon. Distance in m.
  @Minimum(1)
  let close: Int

  /// The medium range bracket for the weapon. Distance in m.
  @Minimum(1)
  let medium: Int

  /// The far range bracket for the weapon. Distance in m.
  @Minimum(1)
  let far: Int
  }

@Embedded
public struct ReloadTime {

  /// A reload time value in actions.
  @Minimum(1)
  let value: Int
  }
