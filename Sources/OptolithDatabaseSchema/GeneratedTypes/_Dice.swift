//
//  _Dice.swift
//  OptolithDatabaseSchema
//

public struct Dice: EntitySubtype {
    /// Number of dice of the same type. Example: 2 in 2D6.
    public let number: Int

    /// Number of sides on every die. Example: 6 in 2D6.
    public let sides: DieType

    public init(number: Int, sides: DieType) {
        self.number = number
        self.sides = sides
    }
}

/// Number of sides on every dice. Example: 6 in 2D6.
public enum DieType: Int, EntitySubtype {
    case _3 = 3
    case _6 = 6
    case _20 = 20
}
