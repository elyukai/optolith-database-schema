//
//  StaffEnchantment.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct StaffEnchantment: LocalizableEntity {
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
    public let translations: LocaleMap<StaffEnchantmentTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, volume: Volume, cost: EnchantmentCost? = nil, property: PropertyDeclaration, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<StaffEnchantmentTranslation>) {
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

public struct StaffEnchantmentTranslation: EntitySubtype {
    public let name: Name
    
    public let nameInLibrary: NameInLibrary?
    
    public let effect: Effect
    
    @available(*, deprecated)
    public let volume: String
    
    @available(*, deprecated)
    public let aeCost: String?
    
    /// A note, appended to the generated cost string in parenthesis.
    public let costNote: ResponsiveTextOptional?
    
    @available(*, deprecated)
    public let bindingCost: String?
    
    /// The AP value. It is only used if the text cannot be generated from the given information.
    public let apValue: AdventurePointsValueReplacement?
    
    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, effect: Effect, volume: String, aeCost: String? = nil, costNote: ResponsiveTextOptional? = nil, bindingCost: String? = nil, apValue: AdventurePointsValueReplacement? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.effect = effect
        self.volume = volume
        self.aeCost = aeCost
        self.costNote = costNote
        self.bindingCost = bindingCost
        self.apValue = apValue
        self.errata = errata
    }    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case volume = "volume"
        case aeCost = "aeCost"
        case costNote = "cost_note"
        case bindingCost = "bindingCost"
        case apValue = "ap_value"
        case errata = "errata"
    }
}
