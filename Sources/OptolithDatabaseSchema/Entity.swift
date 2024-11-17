//
//  Entity.swift
//  OptolithDatabaseSchema
//
//  Created by Lukas Obermann on 15.11.24.
//

/// A type whose data is represented by a single file in the database.
public protocol Entity: Decodable, Hashable, Sendable { }

/// An entity that has associated translations for display purposes.
public protocol LocalizableEntity: Entity {
    associatedtype Translation: EntitySubtype
    
    var translations: LocaleMap<Translation> { get }
}

/// A subtype of an entity type that provides conformance to protocols an entity type must conform to. It is used purely for convenience purposes.
public protocol EntitySubtype: Decodable, Hashable, Sendable { }

extension String: EntitySubtype { }
extension Double: EntitySubtype { }
extension Int: EntitySubtype { }
