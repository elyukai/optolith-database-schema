import FileDB

@TypeAlias
public struct AdvancedCombatSpecialAbilityIdentifierObject {
    @Relationship(AdvancedCombatSpecialAbility.self)
    let id: AdvancedCombatSpecialAbility.ID
}

@TypeAlias
public struct AdvancedKarmaSpecialAbilityIdentifierObject {
    @Relationship(AdvancedKarmaSpecialAbility.self)
    let id: AdvancedKarmaSpecialAbility.ID
}

@TypeAlias
public struct AdvancedMagicalSpecialAbilityIdentifierObject {
    @Relationship(AdvancedMagicalSpecialAbility.self)
    let id: AdvancedMagicalSpecialAbility.ID
}

@TypeAlias
public struct AdvancedSkillSpecialAbilityIdentifierObject {
    @Relationship(AdvancedSkillSpecialAbility.self)
    let id: AdvancedSkillSpecialAbility.ID
}

@TypeAlias
public struct AdvantageIdentifierObject {
    @Relationship(Advantage.self)
    let id: Advantage.ID
}

@TypeAlias
public struct AmmunitionIdentifierObject {
    @Relationship(Ammunition.self)
    let id: Ammunition.ID
}

@TypeAlias
public struct AncestorGlyphIdentifierObject {
    @Relationship(AncestorGlyph.self)
    let id: AncestorGlyph.ID
}

@TypeAlias
public struct AnimalCareIdentifierObject {
    @Relationship(AnimalCare.self)
    let id: AnimalCare.ID
}

@TypeAlias
public struct AnimalDiseaseIdentifierObject {
    @Relationship(AnimalDisease.self)
    let id: AnimalDisease.ID
}

@TypeAlias
public struct AnimalIdentifierObject {
    @Relationship(Animal.self)
    let id: Animal.ID
}

@TypeAlias
public struct AnimalShapePathIdentifierObject {
    @Relationship(AnimalShapePath.self)
    let id: AnimalShapePath.ID
}

@TypeAlias
public struct AnimalShapeIdentifierObject {
    @Relationship(AnimalShape.self)
    let id: AnimalShape.ID
}

@TypeAlias
public struct AnimalShapeSizeIdentifierObject {
    @Relationship(AnimalShapeSize.self)
    let id: AnimalShapeSize.ID
}

@TypeAlias
public struct AnimalTypeIdentifierObject {
    @Relationship(AnimalType.self)
    let id: AnimalType.ID
}

@TypeAlias
public struct AnimistPowerIdentifierObject {
    @Relationship(AnimistPower.self)
    let id: AnimistPower.ID
}

@TypeAlias
public struct TribeIdentifierObject {
    @Relationship(Tribe.self)
    let id: Tribe.ID
}

@TypeAlias
public struct ArcaneBardTraditionIdentifierObject {
    @Relationship(ArcaneBardTradition.self)
    let id: ArcaneBardTradition.ID
}

@TypeAlias
public struct ArcaneDancerTraditionIdentifierObject {
    @Relationship(ArcaneDancerTradition.self)
    let id: ArcaneDancerTradition.ID
}

@TypeAlias
public struct ArcaneOrbEnchantmentIdentifierObject {
    @Relationship(ArcaneOrbEnchantment.self)
    let id: ArcaneOrbEnchantment.ID
}

@TypeAlias
public struct ArmorIdentifierObject {
    @Relationship(Armor.self)
    let id: Armor.ID
}

@TypeAlias
public struct ArmorTypeIdentifierObject {
    @Relationship(ArmorType.self)
    let id: ArmorType.ID
}

@TypeAlias
public struct AspectIdentifierObject {
    @Relationship(Aspect.self)
    let id: Aspect.ID
}

@TypeAlias
public struct AttireEnchantmentIdentifierObject {
    @Relationship(AttireEnchantment.self)
    let id: AttireEnchantment.ID
}

@TypeAlias
public struct AttributeIdentifierObject {
    @Relationship(Attribute.self)
    let id: Attribute.ID
}

@TypeAlias
public struct BandageOrRemedyIdentifierObject {
    @Relationship(BandageOrRemedy.self)
    let id: BandageOrRemedy.ID
}

@TypeAlias
public struct BlessedTraditionIdentifierObject {
    @Relationship(BlessedTradition.self)
    let id: BlessedTradition.ID
}

@TypeAlias
public struct BlessingIdentifierObject {
    @Relationship(Blessing.self)
    let id: Blessing.ID
}

@TypeAlias
public struct BookIdentifierObject {
    @Relationship(Book.self)
    let id: Book.ID
}

@TypeAlias
public struct BowlEnchantmentIdentifierObject {
    @Relationship(BowlEnchantment.self)
    let id: BowlEnchantment.ID
}

@TypeAlias
public struct BrawlingSpecialAbilityIdentifierObject {
    @Relationship(BrawlingSpecialAbility.self)
    let id: BrawlingSpecialAbility.ID
}

@TypeAlias
public struct BrewIdentifierObject {
    @Relationship(Brew.self)
    let id: Brew.ID
}

@TypeAlias
public struct CantripIdentifierObject {
    @Relationship(Cantrip.self)
    let id: Cantrip.ID
}

@TypeAlias
public struct CauldronEnchantmentIdentifierObject {
    @Relationship(CauldronEnchantment.self)
    let id: CauldronEnchantment.ID
}

@TypeAlias
public struct CeremonialItemIdentifierObject {
    @Relationship(CeremonialItem.self)
    let id: CeremonialItem.ID
}

@TypeAlias
public struct CeremonialItemSpecialAbilityIdentifierObject {
    @Relationship(CeremonialItemSpecialAbility.self)
    let id: CeremonialItemSpecialAbility.ID
}

@TypeAlias
public struct CeremonyIdentifierObject {
    @Relationship(Ceremony.self)
    let id: Ceremony.ID
}

@TypeAlias
public struct ChronicleEnchantmentIdentifierObject {
    @Relationship(ChronicleEnchantment.self)
    let id: ChronicleEnchantment.ID
}

@TypeAlias
public struct CloseCombatTechniqueIdentifierObject {
    @Relationship(CloseCombatTechnique.self)
    let id: CloseCombatTechnique.ID
}

@TypeAlias
public struct ClothesIdentifierObject {
    @Relationship(Clothes.self)
    let id: Clothes.ID
}

@TypeAlias
public struct CombatSpecialAbilityIdentifierObject {
    @Relationship(CombatSpecialAbility.self)
    let id: CombatSpecialAbility.ID
}

@TypeAlias
public struct CombatStyleSpecialAbilityIdentifierObject {
    @Relationship(CombatStyleSpecialAbility.self)
    let id: CombatStyleSpecialAbility.ID
}

@TypeAlias
public struct CommandSpecialAbilityIdentifierObject {
    @Relationship(CommandSpecialAbility.self)
    let id: CommandSpecialAbility.ID
}

@TypeAlias
public struct ConditionIdentifierObject {
    @Relationship(Condition.self)
    let id: Condition.ID
}

@TypeAlias
public struct ContainerIdentifierObject {
    @Relationship(Container.self)
    let id: Container.ID
}

@TypeAlias
public struct ContinentIdentifierObject {
    @Relationship(Continent.self)
    let id: Continent.ID
}

@TypeAlias
public struct CoreRuleIdentifierObject {
    @Relationship(CoreRule.self)
    let id: CoreRule.ID
}

@TypeAlias
public struct CultureIdentifierObject {
    @Relationship(Culture.self)
    let id: Culture.ID
}

@TypeAlias
public struct CurseIdentifierObject {
    @Relationship(Curse.self)
    let id: Curse.ID
}

@TypeAlias
public struct DaggerRitualIdentifierObject {
    @Relationship(DaggerRitual.self)
    let id: DaggerRitual.ID
}

@TypeAlias
public struct DerivedCharacteristicIdentifierObject {
    @Relationship(DerivedCharacteristic.self)
    let id: DerivedCharacteristic.ID
}

@TypeAlias
public struct DisadvantageIdentifierObject {
    @Relationship(Disadvantage.self)
    let id: Disadvantage.ID
}

@TypeAlias
public struct DiseaseIdentifierObject {
    @Relationship(Disease.self)
    let id: Disease.ID
}

@TypeAlias
public struct DominationRitualIdentifierObject {
    @Relationship(DominationRitual.self)
    let id: DominationRitual.ID
}

@TypeAlias
public struct ElementIdentifierObject {
    @Relationship(Element.self)
    let id: Element.ID
}

@TypeAlias
public struct ElixirIdentifierObject {
    @Relationship(Elixir.self)
    let id: Elixir.ID
}

@TypeAlias
public struct ElvenMagicalSongIdentifierObject {
    @Relationship(ElvenMagicalSong.self)
    let id: ElvenMagicalSong.ID
}

@TypeAlias
public struct EquipmentOfBlessedOnesIdentifierObject {
    @Relationship(EquipmentOfBlessedOnes.self)
    let id: EquipmentOfBlessedOnes.ID
}

@TypeAlias
public struct EquipmentPackageIdentifierObject {
    @Relationship(EquipmentPackage.self)
    let id: EquipmentPackage.ID
}

@TypeAlias
public struct ExperienceLevelIdentifierObject {
    @Relationship(ExperienceLevel.self)
    let id: ExperienceLevel.ID
}

@TypeAlias
public struct EyeColorIdentifierObject {
    @Relationship(EyeColor.self)
    let id: EyeColor.ID
}

@TypeAlias
public struct FamiliarSpecialAbilityIdentifierObject {
    @Relationship(FamiliarSpecialAbility.self)
    let id: FamiliarSpecialAbility.ID
}

@TypeAlias
public struct FamiliarsTrickIdentifierObject {
    @Relationship(FamiliarsTrick.self)
    let id: FamiliarsTrick.ID
}

@TypeAlias
public struct FatePointSexSpecialAbilityIdentifierObject {
    @Relationship(FatePointSexSpecialAbility.self)
    let id: FatePointSexSpecialAbility.ID
}

@TypeAlias
public struct FatePointSpecialAbilityIdentifierObject {
    @Relationship(FatePointSpecialAbility.self)
    let id: FatePointSpecialAbility.ID
}

@TypeAlias
public struct FocusRuleIdentifierObject {
    @Relationship(FocusRule.self)
    let id: FocusRule.ID
}

@TypeAlias
public struct SubjectIdentifierObject {
    @Relationship(Subject.self)
    let id: Subject.ID
}

@TypeAlias
public struct FoolsHatEnchantmentIdentifierObject {
    @Relationship(FoolsHatEnchantment.self)
    let id: FoolsHatEnchantment.ID
}

@TypeAlias
public struct GemOrPreciousStoneIdentifierObject {
    @Relationship(GemOrPreciousStone.self)
    let id: GemOrPreciousStone.ID
}

@TypeAlias
public struct GeneralSelectOptionIdentifierObject {
    @Relationship(GeneralSelectOption.self)
    let id: GeneralSelectOption.ID
}

@TypeAlias
public struct GeneralSpecialAbilityIdentifierObject {
    @Relationship(GeneralSpecialAbility.self)
    let id: GeneralSpecialAbility.ID
}

@TypeAlias
public struct GeodeRitualIdentifierObject {
    @Relationship(GeodeRitual.self)
    let id: GeodeRitual.ID
}

@TypeAlias
public struct HairColorIdentifierObject {
    @Relationship(HairColor.self)
    let id: HairColor.ID
}

@TypeAlias
public struct IlluminationLightSourceIdentifierObject {
    @Relationship(IlluminationLightSource.self)
    let id: IlluminationLightSource.ID
}

@TypeAlias
public struct IlluminationRefillsOrSuppliesIdentifierObject {
    @Relationship(IlluminationRefillsOrSupplies.self)
    let id: IlluminationRefillsOrSupplies.ID
}

@TypeAlias
public struct InstrumentEnchantmentIdentifierObject {
    @Relationship(InstrumentEnchantment.self)
    let id: InstrumentEnchantment.ID
}

@TypeAlias
public struct JesterTrickIdentifierObject {
    @Relationship(JesterTrick.self)
    let id: JesterTrick.ID
}

@TypeAlias
public struct JewelryIdentifierObject {
    @Relationship(Jewelry.self)
    let id: Jewelry.ID
}

@TypeAlias
public struct KarmaSpecialAbilityIdentifierObject {
    @Relationship(KarmaSpecialAbility.self)
    let id: KarmaSpecialAbility.ID
}

@TypeAlias
public struct KrallenkettenzauberIdentifierObject {
    @Relationship(Krallenkettenzauber.self)
    let id: Krallenkettenzauber.ID
}

@TypeAlias
public struct LanguageIdentifierObject {
    @Relationship(Language.self)
    let id: Language.ID
}

@TypeAlias
public struct CurriculumIdentifierObject {
    @Relationship(Curriculum.self)
    let id: Curriculum.ID
}

@TypeAlias
public struct GuidelineIdentifierObject {
    @Relationship(Guideline.self)
    let id: Guideline.ID
}

@TypeAlias
public struct LiebesspielzeugIdentifierObject {
    @Relationship(Liebesspielzeug.self)
    let id: Liebesspielzeug.ID
}

@TypeAlias
public struct LiturgicalChantIdentifierObject {
    @Relationship(LiturgicalChant.self)
    let id: LiturgicalChant.ID
}

@TypeAlias
public struct LiturgicalStyleSpecialAbilityIdentifierObject {
    @Relationship(LiturgicalStyleSpecialAbility.self)
    let id: LiturgicalStyleSpecialAbility.ID
}

@TypeAlias
public struct LuxuryGoodIdentifierObject {
    @Relationship(LuxuryGood.self)
    let id: LuxuryGood.ID
}

@TypeAlias
public struct LycantropicGiftIdentifierObject {
    @Relationship(LycantropicGift.self)
    let id: LycantropicGift.ID
}

@TypeAlias
public struct MagicalArtifactIdentifierObject {
    @Relationship(MagicalArtifact.self)
    let id: MagicalArtifact.ID
}

@TypeAlias
public struct MagicalDanceIdentifierObject {
    @Relationship(MagicalDance.self)
    let id: MagicalDance.ID
}

@TypeAlias
public struct MagicalMelodyIdentifierObject {
    @Relationship(MagicalMelody.self)
    let id: MagicalMelody.ID
}

@TypeAlias
public struct MagicalRuneIdentifierObject {
    @Relationship(MagicalRune.self)
    let id: MagicalRune.ID
}

@TypeAlias
public struct MagicalSignIdentifierObject {
    @Relationship(MagicalSign.self)
    let id: MagicalSign.ID
}

@TypeAlias
public struct MagicalSpecialAbilityIdentifierObject {
    @Relationship(MagicalSpecialAbility.self)
    let id: MagicalSpecialAbility.ID
}

@TypeAlias
public struct MagicalTraditionIdentifierObject {
    @Relationship(MagicalTradition.self)
    let id: MagicalTradition.ID
}

@TypeAlias
public struct MagicStyleSpecialAbilityIdentifierObject {
    @Relationship(MagicStyleSpecialAbility.self)
    let id: MagicStyleSpecialAbility.ID
}

@TypeAlias
public struct MetaConditionIdentifierObject {
    @Relationship(MetaCondition.self)
    let id: MetaCondition.ID
}

@TypeAlias
public struct MusicalInstrumentIdentifierObject {
    @Relationship(MusicalInstrument.self)
    let id: MusicalInstrument.ID
}

@TypeAlias
public struct OptionalRuleIdentifierObject {
    @Relationship(OptionalRule.self)
    let id: OptionalRule.ID
}

@TypeAlias
public struct OrbEnchantmentIdentifierObject {
    @Relationship(OrbEnchantment.self)
    let id: OrbEnchantment.ID
}

@TypeAlias
public struct OrienteeringAidIdentifierObject {
    @Relationship(OrienteeringAid.self)
    let id: OrienteeringAid.ID
}

@TypeAlias
public struct PactCategoryIdentifierObject {
    @Relationship(PactCategory.self)
    let id: PactCategory.ID
}

@TypeAlias
public struct PactGiftIdentifierObject {
    @Relationship(PactGift.self)
    let id: PactGift.ID
}

@TypeAlias
public struct PatronCategoryIdentifierObject {
    @Relationship(PatronCategory.self)
    let id: PatronCategory.ID
}

@TypeAlias
public struct PatronIdentifierObject {
    @Relationship(Patron.self)
    let id: Patron.ID
}

@TypeAlias
public struct PersonalityTraitIdentifierObject {
    @Relationship(PersonalityTrait.self)
    let id: PersonalityTrait.ID
}

@TypeAlias
public struct PoisonIdentifierObject {
    @Relationship(Poison.self)
    let id: Poison.ID
}

@TypeAlias
public struct ProfessionIdentifierObject {
    @Relationship(Profession.self)
    let id: Profession.ID
}

@TypeAlias
public struct PropertyIdentifierObject {
    @Relationship(Property.self)
    let id: Property.ID
}

@TypeAlias
public struct ProtectiveWardingCircleSpecialAbilityIdentifierObject {
    @Relationship(ProtectiveWardingCircleSpecialAbility.self)
    let id: ProtectiveWardingCircleSpecialAbility.ID
}

@TypeAlias
public struct PublicationIdentifierObject {
    @Relationship(Publication.self)
    let id: Publication.ID
}

@TypeAlias
public struct RaceIdentifierObject {
    @Relationship(Race.self)
    let id: Race.ID
}

@TypeAlias
public struct RangedCombatTechniqueIdentifierObject {
    @Relationship(RangedCombatTechnique.self)
    let id: RangedCombatTechnique.ID
}

@TypeAlias
public struct ReachIdentifierObject {
    @Relationship(Reach.self)
    let id: Reach.ID
}

@TypeAlias
public struct RegionIdentifierObject {
    @Relationship(Region.self)
    let id: Region.ID
}

@TypeAlias
public struct RingEnchantmentIdentifierObject {
    @Relationship(RingEnchantment.self)
    let id: RingEnchantment.ID
}

@TypeAlias
public struct RitualIdentifierObject {
    @Relationship(Ritual.self)
    let id: Ritual.ID
}

@TypeAlias
public struct RopeOrChainIdentifierObject {
    @Relationship(RopeOrChain.self)
    let id: RopeOrChain.ID
}

@TypeAlias
public struct ScriptIdentifierObject {
    @Relationship(Script.self)
    let id: Script.ID
}

@TypeAlias
public struct SermonIdentifierObject {
    @Relationship(Sermon.self)
    let id: Sermon.ID
}

@TypeAlias
public struct ServiceIdentifierObject {
    @Relationship(Service.self)
    let id: Service.ID
}

@TypeAlias
public struct SexPracticeIdentifierObject {
    @Relationship(SexPractice.self)
    let id: SexPractice.ID
}

@TypeAlias
public struct SexSpecialAbilityIdentifierObject {
    @Relationship(SexSpecialAbility.self)
    let id: SexSpecialAbility.ID
}

@TypeAlias
public struct SickleRitualIdentifierObject {
    @Relationship(SickleRitual.self)
    let id: SickleRitual.ID
}

@TypeAlias
public struct SikaryanDrainSpecialAbilityIdentifierObject {
    @Relationship(SikaryanDrainSpecialAbility.self)
    let id: SikaryanDrainSpecialAbility.ID
}

@TypeAlias
public struct SkillGroupIdentifierObject {
    @Relationship(SkillGroup.self)
    let id: SkillGroup.ID
}

@TypeAlias
public struct SkillModificationLevelIdentifierObject {
    @Relationship(SkillModificationLevel.self)
    let id: SkillModificationLevel.ID
}

@TypeAlias
public struct SkillIdentifierObject {
    @Relationship(Skill.self)
    let id: Skill.ID
}

@TypeAlias
public struct SkillApplicationIdentifierObject {
    @Relationship(SkillApplication.self)
    let id: SkillApplication.ID
}

@TypeAlias
public struct SkillStyleSpecialAbilityIdentifierObject {
    @Relationship(SkillStyleSpecialAbility.self)
    let id: SkillStyleSpecialAbility.ID
}

@TypeAlias
public struct SocialStatusIdentifierObject {
    @Relationship(SocialStatus.self)
    let id: SocialStatus.ID
}

@TypeAlias
public struct SpellIdentifierObject {
    @Relationship(Spell.self)
    let id: Spell.ID
}

@TypeAlias
public struct SpellSwordEnchantmentIdentifierObject {
    @Relationship(SpellSwordEnchantment.self)
    let id: SpellSwordEnchantment.ID
}

@TypeAlias
public struct StaffEnchantmentIdentifierObject {
    @Relationship(StaffEnchantment.self)
    let id: StaffEnchantment.ID
}

@TypeAlias
public struct StateIdentifierObject {
    @Relationship(State.self)
    let id: State.ID
}

@TypeAlias
public struct StationaryIdentifierObject {
    @Relationship(Stationary.self)
    let id: Stationary.ID
}

@TypeAlias
public struct TalismanIdentifierObject {
    @Relationship(Talisman.self)
    let id: Talisman.ID
}

@TypeAlias
public struct TargetCategoryIdentifierObject {
    @Relationship(TargetCategory.self)
    let id: TargetCategory.ID
}

@TypeAlias
public struct ThievesToolIdentifierObject {
    @Relationship(ThievesTool.self)
    let id: ThievesTool.ID
}

@TypeAlias
public struct ToolOfTheTradeIdentifierObject {
    @Relationship(ToolOfTheTrade.self)
    let id: ToolOfTheTrade.ID
}

@TypeAlias
public struct ToyEnchantmentIdentifierObject {
    @Relationship(ToyEnchantment.self)
    let id: ToyEnchantment.ID
}

@TypeAlias
public struct TradeSecretIdentifierObject {
    @Relationship(TradeSecret.self)
    let id: TradeSecret.ID
}

@TypeAlias
public struct TravelGearOrToolIdentifierObject {
    @Relationship(TravelGearOrTool.self)
    let id: TravelGearOrTool.ID
}

@TypeAlias
public struct TrinkhornzauberIdentifierObject {
    @Relationship(Trinkhornzauber.self)
    let id: Trinkhornzauber.ID
}

@TypeAlias
public struct VampiricGiftIdentifierObject {
    @Relationship(VampiricGift.self)
    let id: VampiricGift.ID
}

@TypeAlias
public struct VehicleIdentifierObject {
    @Relationship(Vehicle.self)
    let id: Vehicle.ID
}

@TypeAlias
public struct VisionIdentifierObject {
    @Relationship(Vision.self)
    let id: Vision.ID
}

@TypeAlias
public struct WandEnchantmentIdentifierObject {
    @Relationship(WandEnchantment.self)
    let id: WandEnchantment.ID
}

@TypeAlias
public struct WeaponAccessoryIdentifierObject {
    @Relationship(WeaponAccessory.self)
    let id: WeaponAccessory.ID
}

@TypeAlias
public struct WeaponEnchantmentIdentifierObject {
    @Relationship(WeaponEnchantment.self)
    let id: WeaponEnchantment.ID
}

@TypeAlias
public struct WeaponIdentifierObject {
    @Relationship(Weapon.self)
    let id: Weapon.ID
}

@TypeAlias
public struct ZibiljaRitualIdentifierObject {
    @Relationship(ZibiljaRitual.self)
    let id: ZibiljaRitual.ID
}
