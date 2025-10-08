import { Entity, IncludeIdentifier, Integer, Object, Optional, Required } from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
} from "../_Activatable.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const AncestorGlyph = Entity(import.meta.url, {
  name: "AncestorGlyph",
  namePlural: "AncestorGlyphs",
  comment: "A type of magical signs, originating from Nostria.",
  type: () =>
    Object({
      levels,
      select_options,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ae_cost: Required({
        comment: "The AE cost of the ancestor glyph.",
        type: Integer({ minimum: 1 }),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "AncestorGlyph",
        Object({
          name,
          name_in_library,
          rules,
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
