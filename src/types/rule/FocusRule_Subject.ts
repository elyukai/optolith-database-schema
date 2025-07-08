import { Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "../Locale.js"

export const Subject = Entity(import.meta.url, {
  name: "Subject",
  namePlural: "Subjects",
  comment: "Subjects or Subject Areas are the categories of Focus Rules.",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "SubjectTranslation",
        Object({
          name: Required({
            comment: "The subject.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
