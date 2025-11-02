import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { SkillIdentifier } from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"

export const Book = Entity(import.meta.url, {
  name: "Book",
  namePlural: "Books",
  type: () =>
    Object({
      types: Required({
        comment: "The type of book.",
        type: Array(IncludeIdentifier(BookType), { minItems: 1, uniqueItems: true }),
      }),
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

const BookType = Enum(import.meta.url, {
  name: "BookType",
  comment: "The type of book.",
  values: () => ({
    Mundane: EnumCase({
      comment: "A mundane book without special rules.",
      type: IncludeIdentifier(MundaneBookType),
    }),
    Magical: EnumCase({
      comment: "A magical book.",
      type: null,
    }),
    Religious: EnumCase({
      comment: "A religious book.",
      type: null,
    }),
  }),
})

const MundaneBookType = Enum(import.meta.url, {
  name: "MundaneBookType",
  comment: "The type of mundane book, i.e. the type of writing it contains.",
  values: () => ({
    RomanceNovel: EnumCase({
      comment: "A romance novel.",
      type: null,
    }),
    Poetry: EnumCase({
      comment: "A piece of poetry.",
      type: null,
    }),
    PoliticalPamphlet: EnumCase({
      comment: "A political pamphlet.",
      type: null,
    }),
    CrimeStory: EnumCase({
      comment: "A crime story.",
      type: null,
    }),
    FairyTale: EnumCase({
      comment: "A fairy tale.",
      type: null,
    }),
    Novel: EnumCase({
      comment: "A novel.",
      type: null,
    }),
    ProfessionalPublication: EnumCase({
      comment:
        "A professional publication about a specific topic, represented by a (knowledge) skill.",
      type: SkillIdentifier(),
    }),
  }),
})

const BookCost = Enum(import.meta.url, {
  name: "BookCost",
  comment:
    "The cost of the book, which may be a single value or multiple values that are defined by specific editions or other defining factors of the book.",
  values: () => ({
    Single: EnumCase({
      comment: "The book only has a single cost description.",
      type: IncludeIdentifier(BookCostVariant),
    }),
    Multiple: EnumCase({
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
        Optional,
        "DefiniteBookCostVariant",
        Object(
          {
            label: Optional({
              comment: "The label for the cost variant, e.g. “Original script”.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})

const IndefiniteBookCostVariant = TypeAlias(import.meta.url, {
  name: "IndefiniteBookCostVariant",
  comment:
    "An indefinite cost value for the book, which means it is impossible to narrow the range of the cost value by any numbers.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "IndefiniteBookCostVariant",
        Object({
          label: Optional({
            comment: "The label for the cost variant, e.g. “Original script”.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          description: Required({
            comment: "The description of the cost variant, e.g. “less”.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})
