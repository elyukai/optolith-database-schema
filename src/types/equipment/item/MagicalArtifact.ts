import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations, Weight } from "./_Item.js"

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
      src,
      translations: DefaultItemTranslations("MagicalArtifact"),
    }),
  displayName: {},
})
