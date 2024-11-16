//
//  Disadvantage.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Disadvantage: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: AdvantageDisadvantagePrerequisites?
    
    public let apValue: AdventurePointsValue
    
    /// Does this disadvantage count towards the maximum of AP to be spent on
    /// disadvantages?
    public let hasMaximumSpentInfluence: Bool
    
    /// Does this disadvantage exclusively applies to arcane spellworks and not
    /// to magical actions and magical applications?
    public let isExclusiveToArcaneSpellworks: Bool
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DisadvantageTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case hasMaximumSpentInfluence = "has_maximum_spent_influence"
        case isExclusiveToArcaneSpellworks = "is_exclusive_to_arcane_spellworks"
        case src = "src"
        case translations = "translations"
    }
}

public struct DisadvantageTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    /// A string that is used as a label for an input field.
    public let input: Input?
    
    public let rules: Rules
    
    /// The range.
    public let range: String?
    
    /// A string that gets appended to the default AP Value text with a preceding
    /// space. This always happens if present, even if the generated AP Value text
    /// is replaced.
    public let apValueAppend: AdventurePointsValueAppend?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case input = "input"
        case rules = "rules"
        case range = "range"
        case apValueAppend = "ap_value_append"
        case errata = "errata"
    }
}
