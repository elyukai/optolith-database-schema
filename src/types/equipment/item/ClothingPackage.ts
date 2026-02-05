import { Entity, IncludeIdentifier, Object, Required } from "tsondb/schema/dsl"
import { SocialStatusIdentifier } from "../../_Identifier.js"
import { src } from "../../source/_PublicationRef.js"
import { Cost } from "./_Item.js"

export const ClothingPackage = Entity(import.meta.url, {
  name: "ClothingPackage",
  namePlural: "ClothingPackages",
  type: () =>
    Object({
      cost: Required({
        comment: "The cost in silverthalers.",
        type: IncludeIdentifier(Cost),
      }),
      socialStatus: Required({
        comment: "The social status this clothing represents.",
        type: SocialStatusIdentifier(),
      }),
      src,
    }),
  instanceDisplayName: null,
  instanceDisplayNameCustomizer: ({ instance, instanceId, getDisplayNameForInstanceId }) =>
    getDisplayNameForInstanceId("SocialStatus", instance.socialStatus) ?? { name: instanceId },
})
