import { Array, Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { BlessedTraditionIdentifier } from "../../_Identifier.js"
import { src } from "../../source/_PublicationRef.js"
import { CombatUse, Cost, DefaultItemTranslations, StructurePoints } from "./_Item.js"

export const EquipmentOfBlessedOnes = Entity(import.meta.url, {
  name: "EquipmentOfBlessedOnes",
  namePlural: "EquipmentOfBlessedOnes",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      structure_points: Required({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      associated_tradition: Required({
        comment: "The deity/deities associated with the equipment item.",
        type: Array(BlessedTraditionIdentifier, { minItems: 1, uniqueItems: true }),
      }),
      combat_use: Optional({
        comment:
          "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
        type: IncludeIdentifier(CombatUse),
      }),
      src,
      translations: DefaultItemTranslations("EquipmentOfBlessedOnes"),
    }),
  displayName: {},
})
