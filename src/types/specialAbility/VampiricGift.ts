import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const VampiricGift = Entity(import.meta.url, {
  name: "VampiricGift",
  namePlural: "VampiricGifts",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translation: NestedLocaleMap(
        Required,
        "VampiricGiftTranslation",
        Object({
          name,
          name_in_library,
          rules,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
})
