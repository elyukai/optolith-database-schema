/**
 * Auxiliary types for melee weapons.
 */

import {
  Boolean,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { Dice } from "../../_Dice.js"
import { ReachIdentifier } from "../../_Identifier.js"
import { Length, PrimaryAttributeDamageThreshold } from "./_Weapon.js"

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

const MeleeDamage = TypeAlias(import.meta.url, {
  name: "MeleeDamage",
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

const ShieldSize = Enum(import.meta.url, {
  name: "ShieldSize",
  comment: "The shield size and potential size-depending values.",
  values: () => ({
    Small: EnumCase({ type: null }),
    Medium: EnumCase({ type: null }),
    Large: EnumCase({ type: IncludeIdentifier(LargeShieldSize) }),
  }),
})

const LargeShieldSize = TypeAlias(import.meta.url, {
  name: "LargeShieldSize",
  comment: "The damage of a weapon consists of a random part using dice and an optional flat part.",
  type: () =>
    Object({
      attack_penalty: Optional({
        comment: "The attack penalty from the shield, if any.",
        type: Integer(),
      }),
    }),
})

export const MeleeWeapon = TypeAlias(import.meta.url, {
  name: "MeleeWeapon",
  type: () =>
    Object({
      damage: Required({
        comment:
          "The damage of a weapon consists of a random part using dice and an optional flat part.",
        type: IncludeIdentifier(MeleeDamage),
      }),
      damage_threshold: Required({
        comment: "The primary attribute damage and threshold value.",
        type: IncludeIdentifier(PrimaryAttributeDamageThreshold),
      }),
      attackModifier: Required({
        comment: "The AT modifier.",
        type: IncludeIdentifier(AttackModifier),
      }),
      parryModifier: Optional({
        comment: "The PA modifier.",
        type: IncludeIdentifier(ParryModifier),
      }),
      reach: Optional({
        comment: "The reach of the weapon.",
        type: ReachIdentifier(),
      }),
      length: Optional({
        comment: "The length of the weapon in cm/halffingers.",
        type: IncludeIdentifier(Length),
      }),
      size: Optional({
        comment: "The shield size and potential size-depending values.",
        type: IncludeIdentifier(ShieldSize),
      }),
      is_parrying_weapon: Required({
        comment: "Is the weapon a parrying weapon?",
        type: Boolean(),
      }),
      is_two_handed_weapon: Required({
        comment: "Is the weapon a two-handed weapon?",
        type: Boolean(),
      }),
      is_improvised_weapon: Required({
        comment: "Is the weapon an improvised weapon?",
        type: Boolean(),
      }),
    }),
})
