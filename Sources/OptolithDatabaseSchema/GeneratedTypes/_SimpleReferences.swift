//
//  _SimpleReferences.swift
//  OptolithDatabaseSchema
//

public struct FocusRuleSubjectReference: EntitySubtype {
    public let id: SubjectIdentifier

    public init(id: SubjectIdentifier) {
        self.id = id
    }
}

public struct RaceReference: EntitySubtype {
    public let id: RaceIdentifier

    public init(id: RaceIdentifier) {
        self.id = id
    }
}

public struct CultureReference: EntitySubtype {
    public let id: CultureIdentifier

    public init(id: CultureIdentifier) {
        self.id = id
    }
}

public struct ProfessionReference: EntitySubtype {
    public let id: ProfessionIdentifier

    public init(id: ProfessionIdentifier) {
        self.id = id
    }
}

public struct ProfessionVariantReference: EntitySubtype {
    public let id: ProfessionVariantIdentifier

    public init(id: ProfessionVariantIdentifier) {
        self.id = id
    }
}

public struct AttributeReference: EntitySubtype {
    public let id: AttributeIdentifier

    public init(id: AttributeIdentifier) {
        self.id = id
    }
}

public struct SkillReference: EntitySubtype {
    public let id: SkillIdentifier

    public init(id: SkillIdentifier) {
        self.id = id
    }
}

public struct SkillGroupReference: EntitySubtype {
    public let id: SkillGroupIdentifier

    public init(id: SkillGroupIdentifier) {
        self.id = id
    }
}

public struct CombatTechniqueReference: EntitySubtype {
    public let id: CombatTechniqueIdentifier

    public init(id: CombatTechniqueIdentifier) {
        self.id = id
    }
}

public struct CloseCombatTechniqueReference: EntitySubtype {
    public let id: CloseCombatTechniqueIdentifier

    public init(id: CloseCombatTechniqueIdentifier) {
        self.id = id
    }
}

public struct RangedCombatTechniqueReference: EntitySubtype {
    public let id: RangedCombatTechniqueIdentifier

    public init(id: RangedCombatTechniqueIdentifier) {
        self.id = id
    }
}

public struct MagicalTraditionReference: EntitySubtype {
    public let id: MagicalTraditionIdentifier

    public init(id: MagicalTraditionIdentifier) {
        self.id = id
    }
}

public struct CantripReference: EntitySubtype {
    public let id: CantripIdentifier

    public init(id: CantripIdentifier) {
        self.id = id
    }
}

public struct SpellReference: EntitySubtype {
    public let id: SpellIdentifier

    public init(id: SpellIdentifier) {
        self.id = id
    }
}

public struct RitualReference: EntitySubtype {
    public let id: RitualIdentifier

    public init(id: RitualIdentifier) {
        self.id = id
    }
}

public struct SpellworkReference: EntitySubtype {
    public let id: SpellworkIdentifier

    public init(id: SpellworkIdentifier) {
        self.id = id
    }
}

public struct PropertyReference: EntitySubtype {
    public let id: PropertyIdentifier

    public init(id: PropertyIdentifier) {
        self.id = id
    }
}

public struct BlessedTraditionReference: EntitySubtype {
    public let id: BlessedTraditionIdentifier

    public init(id: BlessedTraditionIdentifier) {
        self.id = id
    }
}

public struct BlessingReference: EntitySubtype {
    public let id: BlessingIdentifier

    public init(id: BlessingIdentifier) {
        self.id = id
    }
}

public struct LiturgicalChantReference: EntitySubtype {
    public let id: LiturgicalChantIdentifier

    public init(id: LiturgicalChantIdentifier) {
        self.id = id
    }
}

public struct CeremonyReference: EntitySubtype {
    public let id: CeremonyIdentifier

    public init(id: CeremonyIdentifier) {
        self.id = id
    }
}

public struct AspectReference: EntitySubtype {
    public let id: AspectIdentifier

    public init(id: AspectIdentifier) {
        self.id = id
    }
}

public struct AdvantageReference: EntitySubtype {
    public let id: AdvantageIdentifier

    public init(id: AdvantageIdentifier) {
        self.id = id
    }
}

public struct DisadvantageReference: EntitySubtype {
    public let id: DisadvantageIdentifier

    public init(id: DisadvantageIdentifier) {
        self.id = id
    }
}

public struct AdvancedSpecialAbilityReference<Identifier: EntitySubtype>: EntitySubtype {
    public let id: Identifier

    public init(id: Identifier) {
        self.id = id
    }
}

public struct LanguageReference: EntitySubtype {
    public let id: LanguageIdentifier

    public init(id: LanguageIdentifier) {
        self.id = id
    }
}

public struct ScriptReference: EntitySubtype {
    public let id: ScriptIdentifier

    public init(id: ScriptIdentifier) {
        self.id = id
    }
}

public struct SocialStatusReference: EntitySubtype {
    public let id: SocialStatusIdentifier

    public init(id: SocialStatusIdentifier) {
        self.id = id
    }
}

public struct CurriculumReference: EntitySubtype {
    public let id: CurriculumIdentifier

    public init(id: CurriculumIdentifier) {
        self.id = id
    }
}

public struct GuidelineReference: EntitySubtype {
    public let id: GuidelineIdentifier

    public init(id: GuidelineIdentifier) {
        self.id = id
    }
}

public struct AnimalTypeReference: EntitySubtype {
    public let id: AnimalTypeIdentifier

    public init(id: AnimalTypeIdentifier) {
        self.id = id
    }
}

public struct TargetCategoryReference: EntitySubtype {
    public let id: TargetCategoryIdentifier

    public init(id: TargetCategoryIdentifier) {
        self.id = id
    }
}

public struct PatronCategoryReference: EntitySubtype {
    public let id: PatronCategoryIdentifier

    public init(id: PatronCategoryIdentifier) {
        self.id = id
    }
}

public struct PersonalityTraitReference: EntitySubtype {
    public let id: PersonalityTraitIdentifier

    public init(id: PersonalityTraitIdentifier) {
        self.id = id
    }
}

public struct HairColorReference: EntitySubtype {
    public let id: HairColorIdentifier

    public init(id: HairColorIdentifier) {
        self.id = id
    }
}

public struct EyeColorReference: EntitySubtype {
    public let id: EyeColorIdentifier

    public init(id: EyeColorIdentifier) {
        self.id = id
    }
}

public struct PactCategoryReference: EntitySubtype {
    public let id: PactCategoryIdentifier

    public init(id: PactCategoryIdentifier) {
        self.id = id
    }
}

public struct PactDomainReference: EntitySubtype {
    public let id: PactDomainIdentifier

    public init(id: PactDomainIdentifier) {
        self.id = id
    }
}

public struct PatronReference: EntitySubtype {
    public let id: PatronIdentifier

    public init(id: PatronIdentifier) {
        self.id = id
    }
}

public struct AnimistTribeReference: EntitySubtype {
    public let id: AnimistTribeIdentifier

    public init(id: AnimistTribeIdentifier) {
        self.id = id
    }
}

public struct ElementReference: EntitySubtype {
    public let id: ElementIdentifier

    public init(id: ElementIdentifier) {
        self.id = id
    }
}

public struct WeaponReference: EntitySubtype {
    public let id: WeaponIdentifier

    public init(id: WeaponIdentifier) {
        self.id = id
    }
}

public struct ArmorReference: EntitySubtype {
    public let id: ArmorIdentifier

    public init(id: ArmorIdentifier) {
        self.id = id
    }
}

public struct TraditionReference: EntitySubtype {
    public let id: TraditionIdentifier

    public init(id: TraditionIdentifier) {
        self.id = id
    }
}
