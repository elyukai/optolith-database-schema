//
//  CauldronEnchantment.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct CauldronEnchantment: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let volume: Volume
    
    /// Witches can learn to brew special things in their Witch's Cauldron. These brews can be categorized in different types.
    public let brew: BrewReference
    
    public let cost: EnchantmentCost?
    
    public let property: PropertyDeclaration
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CauldronEnchantmentTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case volume = "volume"
        case brew = "brew"
        case cost = "cost"
        case property = "property"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct BrewReference: EntitySubtype {
    /// The brew's identifier.
    public let id: Int
}

public struct CauldronEnchantmentTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let effect: Effect
    
    @available(*, deprecated)
    public let volume: String
    
    @available(*, deprecated)
    public let aeCost: String?
    
    @available(*, deprecated)
    public let bindingCost: String?
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case volume = "volume"
        case aeCost = "aeCost"
        case bindingCost = "bindingCost"
        case errata = "errata"
    }
}
