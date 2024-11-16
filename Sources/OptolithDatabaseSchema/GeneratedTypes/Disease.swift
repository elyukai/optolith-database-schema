//
//  Disease.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Disease: LocalizableEntity {
    /// The disease's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The disease's level.
    public let level: Int
    
    /// Depending on the disease, apply Spirit or Toughness as a penalty to the
    /// disease roll. It may also happen that the lower of both is applied as a
    /// penalty.
    public let resistance: Resistance
    
    /// What causes the disease? The GM rolls 1D20 to see if a character gets
    /// infected. If the infection check succeeds, the GM makes a disease check to
    /// determine the severity of the infection.
    public let cause: [Cause]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DiseaseTranslation>
}
