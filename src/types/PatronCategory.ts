import { Array, Entity, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { CultureIdentifier } from "./_Identifier.js"

export const PatronCategory = Entity(import.meta.url, {
  name: "PatronCategory",
  namePlural: "PatronCategories",
  type: () =>
    Object({
      primary_patron_cultures: Required({
        comment:
          "The list of cultures where patrons from this category can be the primary patron of.",
        type: Array(CultureIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      translations: NestedLocaleMap(
        Required,
        "PatronCategoryTranslation",
        Object({
          name: Required({
            comment: "The patron category’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
