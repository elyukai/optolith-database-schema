import { Entity, IncludeIdentifier, Object, Optional, Required, String } from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const State = Entity(import.meta.url, {
  name: "State",
  namePlural: "States",
  type: () =>
    Object({
      src,
      translations: NestedTranslationMap(
        Required,
        "State",
        Object({
          name: Required({
            comment: "The state’s name.",
            type: String({ minLength: 1 }),
          }),
          description: Required({
            comment: "The description of the state.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
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
