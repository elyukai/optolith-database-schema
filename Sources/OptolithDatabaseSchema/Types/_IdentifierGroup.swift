import FileDB

@ModelEnum
public enum ActivatableIdentifier {
    case advantage(AdvantageIdentifierObject)
    case disadvantage(DisadvantageIdentifierObject)
    case advancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case advancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifierObject)
    case advancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifierObject)
    case advancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifierObject)
    case ancestorGlyph(AncestorGlyphIdentifierObject)
    case arcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifierObject)
    case attireEnchantment(AttireEnchantmentIdentifierObject)
    case blessedTradition(BlessedTraditionIdentifierObject)
    case bowlEnchantment(BowlEnchantmentIdentifierObject)
    case brawlingSpecialAbility(BrawlingSpecialAbilityIdentifierObject)
    case cauldronEnchantment(CauldronEnchantmentIdentifierObject)
    case ceremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifierObject)
    case chronicleEnchantment(ChronicleEnchantmentIdentifierObject)
    case combatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case combatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case commandSpecialAbility(CommandSpecialAbilityIdentifierObject)
    case daggerRitual(DaggerRitualIdentifierObject)
    case familiarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case fatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifierObject)
    case fatePointSpecialAbility(FatePointSpecialAbilityIdentifierObject)
    case foolsHatEnchantment(FoolsHatEnchantmentIdentifierObject)
    case generalSpecialAbility(GeneralSpecialAbilityIdentifierObject)
    case instrumentEnchantment(InstrumentEnchantmentIdentifierObject)
    case karmaSpecialAbility(KarmaSpecialAbilityIdentifierObject)
    case krallenkettenzauber(KrallenkettenzauberIdentifierObject)
    case liturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifierObject)
    case lycantropicGift(LycantropicGiftIdentifierObject)
    case magicalSign(MagicalSignIdentifierObject)
    case magicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case magicalTradition(MagicalTraditionIdentifierObject)
    case magicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifierObject)
    case orbEnchantment(OrbEnchantmentIdentifierObject)
    case pactGift(PactGiftIdentifierObject)
    case protectiveWardingCircleSpecialAbility(
        ProtectiveWardingCircleSpecialAbilityIdentifierObject)
    case ringEnchantment(RingEnchantmentIdentifierObject)
    case sermon(SermonIdentifierObject)
    case sexSpecialAbility(SexSpecialAbilityIdentifierObject)
    case sickleRitual(SickleRitualIdentifierObject)
    case sikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifierObject)
    case skillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifierObject)
    case spellSwordEnchantment(SpellSwordEnchantmentIdentifierObject)
    case staffEnchantment(StaffEnchantmentIdentifierObject)
    case toyEnchantment(ToyEnchantmentIdentifierObject)
    case trinkhornzauber(TrinkhornzauberIdentifierObject)
    case vampiricGift(VampiricGiftIdentifierObject)
    case vision(VisionIdentifierObject)
    case wandEnchantment(WandEnchantmentIdentifierObject)
    case weaponEnchantment(WeaponEnchantmentIdentifierObject)
}

@ModelEnum
public enum SpecialAbilityIdentifier {
    case advancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case advancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifierObject)
    case advancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifierObject)
    case advancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifierObject)
    case ancestorGlyph(AncestorGlyphIdentifierObject)
    case arcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifierObject)
    case attireEnchantment(AttireEnchantmentIdentifierObject)
    case blessedTradition(BlessedTraditionIdentifierObject)
    case bowlEnchantment(BowlEnchantmentIdentifierObject)
    case brawlingSpecialAbility(BrawlingSpecialAbilityIdentifierObject)
    case cauldronEnchantment(CauldronEnchantmentIdentifierObject)
    case ceremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifierObject)
    case chronicleEnchantment(ChronicleEnchantmentIdentifierObject)
    case combatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case combatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case commandSpecialAbility(CommandSpecialAbilityIdentifierObject)
    case daggerRitual(DaggerRitualIdentifierObject)
    case familiarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case fatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifierObject)
    case fatePointSpecialAbility(FatePointSpecialAbilityIdentifierObject)
    case foolsHatEnchantment(FoolsHatEnchantmentIdentifierObject)
    case generalSpecialAbility(GeneralSpecialAbilityIdentifierObject)
    case instrumentEnchantment(InstrumentEnchantmentIdentifierObject)
    case karmaSpecialAbility(KarmaSpecialAbilityIdentifierObject)
    case krallenkettenzauber(KrallenkettenzauberIdentifierObject)
    case liturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifierObject)
    case lycantropicGift(LycantropicGiftIdentifierObject)
    case magicalSign(MagicalSignIdentifierObject)
    case magicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case magicalTradition(MagicalTraditionIdentifierObject)
    case magicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifierObject)
    case orbEnchantment(OrbEnchantmentIdentifierObject)
    case pactGift(PactGiftIdentifierObject)
    case protectiveWardingCircleSpecialAbility(
        ProtectiveWardingCircleSpecialAbilityIdentifierObject)
    case ringEnchantment(RingEnchantmentIdentifierObject)
    case sermon(SermonIdentifierObject)
    case sexSpecialAbility(SexSpecialAbilityIdentifierObject)
    case sickleRitual(SickleRitualIdentifierObject)
    case sikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifierObject)
    case skillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifierObject)
    case spellSwordEnchantment(SpellSwordEnchantmentIdentifierObject)
    case staffEnchantment(StaffEnchantmentIdentifierObject)
    case toyEnchantment(ToyEnchantmentIdentifierObject)
    case trinkhornzauber(TrinkhornzauberIdentifierObject)
    case vampiricGift(VampiricGiftIdentifierObject)
    case vision(VisionIdentifierObject)
    case wandEnchantment(WandEnchantmentIdentifierObject)
    case weaponEnchantment(WeaponEnchantmentIdentifierObject)
}

@ModelEnum
public enum CombatRelatedSpecialAbilityIdentifier {
    case combatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case combatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case advancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case commandSpecialAbility(CommandSpecialAbilityIdentifierObject)
}

@ModelEnum
public enum TraditionIdentifier {
    case magicalTradition(MagicalTraditionIdentifierObject)
    case blessedTradition(BlessedTraditionIdentifierObject)
}

@ModelEnum
public enum RatedIdentifier {
    case attribute(AttributeIdentifierObject)
    case skill(SkillIdentifierObject)
    case closeCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case rangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum SkillishIdentifier {
    case skill(SkillIdentifierObject)
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum AdvancedSpecialAbilityRestrictedOptionIdentifier {
    case general(GeneralSelectOptionIdentifierObject)
    case skill(SkillIdentifierObject)
    case element(ElementIdentifierObject)
    case aspect(AspectIdentifierObject)
}

@ModelEnum
public enum VolumePointsOptionReferenceIdentifier {
    case general(GeneralSelectOptionIdentifierObject)
    case animalShapeSize(AnimalShapeSizeIdentifierObject)
}

@ModelEnum
public enum CombatTechniqueIdentifier {
    case closeCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case rangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
}

@ModelEnum
public enum ExtensionRuleIdentifier {
    case focusRule(FocusRuleIdentifierObject)
    case optionalRule(OptionalRuleIdentifierObject)
}

@ModelEnum
public enum SkillWithEnhancementsIdentifier {
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum SpellworkIdentifier {
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
}

@ModelEnum
public enum LiturgyIdentifier {
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum MagicalActionIdentifier {
    case curse(CurseIdentifierObject)
    case elvenMagicalSong(ElvenMagicalSongIdentifierObject)
    case dominationRitual(DominationRitualIdentifierObject)
    case magicalMelody(MagicalMelodyIdentifierObject)
    case magicalDance(MagicalDanceIdentifierObject)
    case jesterTrick(JesterTrickIdentifierObject)
    case animistPower(AnimistPowerIdentifierObject)
    case geodeRitual(GeodeRitualIdentifierObject)
    case zibiljaRitual(ZibiljaRitualIdentifierObject)
    case magicalRune(MagicalRuneIdentifierObject)
}

@ModelEnum
public enum SelectOptionIdentifier {
    case general(GeneralSelectOptionIdentifierObject)
    case blessing(BlessingIdentifierObject)
    case cantrip(CantripIdentifierObject)
    case tradeSecret(TradeSecretIdentifierObject)
    case script(ScriptIdentifierObject)
    case animalShape(AnimalShapeIdentifierObject)
    case arcaneBardTradition(ArcaneBardTraditionIdentifierObject)
    case arcaneDancerTradition(ArcaneDancerTraditionIdentifierObject)
    case sexPractice(SexPracticeIdentifierObject)
    case race(RaceIdentifierObject)
    case culture(CultureIdentifierObject)
    case blessedTradition(BlessedTraditionIdentifierObject)
    case element(ElementIdentifierObject)
    case property(PropertyIdentifierObject)
    case aspect(AspectIdentifierObject)
    case disease(DiseaseIdentifierObject)
    case poison(PoisonIdentifierObject)
    case language(LanguageIdentifierObject)
    case skill(SkillIdentifierObject)
    case skillApplication(SkillApplicationIdentifierObject)
    case closeCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case rangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
    case targetCategory(TargetCategoryIdentifierObject)
    case patron(PatronIdentifierObject)
}

@ModelEnum
public enum RequirableSelectOptionIdentifier {
    case general(GeneralSelectOptionIdentifierObject)
    case skill(SkillIdentifierObject)
    case closeCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case rangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case property(PropertyIdentifierObject)
    case aspect(AspectIdentifierObject)
    case language(LanguageIdentifierObject)
    case animalShape(AnimalShapeIdentifierObject)
    case liturgicalChant(LiturgicalChantIdentifierObject)
    case ceremony(CeremonyIdentifierObject)
    case spell(SpellIdentifierObject)
    case ritual(RitualIdentifierObject)
}

@ModelEnum
public enum CoreRuleDerivableContentIdentifier {
    case magicalTradition(MagicalTraditionIdentifierObject)
    case familiarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case magicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case blessedTradition(BlessedTraditionIdentifierObject)
}

@ModelEnum
public enum EquipmentIdentifier {
    case ammunition(AmmunitionIdentifierObject)
    case animal(AnimalIdentifierObject)
    case animalCare(AnimalCareIdentifierObject)
    case armor(ArmorIdentifierObject)
    case bandageOrRemedy(BandageOrRemedyIdentifierObject)
    case book(BookIdentifierObject)
    case ceremonialItem(CeremonialItemIdentifierObject)
    case clothes(ClothesIdentifierObject)
    case container(ContainerIdentifierObject)
    case elixir(ElixirIdentifierObject)
    case equipmentOfBlessedOnes(EquipmentOfBlessedOnesIdentifierObject)
    case gemOrPreciousStone(GemOrPreciousStoneIdentifierObject)
    case illuminationLightSource(IlluminationLightSourceIdentifierObject)
    case illuminationRefillsOrSupplies(IlluminationRefillsOrSuppliesIdentifierObject)
    case jewelry(JewelryIdentifierObject)
    case liebesspielzeug(LiebesspielzeugIdentifierObject)
    case luxuryGood(LuxuryGoodIdentifierObject)
    case magicalArtifact(MagicalArtifactIdentifierObject)
    case musicalInstrument(MusicalInstrumentIdentifierObject)
    case orienteeringAid(OrienteeringAidIdentifierObject)
    case poison(PoisonIdentifierObject)
    case ropeOrChain(RopeOrChainIdentifierObject)
    case stationary(StationaryIdentifierObject)
    case thievesTool(ThievesToolIdentifierObject)
    case toolOfTheTrade(ToolOfTheTradeIdentifierObject)
    case travelGearOrTool(TravelGearOrToolIdentifierObject)
    case vehicle(VehicleIdentifierObject)
    case weapon(WeaponIdentifierObject)
    case weaponAccessory(WeaponAccessoryIdentifierObject)
}
