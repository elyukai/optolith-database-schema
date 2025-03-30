/**
 * @ignore swift
 */

import { ActivatableIdentifier } from "./_IdentifierGroup.js"

/**
 *
 */
export type PublicationIdentifier = {
  tag: "Publication"

  /**
   * The publication’s identifier.
   * @integer
   * @minimum 1
   */
  publication: number
}

export type ExperienceLevelIdentifier = {
  tag: "ExperienceLevel"

  /**
   * The experience level’s identifier.
   * @integer
   * @minimum 1
   */
  experience_level: number
}

export type CoreRuleIdentifier = {
  tag: "CoreRule"

  /**
   * The core rule’s identifier.
   * @integer
   * @minimum 1
   */
  core_rule: number
}

export type FocusRuleIdentifier = {
  tag: "FocusRule"

  /**
   * The focus rule’s identifier.
   * @integer
   * @minimum 1
   */
  focus_rule: number
}

export type SubjectIdentifier = {
  tag: "Subject"

  /**
   * The focus rule subject’s identifier.
   * @integer
   * @minimum 1
   */
  subject: number
}

export type OptionalRuleIdentifier = {
  tag: "OptionalRule"

  /**
   * The optional rule’s identifier.
   * @integer
   * @minimum 1
   */
  optional_rule: number
}

export type RaceIdentifier = {
  tag: "Race"

  /**
   * The race’s identifier.
   * @integer
   * @minimum 1
   */
  race: number
}

export type CultureIdentifier = {
  tag: "Culture"

  /**
   * The culture’s identifier.
   * @integer
   * @minimum 1
   */
  culture: number
}

export type ProfessionIdentifier = {
  tag: "Profession"

  /**
   * The profession’s identifier.
   * @integer
   * @minimum 1
   */
  profession: number
}

export type ProfessionVariantIdentifier = {
  tag: "ProfessionVariant"

  /**
   * The profession variant’s identifier.
   * @integer
   * @minimum 1
   */
  profession_variant: number
}

export type CurriculumIdentifier = {
  tag: "Curriculum"

  /**
   * The curriculum’s identifier.
   * @integer
   * @minimum 1
   */
  curriculum: number
}

export type GuidelineIdentifier = {
  tag: "Guideline"

  /**
   * The guideline’s identifier.
   * @integer
   * @minimum 1
   */
  guideline: number
}

export type AdvantageIdentifier = {
  tag: "Advantage"

  /**
   * The advantage’s identifier.
   * @integer
   * @minimum 1
   */
  advantage: number
}

export type DisadvantageIdentifier = {
  tag: "Disadvantage"

  /**
   * The disadvantage’s identifier.
   * @integer
   * @minimum 1
   */
  disadvantage: number
}

export type GeneralSpecialAbilityIdentifier = {
  tag: "GeneralSpecialAbility"

  /**
   * The general special ability’s identifier.
   * @integer
   * @minimum 1
   */
  general_special_ability: number
}

export type FatePointSpecialAbilityIdentifier = {
  tag: "FatePointSpecialAbility"

  /**
   * The fate point special ability’s identifier.
   * @integer
   * @minimum 1
   */
  fate_point_special_ability: number
}

export type CombatSpecialAbilityIdentifier = {
  tag: "CombatSpecialAbility"

  /**
   * The combat special ability’s identifier.
   * @integer
   * @minimum 1
   */
  combat_special_ability: number
}

export type MagicalSpecialAbilityIdentifier = {
  tag: "MagicalSpecialAbility"

  /**
   * The magical special ability’s identifier.
   * @integer
   * @minimum 1
   */
  magical_special_ability: number
}

export type StaffEnchantmentIdentifier = {
  tag: "StaffEnchantment"

  /**
   * The staff enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  staff_enchantment: number
}

export type FamiliarSpecialAbilityIdentifier = {
  tag: "FamiliarSpecialAbility"

  /**
   * The familiar special ability’s identifier.
   * @integer
   * @minimum 1
   */
  familiar_special_ability: number
}

export type KarmaSpecialAbilityIdentifier = {
  tag: "KarmaSpecialAbility"

  /**
   * The karma special ability’s identifier.
   * @integer
   * @minimum 1
   */
  karma_special_ability: number
}

export type ProtectiveWardingCircleSpecialAbilityIdentifier = {
  tag: "ProtectiveWardingCircleSpecialAbility"

  /**
   * The protective warding circle special ability’s identifier.
   * @integer
   * @minimum 1
   */
  protective_warding_circle_special_ability: number
}

export type CombatStyleSpecialAbilityIdentifier = {
  tag: "CombatStyleSpecialAbility"

  /**
   * The combat style special ability’s identifier.
   * @integer
   * @minimum 1
   */
  combat_style_special_ability: number
}

export type AdvancedCombatSpecialAbilityIdentifier = {
  tag: "AdvancedCombatSpecialAbility"

  /**
   * The advanced combat special ability’s identifier.
   * @integer
   * @minimum 1
   */
  advanced_combat_special_ability: number
}

export type CommandSpecialAbilityIdentifier = {
  tag: "CommandSpecialAbility"

  /**
   * The command special ability’s identifier.
   * @integer
   * @minimum 1
   */
  command_special_ability: number
}

export type MagicStyleSpecialAbilityIdentifier = {
  tag: "MagicStyleSpecialAbility"

  /**
   * The magic style special ability’s identifier.
   * @integer
   * @minimum 1
   */
  magic_style_special_ability: number
}

export type AdvancedMagicalSpecialAbilityIdentifier = {
  tag: "AdvancedMagicalSpecialAbility"

  /**
   * The advanced magical special ability’s identifier.
   * @integer
   * @minimum 1
   */
  advanced_magical_special_ability: number
}

export type SpellSwordEnchantmentIdentifier = {
  tag: "SpellSwordEnchantment"

  /**
   * The spell sword enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  spell_sword_enchantment: number
}

export type DaggerRitualIdentifier = {
  tag: "DaggerRitual"

  /**
   * The dagger ritual’s identifier.
   * @integer
   * @minimum 1
   */
  dagger_ritual: number
}

export type InstrumentEnchantmentIdentifier = {
  tag: "InstrumentEnchantment"

  /**
   * The instrument enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  instrument_enchantment: number
}

export type AttireEnchantmentIdentifier = {
  tag: "AttireEnchantment"

  /**
   * The attire enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  attire_enchantment: number
}

export type OrbEnchantmentIdentifier = {
  tag: "OrbEnchantment"

  /**
   * The orb enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  orb_enchantment: number
}

export type WandEnchantmentIdentifier = {
  tag: "WandEnchantment"

  /**
   * The wand enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  wand_enchantment: number
}

export type BrawlingSpecialAbilityIdentifier = {
  tag: "BrawlingSpecialAbility"

  /**
   * The brawling special ability’s identifier.
   * @integer
   * @minimum 1
   */
  brawling_special_ability: number
}

export type AncestorGlyphIdentifier = {
  tag: "AncestorGlyph"

  /**
   * The ancestor glyph’s identifier.
   * @integer
   * @minimum 1
   */
  ancestor_glyph: number
}

export type CeremonialItemSpecialAbilityIdentifier = {
  tag: "CeremonialItemSpecialAbility"

  /**
   * The ceremonial item special ability’s identifier.
   * @integer
   * @minimum 1
   */
  ceremonial_item_special_ability: number
}

export type SermonIdentifier = {
  tag: "Sermon"

  /**
   * The sermon’s identifier.
   * @integer
   * @minimum 1
   */
  sermon: number
}

export type LiturgicalStyleSpecialAbilityIdentifier = {
  tag: "LiturgicalStyleSpecialAbility"

  /**
   * The liturgical style special ability’s identifier.
   * @integer
   * @minimum 1
   */
  liturgical_style_special_ability: number
}

export type AdvancedKarmaSpecialAbilityIdentifier = {
  tag: "AdvancedKarmaSpecialAbility"

  /**
   * The advanced karma special ability’s identifier.
   * @integer
   * @minimum 1
   */
  advanced_karma_special_ability: number
}

export type VisionIdentifier = {
  tag: "Vision"

  /**
   * The vision’s identifier.
   * @integer
   * @minimum 1
   */
  vision: number
}

export type MagicalTraditionIdentifier = {
  tag: "MagicalTradition"

  /**
   * The magical tradition’s identifier.
   * @integer
   * @minimum 1
   */
  magical_tradition: number
}

export type BlessedTraditionIdentifier = {
  tag: "BlessedTradition"

  /**
   * The blessed tradition’s identifier.
   * @integer
   * @minimum 1
   */
  blessed_tradition: number
}

export type PactGiftIdentifier = {
  tag: "PactGift"

  /**
   * The pact gift’s identifier.
   * @integer
   * @minimum 1
   */
  pact_gift: number
}

export type VampiricGiftIdentifier = {
  tag: "VampiricGift"

  /**
   * The vampiric gift’s identifier.
   * @integer
   * @minimum 1
   */
  vampiric_gift: number
}

export type SikaryanDrainSpecialAbilityIdentifier = {
  tag: "SikaryanDrainSpecialAbility"

  /**
   * The sikaryan drain special ability’s identifier.
   * @integer
   * @minimum 1
   */
  sikaryan_drain_special_ability: number
}

export type LycantropicGiftIdentifier = {
  tag: "LycantropicGift"

  /**
   * The lycantropic gift’s identifier.
   * @integer
   * @minimum 1
   */
  lycantropic_gift: number
}

export type SkillStyleSpecialAbilityIdentifier = {
  tag: "SkillStyleSpecialAbility"

  /**
   * The skill style special ability’s identifier.
   * @integer
   * @minimum 1
   */
  skill_style_special_ability: number
}

export type AdvancedSkillSpecialAbilityIdentifier = {
  tag: "AdvancedSkillSpecialAbility"

  /**
   * The advanced skill special ability’s identifier.
   * @integer
   * @minimum 1
   */
  advanced_skill_special_ability: number
}

export type ArcaneOrbEnchantmentIdentifier = {
  tag: "ArcaneOrbEnchantment"

  /**
   * The arcane orb enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  arcane_orb_enchantment: number
}

export type CauldronEnchantmentIdentifier = {
  tag: "CauldronEnchantment"

  /**
   * The cauldron enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  cauldron_enchantment: number
}

export type FoolsHatEnchantmentIdentifier = {
  tag: "FoolsHatEnchantment"

  /**
   * The fools hat enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  fools_hat_enchantment: number
}

export type ToyEnchantmentIdentifier = {
  tag: "ToyEnchantment"

  /**
   * The toy enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  toy_enchantment: number
}

export type BowlEnchantmentIdentifier = {
  tag: "BowlEnchantment"

  /**
   * The bowl enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  bowl_enchantment: number
}

export type FatePointSexSpecialAbilityIdentifier = {
  tag: "FatePointSexSpecialAbility"

  /**
   * The fate point sex special ability’s identifier.
   * @integer
   * @minimum 1
   */
  fate_point_sex_special_ability: number
}

export type SexSpecialAbilityIdentifier = {
  tag: "SexSpecialAbility"

  /**
   * The sex special ability’s identifier.
   * @integer
   * @minimum 1
   */
  sex_special_ability: number
}

export type WeaponEnchantmentIdentifier = {
  tag: "WeaponEnchantment"

  /**
   * The weapon enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  weapon_enchantment: number
}

export type SickleRitualIdentifier = {
  tag: "SickleRitual"

  /**
   * The sickle ritual’s identifier.
   * @integer
   * @minimum 1
   */
  sickle_ritual: number
}

export type RingEnchantmentIdentifier = {
  tag: "RingEnchantment"

  /**
   * The ring enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  ring_enchantment: number
}

export type ChronicleEnchantmentIdentifier = {
  tag: "ChronicleEnchantment"

  /**
   * The chronicle enchantment’s identifier.
   * @integer
   * @minimum 1
   */
  chronicle_enchantment: number
}

export type KrallenkettenzauberIdentifier = {
  tag: "Krallenkettenzauber"

  /**
   * The Krallenkettenzauber’s identifier.
   * @integer
   * @minimum 1
   */
  krallenkettenzauber: number
}

export type TrinkhornzauberIdentifier = {
  tag: "Trinkhornzauber"

  /**
   * The Trinkhornzauber’s identifier.
   * @integer
   * @minimum 1
   */
  trinkhornzauber: number
}

export type MagicalRuneIdentifier = {
  tag: "MagicalRune"

  /**
   * The magical rune’s identifier.
   * @integer
   * @minimum 1
   */
  magical_rune: number
}

export type MagicalSignIdentifier = {
  tag: "MagicalSign"

  /**
   * The magical sign’s identifier.
   * @integer
   * @minimum 1
   */
  magical_sign: number
}

export type LanguageIdentifier = {
  tag: "Language"

  /**
   * The language’s identifier.
   * @integer
   * @minimum 1
   */
  language: number
}

export type ScriptIdentifier = {
  tag: "Script"

  /**
   * The script’s identifier.
   * @integer
   * @minimum 1
   */
  script: number
}

export type ContinentIdentifier = {
  tag: "Continent"

  /**
   * The continent’s identifier.
   * @integer
   * @minimum 1
   * @maximum 3
   */
  continent: number
}

export type SocialStatusIdentifier = {
  tag: "SocialStatus"

  /**
   * The social status’s identifier.
   * @integer
   * @minimum 1
   */
  social_status: number
}

export type AttributeIdentifier = {
  tag: "Attribute"

  /**
   * The attribute’s identifier.
   * @integer
   * @minimum 1
   * @maximum 8
   */
  attribute: number
}

export type SkillIdentifier = {
  tag: "Skill"

  /**
   * The skill’s identifier.
   * @integer
   * @minimum 1
   */
  skill: number
}

export type SkillApplicationIdentifier = {
  tag: "SkillApplication"

  /**
   * The skill’s identifier the application belongs to.
   * @integer
   * @minimum 1
   */
  skill: number

  /**
   * The skill application’s identifier.
   * @integer
   * @minimum 1
   */
  skill_application: number

  /**
   * The entry the application is granted by, if it’s not part of the skill by
   * default.
   * @integer
   * @minimum 1
   */
  granted_by?: ActivatableIdentifier
}

export type SkillGroupIdentifier = {
  tag: "SkillGroup"

  /**
   * The skill group’s identifier.
   * @integer
   * @minimum 1
   * @maximum 5
   */
  skill_group: number
}

export type CloseCombatTechniqueIdentifier = {
  tag: "CloseCombatTechnique"

  /**
   * The close combat technique’s identifier.
   * @integer
   * @minimum 1
   */
  close_combat_technique: number
}

export type RangedCombatTechniqueIdentifier = {
  tag: "RangedCombatTechnique"

  /**
   * The ranged combat technique’s identifier.
   * @integer
   * @minimum 1
   */
  ranged_combat_technique: number
}

export type SpellIdentifier = {
  tag: "Spell"

  /**
   * The spell’s identifier.
   * @integer
   * @minimum 1
   */
  spell: number
}

export type RitualIdentifier = {
  tag: "Ritual"

  /**
   * The ritual’s identifier.
   * @integer
   * @minimum 1
   */
  ritual: number
}

export type CantripIdentifier = {
  tag: "Cantrip"

  /**
   * The cantrip’s identifier.
   * @integer
   * @minimum 1
   */
  cantrip: number
}

export type PropertyIdentifier = {
  tag: "Property"

  /**
   * The property’s identifier.
   * @integer
   * @minimum 1
   */
  property: number
}

export type LiturgicalChantIdentifier = {
  tag: "LiturgicalChant"

  /**
   * The liturgical chant’s identifier.
   * @integer
   * @minimum 1
   */
  liturgical_chant: number
}

export type CeremonyIdentifier = {
  tag: "Ceremony"

  /**
   * The ceremony’s identifier.
   * @integer
   * @minimum 1
   */
  ceremony: number
}

export type BlessingIdentifier = {
  tag: "Blessing"

  /**
   * The blessing’s identifier.
   * @integer
   * @minimum 1
   */
  blessing: number
}

export type AspectIdentifier = {
  tag: "Aspect"

  /**
   * The aspect’s identifier.
   * @integer
   * @minimum 1
   */
  aspect: number
}

export type CurseIdentifier = {
  tag: "Curse"

  /**
   * The curse’s identifier.
   * @integer
   * @minimum 1
   */
  curse: number
}

export type ElvenMagicalSongIdentifier = {
  tag: "ElvenMagicalSong"

  /**
   * The elven magical song’s identifier.
   * @integer
   * @minimum 1
   */
  elven_magical_song: number
}

export type DominationRitualIdentifier = {
  tag: "DominationRitual"

  /**
   * The domination ritual’s identifier.
   * @integer
   * @minimum 1
   */
  domination_ritual: number
}

export type MagicalMelodyIdentifier = {
  tag: "MagicalMelody"

  /**
   * The magical melody’s identifier.
   * @integer
   * @minimum 1
   */
  magical_melody: number
}

export type MagicalDanceIdentifier = {
  tag: "MagicalDance"

  /**
   * The magical dance’s identifier.
   * @integer
   * @minimum 1
   */
  magical_dance: number
}

export type JesterTrickIdentifier = {
  tag: "JesterTrick"

  /**
   * The jester trick’s identifier.
   * @integer
   * @minimum 1
   */
  jester_trick: number
}

export type AnimistPowerIdentifier = {
  tag: "AnimistPower"

  /**
   * The animist power’s identifier.
   * @integer
   * @minimum 1
   */
  animist_power: number
}

export type GeodeRitualIdentifier = {
  tag: "GeodeRitual"

  /**
   * The geode ritual’s identifier.
   * @integer
   * @minimum 1
   */
  geode_ritual: number
}

export type ZibiljaRitualIdentifier = {
  tag: "ZibiljaRitual"

  /**
   * The zibilja ritual’s identifier.
   * @integer
   * @minimum 1
   */
  zibilja_ritual: number
}

export type AnimalTypeIdentifier = {
  tag: "AnimalType"

  /**
   * The animal type’s identifier.
   * @integer
   * @minimum 1
   */
  animal_type: number
}

export type TargetCategoryIdentifier = {
  tag: "TargetCategory"

  /**
   * The target category’s identifier.
   * @integer
   * @minimum 1
   * @maximum 24
   */
  target_category: number
}

export type GeneralIdentifier = {
  tag: "General"

  /**
   * The identifier of a general (unspecific) select option.
   * @integer
   * @minimum 1
   */
  general: number
}

export type ElementIdentifier = {
  tag: "Element"

  /**
   * The element’s identifier.
   * @integer
   * @minimum 1
   */
  element: number
}

export type AnimalShapeSizeIdentifier = {
  tag: "AnimalShapeSize"

  /**
   * The animal shape size’s identifier.
   * @integer
   * @minimum 1
   */
  animal_shape_size: number
}

export type PatronIdentifier = {
  tag: "Patron"

  /**
   * The patron’s identifier.
   * @integer
   * @minimum 1
   */
  patron: number
}

export type AmmunitionIdentifier = {
  tag: "Ammunition"

  /**
   * The ammunition’s identifier.
   * @integer
   * @minimum 1
   */
  ammunition: number
}

export type AnimalIdentifier = {
  tag: "Animal"

  /**
   * The animal’s identifier.
   * @integer
   * @minimum 1
   */
  animal: number
}

export type AnimalCareIdentifier = {
  tag: "AnimalCare"

  /**
   * The animal care’s identifier.
   * @integer
   * @minimum 1
   */
  animal_care: number
}

export type ArmorIdentifier = {
  tag: "Armor"

  /**
   * The armor’s identifier.
   * @integer
   * @minimum 1
   */
  armor: number
}

export type BandageOrRemedyIdentifier = {
  tag: "BandageOrRemedy"

  /**
   * The bandage or remedy’s identifier.
   * @integer
   * @minimum 1
   */
  bandage_or_remedy: number
}

export type BookIdentifier = {
  tag: "Book"

  /**
   * The book’s identifier.
   * @integer
   * @minimum 1
   */
  book: number
}

export type CeremonialItemIdentifier = {
  tag: "CeremonialItem"

  /**
   * The ceremonial item’s identifier.
   * @integer
   * @minimum 1
   */
  ceremonial_item: number
}

export type ClothesIdentifier = {
  tag: "Clothes"

  /**
   * The clothes’ identifier.
   * @integer
   * @minimum 1
   */
  clothes: number
}

export type ContainerIdentifier = {
  tag: "Container"

  /**
   * The container’s identifier.
   * @integer
   * @minimum 1
   */
  container: number
}

export type ElixirIdentifier = {
  tag: "Elixir"

  /**
   * The elixir’s identifier.
   * @integer
   * @minimum 1
   */
  elixir: number
}

export type EquipmentOfBlessedOnesIdentifier = {
  tag: "EquipmentOfBlessedOnes"

  /**
   * The equipment of blessed ones’ identifier.
   * @integer
   * @minimum 1
   */
  equipment_of_blessed_ones: number
}

export type GemOrPreciousStoneIdentifier = {
  tag: "GemOrPreciousStone"

  /**
   * The gem or precious stone’s identifier.
   * @integer
   * @minimum 1
   */
  gem_or_precious_stone: number
}

export type IlluminationLightSourceIdentifier = {
  tag: "IlluminationLightSource"

  /**
   * The illumination light source’s identifier.
   * @integer
   * @minimum 1
   */
  illumination_light_source: number
}

export type IlluminationRefillsOrSuppliesIdentifier = {
  tag: "IlluminationRefillsOrSupplies"

  /**
   * The illumination refills or supplies’ identifier.
   * @integer
   * @minimum 1
   */
  illumination_refills_or_supplies: number
}

export type JewelryIdentifier = {
  tag: "Jewelry"

  /**
   * The jewelry’s identifier.
   * @integer
   * @minimum 1
   */
  jewelry: number
}

export type LiebesspielzeugIdentifier = {
  tag: "Liebesspielzeug"

  /**
   * The Liebesspielzeug’s identifier.
   * @integer
   * @minimum 1
   */
  liebesspielzeug: number
}

export type LuxuryGoodIdentifier = {
  tag: "LuxuryGood"

  /**
   * The luxury good’s identifier.
   * @integer
   * @minimum 1
   */
  luxury_good: number
}

export type MagicalArtifactIdentifier = {
  tag: "MagicalArtifact"

  /**
   * The magical artifact’s identifier.
   * @integer
   * @minimum 1
   */
  magical_artifact: number
}

export type MusicalInstrumentIdentifier = {
  tag: "MusicalInstrument"

  /**
   * The musical instrument’s identifier.
   * @integer
   * @minimum 1
   */
  musical_instrument: number
}

export type OrienteeringAidIdentifier = {
  tag: "OrienteeringAid"

  /**
   * The orienteering aid’s identifier.
   * @integer
   * @minimum 1
   */
  orienteering_aid: number
}

export type PoisonIdentifier = {
  tag: "Poison"

  /**
   * The poison’s identifier.
   * @integer
   * @minimum 1
   */
  poison: number
}

export type RopeOrChainIdentifier = {
  tag: "RopeOrChain"

  /**
   * The rope or chain’s identifier.
   * @integer
   * @minimum 1
   */
  rope_or_chain: number
}

export type StationaryIdentifier = {
  tag: "Stationary"

  /**
   * The stationary’s identifier.
   * @integer
   * @minimum 1
   */
  stationary: number
}

export type ThievesToolIdentifier = {
  tag: "ThievesTool"

  /**
   * The thieves tool’s identifier.
   * @integer
   * @minimum 1
   */
  thieves_tool: number
}

export type ToolOfTheTradeIdentifier = {
  tag: "ToolOfTheTrade"

  /**
   * The tool of the trade’s identifier.
   * @integer
   * @minimum 1
   */
  tool_of_the_trade: number
}

export type TravelGearOrToolIdentifier = {
  tag: "TravelGearOrTool"

  /**
   * The travel gear or tool’s identifier.
   * @integer
   * @minimum 1
   */
  travel_gear_or_tool: number
}

export type VehicleIdentifier = {
  tag: "Vehicle"

  /**
   * The vehicle’s identifier.
   * @integer
   * @minimum 1
   */
  vehicle: number
}

export type WeaponIdentifier = {
  tag: "Weapon"

  /**
   * The weapon’s identifier.
   * @integer
   * @minimum 1
   */
  weapon: number
}

export type WeaponAccessoryIdentifier = {
  tag: "WeaponAccessory"

  /**
   * The weapon accessory’s identifier.
   * @integer
   * @minimum 1
   */
  weapon_accessory: number
}

export type ReachIdentifier = {
  tag: "Reach"

  /**
   * The reach’s identifier.
   * @integer
   * @minimum 1
   * @maximum 4
   */
  reach: number
}

export type PatronCategoryIdentifier = {
  tag: "PatronCategory"

  /**
   * The patron category’s identifier.
   * @integer
   * @minimum 1
   */
  patron_category: number
}

export type PersonalityTraitIdentifier = {
  tag: "PersonalityTrait"

  /**
   * The personality trait’s identifier.
   * @integer
   * @minimum 1
   */
  personality_trait: number
}

export type HairColorIdentifier = {
  tag: "HairColor"

  /**
   * The hair color’s identifier.
   * @integer
   * @minimum 1
   */
  hair_color: number
}

export type EyeColorIdentifier = {
  tag: "EyeColor"

  /**
   * The eye color’s identifier.
   * @integer
   * @minimum 1
   */
  eye_color: number
}

export type PactCategoryIdentifier = {
  tag: "PactCategory"

  /**
   * The pact category’s identifier.
   * @integer
   * @minimum 1
   */
  pact_category: number
}

export type PactDomainIdentifier = {
  tag: "PactDomain"

  /**
   * The pact domain’s identifier.
   * @integer
   * @minimum 1
   */
  pact_domain: number
}

export type AnimistTribeIdentifier = {
  tag: "AnimistTribe"

  /**
   * The animist tribe’s identifier.
   * @integer
   * @minimum 1
   */
  animist_tribe: number
}

export type InfluenceIdentifier = {
  tag: "Influence"

  /**
   * The influence’s identifier.
   * @integer
   * @minimum 1
   */
  influence: number
}

export type ConditionIdentifier = {
  tag: "Condition"

  /**
   * The condition’s identifier.
   * @integer
   * @minimum 1
   */
  condition: number
}

export type StateIdentifier = {
  tag: "State"

  /**
   * The state’s identifier.
   * @integer
   * @minimum 1
   */
  state: number
}

export type DiseaseIdentifier = {
  tag: "Disease"

  /**
   * The disease’s identifier.
   * @integer
   * @minimum 1
   */
  disease: number
}

export type SexPracticeIdentifier = {
  tag: "SexPractice"

  /**
   * The sex practice’s identifier.
   * @integer
   * @minimum 1
   */
  sex_practice: number
}

export type TradeSecretIdentifier = {
  tag: "TradeSecret"

  /**
   * The trade secret‘s identifier.
   * @integer
   * @minimum 1
   */
  trade_secret: number
}

export type AnimalShapeIdentifier = {
  tag: "AnimalShape"

  /**
   * The animal shape‘s identifier.
   * @integer
   * @minimum 1
   */
  animal_shape: number
}

export type ArcaneBardTraditionIdentifier = {
  tag: "ArcaneBardTradition"

  /**
   * The arcane bard tradition‘s identifier.
   * @integer
   * @minimum 1
   */
  arcane_bard_tradition: number
}

export type ArcaneDancerTraditionIdentifier = {
  tag: "ArcaneDancerTradition"

  /**
   * The arcane dancer tradition‘s identifier.
   * @integer
   * @minimum 1
   */
  arcane_dancer_tradition: number
}
