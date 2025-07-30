import FileDB

@Model
public struct Talisman {
    /// The tradition(s) the talisman belongs to.
    @MinItems(1)
    @Relationship(BlessedTradition.self)
    let tradition: [BlessedTradition.ID]

    /// The talisman type, if any.
    let type: TalismanType?

    /// The AP value for the required trade secret, if possible.
    @Minimum(5)
    @MultipleOf(5)
    let ap_value: Int?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // TalismanTranslation
        /// The talisman’s name.
        @MinLength(1)
        let name: String

        /// The effect description.
        @MinLength(1)
        @Markdown
        let rules: String

        /// The activation parameters.
        let activation: TalismanActivationTranslation?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum TalismanType {
    case MainTalisman
    case Talisman
    case MinorTalisman
    case Regalia
    case PowerfulTalisman
}

@Embedded
public struct TalismanActivationTranslation {
    /// The KP cost.
    @Minimum(0)
    let cost: Int

    /// The duration.
    @MinLength(1)
    let duration: String
}
