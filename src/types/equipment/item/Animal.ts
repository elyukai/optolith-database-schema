import { Entity, IncludeIdentifier, Object, Required } from "tsondb/schema/dsl"
import { src } from "../../source/_PublicationRef.js"
import { Cost, DefaultItemTranslations } from "./_Item.js"

export const Animal = Entity(import.meta.url, {
  name: "Animal",
  namePlural: "Animals",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      src,
      translations: DefaultItemTranslations("Animal"),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
