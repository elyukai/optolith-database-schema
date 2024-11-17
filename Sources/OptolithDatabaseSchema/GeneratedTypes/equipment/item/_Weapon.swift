//
//  _Weapon.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// The primary attribute damage and threshold value. You can either use an integer, an object or a pair. Use an integer if you just have to define a single threshold value for the default primary attribute of the combat technique. Use an object if you need to define the value only or if you need to define the value as well as a single different primary attribute than which the combat technique uses. Use the pair if you need to set the primary attributes to AGI and STR (the combat technique has AGI but this item has AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g. AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI 14/STR 14 will be AGI/STR 14).
@DiscriminatedEnum
public enum PrimaryAttributeDamageThreshold: EntitySubtype {
    case `default`(DefaultPrimaryAttributeDamageThreshold)
    case list(PrimaryAttributeDamageThresholdList)
}

public struct DefaultPrimaryAttributeDamageThreshold: EntitySubtype {
    /// The attribute value representing the damage threshold for the primary attribute of the item's combat technique.
    public let threshold: Int

    public init(threshold: Int) {
        self.threshold = threshold
    }
}

public struct PrimaryAttributeDamageThresholdList: EntitySubtype {
    /// A list of primary attributes with their associated threshold.
    public let list: [SinglePrimaryAttributeDamageThreshold]

    public init(list: [SinglePrimaryAttributeDamageThreshold]) {
        self.list = list
    }
}

public struct SinglePrimaryAttributeDamageThreshold: EntitySubtype {
    /// The primary attribute.
    public let attribute: AttributeReference
    
    /// The attribute value representing the damage threshold.
    public let threshold: Int

    public init(attribute: AttributeReference, threshold: Int) {
        self.attribute = attribute
        self.threshold = threshold
    }
}

/// The length of the weapon in cm/halffingers.
public typealias Length = Int
