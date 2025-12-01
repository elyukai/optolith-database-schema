import { Entity, IncludeIdentifier, Integer, Object, Optional, Required } from "tsondb/schema/def"
import { effect, name, name_in_library } from "../_Activatable.js"
import { ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { propertyOptional } from "../_ActivatableNonMundane.js"
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
        type: Integer({ minimum: 0 }),
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
