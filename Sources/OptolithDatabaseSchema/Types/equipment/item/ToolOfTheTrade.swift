import FileDB

@Model
public struct ToolOfTheTrade {
  name: "ToolOfTheTrade",
  namePlural: "ToolsOfTheTrade",
  type: () =>
    Object({

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID
  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID?

  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID
  /// Additional information if the item is a laboratory.
  @Relationship(Laboratory)
  let laboratory: Laboratory.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("ToolOfTheTrade"),
    }),
}

@Embedded
public struct Laboratory {
      level: Required({
        type: IncludeIdentifier(LaboratoryLevel),
      }),
  }
