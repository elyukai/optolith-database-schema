import { Errata } from "../../source/_Erratum.js"
import { PublicationRefs } from "../../source/_PublicationRef.js"
import { LocaleMap } from "../../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../../_NonEmptyString.js"
import { SecondaryArmor } from "./Armor.js"
import { SecondaryWeapon } from "./Weapon.js"

export type DefaultItem = {
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
  complexity?: Complexity

  /**
   * The structure points of the item. Use an array if the item consists of
   * multiple components that have individual structure points.
   */
  structure_points: StructurePoints

  /**
   * The item can also be used either as an improvised weapon or as an armor,
   * although this is not the primary use case of the item.
   */
  combat_use?: CombatUse

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<DefaultItemTranslation>
}

/**
 * The item can also be used either as an improvised weapon or as an armor,
 * although this is not the primary use case of the item.
 */
export type CombatUse =
  | { tag: "Weapon"; weapon: SecondaryWeapon }
  | { tag: "Armor"; armor: SecondaryArmor }

export type DefaultItemTranslation = {
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

  errata?: Errata
}

/**
 * The structure points of the item. Use an array if the item consists of
 * multiple components that have individual structure points.
 * @title Structure Points
 * @minItems 1
 */
export type StructurePoints = StructurePointsComponent[]

export type StructurePointsComponent = {
  /**
   * The structure points.
   * @integer
   * @minimum 1
   */
  points: number
}

/**
 * The cost in silverthalers.
 */
export type Cost =
  | { tag: "Free"; free: {} }
  | { tag: "Various"; various: {} }
  | { tag: "", "": {} } // TODO: Unbezahlbar
  | { tag: "", "": {} } // TODO: 10 % der Rüstungskosten
  | { tag: "Fixed"; fixed: FixedCost }
  | { tag: "Range"; range: CostRange }

export type FixedCost = {
  /**
   * The cost in silverthalers.
   * @exclusiveMinimum 0
   */
  value: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CostTranslation>
}

export type CostRange = {
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
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<CostTranslation>
}

export type CostTranslation = {
  /**
   * The cost get wrapped by this text using a placeholder in the text.
   * @minLength 1
   * @pattern \{0\}
   */
  wrap_in_text: string
}

/**
 * The weight in kg.
 * @exclusiveMinimum 0
 */
export type Weight = number

/**
 * The complexity of crafting the item.
 */
export type Complexity =
  | { tag: "Primitive"; primitive: {} }
  | { tag: "Simple"; simple: {} }
  | { tag: "Complex"; complex: ComplexComplexity }

export type ComplexComplexity = {
  /**
   * The AP value for the trade secret.
   * @integer
   * @minimum 1
   */
  ap_value: number
}
