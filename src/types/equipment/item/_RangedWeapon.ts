/**
 * Auxiliary types for ranged weapons.
 */

import {
  Array,
  Boolean,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { Dice } from "../../_Dice.js"
import { AmmunitionIdentifier } from "../../_Identifier.js"
import { Length } from "./_Weapon.js"

const RangedDamage = Enum(import.meta.url, {
  name: "RangedDamage",
  comment:
    "The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.",
  values: () => ({
    Default: EnumCase({ type: IncludeIdentifier(DefaultRangedDamage) }),
    NotApplicable: EnumCase({ type: null }),
    Special: EnumCase({ type: null }),
  }),
})

const DefaultRangedDamage = TypeAlias(import.meta.url, {
  name: "DefaultRangedDamage",
  comment: "The damage of a weapon consists of a random part using dice and an optional flat part.",
  type: () =>
    Object({
      dice: Required({
        comment: "How many dice of which type are rolled to get the damage.",
        type: IncludeIdentifier(Dice),
      }),
      flat: Optional({
        comment: "Flat damage, if any. It gets added to the result of the dice rolls.",
        type: Integer(),
      }),
    }),
})

export const RangedWeapon = TypeAlias(import.meta.url, {
  name: "RangedWeapon",
  type: () => GenIncludeIdentifier(GenRangedWeapon, [IncludeIdentifier(RangedDamage)]),
})

export const GenRangedWeapon = GenTypeAlias(import.meta.url, {
  name: "GenRangedWeapon",
  parameters: [Param("Damage")],
  type: Damage =>
    Object({
      damage: Required({
        comment: "The damage of a weapon can consist of random dice rolls and flat damage.",
        type: TypeArgument(Damage),
      }),
      reload_time: Required({
        comment: "One or multiple reload times.",
        type: Array(IncludeIdentifier(ReloadTime), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
      range: Required({
        comment: "The range brackets for the weapon: close, medium, far. Distances in m.",
        type: IncludeIdentifier(RangeBrackets),
      }),
      ammunition: Optional({
        comment: "The needed ammunition.",
        type: AmmunitionIdentifier(),
      }),
      length: Optional({
        comment: "The length of the weapon in cm/halffingers.",
        type: IncludeIdentifier(Length),
      }),
      is_improvised_weapon: Required({
        comment: "Is the weapon an improvised weapon?",
        type: Boolean(),
      }),
    }),
})

const RangeBrackets = TypeAlias(import.meta.url, {
  name: "RangeBrackets",
  type: () =>
    Object({
      close: Required({
        comment: "The close range bracket for the weapon. Distance in m.",
        type: Integer({ minimum: 0 }),
      }),
      medium: Required({
        comment: "The medium range bracket for the weapon. Distance in m.",
        type: Integer({ minimum: 0 }),
      }),
      far: Required({
        comment: "The far range bracket for the weapon. Distance in m.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const ReloadTime = TypeAlias(import.meta.url, {
  name: "ReloadTime",
  type: () =>
    Object({
      value: Required({
        comment: "A reload time value in actions.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})
