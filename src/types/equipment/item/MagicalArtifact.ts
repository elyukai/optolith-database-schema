import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { CombatUse, Complexity, Cost, DefaultItemTranslations, Weight } from "./_Item.js"

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
      combat_use: Optional({
        comment:
          "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
        type: IncludeIdentifier(CombatUse),
      }),
      src,
      translations: DefaultItemTranslations("MagicalArtifact"),
    }),
  displayName: {},
})
