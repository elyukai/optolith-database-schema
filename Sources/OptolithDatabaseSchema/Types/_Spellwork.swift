import FileDB

/// The tradition(s) the spell or ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
@ModelEnum
public enum SpellworkTraditions {
    case General
    /// A list of specific traditions.
    case Specific(Array(MagicalTraditionIdentifier(), { minItems: 1 }))
}
