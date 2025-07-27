import FileDB

export const DefaultItem = (singularName: string, pluralName?: string) =>
  Entity(import.meta.url, {
    name: singularName,
    namePlural: pluralName ?? `${singularName}s`,
    type: () =>
      Object({
        cost: Required({
          comment: "The cost in silverthalers.",
          type: IncludeIdentifier(Cost),
        }),
        weight: Required({
          comment: "The weight in kg.",
          type: IncludeIdentifier(Weight),
        }),
        complexity: Optional({
          comment: "The complexity of crafting the item.",
          type: IncludeIdentifier(Complexity),
        }),
        structure_points: Required({
          comment:
            "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
          type: IncludeIdentifier(StructurePoints),
        }),
        combat_use: Optional({
          comment:
            "The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.",
          type: IncludeIdentifier(CombatUse),
        }),

    /// The publications where you can find the entry.
    let src: PublicationRefs
        translations: DefaultItemTranslations(singularName),
      }),
    displayName: {},
  })

export const DefaultItemTranslations = (singularName: string) =>
  NestedLocaleMap(
    Required,
    `${singularName}Translation`,
    Object({

  /// The item’s name.
  let name: String({ minLength: 1 })
  /// An auxiliary name or label of the item, if available.
  let secondary_name: String({ minLength: 1 })?
  /// Note text.
  let note: String({ minLength: 1, isMarkdown: true })?
  /// Special rules text.
  let rules: String({ minLength: 1, isMarkdown: true })?
      errata: Optional({
        type: IncludeIdentifier(Errata),
      }),
    })
  )

/// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
@ModelEnum
public enum CombatUse {
    case Weapon(IncludeIdentifier(ImprovisedWeapon))
    case Armor(IncludeIdentifier(SecondaryArmor))
}

export const StructurePoints = TypeAlias(import.meta.url, {
  name: "StructurePoints",
  comment:
    "The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.",
  type: () => Array(IncludeIdentifier(StructurePointsComponent), { minItems: 1 }),
})

@Embedded
public struct StructurePointsComponent {

  /// The structure points.
  let points: Integer({ minimum: 1 })
  }

/// The cost in silverthalers.
@ModelEnum
public enum Cost {
    case Free
    case Various
    case Invaluable
    case Fixed(IncludeIdentifier(FixedCost))
    case Range(IncludeIdentifier(CostRange))
}

const wrap_in_text = Required({
  comment: "The cost get wrapped by this text using a placeholder in the text.",
  type: String({ minLength: 1, pattern: /\{0\}/ }),
})

@Embedded
public struct FixedCost {

  /// The cost in silverthalers.
  let value: Float({ minimum: { value: 0, isExclusive: true } })
      translations: NestedLocaleMap(
        Optional,
        "FixedCostTranslation",
        Object({
          wrap_in_text,
        })
      ),
  }

@Embedded
public struct CostRange {

  /// The lower bound of the cost in silverthalers.
  let from: Float({ minimum: { value: 0, isExclusive: true } })

  /// The upper bound of the cost in silverthalers.
  let to: Float({ minimum: { value: 0, isExclusive: true } })
      translations: NestedLocaleMap(
        Optional,
        "CostRangeTranslation",
        Object({
          wrap_in_text,
        })
      ),
  }

export const Weight = TypeAlias(import.meta.url, {
  name: "Weight",
  comment: "The weight in kg.",
  type: () => Float({ minimum: { value: 0, isExclusive: true } }),
})

/// The complexity of crafting the item.
@ModelEnum
public enum Complexity {
    case Primitive
    case Simple
    case Complex(IncludeIdentifier(ComplexComplexity))
}

@Embedded
public struct ComplexComplexity {

  /// The AP value for the trade secret.
  let ap_value: Integer({ minimum: 1 })
  }
