import { Entity, ObjectType, Optional, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { TargetCategoryIdentifier } from "./_Identifier.js"

export const TargetCategory = Entity(import.meta.url, {
  name: "TargetCategory",
  namePlural: "TargetCategories",
  type: () =>
    ObjectType({
      parent: Optional({
        comment: "A superordinate target category, if present.",
        type: TargetCategoryIdentifier(),
      }),
      translations: NestedTranslationMap(
        Required,
        "TargetCategory",
        ObjectType({
          name: Required({
            comment: "The target category’s name.",
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
