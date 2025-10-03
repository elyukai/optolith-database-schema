import { Entity, IncludeIdentifier, Object, Required } from "tsondb/schema/def"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations } from "./_Item.js"

export const Vehicle = Entity(import.meta.url, {
  name: "Vehicle",
  namePlural: "Vehicles",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      src,
      translations: DefaultItemTranslations("Vehicle"),
    }),
  displayName: {},
})
