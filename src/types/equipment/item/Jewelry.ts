import {
  Entity,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Object,
  Optional,
  Param,
  Required,
  TypeArgument,
} from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Complexity, Cost, DefaultItemTranslations, StructurePoints, Weight } from "./_Item.js"

export const Jewelry = Entity(import.meta.url, {
  name: "Jewelry",
  namePlural: "Jewelries",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: GenIncludeIdentifier(JewelryMaterialDifference, [IncludeIdentifier(Cost)]),
      }),
      weight: Required({
        comment: "The weight in kg.",
        type: GenIncludeIdentifier(JewelryMaterialDifference, [IncludeIdentifier(Weight)]),
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
      translations: DefaultItemTranslations("Jewelry"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const JewelryMaterialDifference = GenTypeAlias(import.meta.url, {
  name: "JewelryMaterialDifference",
  comment: "Jewelry can have different values for a property based on the material.",
  parameters: [Param("T")],
  type: T =>
    Object({
      bronze: Required({ type: TypeArgument(T) }),
      silver: Required({ type: TypeArgument(T) }),
      gold: Required({ type: TypeArgument(T) }),
    }),
})
