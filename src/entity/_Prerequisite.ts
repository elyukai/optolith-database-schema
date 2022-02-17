/**
 * @title Prerequisites
 */

/**
 * @title Single Prerequisites
 */
export namespace Single {
  export namespace DisplayOption {
    export type Type =
      | { tag: "Hide" }
      | {
        tag: "ReplaceWith"

        /**
         * All translations for the entry, identified by IETF language tag (BCP47).
         * @minProperties 1
         */
        value: {
          /**
           * @patternProperties ^[a-z]{2}-[A-Z]{2}$
           */
          [localeId: string]: string
        }
      }
  }

  export namespace Rule {
    export type Type = {
      tag: "Rule"
      id: Identifier
      display_option: DisplayOption.Type
    }

    type Identifier =
      | {
        tag: "FocusRule",

        /**
         * @integer
         * @minimum 1
         */
        value: number
      }
      | {
        tag: "OptionalRule",

        /**
         * @integer
         * @minimum 1
         */
        value: number
      }
  }

  export namespace Publication {
    export type Type = {
      tag: "Publication"
      /**
       * @integer
       * @minimum 1
       */
      id: number
      display_option: DisplayOption.Type
    }
  }

//       "Sex": {
//         "title": "Sex Prerequisite",
//         "description": "Requires a specific sex.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Sex" },
//           "id": {
//             "enum": ["Male", "Female"]
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "Race": {
//         "title": "Race Prerequisite",
//         "description": "Requires a specific race or one of a specific set of races. You can also provide an object to say whether the hero must meet one of the races or if the entry does not allow one of the races.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Race" },
//           "id": {
//             "oneOf": [
//               { "type": "integer", "minimum": 1 },
//               {
//                 "type": "array",
//                 "items": { "type": "integer", "minimum": 1 },
//                 "minItems": 2
//               }
//             ]
//           },
//           "active": {
//             "type": "boolean"
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "Culture": {
//         "title": "Culture Prerequisite",
//         "description": "Requires a specific culture or one of a specific set of cultures.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Culture" },
//           "id": {
//             "oneOf": [
//               { "type": "integer", "minimum": 1 },
//               {
//                 "type": "array",
//                 "items": { "type": "integer", "minimum": 1 },
//                 "minItems": 2
//               }
//             ]
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "PrimaryAttribute": {
//         "title": "Primary Attribute Prerequisite",
//         "description": "Requires the primary attribute at a specific value.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "PrimaryAttribute" },
//           "type": {
//             "description": "Is the required primary attribute for spellcasters or blessed ones?",
//             "enum": ["Blessed", "Magical"]
//           },
//           "value": {
//             "description": "Required value of the attribute",
//             "type": "integer",
//             "minimum": 9
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "type", "value"],
//         "additionalProperties": false
//       },
//       "Pact": {
//         "title": "Pact Prerequisite",
//         "description": "Requires a specific pact.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Pact" },
//           "category": {
//             "description": "The required pact category",
//             "type": "integer",
//             "minimum": 1
//           },
//           "domain": {
//             "description": "A specific required domain or a set of required domains",
//             "oneOf": [
//               {
//                 "type": "integer",
//                 "minimum": 1
//               },
//               {
//                 "type": "array",
//                 "items": {
//                   "type": "integer",
//                   "minimum": 1
//                 },
//                 "minItems": 1
//               }
//             ]
//           },
//           "level": {
//             "description": "The required pact level",
//             "type": "integer",
//             "minimum": 1
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "category"],
//         "additionalProperties": false
//       },
//       "SocialStatus": {
//         "title": "Social Status Prerequisite",
//         "description": "Requires a minimum social status",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "SocialStatus" },
//           "id": {
//             "type": "integer",
//             "minimum": 2,
//             "maximum": 5
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "State": {
//         "title": "State Prerequisite",
//         "description": "Requires a specific state or one state in a set of specific states to be active.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "State" },
//           "id": {
//             "oneOf": [
//               {
//                 "type": "integer",
//                 "minimum": 1
//               },
//               {
//                 "type": "array",
//                 "items": {
//                   "type": "integer",
//                   "minimum": 1
//                 },
//                 "minItems": 1
//               }
//             ]
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "Influence": {
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Influence" },
//           "id": { "type": "integer", "minimum": 1 },
//           "active": { "type": "boolean" },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "Activatable": {
//         "title": "Activatable Prerequisite",
//         "description": "Requires a specific advantage, disadvantage, special ability.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Activatable" },
//           "id": {
//             "type": "object",
//             "properties": {
//               "tag": { "$ref": "_Id.schema.json#/definitions/Activatable" },
//               "value": { "type": "integer", "minimum": 1 }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "active": {
//             "description": "If the required entry should be required to be active or inactive.",
//             "type": "boolean"
//           },
//           "level": {
//             "description": "The current or required level of the entry.",
//             "type": "integer",
//             "minimum": 1
//           },
//           "options": {
//             "description": "Required select options. Order is important. Typically, you only need the first array index, though.",
//             "type": "array",
//             "items": {
//               "description": "A select option's ID.",
//               "oneOf": [
//                 { "type": "integer" },
//                 {
//                   "type": "object",
//                   "properties": {
//                     "tag": {
//                       "enum": ["Skill", "MeleeCombatTechnique", "RangedCombatTechnique"]
//                     },
//                     "value": { "type": "integer", "minimum": 1 }
//                   },
//                   "required": ["tag", "value"],
//                   "additionalProperties": false
//                 }
//               ]
//             },
//             "minItems": 1
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" },
//           "when": { "$ref": "#/definitions/Single/When" }
//         },
//         "required": ["tag", "id", "active"],
//         "additionalProperties": false
//       },
//       "ActivatableMultiEntry": {
//         "title": "Activatable Prerequisite",
//         "description": "Require one advantage, disadvantage or special ability from a set.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Publication" },
//           "id": {
//             "type": "object",
//             "properties": {
//               "tag": { "$ref": "_Id.schema.json#/definitions/Activatable" },
//               "value": {
//                 "type": "array",
//                 "items": { "type": "integer", "minimum": 1 },
//                 "uniqueItems": true,
//                 "minItems": 2
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "active": {
//             "description": "If the required entry should be required to be active or inactive.",
//             "type": "boolean"
//           },
//           "level": {
//             "description": "The current or required level of the entry.",
//             "type": "integer",
//             "minimum": 1
//           },
//           "options": {
//             "description": "Required select options. Order is important. Typically, you only need the first array index, though.",
//             "type": "array",
//             "items": {
//               "description": "A select option's ID.",
//               "oneOf": [
//                 { "type": "integer" },
//                 {
//                   "type": "object",
//                   "properties": {
//                     "tag": {
//                       "enum": ["Skill", "MeleeCombatTechnique", "RangedCombatTechnique"]
//                     },
//                     "value": { "type": "integer", "minimum": 1 }
//                   },
//                   "required": ["tag", "value"],
//                   "additionalProperties": false
//                 }
//               ]
//             },
//             "minItems": 1
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id", "active"],
//         "additionalProperties": false
//       },
//       "ActivatableMultiSelect": {
//         "title": "Activatable Prerequisite",
//         "description": "Requires one of a set of options on a specific advantage, disadvantage, special ability.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "ActivatableMultiSelect" },
//           "id": {
//             "type": "object",
//             "properties": {
//               "tag": { "$ref": "_Id.schema.json#/definitions/Activatable" },
//               "value": { "type": "integer", "minimum": 1 }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "active": {
//             "description": "If the required entry should be required to be active or inactive.",
//             "type": "boolean"
//           },
//           "level": {
//             "description": "The current or required level of the entry.",
//             "type": "integer",
//             "minimum": 1
//           },
//           "firstOption": {
//             "description": "Required select options. Order is important. Typically, you only need the first array index, though.",
//             "type": "array",
//             "items": {
//               "type": "integer",
//               "minimum": 1
//             },
//             "minItems": 2
//           },
//           "otherOptions": {
//             "description": "Required select options. Order is important. Typically, you only need the first array index, though.",
//             "type": "array",
//             "items": {
//               "description": "A select option's ID.",
//               "oneOf": [
//                 { "type": "integer" },
//                 {
//                   "type": "object",
//                   "properties": {
//                     "tag": {
//                       "enum": ["Skill", "MeleeCombatTechnique", "RangedCombatTechnique"]
//                     },
//                     "value": { "type": "integer", "minimum": 1 }
//                   },
//                   "required": ["tag", "value"],
//                   "additionalProperties": false
//                 }
//               ]
//             },
//             "minItems": 1
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id", "active", "firstOption"],
//         "additionalProperties": false
//       },
//       "MagicalTradition": {
//         "type": "object",
//         "properties": {
//           "tag": { "const": "MagicalTradition" },
//           "can_learn_rituals": {
//             "description": "Can a member of the tradition learn rituals?",
//             "type": "boolean",
//             "const": true
//           },
//           "can_bind_familiars": {
//             "description": "Can this magical tradition bind familiars?",
//             "type": "boolean",
//             "const": true
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag"],
//         "additionalProperties": false,
//         "minProperties": 2
//       },
//       "BlessedTradition": {
//         "type": "object",
//         "properties": {
//           "tag": { "const": "BlessedTradition" },
//           "is_shamanistic": {
//             "description": "Is this a shamanistic tradition?",
//             "type": "boolean",
//             "const": true
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag"],
//         "additionalProperties": false
//       },
//       "Increasable": {
//         "title": "Increasable Prerequisite",
//         "description": "Requires a specific attribute, skill, combat technique, spell or chant to be on a minimum value. Note that liturgical chants are required to be active automatically, so to require them to be active you can set the value to 0.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Increasable" },
//           "id": {
//             "type": "object",
//             "properties": {
//               "tag": { "$ref": "_Id.schema.json#/definitions/Rated" },
//               "value": { "type": "integer", "minimum": 1 }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "value": {
//             "description": "The required minimum value.",
//             "type": "integer",
//             "minimum": 0
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id", "value"],
//         "additionalProperties": false
//       },
//       "IncreasableMultiEntry": {
//         "title": "Increasable Prerequisite",
//         "description": "Require a specific attribute, skill, combat technique, spell or chant from a set to be on a minimum value. Note that liturgical chants are required to be active automatically, so to require them to be active you can set the value to 0.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "IncreasableMultiEntry" },
//           "id": {
//             "type": "object",
//             "properties": {
//               "tag": { "$ref": "_Id.schema.json#/definitions/Rated" },
//               "value": {
//                 "type": "array",
//                 "items": { "type": "integer", "minimum": 1 },
//                 "uniqueItems": true,
//                 "minItems": 2
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "value": {
//             "description": "The required minimum value.",
//             "type": "integer",
//             "minimum": 0
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "id", "value"],
//         "additionalProperties": false
//       },
//       "AnimistPower": {
//         "title": "Animist Power Prerequisite",
//         "description": "Requires a specific animist power to be on a minimum value.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "AnimistPower" },
//           "id": { "type": "integer", "minimum": 1 },
//           "level": {
//             "description": "The level to which the minimum value applies.",
//             "type": "integer",
//             "minimum": 0
//           },
//           "value": {
//             "description": "The required minimum value.",
//             "type": "integer",
//             "minimum": 0
//           }
//         },
//         "required": ["tag", "id", "value"],
//         "additionalProperties": false
//       },
//       "MinimumSkillRating": {
//         "type": "object",
//         "properties": {
//           "tag": { "const": "MinimumSkillRating" },
//           "number": {
//             "description": "The minimum number of skills that need to be on the defined minimum skill rating.",
//             "type": "integer",
//             "minimum": 1
//           },
//           "value": {
//             "description": "The minimum skill rating the defined minimum number of skills need to be on.",
//             "type": "integer",
//             "minimum": 1
//           },
//           "targets": {
//             "oneOf": [
//               {
//                 "type": "object",
//                 "properties": {
//                   "type": {
//                     "const": "Skills"
//                   },
//                   "id": {
//                     "type": "array",
//                     "items": { "type": "integer", "minimum": 1 },
//                     "minItems": 1
//                   }
//                 },
//                 "required": ["type", "id"],
//                 "additionalProperties": false
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "type": {
//                     "const": "Spellworks"
//                   },
//                   "property": {
//                     "type": "integer",
//                     "minimum": 1
//                   }
//                 },
//                 "required": ["type", "property"],
//                 "additionalProperties": false
//               },
//               {
//                 "type": "object",
//                 "properties": {
//                   "type": {
//                     "const": "Liturgies"
//                   },
//                   "aspect": {
//                     "type": "integer",
//                     "minimum": 1
//                   }
//                 },
//                 "required": ["type", "aspect"],
//                 "additionalProperties": false
//               }
//             ]
//           },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag", "number", "value", "targets"],
//         "additionalProperties": false
//       },
//       "Enhancement": {
//         "title": "Enhancement Prerequisite",
//         "description": "Requires a specific enhancement from a spellwork.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Enhancement" },
//           "spellwork": {
//             "type": "object",
//             "properties": {
//               "tag": {
//                 "oneOf": [
//                   { "const": "Spell" },
//                   { "const": "Ritual" }
//                 ]
//               },
//               "value": { "type": "integer", "minimum": 1 }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           "enhancement": { "type": "integer", "minimum": 1 }
//         },
//         "required": ["tag", "spellwork", "enhancement"],
//         "additionalProperties": false
//       },
//       "EnhancementInternal": {
//         "title": "Enhancement Prerequisite",
//         "description": "Requires a specific enhancement from a spellwork. This can only be used by an enhancement to require another enhancement from the same spellwork.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Enhancement" },
//           "id": { "type": "integer", "minimum": 1 }
//         },
//         "required": ["tag", "id"],
//         "additionalProperties": false
//       },
//       "CommonSuggestedByRCP": {
//         "type": "object",
//         "properties": {
//           "tag": { "const": "CommonSuggestedByRCP" }
//         },
//         "required": ["tag"],
//         "additionalProperties": false
//       },
//       "Special": {
//         "description": "Special prerequisites are prerequisites that cannot be ensured by Optolith but rely on roleplay or other background information of the character.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Special" },
//           "text": {
//             "type": "object",
//             "description": "All translations of the prerequisite text, identified by IETF language tag (BCP47).",
//             "patternProperties": {
//               "^[a-z]{2}-[A-Z]{2}$": {
//                 "description": "The prerequisite text.",
//                 "type": "string",
//                 "minLength": 1
//               }
//             },
//             "minProperties": 1,
//             "additionalProperties": false
//           }
//         },
//         "required": ["tag", "text"],
//         "additionalProperties": false
//       },
//       "Ineligible": {
//         "description": "This is a placeholder for required things that can never happen with the current set of crunch elements and rules, e. g. if a race is required that does not yet exist as a crunch element.",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Ineligible" },
//           "display_option": { "$ref": "#/definitions/Single/DisplayOption" }
//         },
//         "required": ["tag"],
//         "additionalProperties": false
//       },
//       "When": {
//         "title": "When",
//         "description": "The \"when\" property defines that the prerequisite it is defined for only takes effect if the prerequisites in this list are matched.",
//         "items": {
//           "oneOf": [
//             { "$ref": "#/definitions/Single/Publication" }
//           ]
//         },
//         "minItems": 1
//       }
}

/**
 * @title Grouped Prerequisites
 */
namespace Group {
  export type DerivedCharacteristic =
    | Single.Rule.Type

  export type Publication =
    | Single.Publication.Type

//       "General": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Sex" },
//           { "$ref": "#/definitions/Single/Race" },
//           { "$ref": "#/definitions/Single/Culture" },
//           { "$ref": "#/definitions/Single/Pact" },
//           { "$ref": "#/definitions/Single/SocialStatus" },
//           { "$ref": "#/definitions/Single/State" },
//           { "$ref": "#/definitions/Single/Rule" },
//           { "$ref": "#/definitions/Single/PrimaryAttribute" },
//           { "$ref": "#/definitions/Single/Activatable" },
//           { "$ref": "#/definitions/Single/ActivatableMultiEntry" },
//           { "$ref": "#/definitions/Single/ActivatableMultiSelect" },
//           { "$ref": "#/definitions/Single/MagicalTradition" },
//           { "$ref": "#/definitions/Single/BlessedTradition" },
//           { "$ref": "#/definitions/Single/Increasable" },
//           { "$ref": "#/definitions/Single/IncreasableMultiEntry" },
//           { "$ref": "#/definitions/Single/MinimumSkillRating" },
//           { "$ref": "#/definitions/Single/Enhancement" }
//         ]
//       },
//       "Profession": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Sex" },
//           { "$ref": "#/definitions/Single/Race" },
//           { "$ref": "#/definitions/Single/Culture" },
//           { "$ref": "#/definitions/Single/Activatable" },
//           { "$ref": "#/definitions/Single/Increasable" }
//         ]
//       },
//       "AdvantageDisadvantage": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/CommonSuggestedByRCP" },
//           { "$ref": "#/definitions/Single/Sex" },
//           { "$ref": "#/definitions/Single/Race" },
//           { "$ref": "#/definitions/Single/Culture" },
//           { "$ref": "#/definitions/Single/Pact" },
//           { "$ref": "#/definitions/Single/SocialStatus" },
//           { "$ref": "#/definitions/Single/State" },
//           { "$ref": "#/definitions/Single/Rule" },
//           { "$ref": "#/definitions/Single/PrimaryAttribute" },
//           { "$ref": "#/definitions/Single/Activatable" },
//           { "$ref": "#/definitions/Single/ActivatableMultiEntry" },
//           { "$ref": "#/definitions/Single/ActivatableMultiSelect" },
//           { "$ref": "#/definitions/Single/MagicalTradition" },
//           { "$ref": "#/definitions/Single/BlessedTradition" },
//           { "$ref": "#/definitions/Single/Increasable" },
//           { "$ref": "#/definitions/Single/IncreasableMultiEntry" },
//           { "$ref": "#/definitions/Single/MinimumSkillRating" }
//         ]
//       },
//       "ArcaneTradition": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Sex" },
//           { "$ref": "#/definitions/Single/Culture" }
//         ]
//       },
//       "PersonalityTrait": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Culture" },
//           { "$ref": "#/definitions/Single/Special" }
//         ]
//       },
//       "Spellwork": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Rule" },
//           { "$ref": "#/definitions/Single/Increasable" }
//         ]
//       },
//       "LiturgicalChant": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Rule" }
//         ]
//       },
//       "Influence": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Influence" },
//           { "$ref": "#/definitions/Single/Special" }
//         ]
//       },
//       "Language": {
//         "title": "Language Prerequisite",
//         "oneOf": [
//           { "$ref": "#/definitions/Single/Race" },
//           { "$ref": "#/definitions/Single/Activatable" }
//         ]
//       },
//       "AnimistPower": {
//         "oneOf": [
//           { "$ref": "#/definitions/Single/AnimistPower" }
//         ]
//       }
}

/**
 * @title Prerequisite Collection Types
 */
namespace Collection {
  export type Plain<T> = T[]

  export type ByLevel<T> =
    | {
      tag: "Plain"
      value: T[]
    }
    | {
      tag: "ByLevel"
      value: {
        /**
         * @integer
         * @minimum 1
         */
        level: number
        prerequisites: T[]
      }[]
    }
}

/**
 * @title Grouped Prerequisite Collections
 */
export namespace GroupCollection {
  export type DerivedCharacteristic = Collection.Plain<Group.DerivedCharacteristic>
  export type Publication = Collection.Plain<Group.Publication>

//       "General": {
//         "title": "General Prerequisites",
//         "oneOf": [
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "Plain" },
//               "value": {
//                 "type": "array",
//                 "minItems": 1,
//                 "items": { "$ref": "#/definitions/Group/General" }
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "ByLevel" },
//               "value": {
//                 "type": "array",
//                 "minItems": 1,
//                 "items": {
//                   "type": "object",
//                   "properties": {
//                     "level": {
//                       "type": "number",
//                       "minimum": 1
//                     },
//                     "prerequisites": {
//                       "type": "array",
//                       "minItems": 1,
//                       "items": { "$ref": "#/definitions/Group/General" }
//                     }
//                   },
//                   "required": ["level", "prerequisites"],
//                   "additionalProperties": false
//                 }
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           }
//         ]
//       },
//       "Profession": {
//         "title": "Profession Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/Profession" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "AdvantageDisadvantage": {
//         "title": "Advantage Disadvantage Prerequisites",
//         "oneOf": [
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "Plain" },
//               "value": {
//                 "type": "array",
//                 "minItems": 1,
//                 "items": { "$ref": "#/definitions/Group/AdvantageDisadvantage" }
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "ByLevel" },
//               "value": {
//                 "type": "array",
//                 "minItems": 1,
//                 "items": {
//                   "type": "object",
//                   "properties": {
//                     "level": {
//                       "type": "number",
//                       "minimum": 1
//                     },
//                     "prerequisites": {
//                       "type": "array",
//                       "minItems": 1,
//                       "items": { "$ref": "#/definitions/Group/AdvantageDisadvantage" }
//                     }
//                   },
//                   "required": ["level", "prerequisites"],
//                   "additionalProperties": false
//                 }
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           }
//         ]
//       },
//       "ArcaneTradition": {
//         "title": "Arcane Tradition Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/ArcaneTradition" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "PersonalityTrait": {
//         "title": "Personality Trait Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/PersonalityTrait" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "Spellwork": {
//         "title": "Spellwork Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/Spellwork" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "LiturgicalChant": {
//         "title": "Liturgical Chant Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/LiturgicalChant" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "Influence": {
//         "title": "Influence Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/Influence" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
//       "Language": {
//         "title": "Language Prerequisites",
//         "oneOf": [
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "Plain" },
//               "value": {
//                 "oneOf": [
//                   {
//                     "type": "array",
//                     "minItems": 1,
//                     "items": { "$ref": "#/definitions/Group/Language" }
//                   },
//                   { "$ref": "#/definitions/Single/Ineligible" }
//                 ]
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           },
//           {
//             "type": "object",
//             "properties": {
//               "tag": { "const": "ByLevel" },
//               "value": {
//                 "type": "array",
//                 "minItems": 1,
//                 "items": {
//                   "type": "object",
//                   "properties": {
//                     "level": {
//                       "type": "number",
//                       "minimum": 1,
//                       "maximum": 3
//                     },
//                     "prerequisites": {
//                       "oneOf": [
//                         {
//                           "type": "array",
//                           "minItems": 1,
//                           "items": { "$ref": "#/definitions/Group/Language" }
//                         },
//                         { "$ref": "#/definitions/Single/Ineligible" }
//                       ]
//                     }
//                   },
//                   "required": ["level", "prerequisites"],
//                   "additionalProperties": false
//                 }
//               }
//             },
//             "required": ["tag", "value"],
//             "additionalProperties": false
//           }
//         ]
//       },
//       "AnimistPower": {
//         "title": "Animist Power Prerequisites",
//         "type": "object",
//         "properties": {
//           "tag": { "const": "Plain" },
//           "value": {
//             "type": "array",
//             "minItems": 1,
//             "items": { "$ref": "#/definitions/Group/AnimistPower" }
//           }
//         },
//         "required": ["tag", "value"],
//         "additionalProperties": false
//       },
}
