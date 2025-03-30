import * as Identifier from "./_Identifier.js"

export type ActivatableIdentifier =
  | Identifier.AdvantageIdentifier
  | Identifier.DisadvantageIdentifier
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.AdvancedKarmaSpecialAbilityIdentifier
  | Identifier.AdvancedMagicalSpecialAbilityIdentifier
  | Identifier.AdvancedSkillSpecialAbilityIdentifier
  | Identifier.AncestorGlyphIdentifier
  | Identifier.ArcaneOrbEnchantmentIdentifier
  | Identifier.AttireEnchantmentIdentifier
  | Identifier.BlessedTraditionIdentifier
  | Identifier.BowlEnchantmentIdentifier
  | Identifier.BrawlingSpecialAbilityIdentifier
  | Identifier.CauldronEnchantmentIdentifier
  | Identifier.CeremonialItemSpecialAbilityIdentifier
  | Identifier.ChronicleEnchantmentIdentifier
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier
  | Identifier.DaggerRitualIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.FatePointSexSpecialAbilityIdentifier
  | Identifier.FatePointSpecialAbilityIdentifier
  | Identifier.FoolsHatEnchantmentIdentifier
  | Identifier.GeneralSpecialAbilityIdentifier
  | Identifier.InstrumentEnchantmentIdentifier
  | Identifier.KarmaSpecialAbilityIdentifier
  | Identifier.KrallenkettenzauberIdentifier
  | Identifier.LiturgicalStyleSpecialAbilityIdentifier
  | Identifier.LycantropicGiftIdentifier
  | Identifier.MagicalSignIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.MagicalTraditionIdentifier
  | Identifier.MagicStyleSpecialAbilityIdentifier
  | Identifier.OrbEnchantmentIdentifier
  | Identifier.PactGiftIdentifier
  | Identifier.ProtectiveWardingCircleSpecialAbilityIdentifier
  | Identifier.RingEnchantmentIdentifier
  | Identifier.SermonIdentifier
  | Identifier.SexSpecialAbilityIdentifier
  | Identifier.SickleRitualIdentifier
  | Identifier.SikaryanDrainSpecialAbilityIdentifier
  | Identifier.SkillStyleSpecialAbilityIdentifier
  | Identifier.SpellSwordEnchantmentIdentifier
  | Identifier.StaffEnchantmentIdentifier
  | Identifier.ToyEnchantmentIdentifier
  | Identifier.TrinkhornzauberIdentifier
  | Identifier.VampiricGiftIdentifier
  | Identifier.VisionIdentifier
  | Identifier.WandEnchantmentIdentifier
  | Identifier.WeaponEnchantmentIdentifier

export type SpecialAbilityIdentifier =
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.AdvancedKarmaSpecialAbilityIdentifier
  | Identifier.AdvancedMagicalSpecialAbilityIdentifier
  | Identifier.AdvancedSkillSpecialAbilityIdentifier
  | Identifier.AncestorGlyphIdentifier
  | Identifier.ArcaneOrbEnchantmentIdentifier
  | Identifier.AttireEnchantmentIdentifier
  | Identifier.BlessedTraditionIdentifier
  | Identifier.BowlEnchantmentIdentifier
  | Identifier.BrawlingSpecialAbilityIdentifier
  | Identifier.CauldronEnchantmentIdentifier
  | Identifier.CeremonialItemSpecialAbilityIdentifier
  | Identifier.ChronicleEnchantmentIdentifier
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier
  | Identifier.DaggerRitualIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.FatePointSexSpecialAbilityIdentifier
  | Identifier.FatePointSpecialAbilityIdentifier
  | Identifier.FoolsHatEnchantmentIdentifier
  | Identifier.GeneralSpecialAbilityIdentifier
  | Identifier.InstrumentEnchantmentIdentifier
  | Identifier.KarmaSpecialAbilityIdentifier
  | Identifier.KrallenkettenzauberIdentifier
  | Identifier.LiturgicalStyleSpecialAbilityIdentifier
  | Identifier.LycantropicGiftIdentifier
  | Identifier.MagicalSignIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.MagicalTraditionIdentifier
  | Identifier.MagicStyleSpecialAbilityIdentifier
  | Identifier.OrbEnchantmentIdentifier
  | Identifier.PactGiftIdentifier
  | Identifier.ProtectiveWardingCircleSpecialAbilityIdentifier
  | Identifier.RingEnchantmentIdentifier
  | Identifier.SermonIdentifier
  | Identifier.SexSpecialAbilityIdentifier
  | Identifier.SickleRitualIdentifier
  | Identifier.SikaryanDrainSpecialAbilityIdentifier
  | Identifier.SkillStyleSpecialAbilityIdentifier
  | Identifier.SpellSwordEnchantmentIdentifier
  | Identifier.StaffEnchantmentIdentifier
  | Identifier.ToyEnchantmentIdentifier
  | Identifier.TrinkhornzauberIdentifier
  | Identifier.VampiricGiftIdentifier
  | Identifier.VisionIdentifier
  | Identifier.WandEnchantmentIdentifier
  | Identifier.WeaponEnchantmentIdentifier

export type CombatRelatedSpecialAbilityIdentifier =
  | Identifier.CombatSpecialAbilityIdentifier
  | Identifier.CombatStyleSpecialAbilityIdentifier
  | Identifier.AdvancedCombatSpecialAbilityIdentifier
  | Identifier.CommandSpecialAbilityIdentifier

export type TraditionIdentifier =
  | Identifier.MagicalTraditionIdentifier
  | Identifier.BlessedTraditionIdentifier

export type RatedIdentifier =
  | Identifier.AttributeIdentifier
  | Identifier.SkillIdentifier
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type SkillishIdentifier =
  | Identifier.SkillIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier

export type AdvancedSpecialAbilityRestrictedOptionIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.SkillIdentifier
  | Identifier.ElementIdentifier
  | Identifier.AspectIdentifier

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

export type SpellworkIdentifier = Identifier.SpellIdentifier | Identifier.RitualIdentifier

export type LiturgyIdentifier = Identifier.LiturgicalChantIdentifier | Identifier.CeremonyIdentifier

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
  | Identifier.MagicalRuneIdentifier

export type SelectOptionIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.BlessingIdentifier
  | Identifier.CantripIdentifier
  | Identifier.TradeSecretIdentifier
  | Identifier.ScriptIdentifier
  | Identifier.AnimalShapeIdentifier
  | Identifier.ArcaneBardTraditionIdentifier
  | Identifier.ArcaneDancerTraditionIdentifier
  | Identifier.SexPracticeIdentifier
  | Identifier.RaceIdentifier
  | Identifier.CultureIdentifier
  | Identifier.BlessedTraditionIdentifier
  | Identifier.ElementIdentifier
  | Identifier.PropertyIdentifier
  | Identifier.AspectIdentifier
  | Identifier.DiseaseIdentifier
  | Identifier.PoisonIdentifier
  | Identifier.LanguageIdentifier
  | Identifier.SkillIdentifier
  | Identifier.SkillApplicationIdentifier
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier
  | Identifier.TargetCategoryIdentifier
  | Identifier.PatronIdentifier

export type RequirableSelectOptionIdentifier =
  | Identifier.GeneralIdentifier
  | Identifier.SkillIdentifier
  | Identifier.CloseCombatTechniqueIdentifier
  | Identifier.RangedCombatTechniqueIdentifier
  | Identifier.PropertyIdentifier
  | Identifier.AspectIdentifier
  | Identifier.LanguageIdentifier
  | Identifier.AnimalShapeIdentifier
  | Identifier.LiturgicalChantIdentifier
  | Identifier.CeremonyIdentifier
  | Identifier.SpellIdentifier
  | Identifier.RitualIdentifier

export type CoreRuleDerivableContentIdentifier =
  | Identifier.MagicalTraditionIdentifier
  | Identifier.FamiliarSpecialAbilityIdentifier
  | Identifier.MagicalSpecialAbilityIdentifier
  | Identifier.BlessedTraditionIdentifier

export type EquipmentIdentifier =
  | Identifier.AmmunitionIdentifier
  | Identifier.AnimalIdentifier
  | Identifier.AnimalCareIdentifier
  | Identifier.ArmorIdentifier
  | Identifier.BandageOrRemedyIdentifier
  | Identifier.BookIdentifier
  | Identifier.CeremonialItemIdentifier
  | Identifier.ClothesIdentifier
  | Identifier.ContainerIdentifier
  | Identifier.ElixirIdentifier
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
