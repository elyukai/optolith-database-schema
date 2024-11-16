//
//  _PublicationRef.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

/// The publications where you can find the entry.
public typealias PublicationRefs = [PublicationRef]

/// A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.
public struct PublicationRef: EntitySubtype {
    /// The publication's identifier.
    public let id: PublicationIdentifier
    
    /// All occurrences of the entry, identified by IETF language tag (BCP47).
    public let occurrences: LocaleMap<Occurrence>
}

public enum Occurrence: EntitySubtype {
    case simpleOccurrence(SimpleOccurrence)
    case simpleOccurrences(SimpleOccurrences)
    case versionedOccurrence(VersionedOccurrence)

    public init(from decoder: any Decoder) throws {
        let container = try decoder.singleValueContainer()

        if let simpleOccurrence = try? container.decode(SimpleOccurrence.self) {
            self = .simpleOccurrence(simpleOccurrence)
        } else if let simpleOccurrences = try? container.decode(SimpleOccurrences.self) {
            self = .simpleOccurrences(simpleOccurrences)
        } else if let versionedOccurrence = try? container.decode(VersionedOccurrence.self) {
            self = .versionedOccurrence(versionedOccurrence)
        } else {
            throw DecodingError.dataCorruptedError(in: container, debugDescription: "No Occurrence type found")
        }
    }
}

public typealias SimpleOccurrences = [SimpleOccurrence]

public struct SimpleOccurrence: EntitySubtype {
    /// The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.
    public let firstPage: Int
    
    /// The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.
    public let lastPage: Int?    
    
    private enum CodingKeys: String, CodingKey {
        case firstPage = "first_page"
        case lastPage = "last_page"
    }
}

public struct VersionedOccurrence: EntitySubtype {
    /// The initial occurrence of the entry.
    public let initial: InitialOccurrence
    
    /// Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.
    public let revisions: [Revision]?
}

public struct InitialOccurrence: EntitySubtype {
    /// The publication's printing since which the entry is present. Leave empty if present since the beginning.
    public let printing: Int?
    
    /// The initial page references.
    public let pages: [PageRange]
}

/// A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.
@DiscriminatedEnum
public enum Revision: EntitySubtype {
    case since(Since)
    case deprecated(Deprecation)
}

public struct Since: EntitySubtype {
    /// The publication's printing since which the entry is present again or has changed page references.
    public let printing: Int
    
    /// The changed or new page references.
    public let pages: [PageRange]
}

public struct Deprecation: EntitySubtype {
    /// The publication's printing since which the entry has been removed.
    public let printing: Int
}

public struct PageRange: EntitySubtype {
    /// The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.
    public let firstPage: Page
    
    /// The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.
    public let lastPage: Page?    
    
    private enum CodingKeys: String, CodingKey {
        case firstPage = "first_page"
        case lastPage = "last_page"
    }
}

@DiscriminatedEnum
public enum Page: EntitySubtype {
    case insideCoverFront
    case insideCoverBack
    case numbered(NumberedPage)
}

/// The page number.
public typealias NumberedPage = Int
