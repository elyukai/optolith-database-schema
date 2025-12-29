import {
  Array,
  Boolean,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { SkillModificationLevelIdentifier } from "./_Identifier.js"
import { ResponsiveText, ResponsiveTextOptional, ResponsiveTextReplace } from "./_ResponsiveText.js"
import { NestedTranslationMap } from "./Locale.js"

export const OneTimeCost = Enum(import.meta.url, {
  name: "OneTimeCost",
  values: () => ({
    Single: EnumCase({ type: IncludeIdentifier(SingleOneTimeCost) }),
    Conjunction: EnumCase({ type: IncludeIdentifier(MultipleOneTimeCosts) }),
    Disjunction: EnumCase({ type: IncludeIdentifier(MultipleOneTimeCosts) }),
    Map: EnumCase({ type: IncludeIdentifier(OneTimeCostMap) }),
  }),
})

const SingleOneTimeCost = Enum(import.meta.url, {
  name: "SingleOneTimeCost",
  values: () => ({
    Modifiable: EnumCase({ type: IncludeIdentifier(ModifiableOneTimeCost) }),
    NonModifiable: EnumCase({ type: IncludeIdentifier(NonModifiableOneTimeCost) }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteOneTimeCost) }),
  }),
})

const MultipleOneTimeCosts = TypeAlias(import.meta.url, {
  name: "MultipleOneTimeCosts",
  type: () =>
    Array(IncludeIdentifier(SingleOneTimeCost), {
      minItems: 2,
    }),
})

const ModifiableOneTimeCost = TypeAlias(import.meta.url, {
  name: "ModifiableOneTimeCost",
  type: () =>
    Object({
      initial_modification_level: Required({
        comment: "The initial skill modification identifier/level.",
        type: SkillModificationLevelIdentifier(),
      }),
      permanent_value: Optional({
        comment: "The part of the cost value that has to be spent permanently.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "ModifiableOneTimeCost",
        Object({
          replacement: Required({
            comment: "A replacement string.",
            type: IncludeIdentifier(ResponsiveTextReplace),
          }),
        }),
      ),
    }),
})

const NonModifiableOneTimeCost = TypeAlias(import.meta.url, {
  name: "NonModifiableOneTimeCost",
  type: () =>
    Object({
      is_minimum: Optional({
        comment: "If `true`, the non-modifiable value is a minimum value.",
        type: Boolean(),
      }),
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      permanent_value: Optional({
        comment: "The part of the cost value that has to be spent permanently.",
        type: Integer({ minimum: 1 }),
      }),
      per: Optional({
        comment: "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
        type: IncludeIdentifier(NonModifiableOneTimeCostPerCountable),
      }),
      translations: NestedTranslationMap(
        Optional,
        "NonModifiableOneTimeCost",
        Object({
          note: Required({
            comment: "A note, appended to the generated string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        }),
      ),
    }),
})

const NonModifiableOneTimeCostPerCountable = TypeAlias(import.meta.url, {
  name: "NonModifiableOneTimeCostPerCountable",
  type: () =>
    Object({
      minimum_total: Optional({
        comment: "If defined, the minimum total AE that have to be spent casting the skill.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "NonModifiableOneTimeCostPerCountable",
        Object({
          countable: Required({
            comment: "The countable entity name.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

export const IndefiniteOneTimeCost = TypeAlias(import.meta.url, {
  name: "IndefiniteOneTimeCost",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "IndefiniteOneTimeCost",
        Object({
          description: Required({
            comment: "A description of where the cost come from.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

export const OneTimeCostMap = TypeAlias(import.meta.url, {
  name: "OneTimeCostMap",
  comment: `A content that is \`2/4/8/16 AE for an item the size of a cup/chest/door/castle gate\` may be respresented as the following map:

\`\`\`yaml
options:
  - value: 2
    label: "cup"
  - value: 4
    label: "chest"
  - value: 8
    label: "door"
  - value: 16
    label: "castle gate"
for_append: "an item the size of a"
\`\`\`

This will generate the exact same string as seen above – given it is set for a spellwork and thus \`AE\` is used.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(OneTimeCostMapOption), {
          minItems: 2,
        }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "CostMap",
        Object(
          {
            list_prepend: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            list_append: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const OneTimeCostMapOption = TypeAlias(import.meta.url, {
  name: "OneTimeCostMapOption",
  type: () =>
    Object({
      value: Required({
        comment: "The full cost value for this option.",
        type: Integer({ minimum: 1 }),
      }),
      permanent_value: Optional({
        comment: "The part of the `value` that has to be paid permanently.",
        type: Integer({ minimum: 0 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "OneTimeCostMapOption",
        Object({
          label: Required({
            comment: "The description of the option for cost string generation.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
          label_standalone: Optional({
            comment:
              "The description of the option if used standalone (e.g. in an in-game tool where you can select how many AE you have to pay). Only used if different from `label`.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        }),
      ),
    }),
})

export const SustainedCost = Enum(import.meta.url, {
  name: "SustainedCost",
  values: () => ({
    Modifiable: EnumCase({ type: IncludeIdentifier(ModifiableSustainedCost) }),
    NonModifiable: EnumCase({ type: IncludeIdentifier(NonModifiableSustainedCost) }),
    Map: EnumCase({ type: IncludeIdentifier(SustainedCostMap) }),
  }),
})

const ModifiableSustainedCost = TypeAlias(import.meta.url, {
  name: "ModifiableSustainedCost",
  type: () =>
    Object({
      initial_modification_level: Required({
        comment: "The initial skill modification identifier/level.",
        type: SkillModificationLevelIdentifier(),
      }),
      interval: Required({
        comment: "The sustain interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const NonModifiableSustainedCost = TypeAlias(import.meta.url, {
  name: "NonModifiableSustainedCost",
  type: () =>
    Object({
      is_minimum: Optional({
        comment: "If `true`, the non-modifiable value is a minimum value.",
        type: Boolean(),
      }),
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      per: Optional({
        comment: "The cost have to be per a specific countable entity, e.g. `8 KP per person`.",
        type: IncludeIdentifier(NonModifiableSustainedCostPerCountable),
      }),
      interval: Required({
        comment: "The sustain interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const NonModifiableSustainedCostPerCountable = TypeAlias(import.meta.url, {
  name: "NonModifiableSustainedCostPerCountable",
  type: () =>
    Object({
      minimum_total: Optional({
        comment: "If defined, the minimum total AE that have to be spent casting the skill.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "NonModifiableSustainedCostPerCountable",
        Object({
          countable: Required({
            comment: "The countable entity name.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

export const SustainedCostMap = TypeAlias(import.meta.url, {
  name: "SustainedCostMap",
  comment: `A content that is \`2/4/8/16 AE (activation) + 1/2/4/8 per 5 minutes for an item the size of a cup/chest/door/castle gate\` can be represented as a cost map.

The \`an item the size of a\` would be the *list prefix* string, while the list of options would contain four options with the activation cost and the name.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(SustainedCostMapOption), {
          minItems: 2,
        }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "CostMap",
        Object(
          {
            listPrefix: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            listSuffix: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const SustainedCostMapOption = TypeAlias(import.meta.url, {
  name: "SustainedCostMapOption",
  type: () =>
    Object({
      value: Required({
        comment:
          "The activation cost value for this option. The interval cost is always half of this value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "SustainedCostMapOption",
        Object({
          label: Required({
            comment: "The description of the option for cost string generation.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
          standaloneLabel: Optional({
            comment:
              "The description of the option if used standalone (e.g. in an in-game tool where you can select how many AE you have to pay). Only used if different from `label`.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        }),
      ),
    }),
})
