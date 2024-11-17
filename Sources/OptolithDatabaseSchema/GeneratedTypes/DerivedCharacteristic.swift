//
//  DerivedCharacteristic.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct DerivedCharacteristic: LocalizableEntity {
    /// An unique, increasing integer.
    public let id: Int
    
    public let prerequisites: DerivedCharacteristicPrerequisites?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DerivedCharacteristicTranslation>

    public init(id: Int, prerequisites: DerivedCharacteristicPrerequisites? = nil, src: PublicationRefs, translations: LocaleMap<DerivedCharacteristicTranslation>) {
        self.id = id
        self.prerequisites = prerequisites
        self.src = src
        self.translations = translations
    }
}

public struct DerivedCharacteristicTranslation: EntitySubtype {
    /// The characteristic's name.
    public let name: String
    
    /// The characteristic's abbreviation.
    public let abbreviation: String
    
    /// Possible calculation strings for the final value.
    public let calculation: CalculationTranslation?

    public init(name: String, abbreviation: String, calculation: CalculationTranslation? = nil) {
        self.name = name
        self.abbreviation = abbreviation
        self.calculation = calculation
    }
}

/// Possible calculation strings for the final value.
public struct CalculationTranslation: EntitySubtype {
    /// The default calculation string.
    public let `default`: String
    
    /// The calculation string if only half of the primary attribute is used.
    public let halfPrimary: String?
    
    /// The calculation string if no primary attribute is used.
    public let noPrimary: String?

    public init(`default`: String, halfPrimary: String? = nil, noPrimary: String? = nil) {
        self.`default` = `default`
        self.halfPrimary = halfPrimary
        self.noPrimary = noPrimary
    }    
    
    private enum CodingKeys: String, CodingKey {
        case `default` = "default"
        case halfPrimary = "half_primary"
        case noPrimary = "no_primary"
    }
}
