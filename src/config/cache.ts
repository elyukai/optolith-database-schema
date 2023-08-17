import * as NewApplicationsAndUses from "../cache/newApplicationsAndUses.js"

export type CacheMap = {
  newApplicationsAndUses: NewApplicationsAndUses.NewApplicationsAndUsesCache
}

export const cacheMap = {
  newApplicationsAndUses: NewApplicationsAndUses.config
}
