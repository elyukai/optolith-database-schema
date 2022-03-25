/**
 * @main Item
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { ArmorType, Encumbrance, HasAdditionalPenalties, HitZone, Protection } from "./_Armor.js"
import { MeleeWeapon, RangedWeapon, RestrictedToCultures, SanctifiedBy, StructurePoints } from "./_Weapon.js"

/**
 * @title Item
 */
export type Item = {
  /**
   * The item's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight?: Weight

  /**
   * The complexity of crafting the item.
   */
  complexity: Complexity

  type:
    | {
      tag: "Weapon"

      /**
       * @minItems 1
       */
      uses: (
        | MeleeWeapon
        | RangedWeapon
      )[]

      sanctified_by?: SanctifiedBy

      restricted_to_cultures?: RestrictedToCultures

      secondary?: {
        type: Type

        structure_points: StructurePoints
      }

      /**
       * All translations for the entry, identified by IETF language tag
       * (BCP47).
       * @minProperties 1
       */
      translations: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          name: Name

          secondary_name?: SecondaryName

          note?: Note

          rules?: Rules

          advantage?: Advantage

          disadvantage?: Disadvantage

          errata?: Errata
        }
      }
    }
    | {
      tag: "Armor"

      protection: Protection

      encumbrance: Encumbrance

      has_additional_penalties: HasAdditionalPenalties

      armor_type: ArmorType

      hit_zone?: HitZone

      secondary?: {
        type: Type

        structure_points: StructurePoints
      }

      /**
       * All translations for the entry, identified by IETF language tag
       * (BCP47).
       * @minProperties 1
       */
      translations: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          name: Name

          secondary_name?: SecondaryName

          note?: Note

          rules?: Rules

          advantage?: Advantage

          disadvantage?: Disadvantage

          errata?: Errata
        }
      }
    }
    | {
      tag: "Default"

      type: Type

      combat_uses:
        | {
          tag: "ImprovisedWeapon"

          /**
           * @minItems 1
           */
          uses: (
            | MeleeWeapon
            | RangedWeapon
          )[]

          sanctified_by?: SanctifiedBy

          restricted_to_cultures?: RestrictedToCultures

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              advantage: Advantage

              disadvantage: Disadvantage
            }
          }
        }
        | {
          tag: "Armor"

          protection: Protection

          encumbrance: Encumbrance

          has_additional_penalties: HasAdditionalPenalties

          armor_type: ArmorType

          hit_zone?: HitZone

          /**
           * All translations for the entry, identified by IETF language tag
           * (BCP47).
           * @minProperties 1
           */
          translations: {
            /**
             * @patternProperties ^[a-z]{2}-[A-Z]{2}$
             */
            [localeId: string]: {
              advantage: Advantage

              disadvantage: Disadvantage
            }
          }
        }

      structure_points: StructurePoints

      /**
       * All translations for the entry, identified by IETF language tag
       * (BCP47).
       * @minProperties 1
       */
      translations: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          name: Name

          secondary_name?: SecondaryName

          note?: Note

          rules?: Rules

          errata?: Errata
        }
      }
    }

  src: PublicationRefs
}

/**
 * The name of the item.
 * @minLength 1
 */
type Name = string

/**
 * An auxiliary name or label of the item, if available.
 * @minLength 1
 */
type SecondaryName = string

/**
 * The cost in silverthalers.
 */
type Cost =
  | { tag: "Free" }
  | { tag: "Various" }
  | {
    tag: "Fixed"

    /**
     * The cost in silverthalers.
     * @exclusiveMinimum 0
     */
    value: number

    /**
     * All translations for the entry, identified by IETF language tag
     * (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * The cost get wrapped by this text using a placeholder in the text.
         * @minLength 1
         * @pattern \\{0\\}
         */
        wrap_in_text: string
      }
    }
  }
  | {
    tag: "Range"

    /**
     * The lower bound of the cost in silverthalers.
     * @exclusiveMinimum 0
     */
    from: number

    /**
     * The upper bound of the cost in silverthalers.
     * @exclusiveMinimum 0
     */
    to: number

    /**
     * All translations for the entry, identified by IETF language tag
     * (BCP47).
     * @minProperties 1
     */
    translations?: {
      /**
       * @patternProperties ^[a-z]{2}-[A-Z]{2}$
       */
      [localeId: string]: {
        /**
         * The cost range gets wrapped by this text using a placeholder in the
         * text.
         * @minLength 1
         * @pattern \\{0\\}
         */
        wrap_in_text: string
      }
    }
  }

/**
 * The weight in kg.
 * @exclusiveMinimum 0
 */
type Weight = number

/**
 * The complexity of crafting the item.
 */
type Complexity =
  | { tag: "Primitive" }
  | { tag: "Simple" }
  | {
    tag: "Complex"

    /**
     * The AP value for the trade secret.
     * @integer
     * @minimum 1
     */
    ap_value: number
  }

enum Type {
  Ammunition = "Ammunition",
  WeaponAccessories = "WeaponAccessories",
  Clothes = "Clothes",
  TravelGearAndTools = "TravelGearAndTools",
  Illumination = "Illumination",
  BandagesAndRemedies = "BandagesAndRemedies",
  Containers = "Containers",
  RopesAndChains = "RopesAndChains",
  ThievesTools = "ThievesTools",
  ToolsOfTheTrade = "ToolsOfTheTrade",
  OrienteeringAids = "OrienteeringAids",
  Jewelry = "Jewelry",
  GemsAndPreciousStones = "GemsAndPreciousStones",
  Stationary = "Stationary",
  Books = "Books",
  MagicalArtifacts = "MagicalArtifacts",
  Alchemicae = "Alchemicae",
  Poisons = "Poisons",
  HealingHerbs = "HealingHerbs",
  MusicalInstruments = "MusicalInstruments",
  LuxuryGoods = "LuxuryGoods",
  Animals = "Animals",
  AnimalCare = "AnimalCare",
  Vehicles = "Vehicles",
  AusruestungDerGeweihtenschaft = "AusruestungDerGeweihtenschaft",
  CeremonialItems = "CeremonialItems",
  Liebesspielzeug = "Liebesspielzeug",
}

/**
 * Note text.
 * @markdown
 * @minLength 1
 */
type Note = string

/**
 * Special rules text.
 * @markdown
 * @minLength 1
 */
type Rules = string

/**
 * The weapon/armor advantage text.
 * @markdown
 * @minLength 1
 */
type Advantage = string

/**
 * The weapon/armor disadvantage text.
 * @markdown
 * @minLength 1
 */
type Disadvantage = string

export const validateSchema = validateSchemaCreator<Item>(import.meta.url)
