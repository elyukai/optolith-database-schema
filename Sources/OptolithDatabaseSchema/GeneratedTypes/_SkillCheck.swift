//
//  _SkillCheck.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// The attributes' identifiers of the skill check.
public typealias SkillCheck = [AttributeReference]

/// A specific value that represents a penalty for the associated skill check.
public enum SkillCheckPenalty: String, EntitySubtype {
    case spirit = "Spirit"
    case halfOfSpirit = "HalfOfSpirit"
    case toughness = "Toughness"
    case higherOfSpiritAndToughness = "HigherOfSpiritAndToughness"
    case summoningDifficulty = "SummoningDifficulty"
    case creationDifficulty = "CreationDifficulty"
}
