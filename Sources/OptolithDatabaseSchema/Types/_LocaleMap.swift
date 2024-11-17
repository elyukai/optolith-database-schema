//
//  _LocaleMap.swift
//  Database
//
//  Created by Lukas Obermann on 11.11.24.
//

import Foundation

public struct LocaleMap<T: EntitySubtype>: EntitySubtype {
    private var map: [Foundation.Locale: T]
    
    public init(_ map: [Foundation.Locale: T]) {
        self.map = map
    }
    
    public init(from decoder: any Decoder) throws {
        let dict = try decoder.singleValueContainer().decode([String: T].self)
        self.map = Dictionary(uniqueKeysWithValues: dict.map { (localeId, value) in
            (key: Foundation.Locale(identifier: localeId), value: value)
        })
    }
    
    public subscript (_ locale: Foundation.Locale) -> T? {
        return map[locale]
    }
}
