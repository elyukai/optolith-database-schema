import * as DB from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, DefaultItemTranslations, Weight } from "./_Item.js"

export const Laboratory = DB.Entity(import.meta.url, {
  name: "Laboratory",
  namePlural: "Laboratories",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      weight: DB.Required({
        comment: "The weight in kg.",
        type: DB.IncludeIdentifier(Weight),
      }),
      complexity: DB.Optional({
        comment: "The complexity of crafting the item.",
        type: DB.IncludeIdentifier(Complexity),
      }),
      level: DB.Required({
        comment: "The level of the laboratory.",
        type: DB.Integer({ minimum: 1 }),
      }),
      src,
      translations: DefaultItemTranslations("Laboratory"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
