import * as Identifier from "./_Identifier.js"

export type ActivatableIdentifier =
  | Identifier.AdvantageIdentifier
  | Identifier.DisadvantageIdentifier
  | Identifier.GeneralSpecialAbilityIdentifier
  | Identifier.FatePointSpecialAbilityIdentifier
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.StaffEnchantmentIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.KarmaSpecialAbilityIdentifier
  | Identifier.ProtectiveWardingCircleSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier
  | Identifier.MagicStyleSpecialAbilityIdentifier
  | Identifier.AdvancedMagicalSpecialAbilityIdentifier
  | Identifier.SpellSwordEnchantmentIdentifier
  | Identifier.DaggerRitualIdentifier
  | Identifier.InstrumentEnchantmentIdentifier
  | Identifier.AttireEnchantmentIdentifier
  | Identifier.OrbEnchantmentIdentifier
  | Identifier.WandEnchantmentIdentifier
  | Identifier.BrawlingSpecialAbilityIdentifier
  | Identifier.AncestorGlyphIdentifier
  | Identifier.CeremonialItemSpecialAbilityIdentifier
  | Identifier.SermonIdentifier
  | Identifier.LiturgicalStyleSpecialAbilityIdentifier
  | Identifier.AdvancedKarmaSpecialAbilityIdentifier
  | Identifier.VisionIdentifier
  | Identifier.MagicalTraditionIdentifier
  | Identifier.BlessedTraditionIdentifier
  | Identifier.PactGiftIdentifier
  | Identifier.SikaryanDrainSpecialAbilityIdentifier
  | Identifier.LycantropicGiftIdentifier
  | Identifier.SkillStyleSpecialAbilityIdentifier
  | Identifier.AdvancedSkillSpecialAbilityIdentifier
  | Identifier.ArcaneOrbEnchantmentIdentifier
  | Identifier.CauldronEnchantmentIdentifier
  | Identifier.FoolsHatEnchantmentIdentifier
  | Identifier.ToyEnchantmentIdentifier
  | Identifier.BowlEnchantmentIdentifier
  | Identifier.FatePointSexSpecialAbilityIdentifier
  | Identifier.SexSpecialAbilityIdentifier
  | Identifier.WeaponEnchantmentIdentifier
  | Identifier.SickleRitualIdentifier
  | Identifier.RingEnchantmentIdentifier
  | Identifier.ChronicleEnchantmentIdentifier

export type SpecialAbilityIdentifier =
  | Identifier.GeneralSpecialAbilityIdentifier
  | Identifier.FatePointSpecialAbilityIdentifier
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.StaffEnchantmentIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.KarmaSpecialAbilityIdentifier
  | Identifier.ProtectiveWardingCircleSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier
  | Identifier.MagicStyleSpecialAbilityIdentifier
  | Identifier.AdvancedMagicalSpecialAbilityIdentifier
  | Identifier.SpellSwordEnchantmentIdentifier
  | Identifier.DaggerRitualIdentifier
  | Identifier.InstrumentEnchantmentIdentifier
  | Identifier.AttireEnchantmentIdentifier
  | Identifier.OrbEnchantmentIdentifier
  | Identifier.WandEnchantmentIdentifier
  | Identifier.BrawlingSpecialAbilityIdentifier
  | Identifier.AncestorGlyphIdentifier
  | Identifier.CeremonialItemSpecialAbilityIdentifier
  | Identifier.SermonIdentifier
  | Identifier.LiturgicalStyleSpecialAbilityIdentifier
  | Identifier.AdvancedKarmaSpecialAbilityIdentifier
  | Identifier.VisionIdentifier
  | Identifier.MagicalTraditionIdentifier
  | Identifier.BlessedTraditionIdentifier
  | Identifier.PactGiftIdentifier
  | Identifier.SikaryanDrainSpecialAbilityIdentifier
  | Identifier.LycantropicGiftIdentifier
  | Identifier.SkillStyleSpecialAbilityIdentifier
  | Identifier.AdvancedSkillSpecialAbilityIdentifier
  | Identifier.ArcaneOrbEnchantmentIdentifier
  | Identifier.CauldronEnchantmentIdentifier
  | Identifier.FoolsHatEnchantmentIdentifier
  | Identifier.ToyEnchantmentIdentifier
  | Identifier.BowlEnchantmentIdentifier
  | Identifier.FatePointSexSpecialAbilityIdentifier
  | Identifier.SexSpecialAbilityIdentifier
  | Identifier.WeaponEnchantmentIdentifier
  | Identifier.SickleRitualIdentifier
  | Identifier.RingEnchantmentIdentifier
  | Identifier.ChronicleEnchantmentIdentifier

export type CombatRelatedSpecialAbilityIdentifier =
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier

export type RatedIdentifier =
  | Identifier.AttributeIdentifier
  | SkillIdentifier
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type SkillIdentifier =
  | Identifier.SkillIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type AdvancedSpecialAbilityRestrictedOptionIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.SkillIdentifier
  | Identifier.ElementIdentifier

export type VolumePointsOptionReferenceIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.AnimalShapeSizeIdentifier

export type CombatTechniqueIdentifier =
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier

export type ExtensionRuleIdentifier =
  | Identifier.FocusRuleIdentifier
  | Identifier.OptionalRuleIdentifier

export type SkillWithEnhancementsIdentifier =
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type SpellworkIdentifier =
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier

export type LiturgyIdentifier =
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type MagicalActionIdentifier =
  | Identifier.CurseIdentifier
  | Identifier.ElvenMagicalSongIdentifier
  | Identifier.DominationRitualIdentifier
  | Identifier.MagicalMelodyIdentifier
  | Identifier.MagicalDanceIdentifier
  | Identifier.JesterTrickIdentifier
  | Identifier.AnimistPowerIdentifier
  | Identifier.GeodeRitualIdentifier
  | Identifier.ZibiljaRitualIdentifier

export type RequirableSelectOptionIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.SkillIdentifier
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier

export type CoreRuleDerivableContentIdentifier =
  | Identifier.MagicalTraditionIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.BlessedTraditionIdentifier

export type EquipmentIdentifier =
  | Identifier.AlchemicumIdentifier
  | Identifier.AmmunitionIdentifier
  | Identifier.AnimalIdentifier
  | Identifier.AnimalCareIdentifier
  | Identifier.ArmorIdentifier
  | Identifier.BandageOrRemedyIdentifier
  | Identifier.BookIdentifier
  | Identifier.CeremonialItemIdentifier
  | Identifier.ClothesIdentifier
  | Identifier.ContainerIdentifier
  | Identifier.EquipmentOfBlessedOnesIdentifier
  | Identifier.GemOrPreciousStoneIdentifier
  | Identifier.IlluminationLightSourceIdentifier
  | Identifier.IlluminationRefillsOrSuppliesIdentifier
  | Identifier.JewelryIdentifier
  | Identifier.LiebesspielzeugIdentifier
  | Identifier.LuxuryGoodIdentifier
  | Identifier.MagicalArtifactIdentifier
  | Identifier.MusicalInstrumentIdentifier
  | Identifier.OrienteeringAidIdentifier
  | Identifier.PoisonIdentifier
  | Identifier.RopeOrChainIdentifier
  | Identifier.StationaryIdentifier
  | Identifier.ThievesToolIdentifier
  | Identifier.ToolOfTheTradeIdentifier
  | Identifier.TravelGearOrToolIdentifier
  | Identifier.VehicleIdentifier
  | Identifier.WeaponIdentifier
  | Identifier.WeaponAccessoryIdentifier

export type OneOrManyNumericIdentifiers = OneNumericIdentifier | ManyNumericIdentifiers

/**
 * @minimum 1
 */
type OneNumericIdentifier = number

/**
 * @minItems 2
 */
type ManyNumericIdentifiers = OneNumericIdentifier[]
