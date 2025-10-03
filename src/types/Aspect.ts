import { Entity, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const Aspect = Entity(import.meta.url, {
  name: "Aspect",
  namePlural: "Aspects",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "AspectTranslation",
        Object({
          name: Required({
            comment: "The aspect’s name.",
            type: String({ minLength: 1 }),
          }),
          master_of_aspect_suffix: Optional({
            comment:
              "The aspect’s name appended to the simple name (not `name_in_library`) of the special ability *Master of (Aspect)*.",
            type: String({
              minLength: 1,
            }),
          }),
        })
      ),
    }),
  displayName: {},
})
