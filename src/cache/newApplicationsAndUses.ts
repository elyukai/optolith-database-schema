import type { CacheConfig } from "../cacheConfig.js"
import type { SkillApplication, SkillUse } from "../types/_Activatable.js"
import type { ActivatableIdentifier } from "../types/_IdentifierGroup.js"

export type NewApplication = {
  source: ActivatableIdentifier
  data: SkillApplication
  requiredSkillRating?: number
}

export type Use = {
  source: ActivatableIdentifier
  data: SkillUse
}

export type NewApplicationsAndUsesCache = {
  newApplications: Record<number, NewApplication[]>
  uses: Record<number, Use[]>
}

export const config: CacheConfig<NewApplicationsAndUsesCache> = {
  builder(database) {
    type WithApplicationsAndUses = {
      skill_applications?: SkillApplication[]
      skill_uses?: SkillUse[]
    }

    const cache: NewApplicationsAndUsesCache = {
      newApplications: {},
      uses: {},
    }

    const addNewApplicationsAndUses = (
      activatable: WithApplicationsAndUses,
      activatableId: ActivatableIdentifier
    ) => {
      if (activatable.skill_applications) {
        for (const newApplication of activatable.skill_applications) {
          const pair: NewApplication = { source: activatableId, data: newApplication }
          if (newApplication.skill.tag === "Single") {
            const previous = (cache.newApplications[newApplication.skill.single.id.skill] ??= [])
            previous.push(pair)
          } else {
            for (const skill of newApplication.skill.multiple.list) {
              const previous = (cache.newApplications[skill.id.skill] ??= [])
              previous.push(pair)
            }
            if (newApplication.skill.multiple.required_skill_rating !== undefined) {
              pair.requiredSkillRating = newApplication.skill.multiple.required_skill_rating
            }
          }
        }
      }

      if (activatable.skill_uses) {
        for (const use of activatable.skill_uses) {
          const pair: Use = { source: activatableId, data: use }
          if (use.skill.tag === "Single") {
            const previous = (cache.uses[use.skill.single.id.skill] ??= [])
            previous.push(pair)
          } else {
            for (const skill of use.skill.multiple.list) {
              const previous = (cache.uses[skill.id.skill] ??= [])
              previous.push(pair)
            }
          }
        }
      }
    }

    // prettier-ignore
    const entries: [
      [id: number, data: WithApplicationsAndUses][],
      (numericId: number) => ActivatableIdentifier,
    ][] = [
      [database.advancedCombatSpecialAbilities, n => ({ tag: "AdvancedCombatSpecialAbility", advanced_combat_special_ability: n })],
      [database.advancedKarmaSpecialAbilities, n => ({ tag: "AdvancedKarmaSpecialAbility", advanced_karma_special_ability: n })],
      [database.advancedMagicalSpecialAbilities, n => ({ tag: "AdvancedMagicalSpecialAbility", advanced_magical_special_ability: n })],
      [database.advancedSkillSpecialAbilities, n => ({ tag: "AdvancedSkillSpecialAbility", advanced_skill_special_ability: n })],
      [database.advantages, n => ({ tag: "Advantage", advantage: n })],
      [database.blessedTraditions, n => ({ tag: "BlessedTradition", blessed_tradition: n })],
      [database.ceremonialItemSpecialAbilities, n => ({ tag: "CeremonialItemSpecialAbility", ceremonial_item_special_ability: n })],
      [database.combatSpecialAbilities, n => ({ tag: "CombatSpecialAbility", combat_special_ability: n })],
      [database.combatStyleSpecialAbilities, n => ({ tag: "CombatStyleSpecialAbility", combat_style_special_ability: n })],
      [database.fatePointSpecialAbilities, n => ({ tag: "FatePointSpecialAbility", fate_point_special_ability: n })],
      [database.generalSpecialAbilities, n => ({ tag: "GeneralSpecialAbility", general_special_ability: n })],
      [database.liturgicalStyleSpecialAbilities, n => ({ tag: "LiturgicalStyleSpecialAbility", liturgical_style_special_ability: n })],
      [database.magicStyleSpecialAbilities, n => ({ tag: "MagicStyleSpecialAbility", magic_style_special_ability: n })],
      [database.magicalSpecialAbilities, n => ({ tag: "MagicalSpecialAbility", magical_special_ability: n })],
      [database.magicalTraditions, n => ({ tag: "MagicalTradition", magical_tradition: n })],
      [database.sexSpecialAbilities, n => ({ tag: "SexSpecialAbility", sex_special_ability: n })],
    ]

    entries.forEach(([entityEntries, createId]) => {
      entityEntries.forEach(([numericId, activatable]) => {
        addNewApplicationsAndUses(activatable, createId(numericId))
      })
    })

    return cache
  },
}
