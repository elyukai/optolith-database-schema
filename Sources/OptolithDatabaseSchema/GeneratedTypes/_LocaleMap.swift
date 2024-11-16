//
//  _LocaleMap.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// All translations for the entry, identified by IETF language tag (BCP47).
public typealias LocaleMap<T: EntitySubtype> = [String: T]
