//
//  AnimalDisease.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct AnimalDisease: LocalizableEntity {
    /// The animal disease's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The animal disease's level.
    public let level: Int
    
    /// Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.
    public let resistance: Resistance
    
    /// What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.
    public let cause: [Cause]
    
    /// The animal types this disease applies to.
    /// 
    /// If no animal types are given, the animal disease applies to all animal types.
    public let animalTypes: [AnimalTypeReference]
    
    /// If and at which chance the disease can be communicated to intelligent creatures.
    /// 
    /// If no causes are given, the disease is not communicable to intelligent creatures.
    public let communicabilityToIntelligentCreatures: [Cause]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<DiseaseTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case level = "level"
        case resistance = "resistance"
        case cause = "cause"
        case animalTypes = "animal_types"
        case communicabilityToIntelligentCreatures = "communicability_to_intelligent_creatures"
        case src = "src"
        case translations = "translations"
    }
}
