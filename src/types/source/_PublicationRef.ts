/**
 * @main PublicationRefs
 */

import * as DB from "tsondb/schema/dsl"
import { PublicationIdentifier } from "../_Identifier.js"
import { Locale } from "../Locale.js"

export const PublicationRefs = DB.TypeAlias(import.meta.url, {
  name: "PublicationRefs",
  comment: "The publications where you can find the entry.",
  type: () => DB.Array(DB.IncludeIdentifier(PublicationRef), { minItems: 1 }),
})

const srcConfig = {
  displayName: "Source References",
  comment:
    "References to where in which publications this entry has been defined. Entries may also be added or removed in later printings.",
  type: DB.IncludeIdentifier(PublicationRefs),
}

export const src = DB.Required(srcConfig)
export const optionalSrc = DB.Optional(srcConfig)

export const PublicationRef = DB.TypeAlias(import.meta.url, {
  name: "PublicationRef",
  comment:
    "A source reference. It contains the book's publisher identifier and the page where it occurs. If an entry spans multiple pages, provide the last page as well.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The publication’s identifier.",
        type: PublicationIdentifier(),
      }),
      occurrences: DB.Required({
        comment: "All translations for the entry, identified by IETF language tag (BCP47).",
        type: DB.NestedEntityMap({
          name: "Occurrence",
          namePlural: "Occurrences",
          secondaryEntity: Locale,
          type: DB.Object(
            {
              initial: DB.Optional({
                comment: "The initial occurrence of the entry.",
                type: DB.IncludeIdentifier(InitialOccurrence),
              }),
              revisions: DB.Optional({
                comment:
                  "Revisions of the entry, resulting in either changed page references or re-addition or removal of an entry.",
                type: DB.Array(DB.IncludeIdentifier(Revision), { minItems: 1 }),
              }),
            },
            { minProperties: 1 },
          ),
          minProperties: 1,
        }),
      }),
    }),
})

const InitialOccurrence = DB.TypeAlias(import.meta.url, {
  name: "InitialOccurrence",
  type: () =>
    DB.Object({
      printing: DB.Optional({
        comment:
          "The publication’s printing since which the entry is present. Leave empty if present since the beginning.",
        type: DB.Integer({ minimum: 2 }),
      }),
      pages: DB.Required({
        comment: "The initial page references.",
        type: DB.Array(DB.IncludeIdentifier(PageRange), { minItems: 1 }),
      }),
    }),
})

// const PrintingOccurrences = DB.TypeAlias(import.meta.url, {
//   name: "PrintingOccurrences",
//   comment: "The history of changes this publication’s printings introduced.",
//   type: () => DB.Array(DB.IncludeIdentifier(PrintingOccurrence), { minItems: 1 }),
//   customConstraints: ({ value }) => {
//     const firstEntry = value[0]
//     if (!firstEntry) {
//       return ["At least one printing occurrence must be provided."]
//     }
//     if (firstEntry.printing > 1 && firstEntry.changes.kind === "Remove") {
//       return [
//         "The first printing occurrence cannot be a removal if the printing number is greater than 1. It must have been present in the previous printing then, which needs to be provided.",
//       ]
//     }
//     return []
//   },
// })

const _PrintingOccurrence = DB.TypeAlias(import.meta.url, {
  name: "PrintingOccurrence",
  comment: "The publication’s printing where the entry has been added, changed, or removed.",
  type: () =>
    DB.Object({
      printing: DB.Required({
        comment: "The printing number.",
        type: DB.Integer({ minimum: 1 }),
      }),
      changes: DB.Required({
        comment: "The changes made in this printing.",
        type: DB.IncludeIdentifier(PrintingChanges),
      }),
    }),
})

const PrintingChanges = DB.Enum(import.meta.url, {
  name: "PrintingChanges",
  comment:
    "A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.",
  values: () => ({
    AddOrUpdate: DB.EnumCase({
      displayName: "Add or Update",
      comment:
        "The entry has been added, re-added or changed page(s) in this printing. The page references override any previously set ones in case an entry has been moved to a different page in a later printing.",
      type: DB.Array(DB.IncludeIdentifier(PageRange), { minItems: 1 }),
    }),
    Remove: DB.EnumCase({
      comment:
        "The entry has been removed in this printing.\n\nThis can also be used if the entry hss been removed by the release of this publication (that is, the first printing), which can be useful for books that introduce major revisions of rules into the game.",
      type: null,
    }),
  }),
})

const Revision = DB.Enum(import.meta.url, {
  name: "Revision",
  comment:
    "A revision of the entry, resulting in either changed page references or re-addition or removal of an entry.",
  values: () => ({
    Since: DB.EnumCase({ type: DB.IncludeIdentifier(Since) }),
    Deprecated: DB.EnumCase({ type: DB.IncludeIdentifier(Deprecation) }),
  }),
})

const Since = DB.TypeAlias(import.meta.url, {
  name: "Since",
  type: () =>
    DB.Object({
      printing: DB.Required({
        comment:
          "The publication’s printing since which the entry is present again or has changed page references.",
        type: DB.Integer({ minimum: 1 }),
      }),
      pages: DB.Required({
        comment: "The changed or new page references.",
        type: DB.Array(DB.IncludeIdentifier(PageRange), { minItems: 1 }),
      }),
    }),
})

const Deprecation = DB.TypeAlias(import.meta.url, {
  name: "Deprecation",
  type: () =>
    DB.Object({
      printing: DB.Required({
        comment:
          "The publication’s printing since which the entry has been removed.\n\nThis can also be used if the entry hss been removed by the release of this publication (that is, the first printing).",
        type: DB.Integer({ minimum: 1 }),
      }),
    }),
})

const PageRange = DB.TypeAlias(import.meta.url, {
  name: "PageRange",
  type: () =>
    DB.Object({
      first_page: DB.Required({
        comment:
          "The page where it occurs. If the entry spans multiple pages, use this as the first page and `last_page` as the last page.",
        type: DB.IncludeIdentifier(Page),
      }),
      last_page: DB.Optional({
        comment:
          "The last page where it occurs. If there is only one page, set this to the same as `first_page` oder remove it.",
        type: DB.IncludeIdentifier(Page),
      }),
    }),
})

const Page = DB.Enum(import.meta.url, {
  name: "Page",
  values: () => ({
    InsideCoverFront: DB.EnumCase({ type: null }),
    InsideCoverBack: DB.EnumCase({ type: null }),
    Numbered: DB.EnumCase({ type: DB.Integer() }),
  }),
})
