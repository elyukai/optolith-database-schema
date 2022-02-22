/**
 * @main PublicationRefs
 */

/**
 * The publications where you can find the entry.
 * @title Publication References
 * @minItems 1
 */
export type PublicationRefs = PublicationRef[]

 /**
  * A source reference. It contains the book's publisher identifier and the page
  * where it occurs. If an entry spans multiple pages, provide the last page as
  * well.
  * @title Publication Reference
  */
export type PublicationRef = {
  /**
   * The publication's identifier.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All occurrences of the entry, identified by IETF language tag (BCP47).
   */
  occurrences: Occurrences
}

/**
 * All occurrences of the entry, identified by IETF language tag (BCP47).
 * @minProperties 1
 */
type Occurrences = {
  /**
   * @patternProperties ^[a-z]{2}-[A-Z]{2}$
   */
  [localeId: string]: Occurrence
}

type Occurrence = SimpleOccurrence | SimpleOccurrences | VersionedOccurrence

/**
 * @title Simple Occurrences
 * @minItems 1
 */
type SimpleOccurrences = SimpleOccurrence[]

/**
 * @title Simple Occurrence
 */
type SimpleOccurrence = {
  /**
   * The page where it occurs. If the entry spans multiple pages, use this as
   * the first page and `last_page` as the last page.
   * @integer
   * @minimum 1
   */
  first_page: number

  /**
   * The last page where it occurs. If there is only one page, set this to the
   * same as `first_page` oder remove it.
   * @integer
   * @minimum 2
   */
  last_page?: number
}

/**
 * @title Versioned Occurrence
 */
type VersionedOccurrence = {
  /**
   * The initial occurrence of the entry.
   * @title Initial
   */
  initial: {
    /**
     * The publication's printing since which the entry is present. Leave
     * empty if present since the beginning.
     * @integer
     * @minimum 2
     */
    printing?: number

    /**
     * The initial page references.
     * @minItems 1
     */
    pages: PageRange[]
  }

  /**
   * Revisions of the entry, resulting in either changed page references or
   * re-addition or removal of an entry.
   * @minItems 1
   */
  revisions?: Revision[]
}

/**
 * A revision of the entry, resulting in either changed page references or
 * re-addition or removal of an entry.
 * @title Revision
 */
type Revision =
  | {
    tag: "Since"

    /**
     * The publication's printing since which the entry is present again or has
     * changed page references.
     * @integer
     * @minimum 2
     */
    printing: number;

    /**
     * The changed or new page references.
     * @minItems 1
     */
    pages: PageRange[]
  }
  | {
    tag: "Deprecated"

    /**
     * The publication's printing since which the entry has been removed.
     * @integer
     * @minimum 2
     */
    printing: number;
  }

/**
 * @title Page Range
 */
type PageRange = {
  /**
   * The page where it occurs. If the entry spans multiple pages, use this as
   * the first page and `last_page` as the last page.
   */
  first_page: Page

  /**
   * The last page where it occurs. If there is only one page, set this to the
   * same as `first_page` oder remove it.
   */
  last_page?: Page
}

/**
 * @title Page
 */
type Page =
  | { tag: "InsideCoverFront" }
  | { tag: "InsideCoverBack" }
  | {
    tag: "Numbered"

    /**
     * The page number.
     * @integer
     */
    number: number
  }
