//
//  TraditionPrerequisite.swift
//  OptolithDatabaseSchema
//

public struct BlessedTraditionPrerequisite: EntitySubtype {
    /// The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.
    public let restriction: BlessedTraditionPrerequisiteRestriction?

    public let displayOption: DisplayOption?

    public init(restriction: BlessedTraditionPrerequisiteRestriction? = nil, displayOption: DisplayOption? = nil) {
        self.restriction = restriction
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case restriction = "restriction"
        case displayOption = "display_option"
    }
}

/// The blessed tradition prerequisite may only be satified if the blessed tradition is either church or shamanistic.
public enum BlessedTraditionPrerequisiteRestriction: String, EntitySubtype {
    case church = "Church"
    case shamanistic = "Shamanistic"
}

public struct MagicalTraditionPrerequisite: EntitySubtype {
    /// The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.
    public let restriction: MagicalTraditionPrerequisiteRestriction?

    public let displayOption: DisplayOption?

    public init(restriction: MagicalTraditionPrerequisiteRestriction? = nil, displayOption: DisplayOption? = nil) {
        self.restriction = restriction
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case restriction = "restriction"
        case displayOption = "display_option"
    }
}

/// The magical tradition prerequisite may only be satified if the magical tradition can learn rituals or can bind familiars.
public enum MagicalTraditionPrerequisiteRestriction: String, EntitySubtype {
    case canLearnRituals = "CanLearnRituals"
    case canBindFamiliars = "CanBindFamiliars"
}
