import {
  Array,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { EquipmentIdentifier } from "../_IdentifierGroup.js"
import { NestedTranslationMap } from "../Locale.js"
import { src } from "../source/_PublicationRef.js"

export const EquipmentPackage = Entity(import.meta.url, {
  name: "EquipmentPackage",
  namePlural: "EquipmentPackages",
  type: () =>
    Object({
      items: Optional({
        comment:
          "All items in the package. You have to provide the item (template) identifier and you can optionally provide the number of how often an item is included in the package.",
        type: Array(IncludeIdentifier(EquipmentPackageItem), { minItems: 2 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "EquipmentPackage",
        Object({
          name: Required({
            comment: "The equipment package’s name.",
            type: String({ minLength: 1 }),
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

const EquipmentPackageItem = TypeAlias(import.meta.url, {
  name: "EquipmentPackageItem",
  type: () =>
    Object({
      id: Required({
        comment: "The item’s identifier.",
        type: IncludeIdentifier(EquipmentIdentifier),
      }),
      number: Optional({
        comment: "The number of how often the item is included in the package.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})
