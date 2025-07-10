import { GenTypeAlias, Object, Param, Required, TypeArgument } from "tsondb/schema/def"

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
    }),
})
