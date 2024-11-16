//
//  _DiseasePoison.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// Depending on the disease, apply Spirit or Toughness as a penalty to the
/// disease roll. It may also happen that the lower of both is applied as a
/// penalty.
public enum Resistance: String, EntitySubtype {
    case spirit = "Spirit"
    case toughness = "Toughness"
    case lowerOfSpiritAndToughness = "LowerOfSpiritAndToughness"
}

/// What causes the disease? The GM rolls 1D20 to see if a character gets
/// infected. If the infection check succeeds, the GM makes a disease check to
/// determine the severity of the infection.
public struct Cause: EntitySubtype {
    /// The chance to get infected by this cause, in percent.
    public let chance: Int?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CauseTranslation>
}

public struct CauseTranslation: EntitySubtype {
    /// The name of the cause.
    public let name: String
    
    /// The chance to get infected by this cause. If present for this
    /// language, this overrides the universal `chance` field; they cannot be
    /// used at the same time.
    public let chance: NonEmptyString?
    
    /// An additional note about this cause.
    public let note: NonEmptyString?
}

public struct DiseaseTranslation: EntitySubtype {
    /// The name of the disease.
    public let name: NonEmptyString
    
    /// A list of alternative names.
    public let alternativeNames: [AlternativeName]?
    
    /// The disease’s progress, in detail.
    public let progress: NonEmptyMarkdown
    
    /// After infection, how much time passes before symptoms appear?
    public let incubationTime: NonEmptyString
    
    /// The damage caused by the disease. If the disease check fails, apply the
    /// lessened effects.
    public let damage: Reduceable<NonEmptyMarkdown>
    
    /// The duration of the disease. If the disease check fails, use the
    /// lessened duration.
    public let duration: Reduceable<NonEmptyMarkdown>
    
    /// Special information about the disease.
    public let special: NonEmptyMarkdown?
    
    /// Methods known to lessen the disease’s progress or relieve symptoms.
    public let treatment: NonEmptyMarkdown
    
    /// Known remedies for the disease.
    public let cure: NonEmptyMarkdown
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case alternativeNames = "alternative_names"
        case progress = "progress"
        case incubationTime = "incubation_time"
        case damage = "damage"
        case duration = "duration"
        case special = "special"
        case treatment = "treatment"
        case cure = "cure"
        case errata = "errata"
    }
}

/// An effect or other parameter that may be reduced by a failed disease check
/// for lessening or a degraded poison.
/// 
/// This streamlines the wording for diseases and poison by using a unified
/// wording for *lessened* (disease) and *degraded* (poison).
public struct Reduceable<Content: EntitySubtype>: EntitySubtype {
    /// The default value. In the source, it's the text before the slash.
    public let `default`: Content
    
    /// The reduced value. In the source, it's the text after the slash. Some
    /// entries may not have a reduced value.
    public let reduced: Content?
}
