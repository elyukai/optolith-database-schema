//
//  CommandSpecialAbility.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
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
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case rules = "rules"
        case errata = "errata"
    }
}
