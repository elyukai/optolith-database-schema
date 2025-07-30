import FileDB

/// The primary attribute damage and threshold value. You can either use an integer, an object or a pair. Use an integer if you just have to define a single threshold value for the default primary attribute of the combat technique. Use an object if you need to define the value only or if you need to define the value as well as a single different primary attribute than which the combat technique uses. Use the pair if you need to set the primary attributes to AGI and STR (the combat technique has AGI but this item has AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g. AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI 14/STR 14 will be AGI/STR 14).
@ModelEnum
public enum PrimaryAttributeDamageThreshold {
    case Default(DefaultPrimaryAttributeDamageThreshold)
    case List(PrimaryAttributeDamageThresholdList)
}

@Embedded
public struct DefaultPrimaryAttributeDamageThreshold {
    /// The attribute value representing the damage threshold for the primary attribute of the item's combat technique.
    @Minimum(1)
    let threshold: Int
}

@Embedded
public struct PrimaryAttributeDamageThresholdList {
    /// A list of primary attributes with their associated threshold.
    @MinItems(1)
    @UniqueItems
    let list: [SinglePrimaryAttributeDamageThreshold]
}

@Embedded
public struct SinglePrimaryAttributeDamageThreshold {
    /// The primary attribute.
    @Relationship(Attribute.self)
    let attribute: Attribute.ID

    /// The attribute value representing the damage threshold.
    @Minimum(1)
    let threshold: Int
}

/// The length of the weapon in cm/halffingers.
@TypeAlias
public struct Length {
    @Minimum(1)
    let value: Int
}
