import {
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  TypeAlias,
} from "tsondb/schema/def"
import { effect, name, name_in_library } from "../_Activatable.js"
import { ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { propertyOptional } from "../_ActivatableNonMundane.js"
import { CostMap } from "../_ActivatableSkillCost.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const MagicalSign = Entity(import.meta.url, {
  name: "MagicalSign",
  namePlural: "MagicalSigns",
  type: () =>
    Object({
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      cost: Optional({
        comment: "The cost in AE.",
        type: IncludeIdentifier(MagicalSignCost),
      }),
      property: propertyOptional(),
      ap_value: Required({
        comment: "The adventure points value.",
        type: Integer({ minimum: 0 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "MagicalSign",
        Object({
          name,
          name_in_library,
          effect,
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})

const MagicalSignCost = Enum(import.meta.url, {
  name: "MagicalSignCost",
  values: () => ({
    Constant: EnumCase({ type: IncludeIdentifier(ConstantMagicalSignCost) }),
    Map: EnumCase({ type: IncludeIdentifier(CostMap) }),
  }),
})

const ConstantMagicalSignCost = TypeAlias(import.meta.url, {
  name: "ConstantMagicalSignCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      permanent_value: Optional({
        comment: "The part of the cost value that has to be spent permanently.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})
