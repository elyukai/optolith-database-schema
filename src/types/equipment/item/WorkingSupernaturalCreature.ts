import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "../../Locale.ts"
import { Errata } from "../../source/_Erratum.ts"
import { src } from "../../source/_PublicationRef.ts"
import { Cost } from "./_Item.ts"

export const WorkingSupernaturalCreature = DB.Entity(import.meta.url, {
  name: "WorkingSupernaturalCreature",
  namePlural: "WorkingSupernaturalCreatures",
  type: () =>
    DB.Object({
      cost: DB.Required({
        comment: "The cost in silverthalers.",
        type: DB.IncludeIdentifier(Cost),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "WorkingSupernaturalCreature",
        DB.Object({
          name: DB.Required({
            comment: "The working creature’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          appearance: DB.Required({
            comment: "The working creature’s appearance.",
            type: DB.String({ minLength: 1 }),
          }),
          components: DB.Required({
            comment: "The working creature’s components.",
            type: DB.String({ minLength: 1 }),
          }),
          use: DB.Required({
            comment: "The working creature’s use.",
            type: DB.String({ minLength: 1 }),
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
