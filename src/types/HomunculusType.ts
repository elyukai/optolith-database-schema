import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const HomunculusType = Entity(import.meta.url, {
  name: "HomunculusType",
  namePlural: "HomunculusTypes",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "HomunculusType",
        Object({
          name: Required({
            comment: "The homunculus type’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
})
