import { Entity, IncludeIdentifier, Object, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations } from "./_Item.js"

export const MagicalArtifact = Entity(import.meta.url, {
  name: "MagicalArtifact",
  namePlural: "MagicalArtifacts",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      src,
      translations: DefaultItemTranslations("MagicalArtifact"),
    }),
  displayName: {},
})
