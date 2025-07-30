import FileDB

@Embedded
public struct Dice {
      /// Number of dice of the same type. Example: 2 in 2D6.
      @Minimum(1)
      let number: Int

  /// Number of sides on every die. Example: 6 in 2D6.
  let sides: DieType
  }

@ModelEnum
public enum DieType: Int {
  case d3 = 3, d6 = 6, d8 = 8, d10 = 10, d12 = 12, d20 = 20, d100 = 100
}
