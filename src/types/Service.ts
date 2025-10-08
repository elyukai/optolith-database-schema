import {
  Array,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Service = Entity(import.meta.url, {
  name: "Service",
  namePlural: "Services",
  type: () =>
    Object({
      availability: Required({
        comment: "Defines for which creature type(s) the service is available.",
        type: Array(IncludeIdentifier(ServiceAvailability), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Service",
        Object({
          name: Required({
            comment: "The service’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The service’s description.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const ServiceAvailability = Enum(import.meta.url, {
  name: "ServiceAvailability",
  values: () => ({
    SummonedCreatures: EnumCase({ type: null }),
    Monstrosities: EnumCase({ type: null }),
  }),
})
