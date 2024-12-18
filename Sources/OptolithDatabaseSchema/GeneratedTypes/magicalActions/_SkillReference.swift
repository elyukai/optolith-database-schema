//
//  _SkillReference.swift
//  OptolithDatabaseSchema
//

/// A reference to a skill used for performing melodies.
public struct MusicalSkillReference: EntitySubtype {
    /// The skill's identifier.
    public let id: SkillIdentifier

    public init(id: SkillIdentifier) {
        self.id = id
    }
}
