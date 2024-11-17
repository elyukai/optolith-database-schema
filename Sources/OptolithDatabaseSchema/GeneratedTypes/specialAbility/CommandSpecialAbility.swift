//
//  CommandSpecialAbility.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct CommandSpecialAbility: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let usageType: CombatSpecialAbilityUsageType

    public let selectOptions: SelectOptions?

    public let maximum: Maximum?

    public let prerequisites: GeneralPrerequisites?

    public let combatTechniques: ApplicableCombatTechniques

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CommandSpecialAbilityTranslation>

    public init(id: Id, levels: Levels? = nil, usageType: CombatSpecialAbilityUsageType, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, combatTechniques: ApplicableCombatTechniques, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<CommandSpecialAbilityTranslation>) {
        self.id = id
        self.levels = levels
        self.usageType = usageType
        self.selectOptions = selectOptions
        self.maximum = maximum
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
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case combatTechniques = "combat_techniques"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct CommandSpecialAbilityTranslation: EntitySubtype {
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
