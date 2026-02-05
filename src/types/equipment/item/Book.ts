import * as DB from "tsondb/schema/dsl"
import { SkillIdentifier } from "../../_Identifier.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, StructurePoints, Weight } from "./_Item.js"

export const Book = DB.Entity(import.meta.url, {
  name: "Book",
  namePlural: "Books",
  type: () =>
    DB.Object({
      types: DB.Required({
        comment: "The type of book.",
        type: DB.Array(DB.IncludeIdentifier(BookType), { minItems: 1, uniqueItems: true }),
      }),
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(BookCost),
      }),
      weight: DB.Optional({
        comment: "The weight in kg.",
        type: DB.IncludeIdentifier(Weight),
      }),
      complexity: DB.Optional({
        comment: "The complexity of crafting the item.",
        type: DB.IncludeIdentifier(Complexity),
      }),
      structure_points: DB.Optional({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: DB.IncludeIdentifier(StructurePoints),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Book",
        DB.Object({
          name: DB.Required({
            comment: "The item’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          secondary_name: DB.Optional({
            comment: "An auxiliary name or label of the item, if available.",
            type: DB.String({ minLength: 1 }),
          }),
          language: DB.Required({
            comment: "The language the book is written in.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          script: DB.Required({
            comment: "The script that was used for the book.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          note: DB.Optional({
            comment: "Note text.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          rules: DB.Optional({
            comment: "Special rules text.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const BookType = DB.Enum(import.meta.url, {
  name: "BookType",
  comment: "The type of book.",
  values: () => ({
    Mundane: DB.EnumCase({
      comment: "A mundane book without special rules.",
      type: DB.IncludeIdentifier(MundaneBookType),
    }),
    Magical: DB.EnumCase({
      comment: "A magical book.",
      type: null,
    }),
    Religious: DB.EnumCase({
      comment: "A religious book.",
      type: null,
    }),
  }),
})

const MundaneBookType = DB.Enum(import.meta.url, {
  name: "MundaneBookType",
  comment: "The type of mundane book, i.e. the type of writing it contains.",
  values: () => ({
    RomanceNovel: DB.EnumCase({
      comment: "A romance novel.",
      type: null,
    }),
    Poetry: DB.EnumCase({
      comment: "A piece of poetry.",
      type: null,
    }),
    PoliticalPamphlet: DB.EnumCase({
      comment: "A political pamphlet.",
      type: null,
    }),
    CrimeStory: DB.EnumCase({
      comment: "A crime story.",
      type: null,
    }),
    FairyTale: DB.EnumCase({
      comment: "A fairy tale.",
      type: null,
    }),
    Novel: DB.EnumCase({
      comment: "A novel.",
      type: null,
    }),
    ProfessionalPublication: DB.EnumCase({
      comment:
        "A professional publication about a specific topic, represented by a (knowledge) skill.",
      type: SkillIdentifier(),
    }),
  }),
})

const BookCost = DB.Enum(import.meta.url, {
  name: "BookCost",
  comment:
    "The cost of the book, which may be a single value or multiple values that are defined by specific editions or other defining factors of the book.",
  values: () => ({
    Single: DB.EnumCase({
      comment: "The book only has a single cost description.",
      type: DB.IncludeIdentifier(BookCostVariant),
    }),
    Multiple: DB.EnumCase({
      comment: "The book’s cost varies by edition or other factors.",
      type: DB.Array(DB.IncludeIdentifier(BookCostVariant), { minItems: 2 }),
    }),
  }),
})

const BookCostVariant = DB.Enum(import.meta.url, {
  name: "BookCostVariant",
  comment: "A variant for the book’s cost.",
  values: () => ({
    Definite: DB.EnumCase({
      comment: "A definite cost value.",
      type: DB.IncludeIdentifier(DefiniteBookCostVariant),
    }),
    Indefinite: DB.EnumCase({
      comment: "An indefinite cost value.",
      type: DB.IncludeIdentifier(IndefiniteBookCostVariant),
    }),
  }),
})

const DefiniteBookCostVariant = DB.TypeAlias(import.meta.url, {
  name: "DefiniteBookCostVariant",
  comment: "A definite cost value for the book, such as a specific cost or cost range.",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "DefiniteBookCostVariant",
        DB.Object(
          {
            label: DB.Optional({
              comment: "The label for the cost variant, e.g. “Original script”.",
              type: DB.String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const IndefiniteBookCostVariant = DB.TypeAlias(import.meta.url, {
  name: "IndefiniteBookCostVariant",
  comment:
    "An indefinite cost value for the book, which means it is impossible to narrow the range of the cost value by any numbers.",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "IndefiniteBookCostVariant",
        DB.Object({
          label: DB.Optional({
            comment: "The label for the cost variant, e.g. “Original script”.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          description: DB.Required({
            comment: "The description of the cost variant, e.g. “less”.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})
