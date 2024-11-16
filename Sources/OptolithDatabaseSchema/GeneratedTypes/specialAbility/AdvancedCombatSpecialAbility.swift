//
//  AdvancedCombatSpecialAbility.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AdvancedCombatSpecialAbility: LocalizableEntity {
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
    public let translations: LocaleMap<AdvancedCombatSpecialAbilityTranslation>    
    
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

public struct AdvancedCombatSpecialAbilityTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let rules: Rules
    
    @available(*, deprecated)
    public let penalty: String?
    
    /// The AP value. It is only used if the text cannot be generated from the given information.
    public let apValue: AdventurePointsValueReplacement?
    
    /// A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced.
    public let apValueAppend: AdventurePointsValueAppend?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case rules = "rules"
        case penalty = "penalty"
        case apValue = "ap_value"
        case apValueAppend = "ap_value_append"
        case errata = "errata"
    }
}
