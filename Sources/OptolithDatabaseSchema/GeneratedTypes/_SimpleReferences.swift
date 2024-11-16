//
//  _SimpleReferences.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct FocusRuleSubjectReference: EntitySubtype {
    public let id: SubjectIdentifier
}

public struct RaceReference: EntitySubtype {
    public let id: RaceIdentifier
}

public struct CultureReference: EntitySubtype {
    public let id: CultureIdentifier
}

public struct ProfessionReference: EntitySubtype {
    public let id: ProfessionIdentifier
}

public struct ProfessionVariantReference: EntitySubtype {
    public let id: ProfessionVariantIdentifier
}

public struct AttributeReference: EntitySubtype {
    public let id: AttributeIdentifier
}

public struct SkillReference: EntitySubtype {
    public let id: SkillIdentifier
}

public struct SkillGroupReference: EntitySubtype {
    public let id: SkillGroupIdentifier
}

public struct CombatTechniqueReference: EntitySubtype {
    public let id: CombatTechniqueIdentifier
}

public struct CloseCombatTechniqueReference: EntitySubtype {
    public let id: CloseCombatTechniqueIdentifier
}

public struct RangedCombatTechniqueReference: EntitySubtype {
    public let id: RangedCombatTechniqueIdentifier
}

public struct MagicalTraditionReference: EntitySubtype {
    public let id: MagicalTraditionIdentifier
}

public struct CantripReference: EntitySubtype {
    public let id: CantripIdentifier
}

public struct SpellReference: EntitySubtype {
    public let id: SpellIdentifier
}

public struct RitualReference: EntitySubtype {
    public let id: RitualIdentifier
}

public struct SpellworkReference: EntitySubtype {
    public let id: SpellworkIdentifier
}

public struct PropertyReference: EntitySubtype {
    public let id: PropertyIdentifier
}

public struct BlessedTraditionReference: EntitySubtype {
    public let id: BlessedTraditionIdentifier
}

public struct BlessingReference: EntitySubtype {
    public let id: BlessingIdentifier
}

public struct LiturgicalChantReference: EntitySubtype {
    public let id: LiturgicalChantIdentifier
}

public struct CeremonyReference: EntitySubtype {
    public let id: CeremonyIdentifier
}

public struct AspectReference: EntitySubtype {
    public let id: AspectIdentifier
}

public struct AdvantageReference: EntitySubtype {
    public let id: AdvantageIdentifier
}

public struct DisadvantageReference: EntitySubtype {
    public let id: DisadvantageIdentifier
}

public struct AdvancedSpecialAbilityReference<Identifier: EntitySubtype>: EntitySubtype {
    public let id: Identifier
}

public struct LanguageReference: EntitySubtype {
    public let id: LanguageIdentifier
}

public struct ScriptReference: EntitySubtype {
    public let id: ScriptIdentifier
}

public struct SocialStatusReference: EntitySubtype {
    public let id: SocialStatusIdentifier
}

public struct CurriculumReference: EntitySubtype {
    public let id: CurriculumIdentifier
}

public struct GuidelineReference: EntitySubtype {
    public let id: GuidelineIdentifier
}

public struct AnimalTypeReference: EntitySubtype {
    public let id: AnimalTypeIdentifier
}

public struct TargetCategoryReference: EntitySubtype {
    public let id: TargetCategoryIdentifier
}

public struct PatronCategoryReference: EntitySubtype {
    public let id: PatronCategoryIdentifier
}

public struct PersonalityTraitReference: EntitySubtype {
    public let id: PersonalityTraitIdentifier
}

public struct HairColorReference: EntitySubtype {
    public let id: HairColorIdentifier
}

public struct EyeColorReference: EntitySubtype {
    public let id: EyeColorIdentifier
}

public struct PactCategoryReference: EntitySubtype {
    public let id: PactCategoryIdentifier
}

public struct PactDomainReference: EntitySubtype {
    public let id: PactDomainIdentifier
}

public struct PatronReference: EntitySubtype {
    public let id: PatronIdentifier
}

public struct AnimistTribeReference: EntitySubtype {
    public let id: AnimistTribeIdentifier
}

public struct ElementReference: EntitySubtype {
    public let id: ElementIdentifier
}

public struct WeaponReference: EntitySubtype {
    public let id: WeaponIdentifier
}

public struct ArmorReference: EntitySubtype {
    public let id: ArmorIdentifier
}

public struct TraditionReference: EntitySubtype {
    public let id: TraditionIdentifier
}
