import type { CacheConfig } from "../cacheConfig.js"

export type AncestorBloodAdvantagesCache = {
  ids: number[]
}

export const config: CacheConfig<AncestorBloodAdvantagesCache> = {
  builder(database) {
    return {
      ids: database.advantages
        .filter(([id, advantage]) =>
          advantage.prerequisites?.some(p => {
            switch (p.prerequisite.tag) {
              case "Single":
                return p.prerequisite.single.tag === "NoOtherAncestorBloodAdvantage"
              case "Disjunction":
                return p.prerequisite.disjunction.list.some(
                  d => d.tag === "NoOtherAncestorBloodAdvantage"
                )
              case "Group":
                return p.prerequisite.group.list.some(
                  g => g.tag === "NoOtherAncestorBloodAdvantage"
                )
            }
          })
        )
        .map(([id]) => id),
    }
  },
}
