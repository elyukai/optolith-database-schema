import * as DB from "tsondb/schema/dsl"
import { EquipmentIdentifier } from "../_IdentifierGroup.js"
import { NestedTranslationMap } from "../Locale.js"
import { src } from "../source/_PublicationRef.js"

export const EquipmentPackage = DB.Entity(import.meta.url, {
  name: "EquipmentPackage",
  namePlural: "EquipmentPackages",
  type: () =>
    DB.Object({
      items: DB.Optional({
        comment:
          "All items in the package. You have to provide the item (template) identifier and you can optionally provide the number of how often an item is included in the package.",
        type: DB.Array(DB.IncludeIdentifier(EquipmentPackageItem), { minItems: 2 }),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "EquipmentPackage",
        DB.Object({
          name: DB.Required({
            comment: "The equipment package’s name.",
            type: DB.String({ minLength: 1 }),
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

const EquipmentPackageItem = DB.TypeAlias(import.meta.url, {
  name: "EquipmentPackageItem",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The item’s identifier.",
        type: DB.IncludeIdentifier(EquipmentIdentifier),
      }),
      number: DB.Optional({
        comment: "The number of how often the item is included in the package.",
        type: DB.Integer({ minimum: 2 }),
      }),
    }),
})
