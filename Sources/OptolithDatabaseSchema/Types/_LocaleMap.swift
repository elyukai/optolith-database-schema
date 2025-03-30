//
//  _LocaleMap.swift
//  Database
//
//  Created by Lukas Obermann on 11.11.24.
//

import Foundation

/// All translations for the entry, identified by IETF language tag (BCP47).
public struct LocaleMap<T: EntitySubtype>: EntitySubtype {
    private let map: [Foundation.Locale: T]
    
    /// A set of all locales that are available for this entry.
    public let availableLocales: Set<Foundation.Locale>

    public init(_ map: [Foundation.Locale: T]) {
        self.map = map
        self.availableLocales = Set(map.keys)
    }

    public init(from decoder: any Decoder) throws {
        let dict = try decoder.singleValueContainer().decode([String: T].self)
        self.init(Dictionary(uniqueKeysWithValues: dict.map { (localeId, value) in
            (key: Foundation.Locale(identifier: localeId), value: value)
        }))
    }

    /// Retrieves the value for a specific locale.
    ///
    /// The locale must be an exact match. A system locale is likely to specific to match. Create a new locale with just the language and region code instead and make sure the locale is supported.
    public subscript (_ locale: Foundation.Locale) -> T? {
        return map[locale]
    }
}
