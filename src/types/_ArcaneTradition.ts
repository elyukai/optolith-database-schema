import { IncludeIdentifier, Object, Required, String } from "tsondb/schema/def"
import { NestedLocaleMap } from "./Locale.js"
import { ArcaneTraditionPrerequisites } from "./_Prerequisite.js"

export const ArcaneTraditionType =
  <TN extends string>(translationName: TN) =>
  () =>
    Object({
      prerequisites: Required({
        type: IncludeIdentifier(ArcaneTraditionPrerequisites),
      }),
      translations: NestedLocaleMap(
        Required,
        translationName,
        Object({
          name: Required({
            comment: "The arcane tradition’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
    })
