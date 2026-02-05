import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { src } from "./source/_PublicationRef.js"

export const SexPractice = DB.Entity(import.meta.url, {
  name: "SexPractice",
  namePlural: "SexPractices",
  type: () =>
    DB.Object({
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "SexPractice",
        DB.Object({
          name: DB.Required({
            comment: "The sex practice’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          rules: DB.Required({
            comment: "The rules of the sex practice.",
            type: DB.String({ minLength: 1 }),
          }),
          duration: DB.Required({
            comment: "How long a round of this sex practice takes.",
            type: DB.String({ minLength: 1 }),
          }),
          prerequisites: DB.Optional({
            comment:
              "Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.",
            type: DB.String({ minLength: 1 }),
          }),
          failed: DB.Required({
            comment: "Effects of a failed *Seduction* check.",
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
