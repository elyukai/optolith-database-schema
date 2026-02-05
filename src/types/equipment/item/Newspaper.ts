import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"
import { src } from "../../source/_PublicationRef.js"
import { Cost } from "./_Item.js"

export const Newspaper = DB.Entity(import.meta.url, {
  name: "Newspaper",
  namePlural: "Newspapers",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Newspaper",
        DB.Object({
          name: DB.Required({
            comment: "The newspaper’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          topics: DB.Required({
            comment: "The topics covered by the newspaper.",
            type: DB.Array(DB.String({ minLength: 1 }), { minItems: 1, uniqueItems: true }),
          }),
          placeOfPublication: DB.Required({
            comment: "The place the newspaper is published.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
