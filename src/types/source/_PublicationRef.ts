/**
 * @main PublicationRefs
 */

import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { PublicationIdentifier } from "../_Identifier.js"
import { NestedLocaleMap } from "../Locale.js"

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

export const PublicationRef = TypeAlias(import.meta.url, {
  name: "PublicationRef",
  comment:
    "A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.",
  type: () =>
    Object({
      id: Required({
        comment: "The publication’s identifier.",
        type: PublicationIdentifier,
      }),
      occurrences: NestedLocaleMap(
        Required,
        "Occurrence",
        Object({
          initial: Required({
            comment: "The initial occurrence of the entry.",
            type: IncludeIdentifier(InitialOccurrence),
          }),
          revisions: Optional({
            comment:
              "Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.",
            type: Array(IncludeIdentifier(Revision), { minItems: 1 }),
          }),
        })
      ),
    }),
})

const InitialOccurrence = TypeAlias(import.meta.url, {
  name: "InitialOccurrence",
  type: () =>
    Object({
      printing: Optional({
        comment:
          "The publication’s printing since which the entry is present. Leave empty if present since the beginning.",
        type: Integer({ minimum: 2 }),
      }),
      pages: Required({
        comment: "The initial page references.",
        type: Array(IncludeIdentifier(PageRange), { minItems: 1 }),
      }),
    }),
})

const Revision = Enum(import.meta.url, {
  name: "Revision",
  comment:
    "A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.",
  values: () => ({
    Since: EnumCase({ type: IncludeIdentifier(Since) }),
    Deprecated: EnumCase({ type: IncludeIdentifier(Deprecation) }),
  }),
})

const Since = TypeAlias(import.meta.url, {
  name: "Since",
  type: () =>
    Object({
      printing: Required({
        comment:
          "The publication’s printing since which the entry is present again or has changed page references.",
        type: Integer({ minimum: 2 }),
      }),
      pages: Required({
        comment: "The changed or new page references.",
        type: Array(IncludeIdentifier(PageRange), { minItems: 1 }),
      }),
    }),
})

const Deprecation = TypeAlias(import.meta.url, {
  name: "Deprecation",
  type: () =>
    Object({
      printing: Required({
        comment: "The publication’s printing since which the entry has been removed.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})

const PageRange = TypeAlias(import.meta.url, {
  name: "PageRange",
  type: () =>
    Object({
      first_page: Required({
        comment:
          "The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.",
        type: IncludeIdentifier(Page),
      }),
      last_page: Optional({
        comment:
          "The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.",
        type: IncludeIdentifier(Page),
      }),
    }),
})

const Page = Enum(import.meta.url, {
  name: "Page",
  values: () => ({
    InsideCoverFront: EnumCase({ type: null }),
    InsideCoverBack: EnumCase({ type: null }),
    Numbered: EnumCase({ type: Integer() }),
  }),
})
