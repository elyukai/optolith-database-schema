//
//  DaggerRitual.swift
//  OptolithDatabaseSchema
//

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

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, volume: Volume, cost: DaggerRitualCost? = nil, property: PropertyDeclaration, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<DaggerRitualTranslation>) {
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

public enum DaggerRitualCost: EntitySubtype {
    case arcaneEnergyCost(DaggerRitualArcaneEnergyCost)
    case bindingCost(BindingCost)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case arcaneEnergyCost = "arcane_energy_cost"
        case bindingCost = "binding_cost"
    }

    private enum Discriminator: String, Decodable {
        case arcaneEnergyCost = "ArcaneEnergyCost"
        case bindingCost = "BindingCost"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .arcaneEnergyCost:
            self = .arcaneEnergyCost(try container.decode(DaggerRitualArcaneEnergyCost.self, forKey: .arcaneEnergyCost))
        case .bindingCost:
            self = .bindingCost(try container.decode(BindingCost.self, forKey: .bindingCost))
        }
    }
}

public struct DaggerRitualArcaneEnergyCost: EntitySubtype {
    public let aeCost: ArcaneEnergyCost

    public let lpCost: LifePointsCost?

    public init(aeCost: ArcaneEnergyCost, lpCost: LifePointsCost? = nil) {
        self.aeCost = aeCost
        self.lpCost = lpCost
    }

    private enum CodingKeys: String, CodingKey {
        case aeCost = "ae_cost"
        case lpCost = "lp_cost"
    }
}

public struct LifePointsCost: EntitySubtype {
    public let tag: String

    public let fixed: FixedLifePointsCost

    public init(tag: String, fixed: FixedLifePointsCost) {
        self.tag = tag
        self.fixed = fixed
    }
}

public struct FixedLifePointsCost: EntitySubtype {
    /// The LP cost value.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
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
