//
//  Lessons_Curriculum.swift
//  OptolithDatabaseSchema
//

/// This is a curriculum of a specified academy, containing the guideline, elective and restricted spellworks as well as the lesson packages of that academy.
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

    public init(id: Int, guideline: GuidelineReference, electiveSpellworks: ElectiveSpellworks? = nil, restrictedSpellworks: RestrictedSpellworks? = nil, lessonPackages: LessonPackages, src: PublicationRefs, translations: LocaleMap<CurriculumTranslation>) {
        self.id = id
        self.guideline = guideline
        self.electiveSpellworks = electiveSpellworks
        self.restrictedSpellworks = restrictedSpellworks
        self.lessonPackages = lessonPackages
        self.src = src
        self.translations = translations
    }

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

    public init(name: NonEmptyString, errata: Errata? = nil) {
        self.name = name
        self.errata = errata
    }
}

/// The academy's elective spellworks package.
public enum ElectiveSpellworks: EntitySubtype {
    case definedByGameMaster
    case specific(SpecificElectiveSpellworks)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case definedByGameMaster = "defined_by_game_master"
        case specific = "specific"
    }

    private enum Discriminator: String, Decodable {
        case definedByGameMaster = "DefinedByGameMaster"
        case specific = "Specific"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .definedByGameMaster:
            self = .definedByGameMaster
        case .specific:
            self = .specific(try container.decode(SpecificElectiveSpellworks.self, forKey: .specific))
        }
    }
}

public struct SpecificElectiveSpellworks: EntitySubtype {
    public let list: [ElectiveSpellwork]

    public init(list: [ElectiveSpellwork]) {
        self.list = list
    }
}

public struct ElectiveSpellwork: EntitySubtype {
    public let id: SpellworkIdentifier

    /// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
    public let restriction: ElectiveSpellworkRestriction?

    public init(id: SpellworkIdentifier, restriction: ElectiveSpellworkRestriction? = nil) {
        self.id = id
        self.restriction = restriction
    }
}

/// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
public struct ElectiveSpellworkRestriction: EntitySubtype {
    public let tag: String

    public let element: ElectiveSpellworkElementRestriction

    public init(tag: String, element: ElectiveSpellworkElementRestriction) {
        self.tag = tag
        self.element = element
    }
}

public struct ElectiveSpellworkElementRestriction: EntitySubtype {
    public let id: ElementIdentifier

    public init(id: ElementIdentifier) {
        self.id = id
    }
}

/// The academy's restricted spellworks package.
public typealias RestrictedSpellworks = [RestrictedSpellwork]

/// The academy's restricted spellworks package.
public enum RestrictedSpellwork: EntitySubtype {
    case property(RestrictedProperty)
    case spellwork(SpellworkIdentifier)
    case demonSummoning
    case borbaradian
    case damageIntelligent

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case property = "property"
        case spellwork = "spellwork"
        case demonSummoning = "demon_summoning"
        case borbaradian = "borbaradian"
        case damageIntelligent = "damage_intelligent"
    }

    private enum Discriminator: String, Decodable {
        case property = "Property"
        case spellwork = "Spellwork"
        case demonSummoning = "DemonSummoning"
        case borbaradian = "Borbaradian"
        case damageIntelligent = "DamageIntelligent"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .property:
            self = .property(try container.decode(RestrictedProperty.self, forKey: .property))
        case .spellwork:
            self = .spellwork(try container.decode(SpellworkIdentifier.self, forKey: .spellwork))
        case .demonSummoning:
            self = .demonSummoning
        case .borbaradian:
            self = .borbaradian
        case .damageIntelligent:
            self = .damageIntelligent
        }
    }
}

public struct RestrictedProperty: EntitySubtype {
    /// The identifier of the property that spellworks are disallowed from.
    public let id: PropertyIdentifier

    /// Exclude specific spellworks from the restriction.
    public let exclude: [SpellworkIdentifier]?

    /// Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum.
    public let maximum: Double?

    public init(id: PropertyIdentifier, exclude: [SpellworkIdentifier]? = nil, maximum: Double? = nil) {
        self.id = id
        self.exclude = exclude
        self.maximum = maximum
    }
}

/// A list of available lesson packages.
public typealias LessonPackages = [LessonPackage]

public struct LessonPackage: EntitySubtype {
    /// The lesson package's identifier. An unique, increasing integer.
    public let id: Int

    /// The spell values difference of the lesson package. This field reflects the changes (difference) to the field of the same name in the profession package. If a spell gets to SR 0 because of this, it will be removed completely.
    public let spellworkChanges: [SpellworkChange]?

    public let skills: [AbilityAdjustment]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<LessonPackageTranslation>

    public init(id: Int, spellworkChanges: [SpellworkChange]? = nil, skills: [AbilityAdjustment]? = nil, translations: LocaleMap<LessonPackageTranslation>) {
        self.id = id
        self.spellworkChanges = spellworkChanges
        self.skills = skills
        self.translations = translations
    }

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

    public init(base: SpellworkAdjustment, replacement: SpellworkAdjustment) {
        self.base = base
        self.replacement = replacement
    }
}

public struct LessonPackageTranslation: EntitySubtype {
    /// The name of the lesson package.
    public let name: NonEmptyString

    /// The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated
    /// `spellwork_changes` list. The field is displayed even if no list is
    /// present.
    public let spellworkChanges: NonEmptyString?

    public init(name: NonEmptyString, spellworkChanges: NonEmptyString? = nil) {
        self.name = name
        self.spellworkChanges = spellworkChanges
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case spellworkChanges = "spellwork_changes"
    }
}

public enum AbilityAdjustment: EntitySubtype {
    case combatTechnique(CombatTechniqueAdjustment)
    case skill(SkillAdjustment)
    case spellwork(SpellworkAdjustment)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case combatTechnique = "combat_technique"
        case skill = "skill"
        case spellwork = "spellwork"
    }

    private enum Discriminator: String, Decodable {
        case combatTechnique = "CombatTechnique"
        case skill = "Skill"
        case spellwork = "Spellwork"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .combatTechnique:
            self = .combatTechnique(try container.decode(CombatTechniqueAdjustment.self, forKey: .combatTechnique))
        case .skill:
            self = .skill(try container.decode(SkillAdjustment.self, forKey: .skill))
        case .spellwork:
            self = .spellwork(try container.decode(SpellworkAdjustment.self, forKey: .spellwork))
        }
    }
}

public struct CombatTechniqueAdjustment: EntitySubtype {
    public let id: CombatTechniqueIdentifier

    /// The combat technique points that will be added to the current combat technique rating.
    public let points: Int

    public init(id: CombatTechniqueIdentifier, points: Int) {
        self.id = id
        self.points = points
    }
}

public struct SkillAdjustment: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier

    /// The skill points that will be added to the current skill rating.
    public let points: Int

    public init(id: SkillIdentifier, points: Int) {
        self.id = id
        self.points = points
    }
}

public struct SpellworkAdjustment: EntitySubtype {
    public let id: SpellworkIdentifier

    /// The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely.
    public let points: Int

    /// The target tradition. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here.
    public let tradition: MagicalTraditionIdentifier?

    public init(id: SpellworkIdentifier, points: Int, tradition: MagicalTraditionIdentifier? = nil) {
        self.id = id
        self.points = points
        self.tradition = tradition
    }
}
