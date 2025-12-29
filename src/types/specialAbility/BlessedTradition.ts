import {
  Array,
  Boolean,
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
import { name, name_in_library } from "../_Activatable.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { skill_applications, skill_uses } from "../_ActivatableSkillApplicationsAndUses.js"
import {
  AspectIdentifier,
  AttributeIdentifier,
  BlessingIdentifier,
  SkillIdentifier,
} from "../_Identifier.js"
import { CombatTechniqueIdentifier } from "../_IdentifierGroup.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"
import { SpecialRule } from "./_Tradition.js"

export const BlessedTradition = Entity(import.meta.url, {
  name: "BlessedTradition",
  namePlural: "BlessedTraditions",
  type: () =>
    Object({
      select_options,
      explicit_select_options,
      skill_applications,
      skill_uses,
      primary: Optional({
        comment:
          "The tradition’s primary attribute. Leave empty if the tradition does not have one.",
        type: AttributeIdentifier(),
      }),
      aspects: Optional({
        comment: "The tradition’s aspects, if any.",
        type: Array(AspectIdentifier(), { minItems: 2, maxItems: 2 }),
      }),
      restricted_blessings: Optional({
        comment:
          "If a tradition restricts the possible blessings, the blessings that are **not** allowed.",
        type: IncludeIdentifier(RestrictedBlessings),
      }),
      favored_combat_techniques: Optional({
        comment: "A list of favored combat techniques.",
        type: IncludeIdentifier(FavoredCombatTechniques),
      }),
      favored_skills: Required({
        comment: "A list of favored skills.",
        type: Array(SkillIdentifier(), { minItems: 1 }),
      }),
      favored_skills_selection: Optional({
        comment:
          "On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored.",
        type: IncludeIdentifier(FavoredSkillsSelection),
      }),
      type: Required({
        comment: "The type of the tradition. May be either church or shamanistic.",
        type: IncludeIdentifier(BlessedTraditionType),
      }),
      associated_principles_id: Optional({
        comment:
          "The select option’s identifier of the disadvantage *Principles* that represent this tradition’s code, if any.",
        type: Integer(),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "BlessedTradition",
        Object({
          name,
          name_compressed: Optional({
            comment:
              "A shorter name of the tradition’s name, used in liturgical chant descriptions. This is not the same as the name in the library.",
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          special_rules: Required({
            comment:
              "The special rules of the tradition. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(SpecialRule), { minItems: 1 }),
          }),
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name_in_library",
      keyPathInEntityMapFallback: "name",
    },
  ],
})

const RestrictedBlessings = Enum(import.meta.url, {
  name: "RestrictedBlessings",
  comment:
    "If a tradition restricts the possible blessings, the blessings that are **not** allowed.",
  values: () => ({
    Three: EnumCase({ type: Array(BlessingIdentifier(), { minItems: 3, maxItems: 3 }) }),
    Six: EnumCase({ type: Array(BlessingIdentifier(), { minItems: 6, maxItems: 6 }) }),
  }),
})

const FavoredCombatTechniques = Enum(import.meta.url, {
  name: "FavoredCombatTechniques",
  values: () => ({
    All: EnumCase({ type: null }),
    AllClose: EnumCase({ type: null }),
    AllUsedInHunting: EnumCase({ type: null }),
    Specific: EnumCase({ type: IncludeIdentifier(SpecificFavoredCombatTechniques) }),
  }),
})

const SpecificFavoredCombatTechniques = TypeAlias(import.meta.url, {
  name: "SpecificFavoredCombatTechniques",
  type: () =>
    Object({
      list: Required({
        comment: "A list of specific favored combat techniques.",
        type: Array(IncludeIdentifier(CombatTechniqueIdentifier), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
    }),
})

const FavoredSkillsSelection = TypeAlias(import.meta.url, {
  name: "FavoredSkillsSelection",
  type: () =>
    Object({
      number: Required({
        comment: "The number of skills that can be selected.",
        type: Integer({ minimum: 1 }),
      }),
      options: Required({
        comment: "The possible set of skills.",
        type: Array(SkillIdentifier(), { minItems: 2, uniqueItems: true }),
      }),
    }),
})

const BlessedTraditionType = Enum(import.meta.url, {
  name: "BlessedTraditionType",
  comment: "The type of the tradition. May be either church or shamanistic.",
  values: () => ({
    Church: EnumCase({ type: null }),
    Shamanistic: EnumCase({ type: IncludeIdentifier(ShamanisticBlessedTradition) }),
  }),
})

const ShamanisticBlessedTradition = TypeAlias(import.meta.url, {
  name: "ShamanisticBlessedTradition",
  comment: "Additional rules for shamanistic traditions.",
  type: () =>
    Object({
      can_use_bone_mace_as_ceremonial_item: Required({
        type: Boolean(),
      }),
    }),
})
