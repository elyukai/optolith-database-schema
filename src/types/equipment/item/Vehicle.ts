import * as DB from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, DefaultItemTranslations, Weight } from "./_Item.js"

export const Vehicle = DB.Entity(import.meta.url, {
  name: "Vehicle",
  namePlural: "Vehicles",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      weight: DB.Optional({
        comment: "The weight in kg.",
        type: DB.IncludeIdentifier(Weight),
      }),
      complexity: DB.Optional({
        comment: "The complexity of crafting the item.",
        type: DB.IncludeIdentifier(Complexity),
      }),
      src,
      translations: DefaultItemTranslations("Vehicle"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
