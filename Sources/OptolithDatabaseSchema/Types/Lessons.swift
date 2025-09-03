import FileDB

@Model
public struct Guideline {
    /// Maximum number of spells that can be exchanged.
    @Minimum(0)
    let spellwork_changes_allowed: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // GuidelineTranslation
        /// The guideline’s name.
        @MinLength(1)
        let name: String
    }
}

/// This is a curriculum of a specified or other institutions such as private teachers, containing the guideline, elective and restricted spellworks as well as the lesson packages of that academy. It is used with the focus rule *Lessons*.
@Model
public struct Curriculum {
    /// The institution’s guideline.
    @Relationship(Guideline.self)
    let guideline: Guideline.ID

    /// The institution’s elective spellworks package.
    let elective_spellworks: ElectiveSpellworks

    /// The institution’s restricted spellworks package.
    @MinItems(1)
    @UniqueItems
    let restricted_spellworks: [RestrictedSpellwork]

    /// A list of available lesson packages.
    @MinItems(2)
    @MaxItems(2)
    @Relationship(LessonPackage.self)
    let lesson_packages: [LessonPackage.ID]
    // isTransient: true

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // CurriculumTranslation
        /// The institution’s name.
        @MinLength(1)
        let name: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }

    public static let namePlural = "Curricula"
}

/// The institution’s elective spellworks package.
@ModelEnum
public enum ElectiveSpellworks {
    case definedByGameMaster
    case specific(SpecificElectiveSpellworks)
}

@Embedded
public struct SpecificElectiveSpellworks {
    @MinItems(1)
    @UniqueItems
    let list: [ElectiveSpellwork]
}

@Embedded
public struct ElectiveSpellwork {
    let id: SpellworkIdentifier

    /// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
    let restriction: ElectiveSpellworkRestriction?
}

/// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
@ModelEnum
public enum ElectiveSpellworkRestriction {
    case element(ElementIdentifierObject)
}

@ModelEnum
public enum RestrictedSpellwork {
    case property(RestrictedProperty)
    case spellwork(SpellworkIdentifier)
    case demonSummoning
    case borbaradian
    case damageIntelligent
}

@Embedded
public struct RestrictedProperty {
    /// The identifier of the property that spellworks are disallowed from.
    @Relationship(Property.self)
    let id: Property.ID

    /// Exclude specific spellworks from the restriction.
    @MinItems(1)
    @UniqueItems
    let exclude: [SpellworkIdentifier]?

    /// Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum.
    @Minimum(1)
    let maximum: Int?
}

@Model
public struct LessonPackage {
    /// The associated curriculum.
    @Relationship(Curriculum.self)
    let curriculum: Curriculum.ID

    /// The spell values difference of the lesson package. This field reflects the changes (difference) to the field of the same name in the profession package. If a spell gets to SR 0 because of this, it will be removed completely.
    @MinItems(1)
    @UniqueItems
    let spellwork_changes: [SpellworkChange]

    @MinItems(1)
    @UniqueItems
    let skills: [AbilityAdjustment]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    public struct Translation {  // LessonPackageTranslation
        /// The lesson package’s name.
        @MinLength(1)
        let name: String

        /// The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated `spellwork_changes` list. The field is displayed even if no list is present.
        @MinLength(1)
        let spellwork_changes: String?
    }
}

@Embedded
public struct SpellworkChange {
    let base: SpellworkAdjustment

    let replacement: SpellworkAdjustment
}

@ModelEnum
public enum AbilityAdjustment {
    case combatTechnique(CombatTechniqueAdjustment)
    case skill(SkillAdjustment)
    case spellwork(SpellworkAdjustment)
}

@Embedded
public struct CombatTechniqueAdjustment {
    let id: CombatTechniqueIdentifier

    /// The combat technique points that will be added to the current combat technique rating.
    @Minimum(-6)
    @Maximum(6)
    let points: Int
}

@Embedded
public struct SkillAdjustment {
    @Relationship(Skill.self)
    let id: Skill.ID

    /// The skill points that will be added to the current skill rating.
    @Minimum(-8)
    @Maximum(8)
    let points: Int
}

@Embedded
public struct SpellworkAdjustment {
    let id: SpellworkIdentifier

    /// The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely.
    @Minimum(-10)
    @Maximum(10)
    let points: Int

    /// The target tradition. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here.
    @Relationship(MagicalTradition.self)
    let tradition: MagicalTradition.ID?
}
