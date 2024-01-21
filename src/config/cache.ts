import * as ActivatableSelectOptions from "../cache/activatableSelectOptions.js"
import * as AncestorBloodAdvantages from "../cache/ancestorBloodAdvantages.js"
import * as MagicalAndBlessedAdvantagesAndDisadvantages from "../cache/magicalAndBlessedAdvantagesAndDisadvantages.js"
import * as NewApplicationsAndUses from "../cache/newApplicationsAndUses.js"

export type CacheMap = {
  activatableSelectOptions: ActivatableSelectOptions.ActivatableSelectOptionsCache
  ancestorBloodAdvantages: AncestorBloodAdvantages.AncestorBloodAdvantagesCache
  magicalAndBlessedAdvantagesAndDisadvantages: MagicalAndBlessedAdvantagesAndDisadvantages.MagicalAndBlessedAdvantagesAndDisadvantagesCache
  newApplicationsAndUses: NewApplicationsAndUses.NewApplicationsAndUsesCache
}

export const cacheMap = {
  activatableSelectOptions: ActivatableSelectOptions.config,
  ancestorBloodAdvantages: AncestorBloodAdvantages.config,
  magicalAndBlessedAdvantagesAndDisadvantages: MagicalAndBlessedAdvantagesAndDisadvantages.config,
  newApplicationsAndUses: NewApplicationsAndUses.config,
}
