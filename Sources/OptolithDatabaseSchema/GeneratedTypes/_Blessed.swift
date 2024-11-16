//
//  _Blessed.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum SkillTradition: EntitySubtype {
    case generalAspect(AspectReference)
    case tradition(SkillTraditionWithAspects)
}

public struct SkillTraditionWithAspects: EntitySubtype {
    /// The blessed tradition.
    public let tradition: BlessedTraditionReference
    
    /// The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
    public let aspects: [AspectReference]?
}
