import * as DB from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations } from "./_Item.js"

export const Animal = DB.Entity(import.meta.url, {
  name: "Animal",
  namePlural: "Animals",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      src,
      translations: DefaultItemTranslations("Animal"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
