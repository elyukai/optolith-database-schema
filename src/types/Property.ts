import * as DB from "tsondb/schema/dsl"
import { SkillCheck } from "./_SkillCheck.js"
import { NestedTranslationMap } from "./Locale.js"

export const Property = DB.Entity(import.meta.url, {
  name: "Property",
  namePlural: "Properties",
  type: () =>
    DB.Object({
      check: DB.Optional({
        comment:
          "The property check’s attributes. Only the properties from the Core Rules have defined property checks.",
        type: DB.IncludeIdentifier(SkillCheck),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "Property",
        DB.Object({
          name: DB.Required({
            comment: "The property’s name.",
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
