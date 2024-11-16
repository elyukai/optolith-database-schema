//
//  DaggerRitual.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct DaggerRitual: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let maximum: Maximum?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let volume: Volume
    
    public let cost: DaggerRitualCost?
    
    public let property: PropertyDeclaration
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DaggerRitualTranslation>    
    
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

@DiscriminatedEnum
public enum DaggerRitualCost: EntitySubtype {
    case arcaneEnergyCost(DaggerRitualArcaneEnergyCost)
    case bindingCost(BindingCost)
}

public struct DaggerRitualArcaneEnergyCost: EntitySubtype {
    public let aeCost: ArcaneEnergyCost
    
    public let lpCost: LifePointsCost?    
    
    private enum CodingKeys: String, CodingKey {
        case aeCost = "ae_cost"
        case lpCost = "lp_cost"
    }
}

@DiscriminatedEnum
public enum LifePointsCost: EntitySubtype {
    case fixed(FixedLifePointsCost)
}

public struct FixedLifePointsCost: EntitySubtype {
    /// The LP cost value.
    public let value: Int
}

public struct DaggerRitualTranslation: EntitySubtype {
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
