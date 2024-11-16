//
//  ProtectiveWardingCircleSpecialAbility.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct ProtectiveWardingCircleSpecialAbility: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    /// The cost in AE.
    public let cost: Int
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ProtectiveWardingCircleSpecialAbilityTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case cost = "cost"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct ProtectiveWardingCircleSpecialAbilityTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    /// The rules for the protective circle variant.
    public let protectiveCircle: NonEmptyMarkdown
    
    /// The rules for the warding circle variant.
    public let wardingCircle: NonEmptyMarkdown
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case protectiveCircle = "protective_circle"
        case wardingCircle = "warding_circle"
        case errata = "errata"
    }
}
