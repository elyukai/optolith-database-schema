import {
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import {
  ap_value,
  levels,
  maximum,
  name,
  name_in_library,
  select_options,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const ProtectiveWardingCircleSpecialAbility = Entity(import.meta.url, {
  name: "ProtectiveWardingCircleSpecialAbility",
  namePlural: "ProtectiveWardingCircleSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      cost: Required({
        comment: "The cost in AE.",
        type: Integer({ minimum: 0 }),
      }),
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "ProtectiveWardingCircleSpecialAbilityTranslation",
        Object({
          name,
          name_in_library,
          protective_circle: Required({
            comment: "The rules for the protective circle variant.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          warding_circle: Required({
            comment: "The rules for the warding circle variant.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
