import * as AncestorBloodAdvantages from "../cache/ancestorBloodAdvantages.js"
import * as NewApplicationsAndUses from "../cache/newApplicationsAndUses.js"

export type CacheMap = {
  ancestorBloodAdvantages: AncestorBloodAdvantages.AncestorBloodAdvantagesCache
  newApplicationsAndUses: NewApplicationsAndUses.NewApplicationsAndUsesCache
}

export const cacheMap = {
  ancestorBloodAdvantages: AncestorBloodAdvantages.config,
  newApplicationsAndUses: NewApplicationsAndUses.config,
}
