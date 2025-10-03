import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"

export const Attribute = Entity(import.meta.url, {
  name: "Attribute",
  namePlural: "Attributes",
  comment: "A base attribute of a character.",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "AttributeTranslation",
        Object({
          name: Required({
            comment: "The attribute’s name.",
            type: String({ minLength: 1 }),
          }),
          abbreviation: Required({
            comment: "The abbreviation of the attribute’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The description of the attribute.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
