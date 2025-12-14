import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"

export const Attribute = Entity(import.meta.url, {
  name: "Attribute",
  namePlural: "Attributes",
  comment: "A base attribute of a character.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Attribute",
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
        }),
      ),
    }),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "abbreviation",
    },
  ],
})
