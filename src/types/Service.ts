import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Service = DB.Entity(import.meta.url, {
  name: "Service",
  namePlural: "Services",
  type: () =>
    DB.Object({
      availability: DB.Required({
        comment: "Defines for which creature type(s) the service is available.",
        type: DB.Array(DB.IncludeIdentifier(ServiceAvailability), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Service",
        DB.Object({
          name: DB.Required({
            comment: "The service’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          description: DB.Required({
            comment: "The service’s description.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
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
})

const ServiceAvailability = DB.Enum(import.meta.url, {
  name: "ServiceAvailability",
  values: () => ({
    SummonedCreatures: DB.EnumCase({ type: null }),
    Monstrosities: DB.EnumCase({ type: null }),
  }),
})
