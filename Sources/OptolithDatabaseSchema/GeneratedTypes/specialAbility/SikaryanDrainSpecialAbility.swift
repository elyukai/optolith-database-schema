//
//  SikaryanDrainSpecialAbility.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct SikaryanDrainSpecialAbility: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SikaryanDrainSpecialAbilityTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct SikaryanDrainSpecialAbilityTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let rules: Rules
    
    /// The AP value. It is only used if the text cannot be generated from the
    /// given information.
    public let apValue: AdventurePointsValueReplacement?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case rules = "rules"
        case apValue = "ap_value"
        case errata = "errata"
    }
}
