//
//  CombatSpecialAbility.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct CombatSpecialAbility: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let usageType: CombatSpecialAbilityUsageType

    public let selectOptions: SelectOptions?

    public let skillApplications: SkillApplications?

    public let skillUses: SkillUses?

    public let maximum: Maximum?

    public let penalty: Penalty?

    public let prerequisites: GeneralPrerequisites?

    public let combatTechniques: ApplicableCombatTechniques

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CombatSpecialAbilityTranslation>

    public init(id: Id, levels: Levels? = nil, usageType: CombatSpecialAbilityUsageType, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, maximum: Maximum? = nil, penalty: Penalty? = nil, prerequisites: GeneralPrerequisites? = nil, combatTechniques: ApplicableCombatTechniques, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<CombatSpecialAbilityTranslation>) {
        self.id = id
        self.levels = levels
        self.usageType = usageType
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.maximum = maximum
        self.penalty = penalty
        self.prerequisites = prerequisites
        self.combatTechniques = combatTechniques
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case usageType = "usage_type"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case maximum = "maximum"
        case penalty = "penalty"
        case prerequisites = "prerequisites"
        case combatTechniques = "combat_techniques"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct CombatSpecialAbilityTranslation: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    /// A string that is used as a label for an input field.
    public let input: Input?

    public let rules: Rules

    @available(*, deprecated)
    public let penalty: String?

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, input: Input? = nil, rules: Rules, penalty: String? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.input = input
        self.rules = rules
        self.penalty = penalty
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case input = "input"
        case rules = "rules"
        case penalty = "penalty"
        case errata = "errata"
    }
}
