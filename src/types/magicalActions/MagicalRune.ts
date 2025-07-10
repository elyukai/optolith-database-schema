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
import { name_in_library } from "../_Activatable.js"
import { OldParameter } from "../_ActivatableSkill.js"
import { CheckResultBasedDuration } from "../_ActivatableSkillDuration.js"
import { ActivatableSkillEffect } from "../_ActivatableSkillEffect.js"
import { PropertyIdentifier } from "../_Identifier.js"
import { CombatTechniqueIdentifier } from "../_IdentifierGroup.js"
import { ImprovementCost } from "../_ImprovementCost.js"
import { ResponsiveText, ResponsiveTextOptional } from "../_ResponsiveText.js"
import { SkillCheck } from "../_SkillCheck.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const MagicalRune = Entity(import.meta.url, {
  name: "MagicalRune",
  namePlural: "MagicalRunes",
  type: () =>
    Object({
      music_tradition: Optional({
        comment: `The options the magical rune has, if any.

If there are multiple options, the magical rune may be activated for each option, that is, multiple times.`,
        type: Array(IncludeIdentifier(MagicalRuneOption), {
          minItems: 1,
        }),
      }),
      check: Required({
        comment: "Lists the linked three attributes used to make a skill check.",
        type: IncludeIdentifier(SkillCheck),
      }),
      check_penalty: Optional({
        comment: "In some cases, the target's Spirit or Toughness is applied as a penalty.",
        type: IncludeIdentifier(MagicalRuneCheckPenalty),
      }),
      parameters: Required({
        comment: "Measurable parameters of a magical rune.",
        type: IncludeIdentifier(MagicalRunePerformanceParameters),
      }),
      property: Required({
        comment: "The associated property.",
        type: PropertyIdentifier(),
      }),
      improvement_cost: Required({
        comment: "States which column is used to improve the skill.",
        type: IncludeIdentifier(MagicalRuneImprovementCost),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "MagicalRuneTranslation",
        Object({
          name: Required({
            comment: `The magical rune’s name.

If the rune has an option, the option’s name will/should not be included in the name as well as its surrounding parenthesis. It will/should be combined on demand.`,
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          native_name: Required({
            comment: "The native name of the magical rune.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment:
              "The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.",
            type: IncludeIdentifier(ActivatableSkillEffect),
          }),
          cost: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameter),
          }),
          crafting_time: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameterBySpeed),
          }),
          duration: Optional({
            isDeprecated: true,
            type: IncludeIdentifier(OldParameterBySpeed),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const OldParameterBySpeed = TypeAlias(import.meta.url, {
  name: "OldParameterBySpeed",
  type: () =>
    Object({
      slow: Required({
        type: IncludeIdentifier(OldParameter),
      }),
      fast: Required({
        type: IncludeIdentifier(OldParameter),
      }),
    }),
})

const MagicalRuneCheckPenalty = Enum(import.meta.url, {
  name: "MagicalRuneCheckPenalty",
  values: () => ({
    CombatTechnique: EnumCase({ type: IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenalty) }),
  }),
})

const MagicalRuneCombatTechniqueCheckPenalty = TypeAlias(import.meta.url, {
  name: "MagicalRuneCombatTechniqueCheckPenalty",
  type: () =>
    Object({
      map: Required({
        comment: "A map from combat techniques to their modifiers.",
        type: Array(IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenaltyMapping), {
          minItems: 1,
        }),
      }),
      rest: Required({
        type: IncludeIdentifier(MagicalRuneCombatTechniqueCheckPenaltyRest),
      }),
    }),
})

const MagicalRuneCombatTechniqueCheckPenaltyMapping = TypeAlias(import.meta.url, {
  name: "MagicalRuneCombatTechniqueCheckPenaltyMapping",
  type: () =>
    Object({
      id: Required({
        comment: "The combat technique’s identifier.",
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      modifier: Required({
        comment: "The check modifier for the specified combat technique.",
        type: Integer(),
      }),
    }),
})

const MagicalRuneCombatTechniqueCheckPenaltyRest = TypeAlias(import.meta.url, {
  name: "MagicalRuneCombatTechniqueCheckPenaltyRest",
  type: () =>
    Object({
      modifier: Required({
        comment: "The check modifier for combat techniques not specified in `map`.",
        type: Integer(),
      }),
    }),
})

const MagicalRunePerformanceParameters = TypeAlias(import.meta.url, {
  name: "MagicalRunePerformanceParameters",
  comment: "Measurable parameters of a magical rune.",
  type: () =>
    Object({
      cost: Required({
        comment: "The AE cost.",
        type: IncludeIdentifier(MagicalRuneCost),
      }),
      crafting_time: Required({
        comment: "The crafting time.",
        type: IncludeIdentifier(MagicalRuneCraftingTime),
      }),
      duration: Required({
        comment: "The duration.",
        type: IncludeIdentifier(MagicalRuneDuration),
      }),
    }),
})

const MagicalRuneCost = Enum(import.meta.url, {
  name: "MagicalRuneCost",
  values: () => ({
    Single: EnumCase({ type: IncludeIdentifier(SingleMagicalRuneCost) }),
    Disjunction: EnumCase({ type: IncludeIdentifier(MagicalRuneCostDisjunction) }),
    DerivedFromOption: EnumCase({ type: null }),
  }),
})

const MagicalRuneOptionCost = Enum(import.meta.url, {
  name: "MagicalRuneOptionCost",
  values: () => ({
    Single: EnumCase({ type: IncludeIdentifier(SingleMagicalRuneCost) }),
    Disjunction: EnumCase({ type: IncludeIdentifier(MagicalRuneCostDisjunction) }),
  }),
})

const SingleMagicalRuneCost = TypeAlias(import.meta.url, {
  name: "SingleMagicalRuneCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "SingleMagicalRuneCostTranslation",
        Object({
          note: Required({
            comment: "A note, appended to the generated string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        })
      ),
    }),
})

const MagicalRuneCostDisjunction = TypeAlias(import.meta.url, {
  name: "MagicalRuneCostDisjunction",
  type: () =>
    Object({
      list: Required({
        comment: "A set of possible AE cost values.",
        type: Array(IncludeIdentifier(SingleMagicalRuneCost), { minItems: 2, uniqueItems: true }),
      }),
    }),
})

const MagicalRuneCraftingTime = TypeAlias(import.meta.url, {
  name: "MagicalRuneCraftingTime",
  type: () =>
    Object({
      value: Required({
        comment: "The crafting time in actions.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "MagicalRuneCraftingTimeTranslation",
        Object({
          per: Required({
            comment:
              "The crafting time has to be per a specific countable entity, e.g. `8 actions per person`.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        })
      ),
    }),
})

const MagicalRuneDuration = TypeAlias(import.meta.url, {
  name: "MagicalRuneDuration",
  type: () =>
    Object({
      slow: Required({
        comment: "The duration on slow rune application.",
        type: IncludeIdentifier(CheckResultBasedDuration),
      }),
      fast: Required({
        comment: "The duration on fast rune application.",
        type: IncludeIdentifier(CheckResultBasedDuration),
      }),
    }),
})

const MagicalRuneImprovementCost = Enum(import.meta.url, {
  name: "MagicalRuneImprovementCost",
  values: () => ({
    Constant: EnumCase({ type: IncludeIdentifier(ImprovementCost) }),
    DerivedFromOption: EnumCase({ type: null }),
  }),
})

const MagicalRuneOption = TypeAlias(import.meta.url, {
  name: "MagicalRuneOption",
  type: () =>
    Object({
      id: Required({
        comment: "The magical rune option’s identifier. An unique, increasing integer.",
        type: Integer({ minimum: 1 }),
      }),
      cost: Optional({
        comment: "The option-specific AE cost.",
        type: IncludeIdentifier(MagicalRuneOptionCost),
      }),
      improvement_cost: Optional({
        comment: "The option-specific improvement cost.",
        type: IncludeIdentifier(ImprovementCost),
      }),
      suboption: Optional({
        type: IncludeIdentifier(MagicalRuneSuboption),
      }),
      translations: NestedLocaleMap(
        Required,
        "MagicalRuneOptionTranslation",
        Object({
          name: Required({
            comment: `The magical rune option’s name.

The surrounding parenthesis will/should not be included, they will/should be generated.`,
            type: String({ minLength: 1 }),
          }),
          native_name: Required({
            comment: "The native name of the magical rune option.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
})

const MagicalRuneSuboption = Enum(import.meta.url, {
  name: "MagicalRuneSuboption",
  values: () => ({
    Custom: EnumCase({
      comment: "The sub-option may be defined by the user (as a arbitrary text).",
      type: IncludeIdentifier(CustomMagicalRuneSuboption),
    }),
  }),
})

const CustomMagicalRuneSuboption = TypeAlias(import.meta.url, {
  name: "CustomMagicalRuneSuboption",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "CustomMagicalRuneSuboptionTranslation",
        Object(
          {
            examples: Optional({
              comment: "One or more examples for the suboption.",
              type: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
    }),
})
