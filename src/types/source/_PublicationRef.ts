/**
 * @main PublicationRefs
 */

import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  NestedEntityMap,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { PublicationIdentifier } from "../_Identifier.js"
import { Locale } from "../Locale.js"

export const PublicationRefs = TypeAlias(import.meta.url, {
  name: "PublicationRefs",
  comment: "The publications where you can find the entry.",
  type: () => Array(IncludeIdentifier(PublicationRef), { minItems: 1 }),
})

const srcConfig = {
  displayName: "Source References",
  comment:
    "References to where in which publications this entry has been defined. Entries may also be added or removed in later printings.",
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
        type: PublicationIdentifier(),
      }),
      occurrences: Required({
        comment: "All translations for the entry, identified by IETF language tag (BCP47).",
        type: NestedEntityMap({
          name: "Occurrence",
          namePlural: "Occurrences",
          secondaryEntity: Locale,
          type: Object(
            {
              initial: Optional({
                comment: "The initial occurrence of the entry.",
                type: IncludeIdentifier(InitialOccurrence),
              }),
              revisions: Optional({
                comment:
                  "Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.",
                type: Array(IncludeIdentifier(Revision), { minItems: 1 }),
              }),
            },
            { minProperties: 1 },
          ),
        }),
      }),
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

const _PrintingOccurrence = TypeAlias(import.meta.url, {
  name: "PrintingOccurrence",
  comment: "The publication’s printing where the entry has been added, changed, or removed.",
  type: () =>
    Object({
      printing: Required({
        comment: "The printing number.",
        type: Integer({ minimum: 1 }),
      }),
      changes: Required({
        comment: "The changes made in this printing.",
        type: IncludeIdentifier(PrintingChanges),
      }),
    }),
})

const PrintingChanges = Enum(import.meta.url, {
  name: "PrintingChanges",
  comment:
    "A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.",
  values: () => ({
    AddOrUpdate: EnumCase({
      displayName: "Add or Update",
      comment:
        "The entry has been added, re-added or changed page(s) in this printing. The page references override any previously set ones in case an entry has been moved to a different page in a later printing.",
      type: Array(IncludeIdentifier(PageRange), { minItems: 1 }),
    }),
    Remove: EnumCase({
      comment:
        "The entry has been removed in this printing.\n\nThis can also be used if the entry hss been removed by the release of this publication (that is, the first printing), which can be useful for books that introduce major revisions of rules into the game.",
      type: null,
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
        type: Integer({ minimum: 1 }),
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
        comment:
          "The publication’s printing since which the entry has been removed.\n\nThis can also be used if the entry hss been removed by the release of this publication (that is, the first printing).",
        type: Integer({ minimum: 1 }),
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
