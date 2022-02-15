/**
 * @main Publication
 */

/**
 * @title Publication
 */
type Publication = {
  /**
   * An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The publication category.
   */
  category: Category

  /**
   * The age the content is restricted to.
   */
  age_restriction: AgeRestriction

  /**
   * The publication is not (fully) implemented and thus needs to be excluded
   * from * stable releases.
   */
  is_missing_implementation?: boolean

  /**
   * The specific other publications this publication depends on data from.
   */
  prerequisites?: Prerequisite[]

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: Translation
  }
}

/**
 * The publication category.
 */
type Category =
  | { tag: "CoreRules" }
  | { tag: "ExpansionRules" }
  | { tag: "Sourcebook" }
  | { tag: "RegionalSourcebook" }

/**
 * The age the content is restricted to.
 */
type AgeRestriction =
  | { tag: "Adult" }
  | { tag: "None" }

type Prerequisite = {
  /**
   * The publication identifier.
   * @integer
   * @minimum 1
   */
  id: number
}

type Translation = {
  /**
   * The publisher's publication identifier.
   * @minLength 1
   * @example US25001
   */
  id?: string

  /**
   * The publication's name.
   * @minLength 1
   */
  name: string

  /**
   * The publication's abbreviation.
   * @minLength 1
   */
  abbreviation: string

  /**
   * The publication's release date.
   * @format date
   */
  release_date?: string

  /**
   * This publication translation is not (fully) implemented and thus needs to
   * be excluded from stable releases.
   */
  is_missing_implementation?: boolean
}


// {
//   "$schema": "http://json-schema.org/draft-07/schema",
//   "$id": "src/entity/publication/Publication.schema.json",
//   "title": "Publication",
//   "type": "object",
//   "properties": {
//     "id": {
//       "description": "An unique, increasing integer.",
//       "type": "integer",
//       "minimum": 1
//     },
//     "category": {
//       "description": "The publication category.",
//       "oneOf": [
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "CoreRules" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         },
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "ExpansionRules" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         },
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "Sourcebook" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         },
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "RegionalSourcebook" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         }
//       ]
//     },
//     "age_restriction": {
//       "description": "The age the content is restricted to.",
//       "oneOf": [
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "Adult" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         },
//         {
//           "type": "object",
//           "properties": {
//             "tag": { "const": "None" }
//           },
//           "required": ["tag"],
//           "additionalProperties": false
//         }
//       ]
//     },
//     "is_missing_implementation": {
//       "description": "The book is not (fully) implemented and thus needs to be excluded from the stable releases.",
//       "type": "boolean"
//     },
//     "prerequisites": {
//       "description": "The specific other publications this publication depends on data from.",
//       "type": "array",
//       "items": {
//         "type": "object",
//         "properties": {
//           "id": {
//             "description": "The publication identifier.",
//             "type": "integer",
//             "minimum": 1
//           }
//         },
//         "required": ["id"],
//         "additionalProperties": false
//       },
//       "minItems": 1,
//       "uniqueItems": true
//     },
//     "translations": {
//       "type": "object",
//       "description": "All translations for the entry, identified by IETF language tag (BCP47).",
//       "patternProperties": {
//         "^[a-z]{2}-[A-Z]{2}$": {
//           "type": "object",
//           "properties": {
//             "id": {
//               "description": "The book's publisher ID.",
//               "type": "string",
//               "minLength": 1
//             },
//             "name": {
//               "description": "The name of the book.",
//               "type": "string",
//               "minLength": 1
//             },
//             "abbreviation": {
//               "description": "The abbreviation of the book's name.",
//               "type": "string",
//               "minLength": 1
//             },
//             "printings": {
//               "$comment": "Experimental API",
//               "description": "The number of printings of this publication.",
//               "type": "integer",
//               "minimum": 1,
//               "default": 1
//             },
//             "release_date": {
//               "description": "The book's release date.",
//               "type": "string",
//               "format": "date"
//             },
//             "is_missing_implementation": {
//               "description": "The book is not (fully) implemented and thus needs to be excluded from the stable releases.",
//               "type": "boolean"
//             }
//           },
//           "required": ["name", "abbreviation"],
//           "additionalProperties": false
//         }
//       },
//       "minProperties": 1,
//       "additionalProperties": false
//     }
//   },
//   "required": ["id", "category", "age_restriction", "translations"],
//   "additionalProperties": false
// }
