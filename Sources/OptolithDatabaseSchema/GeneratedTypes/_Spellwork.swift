//
//  _Spellwork.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// The tradition(s) the ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
@DiscriminatedEnum
public enum Traditions: EntitySubtype {
    case general
    case specific(SpecificTraditions)
}

/// A list of specific traditions.
public typealias SpecificTraditions = [MagicalTraditionIdentifier]
