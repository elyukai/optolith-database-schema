import FileDB

export const CommonnessRatedAdvantageDisadvantage = GenTypeAlias(import.meta.url, {
  name: "CommonnessRatedAdvantageDisadvantage",
  comment:
    "Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({

  /// The advantage's or disadvantage's identifier.
  let id: TypeArgument(Identifier)
  }
