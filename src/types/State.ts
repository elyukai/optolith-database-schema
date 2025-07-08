import { Entity, IncludeIdentifier, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const State = Entity(import.meta.url, {
  name: "State",
  namePlural: "States",
  type: () =>
    Object({
      src,
      translations: NestedLocaleMap(
        Required,
        "StateTranslation",
        Object({
          name: Required({
            comment: "The state’s name.",
            type: String({ minLength: 1 }),
          }),
          rules: Required({
            comment: "The description of the state.",
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
