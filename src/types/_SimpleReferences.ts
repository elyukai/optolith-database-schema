import { Entity, Object, Required } from "tsondb/schema/def"
import {
  CombatTechniqueIdentifier,
  SpellworkIdentifier,
  TraditionIdentifier,
} from "./_IdentifierGroup.js"

export const SimpleIdentifierObject = (entity: Entity) =>
  Object({
    id: Required({
      type: entityIdentifier,
    }),
  })

export type FocusRuleSubjectReference = {
  id: SubjectIdentifier
}

export type RaceReference = {
  id: RaceIdentifier
}

export type CultureReference = {
  id: CultureIdentifier
}

export type ProfessionReference = {
  id: ProfessionIdentifier
}

export type ProfessionVariantReference = {
  id: ProfessionVariantIdentifier
}

export type AttributeReference = {
  id: AttributeIdentifier
}

export type SkillReference = {
  id: SkillIdentifier
}

export type SkillGroupReference = {
  id: SkillGroupIdentifier
}

export type CombatTechniqueReference = {
  id: CombatTechniqueIdentifier
}

export type CloseCombatTechniqueReference = {
  id: CloseCombatTechniqueIdentifier
}

export type RangedCombatTechniqueReference = {
  id: RangedCombatTechniqueIdentifier
}

export type MagicalTraditionReference = {
  id: MagicalTraditionIdentifier
}

export type CantripReference = {
  id: CantripIdentifier
}

export type SpellReference = {
  id: SpellIdentifier
}

export type RitualReference = {
  id: RitualIdentifier
}

export type SpellworkReference = {
  id: SpellworkIdentifier
}

export type PropertyReference = {
  id: PropertyIdentifier
}

export type BlessedTraditionReference = {
  id: BlessedTraditionIdentifier
}

export type BlessingReference = {
  id: BlessingIdentifier
}

export type LiturgicalChantReference = {
  id: LiturgicalChantIdentifier
}

export type CeremonyReference = {
  id: CeremonyIdentifier
}

export type AspectReference = {
  id: AspectIdentifier
}

export type AdvantageReference = {
  id: AdvantageIdentifier
}

export type DisadvantageReference = {
  id: DisadvantageIdentifier
}

export type AdvancedSpecialAbilityReference<Identifier> = {
  id: Identifier
}

export type LanguageReference = {
  id: LanguageIdentifier
}

export type ScriptReference = {
  id: ScriptIdentifier
}

export type SocialStatusReference = {
  id: SocialStatusIdentifier
}

export type CurriculumReference = {
  id: CurriculumIdentifier
}

export type GuidelineReference = {
  id: GuidelineIdentifier
}

export type AnimalTypeReference = {
  id: AnimalTypeIdentifier
}

export type TargetCategoryReference = {
  id: TargetCategoryIdentifier
}

export type PatronCategoryReference = {
  id: PatronCategoryIdentifier
}

export type PersonalityTraitReference = {
  id: PersonalityTraitIdentifier
}

export type HairColorReference = {
  id: HairColorIdentifier
}

export type EyeColorReference = {
  id: EyeColorIdentifier
}

export type PactCategoryReference = {
  id: PactCategoryIdentifier
}

export type PactDomainReference = {
  id: PactDomainIdentifier
}

export type PatronReference = {
  id: PatronIdentifier
}

export type AnimistTribeReference = {
  id: AnimistTribeIdentifier
}

export type ElementReference = {
  id: ElementIdentifier
}

export type WeaponReference = {
  id: WeaponIdentifier
}

export type ArmorReference = {
  id: ArmorIdentifier
}

export type TraditionReference = {
  id: TraditionIdentifier
}
