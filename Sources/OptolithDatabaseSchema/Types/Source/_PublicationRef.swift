import FileDB

/// A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.
@Embedded
public struct PublicationRef {

  /// The publication’s identifier.
  @Relationship(Publication.self)
  let id: Publication.ID

    /// All occurrences of the entry in the publication, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let occurrences: [String: Occurrence]

    @Embedded
    struct Occurrence {
        /// The initial occurrence of the entry.
        let initial: InitialOccurrence

          /// Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.
          @MinItems(1)
          let revisions: [Revision]?
      }
  }

@Embedded
public struct InitialOccurrence {
  /// The publication’s printing since which the entry is present. Leave empty if present since the beginning.
  @Minimum(2)
  let printing: Int?

  /// The initial page references.
  @MinItems(1)
  let pages: [PageRange]
  }

/// A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.
@ModelEnum
public enum Revision {
    case Since(Since)
    case Deprecated(Deprecation)
}

@Embedded
public struct Since {

  /// The publication’s printing since which the entry is present again or has changed page references.
  @Minimum(2)
  let printing: Int

  /// The changed or new page references.
  @MinItems(1)
  let pages: [PageRange]
  }

@Embedded
public struct Deprecation {

  /// The publication’s printing since which the entry has been removed.
  @Minimum(2)
  let printing: Int
  }

@Embedded
public struct PageRange {

  /// The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.
  let first_page: Page

  /// The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.
  let last_page: Page?
  }

@ModelEnum
public enum Page {
    case InsideCoverFront
    case InsideCoverBack
    case Numbered(Int)
}
