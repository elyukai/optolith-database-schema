//
//  Skill.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct Skill: LocalizableEntity {
    /// The skill's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities.
    public let applications: Applications
    
    /// Indicates whether encumbrance gives a penalty for checks with the skill.
    public let encumbrance: EncumbranceInfluence
    
    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost
    
    /// The skill group this skill belongs to.
    public let group: SkillGroupReference
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SkillTranslation>

    public init(id: Int, check: SkillCheck, applications: Applications, encumbrance: EncumbranceInfluence, improvementCost: ImprovementCost, group: SkillGroupReference, src: PublicationRefs, translations: LocaleMap<SkillTranslation>) {
        self.id = id
        self.check = check
        self.applications = applications
        self.encumbrance = encumbrance
        self.improvementCost = improvementCost
        self.group = group
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case applications = "applications"
        case encumbrance = "encumbrance"
        case improvementCost = "improvement_cost"
        case group = "group"
        case src = "src"
        case translations = "translations"
    }
}

public struct SkillTranslation: EntitySubtype {
    /// The name of the skill.
    public let name: NonEmptyString
    
    /// If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty.
    public let applicationsInputLabel: NonEmptyString?
    
    /// The text listing the certain circumstances in which the encumbrance may count. This text must be used if `encumbrance` is set to `"Maybe"`, otherwise it is ignored if defined.
    public let encumbranceDescription: NonEmptyString?
    
    /// Mentions any tools from the equipment list that are necessary to employ the skill.
    public let tools: NonEmptyMarkdown?
    
    /// Gives examples of the effects that various QL might provide.
    public let quality: NonEmptyMarkdown
    
    /// Lists examples of results for a failed check.
    public let failed: NonEmptyMarkdown
    
    /// Lists examples of results for a critical success.
    public let critical: NonEmptyMarkdown
    
    /// Lists examples of results for botches.
    public let botch: NonEmptyMarkdown
    
    public let errata: Errata?

    public init(name: NonEmptyString, applicationsInputLabel: NonEmptyString? = nil, encumbranceDescription: NonEmptyString? = nil, tools: NonEmptyMarkdown? = nil, quality: NonEmptyMarkdown, failed: NonEmptyMarkdown, critical: NonEmptyMarkdown, botch: NonEmptyMarkdown, errata: Errata? = nil) {
        self.name = name
        self.applicationsInputLabel = applicationsInputLabel
        self.encumbranceDescription = encumbranceDescription
        self.tools = tools
        self.quality = quality
        self.failed = failed
        self.critical = critical
        self.botch = botch
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case applicationsInputLabel = "applications_input_label"
        case encumbranceDescription = "encumbrance_description"
        case tools = "tools"
        case quality = "quality"
        case failed = "failed"
        case critical = "critical"
        case botch = "botch"
        case errata = "errata"
    }
}

/// A category. All available entries from the specified category will be included as separate applications.
public enum ApplicationCategory: String, EntitySubtype {
    case blessedTraditions = "BlessedTraditions"
    case diseases = "Diseases"
    case regions = "Regions"
}

/// The skill's applications.
@DiscriminatedEnum
public enum Applications: EntitySubtype {
    case derived(ApplicationCategory)
    case explicit(SpecificApplications)
}

/// A list of explicit applications.
public typealias SpecificApplications = [Application]

/// An explicit skill application.
public struct Application: EntitySubtype {
    /// The skill application's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ApplicationTranslation>

    public init(id: Int, translations: LocaleMap<ApplicationTranslation>) {
        self.id = id
        self.translations = translations
    }
}

public struct ApplicationTranslation: EntitySubtype {
    /// The skill application's name.
    public let name: NonEmptyString

    public init(name: NonEmptyString) {
        self.name = name
    }
}

/// Indicates whether encumbrance gives a penalty for checks with the skill.
public enum EncumbranceInfluence: String, EntitySubtype {
    case `true` = "True"
    case `false` = "False"
    case maybe = "Maybe"
}
