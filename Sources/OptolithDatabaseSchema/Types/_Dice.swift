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
    case d3 = 3
    case d6 = 6
    case d8 = 8
    case d10 = 10
    case d12 = 12
    case d20 = 20
    case d100 = 100
}
