import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../Locale.js"
import { TribePrerequisites } from "../_Prerequisite.js"

export const Tribe = DB.Entity(import.meta.url, {
  name: "Tribe",
  namePlural: "Tribes",
  type: () =>
    DB.Object({
      prerequisites: DB.Required({
        comment: "The prerequisite(s) to be of this tribe.",
        type: DB.IncludeIdentifier(TribePrerequisites),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "Tribe",
        DB.Object({
          name: DB.Required({
            comment: "The tribe’s name.",
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
