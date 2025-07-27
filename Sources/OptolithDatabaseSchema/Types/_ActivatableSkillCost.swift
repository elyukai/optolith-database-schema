import FileDB

@ModelEnum
public enum OneTimeCost {
    case Single(IncludeIdentifier(SingleOneTimeCost))
    case Conjunction(IncludeIdentifier(MultipleOneTimeCosts))
    case Disjunction(IncludeIdentifier(MultipleOneTimeCosts))
    case Map(IncludeIdentifier(CostMap))
}

@ModelEnum
public enum SingleOneTimeCost {
    case Modifiable(IncludeIdentifier(ModifiableOneTimeCost))
    case NonModifiable(IncludeIdentifier(NonModifiableOneTimeCost))
    case Indefinite(IncludeIdentifier(IndefiniteOneTimeCost))
}

const MultipleOneTimeCosts = TypeAlias(import.meta.url, {
  name: "MultipleOneTimeCosts",
  type: () =>
    Array(IncludeIdentifier(SingleOneTimeCost), {
      minItems: 2,
  }

@Embedded
public struct ModifiableOneTimeCost {

  /// The initial skill modification identifier/level.
  let initial_modification_level: SkillModificationLevelIdentifier()
  /// The part of the cost value that has to be spent permanently.
  let permanent_value: Integer({ minimum: 1 })?
      translations: NestedLocaleMap(
        Optional,
        "ModifiableOneTimeCostTranslation",
        Object({

        /// A replacement string.
        let replacement: IncludeIdentifier(ResponsiveTextReplace)
        })
      ),
  }

@Embedded
public struct NonModifiableOneTimeCost {
  /// If `true`, the non-modifiable value is a minimum value.
  let is_minimum: Boolean()?

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
  /// The part of the cost value that has to be spent permanently.
  let permanent_value: Integer({ minimum: 1 })?
  /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
  @Relationship(NonModifiableOneTimeCostPerCountable)
  let per: NonModifiableOneTimeCostPerCountable.ID?
      translations: NestedLocaleMap(
        Optional,
        "NonModifiableOneTimeCostTranslation",
        Object({

        /// A note, appended to the generated string in parenthesis.
        let note: IncludeIdentifier(ResponsiveTextOptional)
        })
      ),
  }

@Embedded
public struct NonModifiableOneTimeCostPerCountable {
  /// If defined, the minimum total AE that have to be spent casting the skill.
  let minimum_total: Integer({ minimum: 1 })?
      translations: NestedLocaleMap(
        Optional,
        "NonModifiableOneTimeCostPerCountableTranslation",
        Object({

        /// The countable entity name.
        let countable: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

@Embedded
public struct IndefiniteOneTimeCost {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // IndefiniteOneTimeCostTranslation

        /// A description of where the cost come from.
        let description: IncludeIdentifier(ResponsiveText)
        })
      ),
  }

export const CostMap = TypeAlias(import.meta.url, {
  name: "CostMap",
  comment: `A content that is \`2/4/8/16 AE for an item the size of a cup/chest/door/castle gate\` may be respresented as the following map:

\`\`\`yaml
options:
  - value: 2
    label: "cup"
  - value: 4
    label: "chest"
  - value: 8
    label: "door"
  - value: 16
    label: "castle gate"
for_append: "an item the size of a"
\`\`\`

This will generate the exact same string as seen above – given it is set for a spellwork and thus \`AE\` is used.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(CostMapOption), {
          minItems: 2,
        }),
      }),
      translations: NestedLocaleMap(
        Optional,
        "CostMapTranslation",
        Object(
          {
            list_prepend: Required({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: String({ minLength: 1 }),
            }),
            list_append: Required({
              comment: "Place a string after the grouped map option labels.",
              type: String({ minLength: 1 }),
            }),
            replacement: Required({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: String({ minLength: 1 }),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@Embedded
public struct CostMapOption {

  /// The full cost value for this option.
  let value: Integer({ minimum: 1 })
  /// The part of the `value` that has to be paid permanently.
  let permanent_value: Integer({ minimum: 0 })?
      translations: NestedLocaleMap(
        Optional,
        "CostMapOptionTranslation",
        Object({

        /// The description of the option for cost string generation.
        let label: String({ minLength: 1 })
          label_standalone: Optional({
            comment:
              "The description of the option if used standalone. Only used if different from `label`.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
  }

@ModelEnum
public enum SustainedCost {
    case Modifiable(IncludeIdentifier(ModifiableSustainedCost))
    case NonModifiable(IncludeIdentifier(NonModifiableSustainedCost))
}

@Embedded
public struct ModifiableSustainedCost {

  /// The initial skill modification identifier/level.
  let initial_modification_level: SkillModificationLevelIdentifier()

  /// The sustain interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  }

@Embedded
public struct NonModifiableSustainedCost {
  /// If `true`, the non-modifiable value is a minimum value.
  let is_minimum: Boolean()?

  /// The AE cost value.
  let value: Integer({ minimum: 1 })
  /// The cost have to be per a specific countable entity, e.g. `8 KP per person`.
  @Relationship(NonModifiableSustainedCostPerCountable)
  let per: NonModifiableSustainedCostPerCountable.ID?

  /// The sustain interval.
  @Relationship(DurationUnitValue)
  let interval: DurationUnitValue.ID
  }

@Embedded
public struct NonModifiableSustainedCostPerCountable {
  /// If defined, the minimum total AE that have to be spent casting the skill.
  let minimum_total: Integer({ minimum: 1 })?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // NonModifiableSustainedCostPerCountableTranslation

        /// The countable entity name.
        let countable: IncludeIdentifier(ResponsiveText)
        })
      ),
  }
