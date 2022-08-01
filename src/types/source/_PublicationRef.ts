/**
 * @main PublicationRefs
 */

import { LocaleMap } from "../_LocaleMap.js"

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
  occurrences: LocaleMap<Occurrence>
}

export type Occurrence = SimpleOccurrence | SimpleOccurrences | VersionedOccurrence

/**
 * @title Simple Occurrences
 * @minItems 1
 */
export type SimpleOccurrences = SimpleOccurrence[]

/**
 * @title Simple Occurrence
 */
export type SimpleOccurrence = {
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
export type VersionedOccurrence = {
  /**
   * The initial occurrence of the entry.
   */
  initial: InitialOccurrence

  /**
   * Revisions of the entry, resulting in either changed page references or
   * re-addition or removal of an entry.
   * @minItems 1
   */
  revisions?: Revision[]
}

/**
 * @title Initial Occurrence
 */
export type InitialOccurrence = {
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
 * A revision of the entry, resulting in either changed page references or
 * re-addition or removal of an entry.
 * @title Revision
 */
export type Revision =
  | { tag: "Since"; since: Since }
  | { tag: "Deprecated"; deprecated: Deprecation }

export type Since = {
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

export type Deprecation = {
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
export type PageRange = {
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
export type Page =
  | { tag: "InsideCoverFront"; inside_cover_front: {} }
  | { tag: "InsideCoverBack"; inside_cover_back: {} }
  | { tag: "Numbered"; numbered: NumberedPage }

/**
 * The page number.
 * @integer
 */
export type NumberedPage = number
