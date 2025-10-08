import { Entity, Object, Required } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { cause, DiseaseTranslation, level, resistance } from "./_DiseasePoison.js"
import { src } from "./source/_PublicationRef.js"

export const Disease = Entity(import.meta.url, {
  name: "Disease",
  namePlural: "Diseases",
  type: () =>
    Object({
      level,
      resistance,
      cause,
      src,
      translations: NestedTranslationMap(Required, "Disease", DiseaseTranslation),
    }),
  displayName: {},
})
