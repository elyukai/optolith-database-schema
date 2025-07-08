import { ReferenceIdentifier as R } from "tsondb/schema/def"
import { Enhancement } from "./_Enhancements.js"
import { Influence } from "./_Influence.js"
import { Advantage } from "./Advantage.js"
import { AnimalType } from "./AnimalType.js"
import { ArcaneBardTradition } from "./ArcaneBardTradition.js"
import { ArcaneDancerTradition } from "./ArcaneDancerTradition.js"
import { Aspect } from "./Aspect.js"
import { Attribute } from "./Attribute.js"
import { Blessing } from "./Blessing.js"
import { Cantrip } from "./Cantrip.js"
import { Ceremony } from "./Ceremony.js"
import { CloseCombatTechnique, RangedCombatTechnique } from "./CombatTechnique.js"
import { Condition } from "./Condition.js"
import { Continent } from "./Continent.js"
import { Culture } from "./Culture.js"
import { Disadvantage } from "./Disadvantage.js"
import { Disease } from "./Disease.js"
import { Element } from "./Element.js"
import { ExperienceLevel } from "./ExperienceLevel.js"
import { EyeColor } from "./EyeColor.js"
import { HairColor } from "./HairColor.js"
import { Curriculum, Guideline, LessonPackage } from "./Lessons.js"
import { LiturgicalChant } from "./LiturgicalChant.js"
import { AnimistPower } from "./magicalActions/AnimistPower.js"
import { Tribe } from "./magicalActions/AnimistPower_Tribe.js"
import { Curse } from "./magicalActions/Curse.js"
import { DominationRitual } from "./magicalActions/DominationRitual.js"
import { ElvenMagicalSong } from "./magicalActions/ElvenMagicalSong.js"
import { GeodeRitual } from "./magicalActions/GeodeRitual.js"
import { JesterTrick } from "./magicalActions/JesterTrick.js"
import { MagicalDance } from "./magicalActions/MagicalDance.js"
import { MagicalMelody } from "./magicalActions/MagicalMelody.js"
import { MagicalRune } from "./magicalActions/MagicalRune.js"
import { ZibiljaRitual } from "./magicalActions/ZibiljaRitual.js"
import { PactCategory, PactDomain, PactType } from "./PactCategory.js"
import { PatronCategory } from "./PatronCategory.js"
import { PersonalityTrait } from "./PersonalityTrait.js"
import { Profession, ProfessionPackage, ProfessionVersion } from "./Profession.js"
import { Property } from "./Property.js"
import { Race, RaceVariant } from "./Race.js"
import { Ritual } from "./Ritual.js"
import { FocusRule } from "./rule/FocusRule.js"
import { Subject } from "./rule/FocusRule_Subject.js"
import { OptionalRule } from "./rule/OptionalRule.js"
import { SexPractice } from "./SexPractice.js"
import { Skill } from "./Skill.js"
import { SkillGroup } from "./SkillGroup.js"
import { SkillModificationLevel } from "./SkillModificationLevel.js"
import { SocialStatus } from "./SocialStatus.js"
import { Publication } from "./source/Publication.js"
import { AdvancedCombatSpecialAbility } from "./specialAbility/AdvancedCombatSpecialAbility.js"
import { AdvancedKarmaSpecialAbility } from "./specialAbility/AdvancedKarmaSpecialAbility.js"
import { AdvancedMagicalSpecialAbility } from "./specialAbility/AdvancedMagicalSpecialAbility.js"
import { AdvancedSkillSpecialAbility } from "./specialAbility/AdvancedSkillSpecialAbility.js"
import { AncestorGlyph } from "./specialAbility/AncestorGlyph.js"
import { BlessedTradition } from "./specialAbility/BlessedTradition.js"
import { BrawlingSpecialAbility } from "./specialAbility/BrawlingSpecialAbility.js"
import { CeremonialItemSpecialAbility } from "./specialAbility/CeremonialItemSpecialAbility.js"
import { CombatSpecialAbility } from "./specialAbility/CombatSpecialAbility.js"
import { CombatStyleSpecialAbility } from "./specialAbility/CombatStyleSpecialAbility.js"
import { CommandSpecialAbility } from "./specialAbility/CommandSpecialAbility.js"
import { FamiliarSpecialAbility } from "./specialAbility/FamiliarSpecialAbility.js"
import { FatePointSexSpecialAbility } from "./specialAbility/FatePointSexSpecialAbility.js"
import { FatePointSpecialAbility } from "./specialAbility/FatePointSpecialAbility.js"
import { GeneralSpecialAbility } from "./specialAbility/GeneralSpecialAbility.js"
import { KarmaSpecialAbility } from "./specialAbility/KarmaSpecialAbility.js"
import { LiturgicalStyleSpecialAbility } from "./specialAbility/LiturgicalStyleSpecialAbility.js"
import { LycantropicGift } from "./specialAbility/LycantropicGift.js"
import { MagicalSign } from "./specialAbility/MagicalSign.js"
import { MagicalSpecialAbility } from "./specialAbility/MagicalSpecialAbility.js"
import { MagicalTradition } from "./specialAbility/MagicalTradition.js"
import { MagicStyleSpecialAbility } from "./specialAbility/MagicStyleSpecialAbility.js"
import { PactGift } from "./specialAbility/PactGift.js"
import { ProtectiveWardingCircleSpecialAbility as PWCSpecialAbility } from "./specialAbility/ProtectiveWardingCircleSpecialAbility.js"
import { Sermon } from "./specialAbility/Sermon.js"
import { SexSpecialAbility } from "./specialAbility/SexSpecialAbility.js"
import { SikaryanDrainSpecialAbility } from "./specialAbility/SikaryanDrainSpecialAbility.js"
import { SkillStyleSpecialAbility } from "./specialAbility/SkillStyleSpecialAbility.js"
import { Language } from "./specialAbility/sub/Language.js"
import { Script } from "./specialAbility/sub/Script.js"
import { TradeSecret } from "./specialAbility/sub/TradeSecret.js"
import { VampiricGift } from "./specialAbility/VampiricGift.js"
import { Vision } from "./specialAbility/Vision.js"
import { Spell } from "./Spell.js"
import { State } from "./State.js"
import { TargetCategory } from "./TargetCategory.js"
import { ArcaneOrbEnchantment } from "./traditionArtifacts/ArcaneOrbEnchantment.js"
import { AttireEnchantment } from "./traditionArtifacts/AttireEnchantment.js"
import { BowlEnchantment } from "./traditionArtifacts/BowlEnchantment.js"
import { CauldronEnchantment } from "./traditionArtifacts/CauldronEnchantment.js"
import { ChronicleEnchantment } from "./traditionArtifacts/ChronicleEnchantment.js"
import { DaggerRitual } from "./traditionArtifacts/DaggerRitual.js"
import { FoolsHatEnchantment } from "./traditionArtifacts/FoolsHatEnchantment.js"
import { InstrumentEnchantment } from "./traditionArtifacts/InstrumentEnchantment.js"
import { Krallenkettenzauber } from "./traditionArtifacts/Krallenkettenzauber.js"
import { OrbEnchantment } from "./traditionArtifacts/OrbEnchantment.js"
import { RingEnchantment } from "./traditionArtifacts/RingEnchantment.js"
import { SickleRitual } from "./traditionArtifacts/SickleRitual.js"
import { SpellSwordEnchantment } from "./traditionArtifacts/SpellSwordEnchantment.js"
import { StaffEnchantment } from "./traditionArtifacts/StaffEnchantment.js"
import { AnimalShape } from "./traditionArtifacts/sub/AnimalShape.js"
import { AnimalShapePath } from "./traditionArtifacts/sub/AnimalShapePath.js"
import { AnimalShapeSize } from "./traditionArtifacts/sub/AnimalShapeSize.js"
import { Brew } from "./traditionArtifacts/sub/Brew.js"
import { ToyEnchantment } from "./traditionArtifacts/ToyEnchantment.js"
import { Trinkhornzauber } from "./traditionArtifacts/Trinkhornzauber.js"
import { WandEnchantment } from "./traditionArtifacts/WandEnchantment.js"
import { WeaponEnchantment } from "./traditionArtifacts/WeaponEnchantment.js"

export const AdvancedCombatSpecialAbilityIdentifier = R(AdvancedCombatSpecialAbility)
export const AdvancedKarmaSpecialAbilityIdentifier = R(AdvancedKarmaSpecialAbility)
export const AdvancedMagicalSpecialAbilityIdentifier = R(AdvancedMagicalSpecialAbility)
export const AdvancedSkillSpecialAbilityIdentifier = R(AdvancedSkillSpecialAbility)
export const AdvantageIdentifier = R(Advantage)
export const AmmunitionIdentifier = R(Ammunition)
export const AncestorGlyphIdentifier = R(AncestorGlyph)
export const AnimalCareIdentifier = R(AnimalCare)
export const AnimalIdentifier = R(Animal)
export const AnimalShapeIdentifier = R(AnimalShape)
export const AnimalShapePathIdentifier = R(AnimalShapePath)
export const AnimalShapeSizeIdentifier = R(AnimalShapeSize)
export const AnimalTypeIdentifier = R(AnimalType)
export const AnimistPowerIdentifier = R(AnimistPower)
export const ArcaneBardTraditionIdentifier = R(ArcaneBardTradition)
export const ArcaneDancerTraditionIdentifier = R(ArcaneDancerTradition)
export const ArcaneOrbEnchantmentIdentifier = R(ArcaneOrbEnchantment)
export const ArmorIdentifier = R(Armor)
export const AspectIdentifier = R(Aspect)
export const AttireEnchantmentIdentifier = R(AttireEnchantment)
export const AttributeIdentifier = R(Attribute)
export const BandageOrRemedyIdentifier = R(BandageOrRemedy)
export const BlessedTraditionIdentifier = R(BlessedTradition)
export const BlessingIdentifier = R(Blessing)
export const BookIdentifier = R(Book)
export const BowlEnchantmentIdentifier = R(BowlEnchantment)
export const BrawlingSpecialAbilityIdentifier = R(BrawlingSpecialAbility)
export const BrewIdentifier = R(Brew)
export const CantripIdentifier = R(Cantrip)
export const CauldronEnchantmentIdentifier = R(CauldronEnchantment)
export const CeremonialItemIdentifier = R(CeremonialItem)
export const CeremonialItemSpecialAbilityIdentifier = R(CeremonialItemSpecialAbility)
export const CeremonyIdentifier = R(Ceremony)
export const ChronicleEnchantmentIdentifier = R(ChronicleEnchantment)
export const CloseCombatTechniqueIdentifier = R(CloseCombatTechnique)
export const ClothesIdentifier = R(Clothes)
export const CombatSpecialAbilityIdentifier = R(CombatSpecialAbility)
export const CombatStyleSpecialAbilityIdentifier = R(CombatStyleSpecialAbility)
export const CommandSpecialAbilityIdentifier = R(CommandSpecialAbility)
export const ConditionIdentifier = R(Condition)
export const ContainerIdentifier = R(Container)
export const ContinentIdentifier = R(Continent)
export const CoreRuleIdentifier = R(CoreRule)
export const CultureIdentifier = R(Culture)
export const CurriculumIdentifier = R(Curriculum)
export const CurseIdentifier = R(Curse)
export const DaggerRitualIdentifier = R(DaggerRitual)
export const DisadvantageIdentifier = R(Disadvantage)
export const DiseaseIdentifier = R(Disease)
export const DominationRitualIdentifier = R(DominationRitual)
export const ElementIdentifier = R(Element)
export const ElixirIdentifier = R(Elixir)
export const ElvenMagicalSongIdentifier = R(ElvenMagicalSong)
export const EnhancementIdentifier = R(Enhancement)
export const EquipmentOfBlessedOnesIdentifier = R(EquipmentOfBlessedOnes)
export const ExperienceLevelIdentifier = R(ExperienceLevel)
export const EyeColorIdentifier = R(EyeColor)
export const FamiliarSpecialAbilityIdentifier = R(FamiliarSpecialAbility)
export const FatePointSexSpecialAbilityIdentifier = R(FatePointSexSpecialAbility)
export const FatePointSpecialAbilityIdentifier = R(FatePointSpecialAbility)
export const FocusRuleIdentifier = R(FocusRule)
export const FoolsHatEnchantmentIdentifier = R(FoolsHatEnchantment)
export const GemOrPreciousStoneIdentifier = R(GemOrPreciousStone)
export const GeneralIdentifier = R(General)
export const GeneralSpecialAbilityIdentifier = R(GeneralSpecialAbility)
export const GeodeRitualIdentifier = R(GeodeRitual)
export const GuidelineIdentifier = R(Guideline)
export const HairColorIdentifier = R(HairColor)
export const IlluminationLightSourceIdentifier = R(IlluminationLightSource)
export const IlluminationRefillsOrSuppliesIdentifier = R(IlluminationRefillsOrSupplies)
export const InfluenceIdentifier = R(Influence)
export const InstrumentEnchantmentIdentifier = R(InstrumentEnchantment)
export const JesterTrickIdentifier = R(JesterTrick)
export const JewelryIdentifier = R(Jewelry)
export const KarmaSpecialAbilityIdentifier = R(KarmaSpecialAbility)
export const KrallenkettenzauberIdentifier = R(Krallenkettenzauber)
export const LanguageIdentifier = R(Language)
export const LessonPackageIdentifier = R(LessonPackage)
export const LiebesspielzeugIdentifier = R(Liebesspielzeug)
export const LiturgicalChantIdentifier = R(LiturgicalChant)
export const LiturgicalStyleSpecialAbilityIdentifier = R(LiturgicalStyleSpecialAbility)
export const LuxuryGoodIdentifier = R(LuxuryGood)
export const LycantropicGiftIdentifier = R(LycantropicGift)
export const MagicalArtifactIdentifier = R(MagicalArtifact)
export const MagicalDanceIdentifier = R(MagicalDance)
export const MagicalMelodyIdentifier = R(MagicalMelody)
export const MagicalRuneIdentifier = R(MagicalRune)
export const MagicalSignIdentifier = R(MagicalSign)
export const MagicalSpecialAbilityIdentifier = R(MagicalSpecialAbility)
export const MagicalTraditionIdentifier = R(MagicalTradition)
export const MagicStyleSpecialAbilityIdentifier = R(MagicStyleSpecialAbility)
export const MusicalInstrumentIdentifier = R(MusicalInstrument)
export const OptionalRuleIdentifier = R(OptionalRule)
export const OrbEnchantmentIdentifier = R(OrbEnchantment)
export const OrienteeringAidIdentifier = R(OrienteeringAid)
export const PactCategoryIdentifier = R(PactCategory)
export const PactDomainIdentifier = R(PactDomain)
export const PactGiftIdentifier = R(PactGift)
export const PactTypeIdentifier = R(PactType)
export const PatronCategoryIdentifier = R(PatronCategory)
export const PatronIdentifier = R(Patron)
export const PersonalityTraitIdentifier = R(PersonalityTrait)
export const PoisonIdentifier = R(Poison)
export const ProfessionIdentifier = R(Profession)
export const ProfessionPackageIdentifier = R(ProfessionPackage)
export const ProfessionVersionIdentifier = R(ProfessionVersion)
export const ProfessionVariantIdentifier = R(ProfessionVariant)
export const PropertyIdentifier = R(Property)
export const ProtectiveWardingCircleSpecialAbilityIdentifier = R(PWCSpecialAbility)
export const PublicationIdentifier = R(Publication)
export const RaceIdentifier = R(Race)
export const RaceVariantIdentifier = R(RaceVariant)
export const RangedCombatTechniqueIdentifier = R(RangedCombatTechnique)
export const ReachIdentifier = R(Reach)
export const RingEnchantmentIdentifier = R(RingEnchantment)
export const RitualIdentifier = R(Ritual)
export const RopeOrChainIdentifier = R(RopeOrChain)
export const ScriptIdentifier = R(Script)
export const SermonIdentifier = R(Sermon)
export const SexPracticeIdentifier = R(SexPractice)
export const SexSpecialAbilityIdentifier = R(SexSpecialAbility)
export const SickleRitualIdentifier = R(SickleRitual)
export const SikaryanDrainSpecialAbilityIdentifier = R(SikaryanDrainSpecialAbility)
export const SkillApplicationIdentifier = R(SkillApplication)
export const SkillGroupIdentifier = R(SkillGroup)
export const SkillIdentifier = R(Skill)
export const SkillModificationLevelIdentifier = R(SkillModificationLevel)
export const SkillStyleSpecialAbilityIdentifier = R(SkillStyleSpecialAbility)
export const SocialStatusIdentifier = R(SocialStatus)
export const SpellIdentifier = R(Spell)
export const SpellSwordEnchantmentIdentifier = R(SpellSwordEnchantment)
export const StaffEnchantmentIdentifier = R(StaffEnchantment)
export const StateIdentifier = R(State)
export const StationaryIdentifier = R(Stationary)
export const SubjectIdentifier = R(Subject)
export const TargetCategoryIdentifier = R(TargetCategory)
export const ThievesToolIdentifier = R(ThievesTool)
export const ToolOfTheTradeIdentifier = R(ToolOfTheTrade)
export const ToyEnchantmentIdentifier = R(ToyEnchantment)
export const TradeSecretIdentifier = R(TradeSecret)
export const TravelGearOrToolIdentifier = R(TravelGearOrTool)
export const TribeIdentifier = R(Tribe)
export const TrinkhornzauberIdentifier = R(Trinkhornzauber)
export const VampiricGiftIdentifier = R(VampiricGift)
export const VehicleIdentifier = R(Vehicle)
export const VisionIdentifier = R(Vision)
export const WandEnchantmentIdentifier = R(WandEnchantment)
export const WeaponAccessoryIdentifier = R(WeaponAccessory)
export const WeaponEnchantmentIdentifier = R(WeaponEnchantment)
export const WeaponIdentifier = R(Weapon)
export const ZibiljaRitualIdentifier = R(ZibiljaRitual)
