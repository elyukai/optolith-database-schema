import FileDB

/// Reference to a commonness-rated advantage or disadvantage. Commonness-rating terms used in the source books are strongly recommended, common, uncommon, suggested and unsuitable.
@Embedded
public struct CommonnessRatedAdvantageDisadvantage<Identifier> {
  /// The advantage's or disadvantage's identifier.
  let id: Identifier
}
