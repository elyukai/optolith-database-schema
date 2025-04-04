//
//  CombatStyleSpecialAbility.swift
//  OptolithDatabaseSchema
//

public struct CombatStyleSpecialAbility: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let usageType: CombatSpecialAbilityUsageType

    /// Is this an armed or unarmed combat style?
    public let type: CombatSpecialAbilityType

    public let selectOptions: SelectOptions?

    public let skillApplications: SkillApplications?

    public let skillUses: SkillUses?

    public let maximum: Maximum?

    public let advanced: AdvancedSpecialAbilities<AdvancedCombatSpecialAbilityIdentifier>

    public let prerequisites: GeneralPrerequisites?

    public let combatTechniques: ApplicableCombatTechniques

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CombatStyleSpecialAbilityTransition>

    public init(id: Id, levels: Levels? = nil, usageType: CombatSpecialAbilityUsageType, type: CombatSpecialAbilityType, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, maximum: Maximum? = nil, advanced: AdvancedSpecialAbilities<AdvancedCombatSpecialAbilityIdentifier>, prerequisites: GeneralPrerequisites? = nil, combatTechniques: ApplicableCombatTechniques, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<CombatStyleSpecialAbilityTransition>) {
        self.id = id
        self.levels = levels
        self.usageType = usageType
        self.type = type
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.maximum = maximum
        self.advanced = advanced
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
        case type = "type"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case maximum = "maximum"
        case advanced = "advanced"
        case prerequisites = "prerequisites"
        case combatTechniques = "combat_techniques"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct CombatStyleSpecialAbilityTransition: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    public let rules: Rules

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, rules: Rules, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.rules = rules
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case rules = "rules"
        case errata = "errata"
    }
}
