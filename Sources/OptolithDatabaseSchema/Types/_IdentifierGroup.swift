import FileDB

@ModelEnum
public enum ActivatableIdentifier {
    case Advantage(AdvantageIdentifier())
    case Disadvantage(DisadvantageIdentifier())
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifier())
    case AdvancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifier())
    case AdvancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifier())
    case AdvancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifier())
    case AncestorGlyph(AncestorGlyphIdentifier())
    case ArcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifier())
    case AttireEnchantment(AttireEnchantmentIdentifier())
    case BlessedTradition(BlessedTraditionIdentifier())
    case BowlEnchantment(BowlEnchantmentIdentifier())
    case BrawlingSpecialAbility(BrawlingSpecialAbilityIdentifier())
    case CauldronEnchantment(CauldronEnchantmentIdentifier())
    case CeremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifier())
    case ChronicleEnchantment(ChronicleEnchantmentIdentifier())
    case CombatSpecialAbility(CombatSpecialAbilityIdentifier())
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifier())
    case CommandSpecialAbility(CommandSpecialAbilityIdentifier())
    case DaggerRitual(DaggerRitualIdentifier())
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifier())
    case FatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifier())
    case FatePointSpecialAbility(FatePointSpecialAbilityIdentifier())
    case FoolsHatEnchantment(FoolsHatEnchantmentIdentifier())
    case GeneralSpecialAbility(GeneralSpecialAbilityIdentifier())
    case InstrumentEnchantment(InstrumentEnchantmentIdentifier())
    case KarmaSpecialAbility(KarmaSpecialAbilityIdentifier())
    case Krallenkettenzauber(KrallenkettenzauberIdentifier())
    case LiturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifier())
    case LycantropicGift(LycantropicGiftIdentifier())
    case MagicalSign(MagicalSignIdentifier())
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifier())
    case MagicalTradition(MagicalTraditionIdentifier())
    case MagicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifier())
    case OrbEnchantment(OrbEnchantmentIdentifier())
    case PactGift(PactGiftIdentifier())
    case ProtectiveWardingCircleSpecialAbility(ProtectiveWardingCircleSpecialAbilityIdentifier())
    case RingEnchantment(RingEnchantmentIdentifier())
    case Sermon(SermonIdentifier())
    case SexSpecialAbility(SexSpecialAbilityIdentifier())
    case SickleRitual(SickleRitualIdentifier())
    case SikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifier())
    case SkillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifier())
    case SpellSwordEnchantment(SpellSwordEnchantmentIdentifier())
    case StaffEnchantment(StaffEnchantmentIdentifier())
    case ToyEnchantment(ToyEnchantmentIdentifier())
    case Trinkhornzauber(TrinkhornzauberIdentifier())
    case VampiricGift(VampiricGiftIdentifier())
    case Vision(VisionIdentifier())
    case WandEnchantment(WandEnchantmentIdentifier())
    case WeaponEnchantment(WeaponEnchantmentIdentifier())
}

@ModelEnum
public enum SpecialAbilityIdentifier {
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifier())
    case AdvancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifier())
    case AdvancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifier())
    case AdvancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifier())
    case AncestorGlyph(AncestorGlyphIdentifier())
    case ArcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifier())
    case AttireEnchantment(AttireEnchantmentIdentifier())
    case BlessedTradition(BlessedTraditionIdentifier())
    case BowlEnchantment(BowlEnchantmentIdentifier())
    case BrawlingSpecialAbility(BrawlingSpecialAbilityIdentifier())
    case CauldronEnchantment(CauldronEnchantmentIdentifier())
    case CeremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifier())
    case ChronicleEnchantment(ChronicleEnchantmentIdentifier())
    case CombatSpecialAbility(CombatSpecialAbilityIdentifier())
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifier())
    case CommandSpecialAbility(CommandSpecialAbilityIdentifier())
    case DaggerRitual(DaggerRitualIdentifier())
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifier())
    case FatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifier())
    case FatePointSpecialAbility(FatePointSpecialAbilityIdentifier())
    case FoolsHatEnchantment(FoolsHatEnchantmentIdentifier())
    case GeneralSpecialAbility(GeneralSpecialAbilityIdentifier())
    case InstrumentEnchantment(InstrumentEnchantmentIdentifier())
    case KarmaSpecialAbility(KarmaSpecialAbilityIdentifier())
    case Krallenkettenzauber(KrallenkettenzauberIdentifier())
    case LiturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifier())
    case LycantropicGift(LycantropicGiftIdentifier())
    case MagicalSign(MagicalSignIdentifier())
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifier())
    case MagicalTradition(MagicalTraditionIdentifier())
    case MagicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifier())
    case OrbEnchantment(OrbEnchantmentIdentifier())
    case PactGift(PactGiftIdentifier())
    case ProtectiveWardingCircleSpecialAbility(ProtectiveWardingCircleSpecialAbilityIdentifier())
    case RingEnchantment(RingEnchantmentIdentifier())
    case Sermon(SermonIdentifier())
    case SexSpecialAbility(SexSpecialAbilityIdentifier())
    case SickleRitual(SickleRitualIdentifier())
    case SikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifier())
    case SkillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifier())
    case SpellSwordEnchantment(SpellSwordEnchantmentIdentifier())
    case StaffEnchantment(StaffEnchantmentIdentifier())
    case ToyEnchantment(ToyEnchantmentIdentifier())
    case Trinkhornzauber(TrinkhornzauberIdentifier())
    case VampiricGift(VampiricGiftIdentifier())
    case Vision(VisionIdentifier())
    case WandEnchantment(WandEnchantmentIdentifier())
    case WeaponEnchantment(WeaponEnchantmentIdentifier())
}

@ModelEnum
public enum CombatRelatedSpecialAbilityIdentifier {
    case CombatSpecialAbility(CombatSpecialAbilityIdentifier())
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifier())
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifier())
    case CommandSpecialAbility(CommandSpecialAbilityIdentifier())
}

@ModelEnum
public enum TraditionIdentifier {
    case MagicalTradition(MagicalTraditionIdentifier())
    case BlessedTradition(BlessedTraditionIdentifier())
}

@ModelEnum
public enum RatedIdentifier {
    case Attribute(AttributeIdentifier())
    case Skill(SkillIdentifier())
    case CloseCombatTechnique(CloseCombatTechniqueIdentifier())
    case RangedCombatTechnique(RangedCombatTechniqueIdentifier())
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
}

@ModelEnum
public enum SkillishIdentifier {
    case Skill(SkillIdentifier())
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
}

@ModelEnum
public enum AdvancedSpecialAbilityRestrictedOptionIdentifier {
    case General(GeneralIdentifier())
    case Skill(SkillIdentifier())
    case Element(ElementIdentifier())
    case Aspect(AspectIdentifier())
}

@ModelEnum
public enum VolumePointsOptionReferenceIdentifier {
    case General(GeneralIdentifier())
    case AnimalShapeSize(AnimalShapeSizeIdentifier())
}

@ModelEnum
public enum CombatTechniqueIdentifier {
    case CloseCombatTechnique(CloseCombatTechniqueIdentifier())
    case RangedCombatTechnique(RangedCombatTechniqueIdentifier())
}

@ModelEnum
public enum ExtensionRuleIdentifier {
    case FocusRule(FocusRuleIdentifier())
    case OptionalRule(OptionalRuleIdentifier())
}

@ModelEnum
public enum SkillWithEnhancementsIdentifier {
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
}

@ModelEnum
public enum SpellworkIdentifier {
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
}

@ModelEnum
public enum LiturgyIdentifier {
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
}

@ModelEnum
public enum MagicalActionIdentifier {
    case Curse(CurseIdentifier())
    case ElvenMagicalSong(ElvenMagicalSongIdentifier())
    case DominationRitual(DominationRitualIdentifier())
    case MagicalMelody(MagicalMelodyIdentifier())
    case MagicalDance(MagicalDanceIdentifier())
    case JesterTrick(JesterTrickIdentifier())
    case AnimistPower(AnimistPowerIdentifier())
    case GeodeRitual(GeodeRitualIdentifier())
    case ZibiljaRitual(ZibiljaRitualIdentifier())
    case MagicalRune(MagicalRuneIdentifier())
}

@ModelEnum
public enum SelectOptionIdentifier {
    case General(GeneralIdentifier())
    case Blessing(BlessingIdentifier())
    case Cantrip(CantripIdentifier())
    case TradeSecret(TradeSecretIdentifier())
    case Script(ScriptIdentifier())
    case AnimalShape(AnimalShapeIdentifier())
    case ArcaneBardTradition(ArcaneBardTraditionIdentifier())
    case ArcaneDancerTradition(ArcaneDancerTraditionIdentifier())
    case SexPractice(SexPracticeIdentifier())
    case Race(RaceIdentifier())
    case Culture(CultureIdentifier())
    case BlessedTradition(BlessedTraditionIdentifier())
    case Element(ElementIdentifier())
    case Property(PropertyIdentifier())
    case Aspect(AspectIdentifier())
    case Disease(DiseaseIdentifier())
    case Poison(PoisonIdentifier())
    case Language(LanguageIdentifier())
    case Skill(SkillIdentifier())
    case SkillApplication(SkillApplicationIdentifier())
    case CloseCombatTechnique(CloseCombatTechniqueIdentifier())
    case RangedCombatTechnique(RangedCombatTechniqueIdentifier())
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
    case TargetCategory(TargetCategoryIdentifier())
    case Patron(PatronIdentifier())
}

@ModelEnum
public enum RequirableSelectOptionIdentifier {
    case General(GeneralIdentifier())
    case Skill(SkillIdentifier())
    case CloseCombatTechnique(CloseCombatTechniqueIdentifier())
    case RangedCombatTechnique(RangedCombatTechniqueIdentifier())
    case Property(PropertyIdentifier())
    case Aspect(AspectIdentifier())
    case Language(LanguageIdentifier())
    case AnimalShape(AnimalShapeIdentifier())
    case LiturgicalChant(LiturgicalChantIdentifier())
    case Ceremony(CeremonyIdentifier())
    case Spell(SpellIdentifier())
    case Ritual(RitualIdentifier())
}

@ModelEnum
public enum CoreRuleDerivableContentIdentifier {
    case MagicalTradition(MagicalTraditionIdentifier())
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifier())
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifier())
    case BlessedTradition(BlessedTraditionIdentifier())
}

@ModelEnum
public enum EquipmentIdentifier {
    case Ammunition(AmmunitionIdentifier())
    case Animal(AnimalIdentifier())
    case AnimalCare(AnimalCareIdentifier())
    case Armor(ArmorIdentifier())
    case BandageOrRemedy(BandageOrRemedyIdentifier())
    case Book(BookIdentifier())
    case CeremonialItem(CeremonialItemIdentifier())
    case Clothes(ClothesIdentifier())
    case Container(ContainerIdentifier())
    case Elixir(ElixirIdentifier())
    case EquipmentOfBlessedOnes(EquipmentOfBlessedOnesIdentifier())
    case GemOrPreciousStone(GemOrPreciousStoneIdentifier())
    case IlluminationLightSource(IlluminationLightSourceIdentifier())
    case IlluminationRefillsOrSupplies(IlluminationRefillsOrSuppliesIdentifier())
    case Jewelry(JewelryIdentifier())
    case Liebesspielzeug(LiebesspielzeugIdentifier())
    case LuxuryGood(LuxuryGoodIdentifier())
    case MagicalArtifact(MagicalArtifactIdentifier())
    case MusicalInstrument(MusicalInstrumentIdentifier())
    case OrienteeringAid(OrienteeringAidIdentifier())
    case Poison(PoisonIdentifier())
    case RopeOrChain(RopeOrChainIdentifier())
    case Stationary(StationaryIdentifier())
    case ThievesTool(ThievesToolIdentifier())
    case ToolOfTheTrade(ToolOfTheTradeIdentifier())
    case TravelGearOrTool(TravelGearOrToolIdentifier())
    case Vehicle(VehicleIdentifier())
    case Weapon(WeaponIdentifier())
    case WeaponAccessory(WeaponAccessoryIdentifier())
}
