import { Entity, IncludeIdentifier, Object, Optional, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"
import { CombatUse, Complexity, Cost, StructurePoints, Weight } from "./_Item.js"
import { checkWeaponCombatTechniqueIntegrity } from "./_Weapon.js"

export const MagicalArtifact = Entity(import.meta.url, {
  name: "MagicalArtifact",
  namePlural: "MagicalArtifacts",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      weight: Optional({
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
      translations: NestedTranslationMap(
        Required,
        `MagicalArtifact`,
        Object({
          name: Required({
            comment: "The item’s name.",
            type: String({ minLength: 1 }),
          }),
          secondary_name: Optional({
            comment: "An auxiliary name or label of the item, if available.",
            type: String({ minLength: 1 }),
          }),
          description: Optional({
            comment: "Description text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          note: Optional({
            comment: "A note.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          rules: Optional({
            comment: "Rules text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          effect: Optional({
            comment: "Effect text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          cost: Optional({
            comment: "Cost text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
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
  customConstraints: ({ instanceContent, ...rest }) => {
    if (instanceContent.combat_use && instanceContent.combat_use.kind === "Weapon") {
      return checkWeaponCombatTechniqueIntegrity(
        {
          ...rest,
          instanceContent: instanceContent.combat_use.Weapon,
        },
        { secondary: true },
      )
    }

    return []
  },
})
