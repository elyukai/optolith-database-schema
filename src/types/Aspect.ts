import { Entity, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const Aspect = Entity(import.meta.url, {
  name: "Aspect",
  namePlural: "Aspects",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Aspect",
        Object({
          name: Required({
            comment: "The aspect’s name.",
            type: String({ minLength: 1 }),
          }),
          master_of_aspect_suffix: Optional({
            comment:
              "In some languages, the aspect’s grammatical gender influences the full name of a *Master of (Aspect)* instance. To make this possible, the *name* (**not** the *name in library*) is joined with what is contained in this field.",
            type: String({
              minLength: 1,
            }),
          }),
        })
      ),
    }),
  displayName: {},
})
