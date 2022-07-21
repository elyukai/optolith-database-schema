/**
 * @main Armor
 */

import { validateSchemaCreator } from "../../../validation/schema.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { ArmorReference } from "../../_SimpleReferences.js"
import { Complexity, Cost, Weight } from "./_Item.js"

export type Armor = {
  /**
   * The cost in silverthalers.
   */
  cost: Cost

  /**
   * The weight in kg.
   */
  weight: Weight

  /**
   * The complexity of crafting the item.
   */
  complexity: Complexity

  /**
   * The PRO value.
   */
  protection: Protection

  /**
   * The ENC value.
   */
  encumbrance: Encumbrance

  /**
   * Does the armor have additional penalties (MOV -1, INI -1)?
   */
  has_additional_penalties: HasAdditionalPenalties

  /**
   * The armor type.
   */
  armor_type: ArmorType

  /**
   * Specify if armor is only available for a specific hit zone.
   */
  hit_zone?: HitZone

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ArmorTranslation>
}

/**
 * @minProperties 1
 */
export type ArmorTranslation = {
  /**
   * The name of the item.
   */
  name: NonEmptyString

  /**
   * An auxiliary name or label of the item, if available.
   */
  secondary_name?: NonEmptyString

  /**
   * Note text.
   */
  note?: NonEmptyMarkdown

  /**
   * Special rules text.
   */
  rules?: NonEmptyMarkdown

  /**
   * The armor advantage text.
   */
  advantage?: NonEmptyMarkdown

  /**
   * The armor disadvantage text.
   */
  disadvantage?: NonEmptyMarkdown

  errata?: Errata
}

export type SecondaryArmor = {
  /**
   * The PRO value.
   */
  protection: Protection

  /**
   * The ENC value.
   */
  encumbrance: Encumbrance

  /**
   * Does the armor have additional penalties (MOV -1, INI -1)?
   */
  has_additional_penalties: HasAdditionalPenalties

  /**
   * The armor type.
   */
  armor_type: ArmorType

  /**
   * Specify if armor is only available for a specific hit zone.
   */
  hit_zone?: HitZone

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SecondaryArmorTranslation>
}

/**
 * @minProperties 1
 */
export type SecondaryArmorTranslation = {
  /**
   * The armor advantage text.
   */
  advantage?: NonEmptyMarkdown

  /**
   * The armor disadvantage text.
   */
  disadvantage?: NonEmptyMarkdown
}

/**
 * The PRO value.
 * @integer
 * @minimum 0
 */
export type Protection = number

/**
 * The ENC value.
 * @integer
 * @minimum 0
 */
export type Encumbrance = number

/**
 * Does the armor have additional penalties (MOV -1, INI -1)?
 */
export type HasAdditionalPenalties = boolean

/**
 * The armor type.
 * @title Armor Type
 */
export type ArmorType = {
  /**
   * The armor type's identifier.
   * @integer
   * @minimum 1
   * @maximum 10
   */
  id: number
}

/**
 * Specify if armor is only available for a specific hit zone.
 * @title Hit Zone
 */
export type HitZone =
  | { tag: "Head"; head?: HeadHitZone }
  | { tag: "Torso" }
  | { tag: "Arms" }
  | { tag: "Legs" }

/**
 * @minProperties 1
 */
export type HeadHitZone = {
  /**
   * In some cases, multiple armors for the same hit zone can be combined.
   * They're listed at the item that can be combined with others.
   */
  combination_possibilities?: HeadHitZoneCombinationPossibilities
}

export type HeadHitZoneCombinationPossibilities = {
  /**
   * A list of armors that can be combined with this armor.
   * @minItems 1
   */
  armors: ArmorReference[]

  /**
   * The PRO value that is added to the PRO value of the other armor instead
   * of adding the normale PRO value.
   * @integer
   * @minimum 0
   */
  protection?: number
}

export const validateSchema = validateSchemaCreator<Armor>(import.meta.url)
