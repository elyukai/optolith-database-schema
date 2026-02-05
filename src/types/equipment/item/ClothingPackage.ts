import * as DB from "tsondb/schema/dsl"
import { SocialStatusIdentifier } from "../../_Identifier.js"
import { src } from "../../source/_PublicationRef.js"
import { Cost } from "./_Item.js"

export const ClothingPackage = DB.Entity(import.meta.url, {
  name: "ClothingPackage",
  namePlural: "ClothingPackages",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      socialStatus: DB.Required({
        comment: "The social status this clothing represents.",
        type: SocialStatusIdentifier(),
      }),
      src,
    }),
  instanceDisplayName: null,
  instanceDisplayNameCustomizer: ({ instance, instanceId, getDisplayNameForInstanceId }) =>
    getDisplayNameForInstanceId("SocialStatus", instance.socialStatus) ?? { name: instanceId },
})
