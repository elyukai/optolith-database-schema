//
//  Lessons_Curriculum.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// This is a curriculum of a specified academy, containing the guideline,
/// elective and restricted spellworks as well as the lesson packages of that
/// academy.
public struct Curriculum: LocalizableEntity {
    /// The curriculum's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The institution's guideline.
    public let guideline: GuidelineReference
    
    /// The academy's elective spellworks package.
    public let electiveSpellworks: ElectiveSpellworks?
    
    /// The academy's restricted spellworks package.
    public let restrictedSpellworks: RestrictedSpellworks?
    
    /// A list of available lesson packages.
    public let lessonPackages: LessonPackages
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CurriculumTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case guideline = "guideline"
        case electiveSpellworks = "elective_spellworks"
        case restrictedSpellworks = "restricted_spellworks"
        case lessonPackages = "lesson_packages"
        case src = "src"
        case translations = "translations"
    }
}

public struct CurriculumTranslation: EntitySubtype {
    /// The name of the academy.
    public let name: NonEmptyString
    
    public let errata: Errata?
}

/// The academy's elective spellworks package.
@DiscriminatedEnum
public enum ElectiveSpellworks: EntitySubtype {
    case definedByGameMaster
    case specific(SpecificElectiveSpellworks)
}

public struct SpecificElectiveSpellworks: EntitySubtype {
    public let list: [ElectiveSpellwork]
}

public struct ElectiveSpellwork: EntitySubtype {
    public let id: SpellworkIdentifier
    
    /// The elective spellwork may only take effect if a certain condition is met.
    /// The condition may be related to professions or profession variants, but it
    /// is designed so that it can work without a specific profession, as multiple
    /// may belong to an institute, but with referencing other entities instead.
    public let restriction: ElectiveSpellworkRestriction?
}

/// The elective spellwork may only take effect if a certain condition is met.
/// The condition may be related to professions or profession variants, but it is
/// designed so that it can work without a specific profession, as multiple may
/// belong to an institute, but with referencing other entities instead.
@DiscriminatedEnum
public enum ElectiveSpellworkRestriction: EntitySubtype {
    case element(ElectiveSpellworkElementRestriction)
}

public struct ElectiveSpellworkElementRestriction: EntitySubtype {
    public let id: ElementIdentifier
}

/// The academy's restricted spellworks package.
public typealias RestrictedSpellworks = [RestrictedSpellwork]

/// The academy's restricted spellworks package.
@DiscriminatedEnum
public enum RestrictedSpellwork: EntitySubtype {
    case property(RestrictedProperty)
    case spellwork(SpellworkIdentifier)
    case demonSummoning
    case borbaradian
    case damageIntelligent
}

public struct RestrictedProperty: EntitySubtype {
    /// The identifier of the property that spellworks are disallowed from.
    public let id: PropertyIdentifier
    
    /// Exclude specific spellworks from the restriction.
    public let exclude: [SpellworkIdentifier]?
    
    /// Spellworks from this property up to a certain number are allowed.
    /// Spellworks excluded from this restriction definition using `exclude` do
    /// not contribute to the maximum.
    public let maximum: Double?
}

/// A list of available lesson packages.
public typealias LessonPackages = [LessonPackage]

public struct LessonPackage: EntitySubtype {
    /// The lesson package's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The spell values difference of the lesson package. This field reflects the
    /// changes (difference) to the field of the same name in the profession
    /// package. If a spell gets to SR 0 because of this, it will be removed
    /// completely.
    public let spellworkChanges: [SpellworkChange]?
    
    public let skills: [AbilityAdjustment]?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<LessonPackageTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case spellworkChanges = "spellwork_changes"
        case skills = "skills"
        case translations = "translations"
    }
}

public struct SpellworkChange: EntitySubtype {
    public let base: SpellworkAdjustment
    
    public let replacement: SpellworkAdjustment
}

public struct LessonPackageTranslation: EntitySubtype {
    /// The name of the lesson package.
    public let name: NonEmptyString
    
    /// The spell values difference of the lesson package. Use this field to
    /// specify a text that is displayed instead of the generated
    /// `spellwork_changes` list. The field is displayed even if no list is
    /// present.
    public let spellworkChanges: NonEmptyString?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case spellworkChanges = "spellwork_changes"
    }
}

@DiscriminatedEnum
public enum AbilityAdjustment: EntitySubtype {
    case combatTechnique(CombatTechniqueAdjustment)
    case skill(SkillAdjustment)
    case spellwork(SpellworkAdjustment)
}

public struct CombatTechniqueAdjustment: EntitySubtype {
    public let id: CombatTechniqueIdentifier
    
    /// The combat technique points that will be added to the current combat
    /// technique rating.
    public let points: Int
}

public struct SkillAdjustment: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier
    
    /// The skill points that will be added to the current skill rating.
    public let points: Int
}

public struct SpellworkAdjustment: EntitySubtype {
    public let id: SpellworkIdentifier
    
    /// The skill points that will be added to the current skill rating. If a
    /// spell gets to a skill rating of 0 because of this, it will be removed
    /// completely.
    public let points: Int
    
    /// The target tradition. If the target spell is not from the Guild Mage
    /// tradition, specify the tradition identifier here.
    public let tradition: MagicalTraditionIdentifier?
}
