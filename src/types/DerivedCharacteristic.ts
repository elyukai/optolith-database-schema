import {
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { DerivedCharacteristicPrerequisites } from "./_Prerequisite.js"
import { src } from "./source/_PublicationRef.js"

export const DerivedCharacteristic = Entity(import.meta.url, {
  name: "DerivedCharacteristic",
  namePlural: "DerivedCharacteristics",
  type: () =>
    Object({
      prerequisites: Optional({
        type: IncludeIdentifier(DerivedCharacteristicPrerequisites),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "DerivedCharacteristicTranslation",
        Object({
          name: Required({
            comment: "The derived characteristic’s name.",
            type: String({ minLength: 1 }),
          }),
          abbreviation: Required({
            comment: "The derived characteristic’s abbreviation.",
            type: String({ minLength: 1 }),
          }),
          calculation: Optional({
            comment: "Possible calculation strings for the final value.",
            type: IncludeIdentifier(CalculationTranslation),
          }),
        })
      ),
    }),
  displayName: {},
})

const CalculationTranslation = TypeAlias(import.meta.url, {
  name: "CalculationTranslation",
  type: () =>
    Object({
      default: Required({
        comment: "The default calculation string.",
        type: String({ minLength: 1 }),
      }),
      half_primary: Optional({
        comment: "The calculation string if only half of the primary attribute is used.",
        type: String({ minLength: 1 }),
      }),
      no_primary: Optional({
        comment: "The calculation string if no primary attribute is used.",
        type: String({ minLength: 1 }),
      }),
    }),
})
