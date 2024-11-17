//
//  MagicalSpecialAbility.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct MagicalSpecialAbility: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let skillApplications: SkillApplications?
    
    public let skillUses: SkillUses?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalSpecialAbilityTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<MagicalSpecialAbilityTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.maximum = maximum
        self.prerequisites = prerequisites
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalSpecialAbilityTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    /// A string that is used as a label for an input field.
    public let input: Input?
    
    public let rules: Rules
    
    /// The AP value. It is only used if the text cannot be generated from the given information.
    public let apValue: AdventurePointsValueReplacement?
    
    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, input: Input? = nil, rules: Rules, apValue: AdventurePointsValueReplacement? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.input = input
        self.rules = rules
        self.apValue = apValue
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case input = "input"
        case rules = "rules"
        case apValue = "ap_value"
        case errata = "errata"
    }
}
