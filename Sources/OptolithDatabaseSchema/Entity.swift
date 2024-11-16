//
//  Entity.swift
//  OptolithDatabaseSchema
//
//  Created by Lukas Obermann on 15.11.24.
//

public protocol Entity: Decodable, Hashable, Sendable { }

public protocol LocalizableEntity: Entity {
    associatedtype Translation: EntitySubtype
    
    var translations: LocaleMap<Translation> { get }
}

public protocol EntitySubtype: Decodable, Hashable, Sendable { }

extension String: EntitySubtype { }
extension Double: EntitySubtype { }
extension Int: EntitySubtype { }
