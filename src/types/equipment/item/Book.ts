import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"

export const Book = Entity(import.meta.url, {
  name: "Book",
  namePlural: "Books",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(BookCost),
      }),
      weight: Optional({
        comment: "The weight in kg.",
        type: IncludeIdentifier(Weight),
      }),
      complexity: Optional({
        comment: "The complexity of crafting the item.",
        type: IncludeIdentifier(Complexity),
      }),
      structure_points: Optional({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Book",
        Object({
          name: Required({
            comment: "The item’s name.",
            type: String({ minLength: 1 }),
          }),
          secondary_name: Optional({
            comment: "An auxiliary name or label of the item, if available.",
            type: String({ minLength: 1 }),
          }),
          language: Required({
            comment: "The language the book is written in.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          script: Required({
            comment: "The script that was used for the book.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          note: Optional({
            comment: "Note text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          rules: Optional({
            comment: "Special rules text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const BookCost = Enum(import.meta.url, {
  name: "BookCost",
  values: () => ({
    Constant: EnumCase({
      comment: "The book has a fixed cost.",
      type: Integer({ minimum: 0 }),
    }),
    Variable: EnumCase({
      comment: "The book’s cost varies by edition or other factors.",
      type: Array(IncludeIdentifier(BookCostVariant), { minItems: 2 }),
    }),
  }),
})

const BookCostVariant = Enum(import.meta.url, {
  name: "BookCostVariant",
  comment: "A variant for the book’s cost.",
  values: () => ({
    Definite: EnumCase({
      comment: "A definite cost value.",
      type: IncludeIdentifier(DefiniteBookCostVariant),
    }),
    Indefinite: EnumCase({
      comment: "An indefinite cost value.",
      type: IncludeIdentifier(IndefiniteBookCostVariant),
    }),
  }),
})

const DefiniteBookCostVariant = TypeAlias(import.meta.url, {
  name: "DefiniteBookCostVariant",
  comment: "A definite cost value for the book, such as a specific cost or cost range.",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      translations: NestedTranslationMap(
        Required,
        "DefiniteBookCostVariant",
        Object({
          label: Optional({
            comment: "The label for the cost variant, e.g. “Original script”.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

const IndefiniteBookCostVariant = TypeAlias(import.meta.url, {
  name: "DefiniteBookCostVariant",
  comment:
    "An indefinite cost value for the book, which means it is impossible to narrow the range of the cost value by any numbers.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "DefiniteBookCostVariant",
        Object({
          label: Optional({
            comment: "The label for the cost variant, e.g. “Original script”.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          description: Required({
            comment: "The description of the cost variant, e.g. “Original script”.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})
