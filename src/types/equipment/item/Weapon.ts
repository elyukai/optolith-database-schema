/**
 * @main Weapon
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { BlessedTraditionReference, CultureReference, MagicalTraditionReference, RaceReference } from "../../_SimpleReferences.js"
import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"
import { MeleeWeapon } from "./_MeleeWeapon.js"
import { RangedWeapon } from "./_RangedWeapon.js"

export type Weapon = {
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
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points?: StructurePoints

  /**
   * A list of stat blocks for each combat technique this weapon can be used
   * with.
   * @minItems 1
   */
  uses: WeaponUse[]

  /**
   * If the weapon is sanctified by a god and thus restricted to it's Blessed
   * Ones.
   */
  sanctified_by?: SanctifiedBy

  /**
   * Define if during character creation this weapon can only be bought by
   * characters of a specific race or culture.
   */
  restricted_to_cultures?: RestrictedToCultures

  /**
   * Define if during character creation this weapon can only be bought by
   * characters of specific magical or blessed traditions.
   * @minItems 1
   */
  restricted_to_traditions?: MagicalTraditionReference[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<WeaponTranslation>
}

export type WeaponTranslation = {
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
   * The weapon advantage text.
   */
  advantage?: NonEmptyMarkdown

  /**
   * The weapon disadvantage text.
   */
  disadvantage?: NonEmptyMarkdown

  errata?: Errata
}

export type SecondaryWeapon = {
  /**
   * A list of stat blocks for each combat technique this weapon can be used
   * with.
   * @minItems 1
   */
  uses: WeaponUse[]

  /**
   * If the weapon is sanctified by a god and thus restricted to it's Blessed
   * Ones.
   */
  sanctified_by?: SanctifiedBy

  /**
   * Define if during character creation this weapon can only be bought by
   * characters of a specific race or culture.
   */
  restricted_to_cultures?: RestrictedToCultures

  /**
   * Define if during character creation this weapon can only be bought by
   * characters of specific magical or blessed traditions.
   * @minItems 1
   */
  restricted_to_traditions?: MagicalTraditionReference[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<ImprovisedWeaponTranslation>
}

/**
 * @minProperties 1
 */
export type ImprovisedWeaponTranslation = {
  /**
   * The weapon advantage text.
   */
  advantage?: NonEmptyMarkdown

  /**
   * The weapon disadvantage text.
   */
  disadvantage?: NonEmptyMarkdown
}

export type WeaponUse = {
  /**
   * An increasing integer for use identification.
   * @integer
   * @minimum 1
   */
  id: number

  values: WeaponUseValues
}

export type WeaponUseValues =
  | { tag: "Melee"; melee: MeleeWeapon }
  | { tag: "Ranged"; ranged: RangedWeapon }

/**
 * If the weapon is sanctified by a god and thus restricted to it's Blessed
 * Ones.
 * @minItems 1
 */
export type SanctifiedBy = BlessedTraditionReference[]

/**
 * Define if during character creation this weapon can only be bought by
 * characters of a specific race or culture.
 */
export type RestrictedToCultures =
  | { tag: "CulturesOfRace"; cultures_of_race: RaceReference }
  | { tag: "Cultures"; cultures: RestrictedToSpecificCultures }

export type RestrictedToSpecificCultures = {
  /**
   * @minitems 1
   */
  list: CultureReference[]
}

export const config: TypeConfig<Weapon> = {
  name: "Weapon",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Weapon"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
