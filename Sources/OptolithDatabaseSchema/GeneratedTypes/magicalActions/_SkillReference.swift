//
//  _SkillReference.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// A reference to a skill used for performing melodies.
public struct MusicalSkillReference: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier
}
