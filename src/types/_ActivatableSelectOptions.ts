import {
  Boolean,
  ChildEntities,
  Entity,
  Enum,
  EnumCase,
  getAnyEnumCaseValue,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { SelectOptionCategory } from "./_ActivatableSelectOptionCategory.js"
import { NewSkillApplication, SkillUse } from "./_ActivatableSkillApplicationsAndUses.js"
import { GeneralIdentifier, SkillIdentifier } from "./_Identifier.js"
import { CombatTechniqueIdentifier, SelectOptionParentIdentifier } from "./_IdentifierGroup.js"
import { GeneralPrerequisites } from "./_Prerequisite.js"
import { Errata } from "./source/_Erratum.js"
import { optionalSrc } from "./source/_PublicationRef.js"

const SelectOptions = TypeAlias(import.meta.url, {
  name: "SelectOptions",
  comment: `Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: () =>
    Object(
      {
        derived: Optional({
          comment: `An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then.`,
          type: IncludeIdentifier(SelectOptionCategory),
        }),
      },
      { minProperties: 1 },
    ),
})

export const select_options = Optional({
  comment: `Definitions for possible options for the activatable entry, derived from entry categories.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: IncludeIdentifier(SelectOptions),
})

export const ExplicitSelectOption = Enum(import.meta.url, {
  name: "ExplicitSelectOption",
  values: () => ({
    General: EnumCase({ type: GeneralIdentifier() }),
    Skill: EnumCase({ type: IncludeIdentifier(ExplicitSkillSelectOption) }),
    CombatTechnique: EnumCase({ type: IncludeIdentifier(ExplicitCombatTechniqueSelectOption) }),
  }),
})

export const GeneralSelectOption = Entity(import.meta.url, {
  name: "GeneralSelectOption",
  namePlural: "GeneralSelectOptions",
  type: () =>
    Object({
      parent: Required({
        comment: "The entry that contains select option.",
        type: IncludeIdentifier(SelectOptionParentIdentifier),
      }),
      profession_only: Optional({
        comment:
          "Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user.",
        type: Boolean(),
      }),
      skill_applications: Required({
        comment:
          "Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: ChildEntities(NewSkillApplication),
      }),
      skill_uses: Required({
        comment:
          "Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option.",
        type: ChildEntities(SkillUse),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedTranslationMap(
        Required,
        "GeneralSelectOption",
        Object({
          name: Required({
            comment: "The name of the select option.",
            type: String({ minLength: 1 }),
          }),
          name_in_profession: Optional({
            comment: "The name of the select option when displayed in a generated profession text.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment:
              "The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  parentReferenceKey: "parent",
  instanceDisplayName: {},
  instanceDisplayNameCustomizer: ({
    instance,
    instanceDisplayName,
    instanceDisplayNameLocaleId,
    getDisplayNameForInstanceId,
  }) => ({
    name: `${
      getDisplayNameForInstanceId(getAnyEnumCaseValue(instance.parent))?.name ?? "[unknown parent]"
    } — ${instanceDisplayName}`,
    localeId: instanceDisplayNameLocaleId,
  }),
  uniqueConstraints: [
    [
      {
        keyPath: "parent",
      },
      {
        entityMapKeyPath: "translations",
        keyPathInEntityMap: "name",
      },
    ],
  ],
})

export const explicit_select_options = Required({
  comment: `Explicit definitions for possible options for the activatable entry.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: ChildEntities(GeneralSelectOption),
})

const ExplicitSkillSelectOption = TypeAlias(import.meta.url, {
  name: "ExplicitSkillSelectOption",
  type: () =>
    Object({
      id: Required({
        comment: "The skill’s identifier.",
        type: SkillIdentifier(),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedTranslationMap(
        Optional,
        "ExplicitSkillSelectOption",
        Object(
          {
            errata: Optional({
              type: IncludeIdentifier(Errata),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const ExplicitCombatTechniqueSelectOption = TypeAlias(import.meta.url, {
  name: "ExplicitCombatTechniqueSelectOption",
  type: () =>
    Object({
      id: Required({
        comment: "The combat technique’s identifier.",
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),
      prerequisites: Optional({
        comment: "Prerequisites for the select option.",
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      binding_cost: Optional({
        comment:
          "Specific binding cost for the select option. Only has an effect if the associated entry supports binding costs.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value: Optional({
        comment: "Specific AP cost for the select option.",
        type: Integer({ minimum: 1 }),
      }),
      src: optionalSrc,
      translations: NestedTranslationMap(
        Optional,
        "ExplicitCombatTechniqueSelectOption",
        Object(
          {
            errata: Optional({
              type: IncludeIdentifier(Errata),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

// "Options": {
//   "$comment": "Unfinished generalized options handling.",
//   "type": "array",
//   "minItems": 1,
//   "items": {
//     "oneOf": [
//       {
//         "type": "object",
//         "properties": {
//           "type": { "const": "List" },
//           "value": {
//             "type": "object",
//             "properties": {
//               "list": {
//                 "oneOf": [
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Generate" },
//                       "value": { "$ref": "#/definitions/SelectOptionCategories" }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   },
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Explicit" },
//                       "value": { "$ref": "#/definitions/SelectOptions" }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   }
//                 ]
//               },
//               "multiple": {
//                 "description": "Sometimes, multiple options from a single list have to or can be chosen. Its possible to define a number of options that have to be selected or a range of numbers of options that can be selected.",
//                 "oneOf": [
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Fixed" },
//                       "value": {
//                         "description": "The number of options that have to be selected.",
//                         "type": "integer",
//                         "minimum": 2
//                       }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   },
//                   {
//                     "type": "object",
//                     "properties": {
//                       "type": { "const": "Range" },
//                       "value": {
//                         "type": "object",
//                         "properties": {
//                           "min": {
//                             "description": "The minimum number of options that need to be selected. If left empty it defaults to 1.",
//                             "type": "integer",
//                             "minimum": 2
//                           },
//                           "max": {
//                             "description": "The maximum number of options that need to be selected.",
//                             "type": "integer",
//                             "minimum": 2
//                           }
//                         },
//                         "required": ["max"],
//                         "additionalProperties": false
//                       }
//                     },
//                     "required": ["type", "value"],
//                     "additionalProperties": false
//                   }
//                 ]
//               }
//             },
//             "required": ["list"],
//             "additionalProperties": false
//           }
//         },
//         "required": ["type", "value"],
//         "additionalProperties": false
//       },
//       {
//         "type": "object",
//         "properties": {
//           "type": { "const": "TextInput" },
//           "value": {
//             "type": "object",
//             "properties": {
//               "label": {
//                 "type": "object",
//                 "description": "All translations for the entry, identified by IETF language tag (BCP47).",
//                 "patternProperties": {
//                   "^[a-z]{2}-[A-Z]{2}$": {
//                     "description": "The text input label.",
//                     "type": "string",
//                     "minLength": 1
//                   }
//                 },
//                 "minProperties": 1,
//                 "additionalProperties": false
//               }
//             },
//             "required": ["label"],
//             "additionalProperties": false
//           }
//         },
//         "required": ["type", "value"],
//         "additionalProperties": false
//       }
//     ]
//   }
// },
