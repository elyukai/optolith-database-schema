import FileDB

@Embedded
public struct Dice {
      number: Required({
        comment: "Number of dice of the same type. Example: 2 in 2D6.",
        type: Integer({
          minimum: 1,
        }),
      }),

  /// Number of sides on every die. Example: 6 in 2D6.
  @Relationship(DieType)
  let sides: DieType.ID
  }

export const DieType = TypeAlias(import.meta.url, {
  name: "DieType",
  comment: "Number of sides on every die. Example: 6 in 2D6.",
  type: () =>
    Integer({
      minimum: 2,
  }
