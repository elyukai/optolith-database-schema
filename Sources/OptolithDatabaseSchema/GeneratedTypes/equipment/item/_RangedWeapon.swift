//
//  _RangedWeapon.swift
//  OptolithDatabaseSchema
//

/// The damage of a ranged weapon. It consists of a random part using dice and an optional flat part ny default. Some ranged weapons may work different so that damage is either not applicable at all or it is outlined as *Special* and further defined in a description.
public enum RangedDamage: EntitySubtype {
    case `default`(DefaultRangedDamage)
    case notApplicable
    case special

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case `default` = "default"
        case notApplicable = "not_applicable"
        case special = "special"
    }

    private enum Discriminator: String, Decodable {
        case `default` = "Default"
        case notApplicable = "NotApplicable"
        case special = "Special"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .`default`:
            self = .`default`(try container.decode(DefaultRangedDamage.self, forKey: .`default`))
        case .notApplicable:
            self = .notApplicable
        case .special:
            self = .special
        }
    }
}

/// The damage of a weapon consists of a random part using dice and an optional flat part.
public struct DefaultRangedDamage: EntitySubtype {
    /// How many dice of which type are rolled to get the damage.
    public let dice: Dice

    /// Flat damage, if any. It gets added to the result of the dice rolls.
    public let flat: Int?

    public init(dice: Dice, flat: Int? = nil) {
        self.dice = dice
        self.flat = flat
    }
}

public struct RangedWeapon: EntitySubtype {
    /// The combat techniques and dependent values.
    public let combatTechnique: RangedCombatTechniqueReference

    /// The damage of a weapon consists of a random part using dice and an optional flat part.
    public let damage: RangedDamage

    /// One or multiple reload times.
    public let reloadTime: [ReloadTime]

    /// The range brackets for the weapon: close, medium, far. Distances in m.
    public let range: RangeBrackets

    /// The needed ammunition.
    public let ammunition: AmmunitionReference?

    /// The length of the weapon in cm/halffingers.
    public let length: Length

    /// Is the weapon an improvised weapon?
    public let isImprovisedWeapon: Bool

    public init(combatTechnique: RangedCombatTechniqueReference, damage: RangedDamage, reloadTime: [ReloadTime], range: RangeBrackets, ammunition: AmmunitionReference? = nil, length: Length, isImprovisedWeapon: Bool) {
        self.combatTechnique = combatTechnique
        self.damage = damage
        self.reloadTime = reloadTime
        self.range = range
        self.ammunition = ammunition
        self.length = length
        self.isImprovisedWeapon = isImprovisedWeapon
    }

    private enum CodingKeys: String, CodingKey {
        case combatTechnique = "combat_technique"
        case damage = "damage"
        case reloadTime = "reload_time"
        case range = "range"
        case ammunition = "ammunition"
        case length = "length"
        case isImprovisedWeapon = "is_improvised_weapon"
    }
}

public struct AmmunitionReference: EntitySubtype {
    /// The item's identifier.
    public let id: AmmunitionIdentifier

    public init(id: AmmunitionIdentifier) {
        self.id = id
    }
}

public struct RangeBrackets: EntitySubtype {
    /// The close range bracket for the weapon. Distance in m.
    public let close: Int

    /// The medium range bracket for the weapon. Distance in m.
    public let medium: Int

    /// The far range bracket for the weapon. Distance in m.
    public let far: Int

    public init(close: Int, medium: Int, far: Int) {
        self.close = close
        self.medium = medium
        self.far = far
    }
}

public struct ReloadTime: EntitySubtype {
    /// A reload time value in actions.
    public let value: Int

    public init(value: Int) {
        self.value = value
    }
}
