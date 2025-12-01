import {
  Array,
  Boolean,
  Enum,
  EnumCase,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import {
  CloseCombatTechniqueIdentifier,
  RaceIdentifier,
  RangedCombatTechniqueIdentifier,
  WeaponIdentifier,
} from "./_Identifier.js"
import {
  CombatRelatedSpecialAbilityIdentifier,
  CombatTechniqueIdentifier,
} from "./_IdentifierGroup.js"

const CombatSpecialAbilityUsageType = Enum(import.meta.url, {
  name: "CombatSpecialAbilityUsageType",
  comment: "The definition of how the combat special ability can be used in combat.",
  values: () => ({
    Passive: EnumCase({ type: null }),
    BasicManeuver: EnumCase({ type: null }),
    SpecialManeuver: EnumCase({ type: null }),
  }),
})

export const usage_type = Required({
  comment: "The definition of how the combat special ability can be used in combat.",
  type: IncludeIdentifier(CombatSpecialAbilityUsageType),
})

const CombatSpecialAbilityType = Enum(import.meta.url, {
  name: "CombatSpecialAbilityType",
  comment:
    "The definition of if the combat special ability can be used when armed or when unarmed.",
  values: () => ({
    Armed: EnumCase({ type: null }),
    Unarmed: EnumCase({ type: null }),
  }),
})

export const type = Required({
  comment:
    "The definition of if the combat special ability can be used when armed or when unarmed.",
  type: IncludeIdentifier(CombatSpecialAbilityType),
})

const Penalty = Enum(import.meta.url, {
  name: "Penalty",
  comment: "The penalty the special ability gives when used.",
  values: () => ({
    Single: EnumCase({ type: IncludeIdentifier(SinglePenalty) }),
    ByHandedness: EnumCase({ type: IncludeIdentifier(PenaltyByHandedness) }),
    ByActivation: EnumCase({ type: IncludeIdentifier(PenaltyByActivation) }),
    Selection: EnumCase({ type: IncludeIdentifier(PenaltySelection) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(PenaltyByLevel) }),
    ByAttack: EnumCase({ type: IncludeIdentifier(PenaltyByAttack) }),
    DependsOnHitZone: EnumCase({ type: null }),
  }),
})

export const penalty = Optional({
  comment: "The penalty the special ability gives when used.",
  type: IncludeIdentifier(Penalty),
})

export const penalty_l10n = Optional({
  comment: "The penalty the special ability gives when used.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const SinglePenalty = TypeAlias(import.meta.url, {
  name: "SinglePenalty",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltyByHandedness = TypeAlias(import.meta.url, {
  name: "PenaltyByHandedness",
  type: () =>
    Object({
      one_handed: Required({
        comment: "The penalty value for one-handed weapons.",
        type: Integer(),
      }),
      two_handed: Required({
        comment: "The penalty value for two-handed weapons.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltyByActivation = TypeAlias(import.meta.url, {
  name: "PenaltyByActivation",
  type: () =>
    Object({
      active: Required({
        comment: "The penalty value if the entry has been bought by the character.",
        type: Integer(),
      }),
      inactive: Required({
        comment: "The penalty value if the entry has not been bought by the character.",
        type: Integer(),
      }),
      applies_to_parry: Optional({
        comment: "Set to `true` if the penalty applies to the parry instead of the attack.",
        type: Boolean(),
      }),
    }),
})

const PenaltySelection = TypeAlias(import.meta.url, {
  name: "PenaltySelection",
  type: () =>
    Object({
      options: Required({
        type: IncludeIdentifier(PenaltySelectionOptions),
      }),
    }),
})

const PenaltySelectionOptions = Enum(import.meta.url, {
  name: "PenaltySelectionOptions",
  values: () => ({
    Specific: EnumCase({ type: IncludeIdentifier(SpecificPenaltySelectionOptions) }),
    Range: EnumCase({ type: IncludeIdentifier(PenaltySelectionOptionsRange) }),
  }),
})

const SpecificPenaltySelectionOptions = TypeAlias(import.meta.url, {
  name: "SpecificPenaltySelectionOptions",
  type: () =>
    Object({
      list: Required({
        comment: "The list of specific penalty options.",
        type: Array(IncludeIdentifier(SpecificPenaltySelectionOption), { minItems: 2 }),
      }),
    }),
})

const SpecificPenaltySelectionOption = TypeAlias(import.meta.url, {
  name: "SpecificPenaltySelectionOption",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value.",
        type: Integer(),
      }),
    }),
})

const PenaltySelectionOptionsRange = TypeAlias(import.meta.url, {
  name: "PenaltySelectionOptionsRange",
  type: () =>
    Object({
      minimum: Required({
        comment: "The minimum penalty value.",
        type: Integer(),
      }),
      maximum: Required({
        comment: "The maximum penalty value.",
        type: Integer(),
      }),
    }),
})

const PenaltyByLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByLevel",
  type: () =>
    Object({
      levels: Required({
        comment:
          "A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on.",
        type: Array(IncludeIdentifier(PenaltyByLevelLevel), { minItems: 2 }),
      }),
      external: Optional({
        comment:
          "The combat-related special ability of which the level defines the penalty instead.",
        type: IncludeIdentifier(PenaltyByExternalLevel),
      }),
    }),
})

const PenaltyByLevelLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByLevelLevel",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value for this level.",
        type: Integer(),
      }),
    }),
})

const PenaltyByExternalLevel = TypeAlias(import.meta.url, {
  name: "PenaltyByExternalLevel",
  comment: "The combat-related special ability of which the level defines the penalty instead.",
  type: () =>
    Object({
      id: Required({
        comment:
          "The identifier of the combat-related special ability of which the level defines the penalty instead.",
        type: IncludeIdentifier(CombatRelatedSpecialAbilityIdentifier),
      }),
    }),
})

const PenaltyByAttack = TypeAlias(import.meta.url, {
  name: "PenaltyByAttack",
  type: () =>
    Object({
      list: Required({
        comment:
          "A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on.",
        type: Array(IncludeIdentifier(PenaltyByAttackOrderItem), { minItems: 1 }),
      }),
      initial_order: Optional({
        comment: "The order of the first element in the `list` of penalties.",
        type: Integer(),
      }),
      attack_replacement: Optional({
        comment:
          "Set if a predefined different word should be used instead of the word `attack` for display purposes.",
        type: IncludeIdentifier(PenaltyByAttackReplacement),
      }),
    }),
})

const PenaltyByAttackOrderItem = TypeAlias(import.meta.url, {
  name: "PenaltyByAttackOrderItem",
  type: () =>
    Object({
      value: Required({
        comment: "The penalty value for this order.",
        type: Integer(),
      }),
    }),
})

const PenaltyByAttackReplacement = Enum(import.meta.url, {
  name: "PenaltyByAttackReplacement",
  comment:
    "Set if a predefined different word should be used instead of the word `attack` for display purposes.",
  values: () => ({
    Throw: EnumCase({ type: null }),
  }),
})

const ApplicableCombatTechniques = Enum(import.meta.url, {
  name: "ApplicableCombatTechniques",
  values: () => ({
    None: EnumCase({ type: null }),
    DependingOnCombatStyle: EnumCase({ type: null }),
    All: EnumCase({ type: IncludeIdentifier(AllApplicableCombatTechniques) }),
    AllClose: EnumCase({ type: IncludeIdentifier(AllApplicableCloseCombatTechniques) }),
    AllRanged: EnumCase({ type: IncludeIdentifier(AllApplicableRangedCombatTechniques) }),
    Specific: EnumCase({ type: IncludeIdentifier(SpecificApplicableCombatTechniques) }),
  }),
})

export const combat_techniques = Required({
  comment: "The combat techniques the special ability is applicable to.",
  type: IncludeIdentifier(ApplicableCombatTechniques),
})

const AllApplicableCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableAllCombatTechniquesRestriction), { minItems: 1 }),
      }),
    }),
})

const AllApplicableCloseCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableCloseCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableCloseCombatTechniquesRestriction), { minItems: 1 }),
      }),
    }),
})

const AllApplicableRangedCombatTechniques = TypeAlias(import.meta.url, {
  name: "AllApplicableRangedCombatTechniques",
  type: () =>
    Object({
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableRangedCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
    }),
})

const SpecificApplicableCombatTechniques = TypeAlias(import.meta.url, {
  name: "SpecificApplicableCombatTechniques",
  type: () =>
    Object({
      list: Required({
        type: Array(IncludeIdentifier(SpecificApplicableCombatTechnique), { minItems: 1 }),
      }),
    }),
})

const SpecificApplicableCombatTechnique = TypeAlias(import.meta.url, {
  name: "SpecificApplicableCombatTechnique",
  type: () =>
    Object({
      id: Required({
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      restrictions: Optional({
        type: Array(IncludeIdentifier(ApplicableSpecificCombatTechniquesRestriction), {
          minItems: 1,
        }),
      }),
    }),
})

const ApplicableAllCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableAllCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        IncludeIdentifier(CombatTechniqueIdentifier),
      ]),
    }),
  }),
})

const ApplicableCloseCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableCloseCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    HasParry: EnumCase({ type: null }),
    OneHanded: EnumCase({ type: null }),
    ParryingWeapon: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        CloseCombatTechniqueIdentifier(),
      ]),
    }),
  }),
})

const ApplicableRangedCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableRangedCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    ExcludeCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(ApplicableCombatTechniquesNegativeCombatTechniquesRestriction, [
        RangedCombatTechniqueIdentifier(),
      ]),
    }),
  }),
})

const ApplicableSpecificCombatTechniquesRestriction = Enum(import.meta.url, {
  name: "ApplicableSpecificCombatTechniquesRestriction",
  values: () => ({
    Improvised: EnumCase({ type: null }),
    PointedBlade: EnumCase({ type: null }),
    Mount: EnumCase({ type: null }),
    Race: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesRaceRestriction) }),
    Level: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesLevelRestriction) }),
    Weapons: EnumCase({ type: IncludeIdentifier(ApplicableCombatTechniquesWeaponRestriction) }),
  }),
})

const ApplicableCombatTechniquesNegativeCombatTechniquesRestriction = GenTypeAlias(
  import.meta.url,
  {
    name: "ApplicableCombatTechniquesNegativeCombatTechniquesRestriction",
    parameters: [Param("Ref")],
    type: Ref =>
      Object({
        list: Required({
          comment: "The combat techniques this combat special ability is **not** applicable to.",
          type: Array(TypeArgument(Ref), { minItems: 1 }),
        }),
      }),
  },
)

const ApplicableCombatTechniquesRaceRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesRaceRestriction",
  type: () => RaceIdentifier(),
})

const ApplicableCombatTechniquesLevelRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesLevelRestriction",
  type: () =>
    Object({
      level: Required({
        comment: "The combat special ability is only applicable on a certain level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const ApplicableCombatTechniquesWeaponRestriction = TypeAlias(import.meta.url, {
  name: "ApplicableCombatTechniquesWeaponRestriction",
  type: () =>
    Object({
      list: Required({
        comment: "The specific weapons this combat special ability is only applicable to.",
        type: Array(WeaponIdentifier(), { minItems: 1 }),
      }),
    }),
})
