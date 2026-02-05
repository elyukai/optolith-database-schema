import * as DB from "tsondb/schema/dsl"
import { InfluencePrerequisites } from "./_Prerequisite.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Influence = DB.Entity(import.meta.url, {
  name: "Influence",
  namePlural: "Influences",
  type: () =>
    DB.Object({
      prerequisites: DB.Optional({
        type: DB.IncludeIdentifier(InfluencePrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "Influence",
        DB.Object({
          name: DB.Required({
            comment: "The influence’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          effects: DB.Optional({
            comment:
              "The effects of the influence. They should be sorted like they are in the book.",
            type: DB.Array(DB.IncludeIdentifier(InfluenceEffect), { minItems: 1 }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
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

const InfluenceEffect = DB.TypeAlias(import.meta.url, {
  name: "InfluenceEffect",
  type: () =>
    DB.Object({
      label: DB.Optional({
        comment: "An optional label that is displayed and placed before the actual text.",
        type: DB.String({ minLength: 1 }),
      }),
      text: DB.Required({
        comment: "The effect text.",
        type: DB.String({ minLength: 1 }),
      }),
    }),
})
