import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const Aspect = DB.Entity(import.meta.url, {
  name: "Aspect",
  namePlural: "Aspects",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "Aspect",
        DB.Object({
          name: DB.Required({
            comment: "The aspect’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          master_of_aspect_suffix: DB.Optional({
            comment:
              "In some languages, the aspect’s grammatical gender influences the full name of a *Master of (Aspect)* instance. To make this possible, the *name* (**not** the *name in library*) is joined with what is contained in this field.",
            type: DB.String({
              minLength: 1,
            }),
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
