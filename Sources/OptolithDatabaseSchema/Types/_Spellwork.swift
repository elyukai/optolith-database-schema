import FileDB

/// The tradition(s) the spell or ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
@ModelEnum
public enum SpellworkTraditions {
    case general
    /// A list of specific traditions.
    case specific(SpecificSpellworkTraditions)
}

@TypeAlias
public struct SpecificSpellworkTraditions {
    @Relationship(MagicalTradition.self)
    @MinItems(1)
    let list: [MagicalTradition.ID]
}
