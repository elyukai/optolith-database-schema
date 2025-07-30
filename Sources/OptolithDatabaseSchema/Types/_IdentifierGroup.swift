import FileDB

@ModelEnum
public enum ActivatableIdentifier {
    case Advantage(AdvantageIdentifierObject)
    case Disadvantage(DisadvantageIdentifierObject)
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case AdvancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifierObject)
    case AdvancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifierObject)
    case AdvancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifierObject)
    case AncestorGlyph(AncestorGlyphIdentifierObject)
    case ArcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifierObject)
    case AttireEnchantment(AttireEnchantmentIdentifierObject)
    case BlessedTradition(BlessedTraditionIdentifierObject)
    case BowlEnchantment(BowlEnchantmentIdentifierObject)
    case BrawlingSpecialAbility(BrawlingSpecialAbilityIdentifierObject)
    case CauldronEnchantment(CauldronEnchantmentIdentifierObject)
    case CeremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifierObject)
    case ChronicleEnchantment(ChronicleEnchantmentIdentifierObject)
    case CombatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case CommandSpecialAbility(CommandSpecialAbilityIdentifierObject)
    case DaggerRitual(DaggerRitualIdentifierObject)
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case FatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifierObject)
    case FatePointSpecialAbility(FatePointSpecialAbilityIdentifierObject)
    case FoolsHatEnchantment(FoolsHatEnchantmentIdentifierObject)
    case GeneralSpecialAbility(GeneralSpecialAbilityIdentifierObject)
    case InstrumentEnchantment(InstrumentEnchantmentIdentifierObject)
    case KarmaSpecialAbility(KarmaSpecialAbilityIdentifierObject)
    case Krallenkettenzauber(KrallenkettenzauberIdentifierObject)
    case LiturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifierObject)
    case LycantropicGift(LycantropicGiftIdentifierObject)
    case MagicalSign(MagicalSignIdentifierObject)
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case MagicalTradition(MagicalTraditionIdentifierObject)
    case MagicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifierObject)
    case OrbEnchantment(OrbEnchantmentIdentifierObject)
    case PactGift(PactGiftIdentifierObject)
    case ProtectiveWardingCircleSpecialAbility(
        ProtectiveWardingCircleSpecialAbilityIdentifierObject)
    case RingEnchantment(RingEnchantmentIdentifierObject)
    case Sermon(SermonIdentifierObject)
    case SexSpecialAbility(SexSpecialAbilityIdentifierObject)
    case SickleRitual(SickleRitualIdentifierObject)
    case SikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifierObject)
    case SkillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifierObject)
    case SpellSwordEnchantment(SpellSwordEnchantmentIdentifierObject)
    case StaffEnchantment(StaffEnchantmentIdentifierObject)
    case ToyEnchantment(ToyEnchantmentIdentifierObject)
    case Trinkhornzauber(TrinkhornzauberIdentifierObject)
    case VampiricGift(VampiricGiftIdentifierObject)
    case Vision(VisionIdentifierObject)
    case WandEnchantment(WandEnchantmentIdentifierObject)
    case WeaponEnchantment(WeaponEnchantmentIdentifierObject)
}

@ModelEnum
public enum SpecialAbilityIdentifier {
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case AdvancedKarmaSpecialAbility(AdvancedKarmaSpecialAbilityIdentifierObject)
    case AdvancedMagicalSpecialAbility(AdvancedMagicalSpecialAbilityIdentifierObject)
    case AdvancedSkillSpecialAbility(AdvancedSkillSpecialAbilityIdentifierObject)
    case AncestorGlyph(AncestorGlyphIdentifierObject)
    case ArcaneOrbEnchantment(ArcaneOrbEnchantmentIdentifierObject)
    case AttireEnchantment(AttireEnchantmentIdentifierObject)
    case BlessedTradition(BlessedTraditionIdentifierObject)
    case BowlEnchantment(BowlEnchantmentIdentifierObject)
    case BrawlingSpecialAbility(BrawlingSpecialAbilityIdentifierObject)
    case CauldronEnchantment(CauldronEnchantmentIdentifierObject)
    case CeremonialItemSpecialAbility(CeremonialItemSpecialAbilityIdentifierObject)
    case ChronicleEnchantment(ChronicleEnchantmentIdentifierObject)
    case CombatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case CommandSpecialAbility(CommandSpecialAbilityIdentifierObject)
    case DaggerRitual(DaggerRitualIdentifierObject)
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case FatePointSexSpecialAbility(FatePointSexSpecialAbilityIdentifierObject)
    case FatePointSpecialAbility(FatePointSpecialAbilityIdentifierObject)
    case FoolsHatEnchantment(FoolsHatEnchantmentIdentifierObject)
    case GeneralSpecialAbility(GeneralSpecialAbilityIdentifierObject)
    case InstrumentEnchantment(InstrumentEnchantmentIdentifierObject)
    case KarmaSpecialAbility(KarmaSpecialAbilityIdentifierObject)
    case Krallenkettenzauber(KrallenkettenzauberIdentifierObject)
    case LiturgicalStyleSpecialAbility(LiturgicalStyleSpecialAbilityIdentifierObject)
    case LycantropicGift(LycantropicGiftIdentifierObject)
    case MagicalSign(MagicalSignIdentifierObject)
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case MagicalTradition(MagicalTraditionIdentifierObject)
    case MagicStyleSpecialAbility(MagicStyleSpecialAbilityIdentifierObject)
    case OrbEnchantment(OrbEnchantmentIdentifierObject)
    case PactGift(PactGiftIdentifierObject)
    case ProtectiveWardingCircleSpecialAbility(
        ProtectiveWardingCircleSpecialAbilityIdentifierObject)
    case RingEnchantment(RingEnchantmentIdentifierObject)
    case Sermon(SermonIdentifierObject)
    case SexSpecialAbility(SexSpecialAbilityIdentifierObject)
    case SickleRitual(SickleRitualIdentifierObject)
    case SikaryanDrainSpecialAbility(SikaryanDrainSpecialAbilityIdentifierObject)
    case SkillStyleSpecialAbility(SkillStyleSpecialAbilityIdentifierObject)
    case SpellSwordEnchantment(SpellSwordEnchantmentIdentifierObject)
    case StaffEnchantment(StaffEnchantmentIdentifierObject)
    case ToyEnchantment(ToyEnchantmentIdentifierObject)
    case Trinkhornzauber(TrinkhornzauberIdentifierObject)
    case VampiricGift(VampiricGiftIdentifierObject)
    case Vision(VisionIdentifierObject)
    case WandEnchantment(WandEnchantmentIdentifierObject)
    case WeaponEnchantment(WeaponEnchantmentIdentifierObject)
}

@ModelEnum
public enum CombatRelatedSpecialAbilityIdentifier {
    case CombatSpecialAbility(CombatSpecialAbilityIdentifierObject)
    case CombatStyleSpecialAbility(CombatStyleSpecialAbilityIdentifierObject)
    case AdvancedCombatSpecialAbility(AdvancedCombatSpecialAbilityIdentifierObject)
    case CommandSpecialAbility(CommandSpecialAbilityIdentifierObject)
}

@ModelEnum
public enum TraditionIdentifier {
    case MagicalTradition(MagicalTraditionIdentifierObject)
    case BlessedTradition(BlessedTraditionIdentifierObject)
}

@ModelEnum
public enum RatedIdentifier {
    case Attribute(AttributeIdentifierObject)
    case Skill(SkillIdentifierObject)
    case CloseCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case RangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum SkillishIdentifier {
    case Skill(SkillIdentifierObject)
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum AdvancedSpecialAbilityRestrictedOptionIdentifier {
    case General(GeneralSelectOptionIdentifierObject)
    case Skill(SkillIdentifierObject)
    case Element(ElementIdentifierObject)
    case Aspect(AspectIdentifierObject)
}

@ModelEnum
public enum VolumePointsOptionReferenceIdentifier {
    case General(GeneralSelectOptionIdentifierObject)
    case AnimalShapeSize(AnimalShapeSizeIdentifierObject)
}

@ModelEnum
public enum CombatTechniqueIdentifier {
    case CloseCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case RangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
}

@ModelEnum
public enum ExtensionRuleIdentifier {
    case FocusRule(FocusRuleIdentifierObject)
    case OptionalRule(OptionalRuleIdentifierObject)
}

@ModelEnum
public enum SkillWithEnhancementsIdentifier {
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum SpellworkIdentifier {
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
}

@ModelEnum
public enum LiturgyIdentifier {
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
}

@ModelEnum
public enum MagicalActionIdentifier {
    case Curse(CurseIdentifierObject)
    case ElvenMagicalSong(ElvenMagicalSongIdentifierObject)
    case DominationRitual(DominationRitualIdentifierObject)
    case MagicalMelody(MagicalMelodyIdentifierObject)
    case MagicalDance(MagicalDanceIdentifierObject)
    case JesterTrick(JesterTrickIdentifierObject)
    case AnimistPower(AnimistPowerIdentifierObject)
    case GeodeRitual(GeodeRitualIdentifierObject)
    case ZibiljaRitual(ZibiljaRitualIdentifierObject)
    case MagicalRune(MagicalRuneIdentifierObject)
}

@ModelEnum
public enum SelectOptionIdentifier {
    case General(GeneralSelectOptionIdentifierObject)
    case Blessing(BlessingIdentifierObject)
    case Cantrip(CantripIdentifierObject)
    case TradeSecret(TradeSecretIdentifierObject)
    case Script(ScriptIdentifierObject)
    case AnimalShape(AnimalShapeIdentifierObject)
    case ArcaneBardTradition(ArcaneBardTraditionIdentifierObject)
    case ArcaneDancerTradition(ArcaneDancerTraditionIdentifierObject)
    case SexPractice(SexPracticeIdentifierObject)
    case Race(RaceIdentifierObject)
    case Culture(CultureIdentifierObject)
    case BlessedTradition(BlessedTraditionIdentifierObject)
    case Element(ElementIdentifierObject)
    case Property(PropertyIdentifierObject)
    case Aspect(AspectIdentifierObject)
    case Disease(DiseaseIdentifierObject)
    case Poison(PoisonIdentifierObject)
    case Language(LanguageIdentifierObject)
    case Skill(SkillIdentifierObject)
    case SkillApplication(SkillApplicationIdentifierObject)
    case CloseCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case RangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
    case TargetCategory(TargetCategoryIdentifierObject)
    case Patron(PatronIdentifierObject)
}

@ModelEnum
public enum RequirableSelectOptionIdentifier {
    case General(GeneralSelectOptionIdentifierObject)
    case Skill(SkillIdentifierObject)
    case CloseCombatTechnique(CloseCombatTechniqueIdentifierObject)
    case RangedCombatTechnique(RangedCombatTechniqueIdentifierObject)
    case Property(PropertyIdentifierObject)
    case Aspect(AspectIdentifierObject)
    case Language(LanguageIdentifierObject)
    case AnimalShape(AnimalShapeIdentifierObject)
    case LiturgicalChant(LiturgicalChantIdentifierObject)
    case Ceremony(CeremonyIdentifierObject)
    case Spell(SpellIdentifierObject)
    case Ritual(RitualIdentifierObject)
}

@ModelEnum
public enum CoreRuleDerivableContentIdentifier {
    case MagicalTradition(MagicalTraditionIdentifierObject)
    case FamiliarSpecialAbility(FamiliarSpecialAbilityIdentifierObject)
    case MagicalSpecialAbility(MagicalSpecialAbilityIdentifierObject)
    case BlessedTradition(BlessedTraditionIdentifierObject)
}

@ModelEnum
public enum EquipmentIdentifier {
    case Ammunition(AmmunitionIdentifierObject)
    case Animal(AnimalIdentifierObject)
    case AnimalCare(AnimalCareIdentifierObject)
    case Armor(ArmorIdentifierObject)
    case BandageOrRemedy(BandageOrRemedyIdentifierObject)
    case Book(BookIdentifierObject)
    case CeremonialItem(CeremonialItemIdentifierObject)
    case Clothes(ClothesIdentifierObject)
    case Container(ContainerIdentifierObject)
    case Elixir(ElixirIdentifierObject)
    case EquipmentOfBlessedOnes(EquipmentOfBlessedOnesIdentifierObject)
    case GemOrPreciousStone(GemOrPreciousStoneIdentifierObject)
    case IlluminationLightSource(IlluminationLightSourceIdentifierObject)
    case IlluminationRefillsOrSupplies(IlluminationRefillsOrSuppliesIdentifierObject)
    case Jewelry(JewelryIdentifierObject)
    case Liebesspielzeug(LiebesspielzeugIdentifierObject)
    case LuxuryGood(LuxuryGoodIdentifierObject)
    case MagicalArtifact(MagicalArtifactIdentifierObject)
    case MusicalInstrument(MusicalInstrumentIdentifierObject)
    case OrienteeringAid(OrienteeringAidIdentifierObject)
    case Poison(PoisonIdentifierObject)
    case RopeOrChain(RopeOrChainIdentifierObject)
    case Stationary(StationaryIdentifierObject)
    case ThievesTool(ThievesToolIdentifierObject)
    case ToolOfTheTrade(ToolOfTheTradeIdentifierObject)
    case TravelGearOrTool(TravelGearOrToolIdentifierObject)
    case Vehicle(VehicleIdentifierObject)
    case Weapon(WeaponIdentifierObject)
    case WeaponAccessory(WeaponAccessoryIdentifierObject)
}
