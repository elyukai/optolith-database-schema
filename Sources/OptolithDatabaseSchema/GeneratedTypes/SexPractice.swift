//
//  SexPractice.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct SexPractice: LocalizableEntity {
    /// The sex practice's identifier. An unique, increasing integer.
    public let id: Int
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SexPracticeTranslation>
}

public struct SexPracticeTranslation: EntitySubtype {
    /// The sex practice's name.
    public let name: NonEmptyString
    
    /// The rules of the sex practice.
    public let rules: NonEmptyString
    
    /// How long a round of this sex practice takes.
    public let duration: NonEmptyString
    
    /// Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.
    public let prerequisites: NonEmptyString?
    
    /// Effects of a failed *Seduction* check.
    public let failed: NonEmptyString
}
