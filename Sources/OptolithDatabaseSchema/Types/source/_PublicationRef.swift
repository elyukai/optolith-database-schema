import FileDB

export const PublicationRefs = TypeAlias(import.meta.url, {
  name: "PublicationRefs",
  comment: "The publications where you can find the entry.",
  type: () => Array(IncludeIdentifier(PublicationRef), { minItems: 1 }),
})

const srcConfig = {
  comment: "All translations for the entry, identified by IETF language tag (BCP47).",
  type: IncludeIdentifier(PublicationRefs),
}

export const src = Required(srcConfig)
export const optionalSrc = Optional(srcConfig)

/// A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.
@Embedded
public struct PublicationRef {

  /// The publication’s identifier.
  let id: PublicationIdentifier()
      occurrences: NestedLocaleMap(
        Required,
        "Occurrence",
        Object({

        /// The initial occurrence of the entry.
        let initial: IncludeIdentifier(InitialOccurrence)
          revisions: Optional({
            comment:
              "Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.",
            type: Array(IncludeIdentifier(Revision), { minItems: 1 }),
          }),
        })
      ),
  }

@Embedded
public struct InitialOccurrence {
  /// The publication’s printing since which the entry is present. Leave empty if present since the beginning.
  let printing: Integer({ minimum: 2 })?

  /// The initial page references.
  let pages: Array(IncludeIdentifier(PageRange), { minItems: 1 })
  }

/// A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.
@ModelEnum
public enum Revision {
    case Since(IncludeIdentifier(Since))
    case Deprecated(IncludeIdentifier(Deprecation))
}

@Embedded
public struct Since {

  /// The publication’s printing since which the entry is present again or has changed page references.
  let printing: Integer({ minimum: 2 })

  /// The changed or new page references.
  let pages: Array(IncludeIdentifier(PageRange), { minItems: 1 })
  }

@Embedded
public struct Deprecation {

  /// The publication’s printing since which the entry has been removed.
  let printing: Integer({ minimum: 2 })
  }

@Embedded
public struct PageRange {

  /// The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.
  @Relationship(Page)
  let first_page: Page.ID
  /// The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.
  @Relationship(Page)
  let last_page: Page.ID?
  }

@ModelEnum
public enum Page {
    case InsideCoverFront
    case InsideCoverBack
    case Numbered(Integer())
}
