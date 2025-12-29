import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { CombatUse, Cost, DefaultItemTranslations, RestrictedTo, StructurePoints } from "./_Item.js"
import { checkWeaponCombatTechniqueIntegrity } from "./_Weapon.js"

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
      restrictedTo: Optional({
        comment:
          "Define if during character creation this item can only be bought by a specific subset of characters.",
        type: IncludeIdentifier(RestrictedTo),
      }),
      combat_use: Optional({
        comment:
          "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
        type: IncludeIdentifier(CombatUse),
      }),
      src,
      translations: DefaultItemTranslations("EquipmentOfBlessedOnes"),
    }),
  instanceDisplayName: {},
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
