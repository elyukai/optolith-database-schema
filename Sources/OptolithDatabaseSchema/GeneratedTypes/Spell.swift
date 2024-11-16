//
//  Spell.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Spell: LocalizableEntity {
    /// The spell's identifier. An unique, increasing integer.
    public let id: Int
    
    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck
    
    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: SkillCheckPenalty?
    
    /// Measurable parameters of a spell.
    public let parameters: FastPerformanceParameters
    
    /// The target category – the kind of creature or object – the skill affects.
    public let target: AffectedTargetCategories
    
    /// The associated property.
    public let property: PropertyReference
    
    /// The tradition(s) the spell is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
    public let traditions: Traditions
    
    /// States which column is used to improve the skill.
    public let improvementCost: ImprovementCost
    
    public let prerequisites: SpellworkPrerequisites?
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SpellTranslation>
    
    public let enhancements: Enhancements?    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case target = "target"
        case property = "property"
        case traditions = "traditions"
        case improvementCost = "improvement_cost"
        case prerequisites = "prerequisites"
        case src = "src"
        case translations = "translations"
        case enhancements = "enhancements"
    }
}

public struct SpellTranslation: EntitySubtype {
    /// The name of the spell.
    public let name: NonEmptyString
    
    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect
    
    @available(*, deprecated)
    public let castingTime: OldParameter
    
    @available(*, deprecated)
    public let cost: OldParameter
    
    @available(*, deprecated)
    public let range: OldParameter
    
    @available(*, deprecated)
    public let duration: OldParameter
    
    @available(*, deprecated)
    public let target: String
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case effect = "effect"
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
        case target = "target"
        case errata = "errata"
    }
}
