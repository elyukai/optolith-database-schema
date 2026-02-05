import {
  GenTypeAlias,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeArgument,
} from "tsondb/schema/dsl"
import { NestedTranslationMap } from "./Locale.js"

export const CommonnessRatedAdvantageDisadvantage = GenTypeAlias(import.meta.url, {
  name: "CommonnessRatedAdvantageDisadvantage",
  comment:
    "Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      id: Required({
        comment: "The advantage's or disadvantage's identifier.",
        type: TypeArgument(Identifier),
      }),
      translations: NestedTranslationMap(
        Optional,
        "CommonnessRatedAdvantageDisadvantage",
        Object({
          options: Required({
            comment: "The options the commonness rating applies to.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})
