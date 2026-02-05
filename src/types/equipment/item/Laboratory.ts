import { Entity, IncludeIdentifier, Integer, Object, Optional, Required } from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, DefaultItemTranslations, Weight } from "./_Item.js"

export const Laboratory = Entity(import.meta.url, {
  name: "Laboratory",
  namePlural: "Laboratories",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      weight: Required({
        comment: "The weight in kg.",
        type: IncludeIdentifier(Weight),
      }),
      complexity: Optional({
        comment: "The complexity of crafting the item.",
        type: IncludeIdentifier(Complexity),
      }),
      level: Required({
        comment: "The level of the laboratory.",
        type: Integer({ minimum: 1 }),
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
