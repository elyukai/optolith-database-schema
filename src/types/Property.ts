import { Entity, IncludeIdentifier, Object, Optional, Required, String } from "tsondb/schema/def"
import { SkillCheck } from "./_SkillCheck.js"
import { NestedLocaleMap } from "./Locale.js"

export const Property = Entity(import.meta.url, {
  name: "Property",
  namePlural: "Properties",
  type: () =>
    Object({
      check: Optional({
        comment:
          "The property check’s attributes. Only the properties from the Core Rules have defined property checks.",
        type: IncludeIdentifier(SkillCheck),
      }),
      translations: NestedLocaleMap(
        Required,
        "PropertyTranslation",
        Object({
          name: Required({
            comment: "The property’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
