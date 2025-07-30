import FileDB

@ModelEnum
public enum OneTimeCost {
    case Single(SingleOneTimeCost)
    case Conjunction(MultipleOneTimeCosts)
    case Disjunction(MultipleOneTimeCosts)
    case Map(CostMap)
}

@ModelEnum
public enum SingleOneTimeCost {
    case Modifiable(ModifiableOneTimeCost)
    case NonModifiable(NonModifiableOneTimeCost)
    case Indefinite(IndefiniteOneTimeCost)
}

@TypeAlias
public struct MultipleOneTimeCosts {
  @MinItems(2)
  let list: [SingleOneTimeCost]
}

@Embedded
public struct ModifiableOneTimeCost {

  /// The initial skill modification identifier/level.
  @Relationship(SkillModificationLevel.self)
  let initial_modification_level: SkillModificationLevel.ID

  /// The part of the cost value that has to be spent permanently.
  @Minimum(1)
  let permanent_value: Int?
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // ModifiableOneTimeCostTranslation

        /// A replacement string.
        let replacement: ResponsiveTextReplace
      }
  }

@Embedded
public struct NonModifiableOneTimeCost {
  /// If `true`, the non-modifiable value is a minimum value.
  let is_minimum: Bool?

  /// The AE cost value.
  @Minimum(1)
  let value: Int

  /// The part of the cost value that has to be spent permanently.
  @Minimum(1)
  let permanent_value: Int?

  /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
  let per: NonModifiableOneTimeCostPerCountable?
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // NonModifiableOneTimeCostTranslation

        /// A note, appended to the generated string in parenthesis.
        let note: ResponsiveTextOptional
      }
  }

@Embedded
public struct NonModifiableOneTimeCostPerCountable {
  /// If defined, the minimum total AE that have to be spent casting the skill.
  @Minimum(1)
  let minimum_total: Int?
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // NonModifiableOneTimeCostPerCountableTranslation

        /// The countable entity name.
        let countable: ResponsiveText
      }
  }

@Embedded
public struct IndefiniteOneTimeCost {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // IndefiniteOneTimeCostTranslation

        /// A description of where the cost come from.
        let description: ResponsiveText
      }
  }

/// A content that is `2/4/8/16 AE for an item the size of a cup/chest/door/castle gate` may be respresented as the following map:
///
/// ```yaml
/// options:
///   - value: 2
///     label: "cup"
///   - value: 4
///     label: "chest"
///   - value: 8
///     label: "door"
///   - value: 16
///     label: "castle gate"
/// for_append: "an item the size of a"
/// ```
///
/// This will generate the exact same string as seen above – given it is set for a spellwork and thus `AE` is used.
@Embedded
public struct CostMap {
      /// The possible costs and associated labels.
      @MinItems(2)
      let options: [CostMapOption]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation { // CostMapTranslation
            /// Place a string between the `for` and the grouped map option labels.
            @MinLength(1)
            let list_prepend: String

            /// Place a string after the grouped map option labels.
            @MinLength(1)
            let list_append: String

            /// If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.
            @MinLength(1)
            let replacement: String
          }
  }

@Embedded
public struct CostMapOption {

  /// The full cost value for this option.
  @Minimum(1)
  let value: Int

  /// The part of the `value` that has to be paid permanently.
  @Minimum(0)
  let permanent_value: Int?
      /// All translations for the entry, identified by IETF language tag (BCP47).
      @Relationship(Locale.self)
      let translations: [String: Translation]?

      struct Translation { // CostMapOptionTranslation

        /// The description of the option for cost string generation.
        @MinLength(1)
        let label: String
          /// The description of the option if used standalone. Only used if different from `label`.
          @MinLength(1)
          let label_standalone: String?
      }
  }

@ModelEnum
public enum SustainedCost {
    case Modifiable(ModifiableSustainedCost)
    case NonModifiable(NonModifiableSustainedCost)
}

@Embedded
public struct ModifiableSustainedCost {

  /// The initial skill modification identifier/level.
  @Relationship(SkillModificationLevel.self)
  let initial_modification_level: SkillModificationLevel.ID

  /// The sustain interval.
  let interval: DurationUnitValue
  }

@Embedded
public struct NonModifiableSustainedCost {
  /// If `true`, the non-modifiable value is a minimum value.
  let is_minimum: Bool?

  /// The AE cost value.
  @Minimum(1)
  let value: Int

  /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
  let per: NonModifiableSustainedCostPerCountable?

  /// The sustain interval.
  let interval: DurationUnitValue
  }

@Embedded
public struct NonModifiableSustainedCostPerCountable {
  /// If defined, the minimum total AE that have to be spent casting the skill.
  @Minimum(1)
  let minimum_total: Int?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // NonModifiableSustainedCostPerCountableTranslation

        /// The countable entity name.
        let countable: ResponsiveText
      }
  }
