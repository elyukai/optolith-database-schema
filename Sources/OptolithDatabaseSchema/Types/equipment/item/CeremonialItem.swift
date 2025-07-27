import FileDB

@Model
public struct CeremonialItem {

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

  /// The deity associated with the equipment item.
  let associated_tradition: BlessedTraditionIdentifier()
  /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
  @Relationship(CombatUse)
  let combat_use: CombatUse.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("CeremonialItem"),
    }),
}
