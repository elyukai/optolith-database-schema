import FileDB

@Model
public struct Talisman {

  /// The tradition(s) the talisman belongs to.
  let tradition: Array(BlessedTraditionIdentifier(), { minItems: 1 })
  /// The talisman type, if any.
  @Relationship(TalismanType)
  let type: TalismanType.ID?
  /// The AP value for the required trade secret, if possible.
  let ap_value: Integer({ minimum: 5, multipleOf: 5 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // TalismanTranslation

        /// The talisman’s name.
        let name: String({ minLength: 1 })

        /// The effect description.
        let rules: String({ minLength: 1, isMarkdown: true })

        /// The activation parameters.
        let activation: IncludeIdentifier(TalismanActivationTranslation)?

        let errata: Errata?
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
  let cost: Integer({ minimum: 0 })

  /// The duration.
  let duration: String({ minLength: 1 })
  }
