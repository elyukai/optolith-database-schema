/**
 * @title Enhancements
 */

import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { EnhancementIdentifier } from "./_Identifier.js"
import { EnhancementPrerequisites } from "./_Prerequisite.js"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { PublicationRefs } from "./source/_PublicationRef.js"

export const Enhancements = TypeAlias(import.meta.url, {
  name: "Enhancements",
  comment: "A list of enhancements.",
  type: () =>
    Array(EnhancementIdentifier, {
      minItems: 3,
      maxItems: 5,
    }),
})

export const Enhancement = Entity(import.meta.url, {
  name: "Enhancement",
  namePlural: "Enhancements",
  type: () =>
    Object({
      skill_rating: Required({
        comment: "The skill rating required to learn this enhancement.",
        type: Integer({
          minimum: 8,
          maximum: 16,
          multipleOf: 2,
        }),
      }),
      adventure_points_modifier: Required({
        comment:
          "The value to multiply with the numeric representation of the associated skill's improvement cost to form the final AP cost of this enhancement.",
        type: Integer({
          minimum: 1,
        }),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(EnhancementPrerequisites),
      }),
      src: Optional({
        comment: "Only defined if different than the associated skill.",
        type: IncludeIdentifier(PublicationRefs),
      }),
      translations: NestedLocaleMap(
        Required,
        "EnhancementTranslation",
        Object({
          name: Required({
            comment: "The name of the enhancement.",
            type: String({
              minLength: 1,
            }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({
              minLength: 1,
              isMarkdown: true,
            }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
