import { Entity, Object, Optional, Required, String } from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { src } from "./source/_PublicationRef.js"

export const SexPractice = Entity(import.meta.url, {
  name: "SexPractice",
  namePlural: "SexPractices",
  type: () =>
    Object({
      src,
      translations: NestedTranslationMap(
        Required,
        "SexPractice",
        Object({
          name: Required({
            comment: "The sex practice’s name.",
            type: String({ minLength: 1 }),
          }),
          rules: Required({
            comment: "The rules of the sex practice.",
            type: String({ minLength: 1 }),
          }),
          duration: Required({
            comment: "How long a round of this sex practice takes.",
            type: String({ minLength: 1 }),
          }),
          prerequisites: Optional({
            comment:
              "Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.",
            type: String({ minLength: 1 }),
          }),
          failed: Required({
            comment: "Effects of a failed *Seduction* check.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    }),
  displayName: {},
})
