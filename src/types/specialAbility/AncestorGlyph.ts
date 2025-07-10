import { Entity, IncludeIdentifier, Integer, Object, Optional, Required } from "tsondb/schema/def"
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

export const AncestorGlyph = Entity(import.meta.url, {
  name: "AncestorGlyph",
  namePlural: "AncestorGlyphs",
  type: () =>
    Object({
      levels,
      select_options: select_options(),
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ae_cost: Required({
        comment: "The AE cost of the ancestor glyph.",
        type: Integer({ minimum: 1 }),
      }),
      ap_value: ap_value(),
      src,
      translation: NestedLocaleMap(
        Required,
        "AncestorGlyphTranslation",
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
