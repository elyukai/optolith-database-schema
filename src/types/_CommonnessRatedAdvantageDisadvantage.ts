import * as DB from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const CommonnessRatedAdvantageDisadvantage = DB.GenTypeAlias(import.meta.url, {
  name: "CommonnessRatedAdvantageDisadvantage",
  comment:
    "Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.",
  parameters: [DB.Param("Identifier")],
  type: Identifier =>
    DB.Object({
      id: DB.Required({
        comment: "The advantage's or disadvantage's identifier.",
        type: DB.TypeArgument(Identifier),
      }),
      translations: NestedTranslationMap(
        DB.Optional,
        "CommonnessRatedAdvantageDisadvantage",
        DB.Object({
          options: DB.Required({
            comment: "The options the commonness rating applies to.",
            type: DB.String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})
