import FileDB

@Model
public struct EquipmentOfBlessedOnes {
  name: "EquipmentOfBlessedOnes",
  namePlural: "EquipmentOfBlessedOnes",
  type: () =>
    Object({

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID

  /// The deity/deities associated with the equipment item.
  let associated_tradition: Array(BlessedTraditionIdentifier(), { minItems: 1, uniqueItems: true })
  /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
  @Relationship(CombatUse)
  let combat_use: CombatUse.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("EquipmentOfBlessedOnes"),
    }),
}
