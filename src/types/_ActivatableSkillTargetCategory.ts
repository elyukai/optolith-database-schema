import { LocaleMap } from "./_LocaleMap.js"
import { NonEmptyString } from "./_NonEmptyString.js"
import { TargetCategoryReference } from "./_SimpleReferences.js"

/**
 * The target category – the kind of creature or object – the skill affects.
 *
 * If no target categories are given, the skill applies to all target
 * categories.
 */
export type TargetCategory = SpecificTargetCategory[]

export type SpecificTargetCategory = {
  id: TargetCategoryIdentifier

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SpecificTargetCategoryTranslation>
}

export type SpecificTargetCategoryTranslation = {
  /**
   * A note, appended to the generated string in parenthesis.
   */
  note: NonEmptyString
}

export type TargetCategoryIdentifier =
  | { tag: "Self"; self: {} }
  | { tag: "Zone"; zone: {} }
  | { tag: "LiturgicalChantsAndCeremonies"; liturgical_chants_and_ceremonies: {} }
  | { tag: "Cantrips"; cantrips: {} }
  | { tag: "Predefined"; predefined: TargetCategoryReference }
