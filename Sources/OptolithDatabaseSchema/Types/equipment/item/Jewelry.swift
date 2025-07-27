import FileDB

@Model
public struct Jewelry {

  /// The cost in silverthalers.
  let cost: GenIncludeIdentifier(JewelryMaterialDifference, [IncludeIdentifier(Cost)])

  /// The weight in kg.
  let weight: GenIncludeIdentifier(JewelryMaterialDifference, [IncludeIdentifier(Weight)])

  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID

  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("Jewelry"),
    }),
}

const JewelryMaterialDifference = GenTypeAlias(import.meta.url, {
  name: "JewelryMaterialDifference",
  comment: "Jewelry can have different values for a property based on the material.",
  parameters: [Param("T")],
  type: T =>
    Object({
      bronze: Required({ type: TypeArgument(T) }),
      silver: Required({ type: TypeArgument(T) }),
      gold: Required({ type: TypeArgument(T) }),
  }
