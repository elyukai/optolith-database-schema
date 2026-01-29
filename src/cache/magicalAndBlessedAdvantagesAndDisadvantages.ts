import { assertExhaustive } from "@elyukai/utils/typeSafety"
import type { CacheConfig } from "../cacheConfig.js"

const BLESSED_ID = 12
const SPELLCASTER_ID = 47

export type MagicalAndBlessedAdvantagesAndDisadvantagesCache = {
  advantages: {
    magical: {
      ids: number[]
    }
    blessed: {
      ids: number[]
    }
  }
  disadvantages: {
    magical: {
      ids: number[]
    }
    blessed: {
      ids: number[]
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
  switch (ratedId.tag) {
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
  getById: (
    id: ActivatableIdentifier,
  ) => { id: number; prerequisites?: AdvantageDisadvantagePrerequisites } | undefined,
  traversedIds: number[],
): boolean => {
  switch (prerequisite.tag) {
    case "Activatable": {
      if (
        prerequisite.activatable.id.tag === "Advantage" &&
        prerequisite.activatable.id.advantage === getAdvantageId(type) &&
        prerequisite.activatable.active
      ) {
        return true
      }

      const entry = getById(prerequisite.activatable.id)
      return entry !== undefined && is(type, entry, getById, traversedIds)
    }
    case "Rated":
      return isRatedFor(type, prerequisite.rated.id)
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
    case "ExternalEnhancement":
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
  entry: { id: number; prerequisites?: AdvantageDisadvantagePrerequisites },
  getById: (
    id: ActivatableIdentifier,
  ) => { id: number; prerequisites?: AdvantageDisadvantagePrerequisites } | undefined,
  traversedIds: number[],
): boolean => {
  if (!entry.prerequisites || traversedIds.includes(entry.id)) {
    return false
  }

  const newTraversedIds = [...traversedIds, entry.id]

  return (
    entry.prerequisites !== undefined &&
    entry.prerequisites.some(prerequisite => {
      switch (prerequisite.prerequisite.tag) {
        case "Single":
          return isPrerequisiteFor(type, prerequisite.prerequisite.single, getById, newTraversedIds)
        case "Disjunction":
          return prerequisite.prerequisite.disjunction.list.some(p =>
            isPrerequisiteFor(type, p, getById, newTraversedIds),
          )
        case "Group":
          return prerequisite.prerequisite.group.list.some(p =>
            isPrerequisiteFor(type, p, getById, newTraversedIds),
          )
        default:
          return assertExhaustive(prerequisite.prerequisite)
      }
    })
  )
}

export const config: CacheConfig<MagicalAndBlessedAdvantagesAndDisadvantagesCache> = {
  builder(database) {
    const getActivatableById = (id: ActivatableIdentifier) => {
      // prettier-ignore
      switch (id.tag) {
        case "AdvancedCombatSpecialAbility": return database.advancedCombatSpecialAbilities.find(([entryId]) => entryId === id.advanced_combat_special_ability)?.[1]
        case "AdvancedKarmaSpecialAbility": return database.advancedKarmaSpecialAbilities.find(([entryId]) => entryId === id.advanced_karma_special_ability)?.[1]
        case "AdvancedMagicalSpecialAbility": return database.advancedMagicalSpecialAbilities.find(([entryId]) => entryId === id.advanced_magical_special_ability)?.[1]
        case "AdvancedSkillSpecialAbility": return database.advancedSkillSpecialAbilities.find(([entryId]) => entryId === id.advanced_skill_special_ability)?.[1]
        case "Advantage": return database.advantages.find(([entryId]) => entryId === id.advantage)?.[1]
        case "AncestorGlyph": return database.ancestorGlyphs.find(([entryId]) => entryId === id.ancestor_glyph)?.[1]
        case "ArcaneOrbEnchantment": return database.arcaneOrbEnchantments.find(([entryId]) => entryId === id.arcane_orb_enchantment)?.[1]
        case "AttireEnchantment": return database.attireEnchantments.find(([entryId]) => entryId === id.attire_enchantment)?.[1]
        case "BlessedTradition": return database.blessedTraditions.find(([entryId]) => entryId === id.blessed_tradition)?.[1]
        case "BowlEnchantment": return database.bowlEnchantments.find(([entryId]) => entryId === id.bowl_enchantment)?.[1]
        case "BrawlingSpecialAbility": return database.brawlingSpecialAbilities.find(([entryId]) => entryId === id.brawling_special_ability)?.[1]
        case "CauldronEnchantment": return database.cauldronEnchantments.find(([entryId]) => entryId === id.cauldron_enchantment)?.[1]
        case "CeremonialItemSpecialAbility": return database.ceremonialItemSpecialAbilities.find(([entryId]) => entryId === id.ceremonial_item_special_ability)?.[1]
        case "ChronicleEnchantment": return database.chronicleEnchantments.find(([entryId]) => entryId === id.chronicle_enchantment)?.[1]
        case "CombatSpecialAbility": return database.combatSpecialAbilities.find(([entryId]) => entryId === id.combat_special_ability)?.[1]
        case "CombatStyleSpecialAbility": return database.combatStyleSpecialAbilities.find(([entryId]) => entryId === id.combat_style_special_ability)?.[1]
        case "CommandSpecialAbility": return database.commandSpecialAbilities.find(([entryId]) => entryId === id.command_special_ability)?.[1]
        case "DaggerRitual": return database.daggerRituals.find(([entryId]) => entryId === id.dagger_ritual)?.[1]
        case "Disadvantage": return database.disadvantages.find(([entryId]) => entryId === id.disadvantage)?.[1]
        case "FamiliarSpecialAbility": return database.familiarSpecialAbilities.find(([entryId]) => entryId === id.familiar_special_ability)?.[1]
        case "FatePointSexSpecialAbility": return database.fatePointSexSpecialAbilities.find(([entryId]) => entryId === id.fate_point_sex_special_ability)?.[1]
        case "FatePointSpecialAbility": return database.fatePointSpecialAbilities.find(([entryId]) => entryId === id.fate_point_special_ability)?.[1]
        case "FoolsHatEnchantment": return database.foolsHatEnchantments.find(([entryId]) => entryId === id.fools_hat_enchantment)?.[1]
        case "GeneralSpecialAbility": return database.generalSpecialAbilities.find(([entryId]) => entryId === id.general_special_ability)?.[1]
        case "InstrumentEnchantment": return database.instrumentEnchantments.find(([entryId]) => entryId === id.instrument_enchantment)?.[1]
        case "KarmaSpecialAbility": return database.karmaSpecialAbilities.find(([entryId]) => entryId === id.karma_special_ability)?.[1]
        case "Krallenkettenzauber": return database.krallenkettenzauber.find(([entryId]) => entryId === id.krallenkettenzauber)?.[1]
        case "LiturgicalStyleSpecialAbility": return database.liturgicalStyleSpecialAbilities.find(([entryId]) => entryId === id.liturgical_style_special_ability)?.[1]
        case "LycantropicGift": return database.lycantropicGifts.find(([entryId]) => entryId === id.lycantropic_gift)?.[1]
        case "MagicalSign": return database.magicalSigns.find(([entryId]) => entryId === id.magical_sign)?.[1]
        case "MagicalSpecialAbility": return database.magicalSpecialAbilities.find(([entryId]) => entryId === id.magical_special_ability)?.[1]
        case "MagicalTradition": return database.magicalTraditions.find(([entryId]) => entryId === id.magical_tradition)?.[1]
        case "MagicStyleSpecialAbility": return database.magicStyleSpecialAbilities.find(([entryId]) => entryId === id.magic_style_special_ability)?.[1]
        case "OrbEnchantment": return database.orbEnchantments.find(([entryId]) => entryId === id.orb_enchantment)?.[1]
        case "PactGift": return database.pactGifts.find(([entryId]) => entryId === id.pact_gift)?.[1]
        case "ProtectiveWardingCircleSpecialAbility": return database.protectiveWardingCircleSpecialAbilities.find(([entryId]) => entryId === id.protective_warding_circle_special_ability)?.[1]
        case "RingEnchantment": return database.ringEnchantments.find(([entryId]) => entryId === id.ring_enchantment)?.[1]
        case "Sermon": return database.sermons.find(([entryId]) => entryId === id.sermon)?.[1]
        case "SexSpecialAbility": return database.sexSpecialAbilities.find(([entryId]) => entryId === id.sex_special_ability)?.[1]
        case "SickleRitual": return database.sickleRituals.find(([entryId]) => entryId === id.sickle_ritual)?.[1]
        case "SikaryanDrainSpecialAbility": return database.sikaryanDrainSpecialAbilities.find(([entryId]) => entryId === id.sikaryan_drain_special_ability)?.[1]
        case "SkillStyleSpecialAbility": return database.skillStyleSpecialAbilities.find(([entryId]) => entryId === id.skill_style_special_ability)?.[1]
        case "SpellSwordEnchantment": return database.spellSwordEnchantments.find(([entryId]) => entryId === id.spell_sword_enchantment)?.[1]
        case "StaffEnchantment": return database.staffEnchantments.find(([entryId]) => entryId === id.staff_enchantment)?.[1]
        case "ToyEnchantment": return database.toyEnchantments.find(([entryId]) => entryId === id.toy_enchantment)?.[1]
        case "Trinkhornzauber": return database.trinkhornzauber.find(([entryId]) => entryId === id.trinkhornzauber)?.[1]
        case "VampiricGift": return database.vampiricGifts.find(([entryId]) => entryId === id.vampiric_gift)?.[1]
        case "Vision": return database.visions.find(([entryId]) => entryId === id.vision)?.[1]
        case "WandEnchantment": return database.wandEnchantments.find(([entryId]) => entryId === id.wand_enchantment)?.[1]
        case "WeaponEnchantment": return database.weaponEnchantments.find(([entryId]) => entryId === id.weapon_enchantment)?.[1]
        default:
          return assertExhaustive(id)
      }
    }

    // prettier-ignore
    return {
      advantages: {
        magical: {
          ids: database.advantages.filter(([_, entry]) => is("Magical", entry, getActivatableById, [])).map(([id]) => id),
        },
        blessed: {
          ids: database.advantages.filter(([_, entry]) => is("Blessed", entry, getActivatableById, [])).map(([id]) => id),
        },
      },
      disadvantages: {
        magical: {
          ids: database.disadvantages.filter(([_, entry]) => is("Magical", entry, getActivatableById, [])).map(([id]) => id),
        },
        blessed: {
          ids: database.disadvantages.filter(([_, entry]) => is("Blessed", entry, getActivatableById, [])).map(([id]) => id),
        },
      },
    }
  },
}
