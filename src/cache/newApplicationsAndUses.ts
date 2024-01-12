import type { CacheConfig } from "../cacheConfig.js"
import type { SkillApplication, SkillUse } from "../types/_Activatable.js"
import type { ActivatableIdentifier } from "../types/_IdentifierGroup.js"
import { ActivatableSelectOptionsCache } from "./activatableSelectOptions.js"

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

export const config: CacheConfig<
  NewApplicationsAndUsesCache,
  [generatedSelectOptions: ActivatableSelectOptionsCache]
> = {
  builder(database, generatedSelectOptions) {
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

    // prettier-ignore
    const generatedEntries: [
      { [id: number]: WithApplicationsAndUses[] },
      (numericId: number) => ActivatableIdentifier,
    ][] = [
      [generatedSelectOptions.advancedCombatSpecialAbilities, id => ({ tag: "AdvancedCombatSpecialAbility", advanced_combat_special_ability: id })],
      [generatedSelectOptions.advancedKarmaSpecialAbilities, id => ({ tag: "AdvancedKarmaSpecialAbility", advanced_karma_special_ability: id })],
      [generatedSelectOptions.advancedMagicalSpecialAbilities, id => ({ tag: "AdvancedMagicalSpecialAbility", advanced_magical_special_ability: id })],
      [generatedSelectOptions.advancedSkillSpecialAbilities, id => ({ tag: "AdvancedSkillSpecialAbility", advanced_skill_special_ability: id })],
      [generatedSelectOptions.advantages, id => ({ tag: "Advantage", advantage: id })],
      [generatedSelectOptions.ancestorGlyphs, id => ({ tag: "AncestorGlyph", ancestor_glyph: id })],
      [generatedSelectOptions.arcaneOrbEnchantments, id => ({ tag: "ArcaneOrbEnchantment", arcane_orb_enchantment: id })],
      [generatedSelectOptions.attireEnchantments, id => ({ tag: "AttireEnchantment", attire_enchantment: id })],
      [generatedSelectOptions.blessedTraditions, id => ({ tag: "BlessedTradition", blessed_tradition: id })],
      [generatedSelectOptions.bowlEnchantments, id => ({ tag: "BowlEnchantment", bowl_enchantment: id })],
      [generatedSelectOptions.brawlingSpecialAbilities, id => ({ tag: "BrawlingSpecialAbility", brawling_special_ability: id })],
      [generatedSelectOptions.cauldronEnchantments, id => ({ tag: "CauldronEnchantment", cauldron_enchantment: id })],
      [generatedSelectOptions.ceremonialItemSpecialAbilities, id => ({ tag: "CeremonialItemSpecialAbility", ceremonial_item_special_ability: id })],
      [generatedSelectOptions.chronicleEnchantments, id => ({ tag: "ChronicleEnchantment", chronicle_enchantment: id })],
      [generatedSelectOptions.combatSpecialAbilities, id => ({ tag: "CombatSpecialAbility", combat_special_ability: id })],
      [generatedSelectOptions.combatStyleSpecialAbilities, id => ({ tag: "CombatStyleSpecialAbility", combat_style_special_ability: id })],
      [generatedSelectOptions.commandSpecialAbilities, id => ({ tag: "CommandSpecialAbility", command_special_ability: id })],
      [generatedSelectOptions.daggerRituals, id => ({ tag: "DaggerRitual", dagger_ritual: id })],
      [generatedSelectOptions.disadvantages, id => ({ tag: "Disadvantage", disadvantage: id })],
      [generatedSelectOptions.familiarSpecialAbilities, id => ({ tag: "FamiliarSpecialAbility", familiar_special_ability: id })],
      [generatedSelectOptions.fatePointSexSpecialAbilities, id => ({ tag: "FatePointSexSpecialAbility", fate_point_sex_special_ability: id })],
      [generatedSelectOptions.fatePointSpecialAbilities, id => ({ tag: "FatePointSpecialAbility", fate_point_special_ability: id })],
      [generatedSelectOptions.foolsHatEnchantments, id => ({ tag: "FoolsHatEnchantment", fools_hat_enchantment: id })],
      [generatedSelectOptions.generalSpecialAbilities, id => ({ tag: "GeneralSpecialAbility", general_special_ability: id })],
      [generatedSelectOptions.instrumentEnchantments, id => ({ tag: "InstrumentEnchantment", instrument_enchantment: id })],
      [generatedSelectOptions.karmaSpecialAbilities, id => ({ tag: "KarmaSpecialAbility", karma_special_ability: id })],
      [generatedSelectOptions.krallenkettenzauber, id => ({ tag: "Krallenkettenzauber", krallenkettenzauber: id })],
      [generatedSelectOptions.liturgicalStyleSpecialAbilities, id => ({ tag: "LiturgicalStyleSpecialAbility", liturgical_style_special_ability: id })],
      [generatedSelectOptions.lycantropicGifts, id => ({ tag: "LycantropicGift", lycantropic_gift: id })],
      [generatedSelectOptions.magicalSpecialAbilities, id => ({ tag: "MagicalSpecialAbility", magical_special_ability: id })],
      [generatedSelectOptions.magicalTraditions, id => ({ tag: "MagicalTradition", magical_tradition: id })],
      [generatedSelectOptions.magicStyleSpecialAbilities, id => ({ tag: "MagicStyleSpecialAbility", magic_style_special_ability: id })],
      [generatedSelectOptions.orbEnchantments, id => ({ tag: "OrbEnchantment", orb_enchantment: id })],
      [generatedSelectOptions.pactGifts, id => ({ tag: "PactGift", pact_gift: id })],
      [generatedSelectOptions.protectiveWardingCircleSpecialAbilities, id => ({ tag: "ProtectiveWardingCircleSpecialAbility", protective_warding_circle_special_ability: id })],
      [generatedSelectOptions.ringEnchantments, id => ({ tag: "RingEnchantment", ring_enchantment: id })],
      [generatedSelectOptions.sermons, id => ({ tag: "Sermon", sermon: id })],
      [generatedSelectOptions.sexSpecialAbilities, id => ({ tag: "SexSpecialAbility", sex_special_ability: id })],
      [generatedSelectOptions.sickleRituals, id => ({ tag: "SickleRitual", sickle_ritual: id })],
      [generatedSelectOptions.sikaryanDrainSpecialAbilities, id => ({ tag: "SikaryanDrainSpecialAbility", sikaryan_drain_special_ability: id })],
      [generatedSelectOptions.staffEnchantments, id => ({ tag: "StaffEnchantment", staff_enchantment: id })],
      [generatedSelectOptions.skillStyleSpecialAbilities, id => ({ tag: "SkillStyleSpecialAbility", skill_style_special_ability: id })],
      [generatedSelectOptions.spellSwordEnchantments, id => ({ tag: "SpellSwordEnchantment", spell_sword_enchantment: id })],
      [generatedSelectOptions.toyEnchantments, id => ({ tag: "ToyEnchantment", toy_enchantment: id })],
      [generatedSelectOptions.trinkhornzauber, id => ({ tag: "Trinkhornzauber", trinkhornzauber: id })],
      [generatedSelectOptions.vampiricGifts, id => ({ tag: "VampiricGift", vampiric_gift: id })],
      [generatedSelectOptions.visions, id => ({ tag: "Vision", vision: id })],
      [generatedSelectOptions.wandEnchantments, id => ({ tag: "WandEnchantment", wand_enchantment: id })],
      [generatedSelectOptions.weaponEnchantments, id => ({ tag: "WeaponEnchantment", weapon_enchantment: id })],
    ]

    generatedEntries.forEach(([ids, createId]) =>
      Object.entries(ids).forEach(([stringId, selectOptions]) => {
        const id = createId(Number.parseInt(stringId))
        selectOptions.forEach(selectOption => {
          addNewApplicationsAndUses(selectOption, id)
        })
      })
    )

    return cache
  },
}
