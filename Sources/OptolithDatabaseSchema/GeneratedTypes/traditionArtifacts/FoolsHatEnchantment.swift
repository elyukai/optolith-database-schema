//
//  FoolsHatEnchantment.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct FoolsHatEnchantment: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let volume: Volume
    
    public let cost: EnchantmentCost?
    
    public let property: PropertyDeclaration
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FoolsHatEnchantmentTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, volume: Volume, cost: EnchantmentCost? = nil, property: PropertyDeclaration, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<FoolsHatEnchantmentTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.maximum = maximum
        self.prerequisites = prerequisites
        self.volume = volume
        self.cost = cost
        self.property = property
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case volume = "volume"
        case cost = "cost"
        case property = "property"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct FoolsHatEnchantmentTranslation: EntitySubtype {
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

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, effect: Effect, volume: String, aeCost: String? = nil, bindingCost: String? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.effect = effect
        self.volume = volume
        self.aeCost = aeCost
        self.bindingCost = bindingCost
        self.errata = errata
    }    
    
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
