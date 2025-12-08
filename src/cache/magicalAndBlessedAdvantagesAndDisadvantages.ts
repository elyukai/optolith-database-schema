import { assertExhaustive } from "@optolith/helpers/typeSafety"
import type {
  AdvantageDisadvantagePrerequisiteGroup,
  AdvantageDisadvantagePrerequisites,
  EntityMap,
  RatedIdentifier,
} from "../../gen/types.js"
import { stringFromEnumIdentifier, type GetInstanceById } from "../utils.js"
import type { CacheBuilder } from "./cacheConfig.js"

const BLESSED_ID = 12
const SPELLCASTER_ID = 47

export type MagicalAndBlessedAdvantagesAndDisadvantagesCache = {
  advantages: {
    magical: {
      ids: string[]
    }
    blessed: {
      ids: string[]
    }
  }
  disadvantages: {
    magical: {
      ids: string[]
    }
    blessed: {
      ids: string[]
    }
  }
}

const getAdvantageId = (type: "Magical" | "Blessed") => {
  switch (type) {
    case "Magical":
      return SPELLCASTER_ID
    case "Blessed":
      return BLESSED_ID
    default:
      return assertExhaustive(type)
  }
}

const isRatedFor = (type: "Magical" | "Blessed", ratedId: RatedIdentifier) => {
  switch (ratedId.kind) {
    case "Spell":
    case "Ritual":
      return type === "Magical"
    case "LiturgicalChant":
    case "Ceremony":
      return type === "Blessed"
    case "Attribute":
    case "Skill":
    case "CloseCombatTechnique":
    case "RangedCombatTechnique":
      return false
    default:
      return assertExhaustive(ratedId)
  }
}

const isPrerequisiteFor = (
  type: "Magical" | "Blessed",
  prerequisite: AdvantageDisadvantagePrerequisiteGroup,
  getInstanceById: GetInstanceById<keyof EntityMap>,
  traversedIds: string[],
): boolean => {
  switch (prerequisite.kind) {
    case "Activatable": {
      if (
        prerequisite.Activatable.id.kind === "Advantage" &&
        prerequisite.Activatable.id.Advantage === getAdvantageId(type) &&
        prerequisite.Activatable.active
      ) {
        return true
      }

      const entry = getInstanceById(prerequisite.Activatable.id)
      return (
        entry !== undefined &&
        is(
          type,
          stringFromEnumIdentifier(prerequisite.Activatable.id),
          entry,
          getInstanceById,
          traversedIds,
        )
      )
    }
    case "Rated":
      return isRatedFor(type, prerequisite.Rated.id)
    case "CommonSuggestedByRCP":
    case "Sex":
    case "Race":
    case "Culture":
    case "Pact":
    case "SocialStatus":
    case "State":
    case "Rule":
    case "PrimaryAttribute":
    case "BlessedTradition":
    case "MagicalTradition":
    case "RatedMinimumNumber":
    case "RatedSum":
    case "Enhancement":
    case "Text":
    case "NoOtherAncestorBloodAdvantage":
    case "SexualCharacteristic":
      return false
    default:
      return assertExhaustive(prerequisite)
  }
}

const is = (
  type: "Magical" | "Blessed",
  entryId: string,
  entry: { prerequisites?: AdvantageDisadvantagePrerequisites },
  getInstanceById: GetInstanceById<keyof EntityMap>,
  traversedIds: string[],
): boolean => {
  if (!entry.prerequisites || traversedIds.includes(entryId)) {
    return false
  }

  const newTraversedIds = [...traversedIds, entryId]

  return (
    entry.prerequisites !== undefined &&
    entry.prerequisites.some(prerequisite => {
      switch (prerequisite.prerequisite.kind) {
        case "Single":
          return isPrerequisiteFor(
            type,
            prerequisite.prerequisite.Single,
            getInstanceById,
            newTraversedIds,
          )
        case "Disjunction":
          return prerequisite.prerequisite.Disjunction.list.some(p =>
            isPrerequisiteFor(type, p, getInstanceById, newTraversedIds),
          )
        case "Group":
          return prerequisite.prerequisite.Group.list.some(p =>
            isPrerequisiteFor(type, p, getInstanceById, newTraversedIds),
          )
        default:
          return assertExhaustive(prerequisite.prerequisite)
      }
    })
  )
}

// prettier-ignore
export const config: CacheBuilder<MagicalAndBlessedAdvantagesAndDisadvantagesCache> = ({ getAllInstances, getInstanceById }) => ({
  advantages: {
    magical: {
      ids: getAllInstances("Advantage").filter(([id, entry]) => is("Magical", id, entry, getInstanceById, [])).map(([id]) => id),
    },
    blessed: {
      ids: getAllInstances("Advantage").filter(([id, entry]) => is("Blessed", id, entry, getInstanceById, [])).map(([id]) => id),
    },
  },
  disadvantages: {
    magical: {
      ids: getAllInstances("Disadvantage").filter(([id, entry]) => is("Magical", id, entry, getInstanceById, [])).map(([id]) => id),
    },
    blessed: {
      ids: getAllInstances("Disadvantage").filter(([id, entry]) => is("Blessed", id, entry, getInstanceById, [])).map(([id]) => id),
    },
  },
})
