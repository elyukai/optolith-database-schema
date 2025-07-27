import FileDB

@Model
public struct MusicalInstrument {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID
  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID?
  /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
  @Relationship(CombatUse)
  let combat_use: CombatUse.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("MusicalInstrument"),
    }),
}
