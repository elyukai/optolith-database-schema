import type { CacheBuilder } from "./cacheConfig.js"

export type AncestorBloodAdvantagesCache = {
  ids: string[]
}

export const build: CacheBuilder<AncestorBloodAdvantagesCache> = ({ getAllInstances }) => ({
  ids: getAllInstances("Advantage")
    .filter(([id, advantage]) =>
      advantage.prerequisites?.some(p => {
        switch (p.prerequisite.kind) {
          case "Single":
            return p.prerequisite.Single.kind === "NoOtherAncestorBloodAdvantage"
          case "Disjunction":
            return p.prerequisite.Disjunction.list.some(
              d => d.kind === "NoOtherAncestorBloodAdvantage",
            )
          case "Group":
            return p.prerequisite.Group.list.some(g => g.kind === "NoOtherAncestorBloodAdvantage")
        }
      }),
    )
    .map(([id]) => id),
})
