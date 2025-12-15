import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import {
  CombatUse,
  Complexity,
  Cost,
  DefaultItemTranslations,
  StructurePoints,
  Weight,
} from "./_Item.js"
import { checkWeaponCombatTechniqueIntegrity } from "./_Weapon.js"

export const Clothes = Entity(import.meta.url, {
  name: "Clothes",
  namePlural: "Clothes",
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
      structure_points: Optional({
        comment:
          "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
        type: IncludeIdentifier(StructurePoints),
      }),
      combat_use: Optional({
        comment:
          "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
        type: IncludeIdentifier(CombatUse),
      }),
      src,
      translations: DefaultItemTranslations("Clothes"),
    }),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
  customConstraints: ({ instanceContent, ...rest }) => {
    if (instanceContent.combat_use && instanceContent.combat_use.kind === "Weapon") {
      return checkWeaponCombatTechniqueIntegrity(
        {
          ...rest,
          instanceContent: instanceContent.combat_use.Weapon,
        },
        true,
      )
    }

    return []
  },
})
