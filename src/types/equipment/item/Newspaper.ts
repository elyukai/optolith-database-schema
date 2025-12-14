import { Array, Entity, IncludeIdentifier, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../../Locale.js"
import { src } from "../../source/_PublicationRef.js"
import { Cost } from "./_Item.js"

export const Newspaper = Entity(import.meta.url, {
  name: "Newspaper",
  namePlural: "Newspapers",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Newspaper",
        Object({
          name: Required({
            comment: "The newspaper’s name.",
            type: String({ minLength: 1 }),
          }),
          topics: Required({
            comment: "The topics covered by the newspaper.",
            type: Array(String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
          }),
          placeOfPublication: Required({
            comment: "The place the newspaper is published.",
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
  ],
})
