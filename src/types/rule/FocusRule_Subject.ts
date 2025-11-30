import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"

export const Subject = Entity(import.meta.url, {
  name: "Subject",
  namePlural: "Subjects",
  comment: "Subjects or Subject Areas are the categories of Focus Rules.",
  type: () =>
    Object({
      translations: NestedTranslationMap(
        Required,
        "Subject",
        Object({
          name: Required({
            comment: "The subject.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
})
