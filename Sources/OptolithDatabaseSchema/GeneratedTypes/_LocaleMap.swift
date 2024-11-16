//
//  _LocaleMap.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// All translations for the entry, identified by IETF language tag (BCP47).
public typealias LocaleMap<T: EntitySubtype> = [String: T]
