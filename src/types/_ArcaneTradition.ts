import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"
import { ArcaneTraditionPrerequisites } from "./_Prerequisite.js"

export const ArcaneTraditionType =
  <TN extends string>(translationName: TN) =>
  () =>
    DB.Object({
      prerequisites: DB.Required({
        type: DB.IncludeIdentifier(ArcaneTraditionPrerequisites),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        translationName,
        DB.Object({
          name: DB.Required({
            comment: "The arcane tradition’s name.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    })
