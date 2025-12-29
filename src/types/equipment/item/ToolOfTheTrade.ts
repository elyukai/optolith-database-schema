import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, DefaultItemTranslations, StructurePoints, Weight } from "./_Item.js"

export const ToolOfTheTrade = Entity(import.meta.url, {
  name: "ToolOfTheTrade",
  namePlural: "ToolsOfTheTrade",
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
      structure_points: Required({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      src,
      translations: DefaultItemTranslations("ToolOfTheTrade"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
