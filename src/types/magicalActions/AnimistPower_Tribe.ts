import { Entity, IncludeIdentifier, Object, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "../Locale.js"
import { TribePrerequisites } from "../_Prerequisite.js"

export const Tribe = Entity(import.meta.url, {
  name: "Tribe",
  namePlural: "Tribes",
  type: () =>
    Object({
      prerequisites: Required({
        comment: "The prerequisite(s) to be of this tribe.",
        type: IncludeIdentifier(TribePrerequisites),
      }),
      translations: NestedTranslationMap(
        Required,
        "Tribe",
        Object({
          name: Required({
            comment: "The tribe’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
  displayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})
