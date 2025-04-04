//
//  Ammunition.swift
//  OptolithDatabaseSchema
//

public struct Ammunition: LocalizableEntity {
    /// The cost in silverthalers.
    public let cost: Cost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AmmunitionTranslation>

    public init(cost: Cost, src: PublicationRefs, translations: LocaleMap<AmmunitionTranslation>) {
        self.cost = cost
        self.src = src
        self.translations = translations
    }
}

public struct AmmunitionTranslation: EntitySubtype {
    /// The name of the item.
    public let name: NonEmptyString

    /// An auxiliary name or label of the item, if available.
    public let secondaryName: NonEmptyString?

    public let errata: Errata?

    public init(name: NonEmptyString, secondaryName: NonEmptyString? = nil, errata: Errata? = nil) {
        self.name = name
        self.secondaryName = secondaryName
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case secondaryName = "secondary_name"
        case errata = "errata"
    }
}
