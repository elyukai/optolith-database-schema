import { PluralizationCategories } from "../types/_I18n.js"
import { UI } from "../types/UI.js"

const pluralType: {
  [K in keyof UI as UI[K] extends PluralizationCategories ? K : never]: Intl.PluralRuleType
} = {
  "{0} Adventure Points": "cardinal",
  "You are missing {0} Adventure Points to do this.": "cardinal",
  "since the {0}. printing": "ordinal",
  "removed in {0}. printing": "ordinal",
  "{0} actions": "cardinal",
  "{0} hours": "cardinal",
  "{0} minutes": "cardinal",
  "{0} rounds": "cardinal",
  "{0} seduction actions": "cardinal",
  ", {0} of which are permanent": "cardinal",
  "{0} centuries": "cardinal",
  "{0} combat rounds": "cardinal",
  "{0} days": "cardinal",
  "{0} months": "cardinal",
  "{0} mos.": "cardinal",
  "{0} seconds": "cardinal",
  "{0} weeks": "cardinal",
  "{0} wks.": "cardinal",
  "{0} years": "cardinal",
  "{0} yrs.": "cardinal",
  "{0} miles": "cardinal",
  "{0} yards": "cardinal",
}

/**
 * The keys of the UI strings that support pluralization categories.
 */
export type KeySupportingPluralizationCategories = keyof typeof pluralType

/**
 * Returns the plural rule type for the given key.
 */
export const getPluralRuleTypeForKey = (
  key: KeySupportingPluralizationCategories
): Intl.PluralRuleType => pluralType[key]
