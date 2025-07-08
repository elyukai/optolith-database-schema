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
import { AspectIdentifier, PropertyIdentifier, SkillIdentifier } from "../../_Identifier.js"
import { DisplayOption } from "../DisplayOption.js"

export const RatedMinimumNumberPrerequisite = TypeAlias(import.meta.url, {
  name: "RatedMinimumNumberPrerequisite",
  type: () =>
    Object({
      number: Required({
        comment:
          "The minimum number of skills that need to be on the defined minimum skill rating.",
        type: Integer({ minimum: 1 }),
      }),
      value: Required({
        comment: "The minimum skill rating the defined minimum number of skills need to be on.",
        type: Integer({ minimum: 1 }),
      }),
      targets: Required({
        comment: "The targets that contribute to satisfying the prerequisite.",
        type: IncludeIdentifier(RatedMinimumNumberPrerequisiteTarget),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const RatedMinimumNumberPrerequisiteTarget = Enum(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteTarget",
  values: () => ({
    Skills: EnumCase({ type: IncludeIdentifier(RatedMinimumNumberPrerequisiteSkillsTarget) }),
    CombatTechniques: EnumCase({
      type: IncludeIdentifier(RatedMinimumNumberPrerequisiteCombatTechniquesTarget),
    }),
    Spellworks: EnumCase({
      type: IncludeIdentifier(RatedMinimumNumberPrerequisiteSpellworksTarget),
    }),
    Liturgies: EnumCase({ type: IncludeIdentifier(RatedMinimumNumberPrerequisiteLiturgiesTarget) }),
  }),
})

export const RatedMinimumNumberPrerequisiteSkillsTarget = TypeAlias(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteSkillsTarget",
  type: () =>
    Object({
      targets: Required({
        comment: "The skills that are taken into account for satisfying the prerequisite.",
        type: Array(SkillIdentifier, { minItems: 2, uniqueItems: true }),
      }),
    }),
})

export const RatedMinimumNumberPrerequisiteCombatTechniquesTarget = TypeAlias(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteCombatTechniquesTarget",
  type: () =>
    Object({
      group: Required({
        comment: "The skills that are taken into account for satisfying the prerequisite.",
        type: IncludeIdentifier(RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup),
      }),
    }),
})

const RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup = Enum(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteCombatTechniquesTargetGroup",
  values: () => ({
    All: EnumCase({ type: null }),
    Close: EnumCase({ type: null }),
    Ranged: EnumCase({ type: null }),
  }),
})

export const RatedMinimumNumberPrerequisiteSpellworksTarget = TypeAlias(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteSpellworksTarget",
  type: () =>
    Object({
      property: Required({
        comment: "The skills that are taken into account for satisfying the prerequisite.",
        type: PropertyIdentifier,
      }),
    }),
})

export const RatedMinimumNumberPrerequisiteLiturgiesTarget = TypeAlias(import.meta.url, {
  name: "RatedMinimumNumberPrerequisiteLiturgiesTarget",
  type: () =>
    Object({
      aspect: Required({
        comment: "The skills that are taken into account for satisfying the prerequisite.",
        type: AspectIdentifier,
      }),
    }),
})
