import FileDB

@Model
public struct IlluminationLightSource {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID

  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID

  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID

  /// The burning time is the time how long the light source can be lit. After that time you have to use a new light source.
  @Relationship(BurningTime)
  let burning_time: BurningTime.ID
  /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
  @Relationship(CombatUse)
  let combat_use: CombatUse.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("IlluminationLightSource"),
    }),
}

@ModelEnum
public enum BurningTime {
    case Unlimited
    case Limited(IncludeIdentifier(LimitedBurningTime))
}

@Embedded
public struct LimitedBurningTime {

  /// The (unitless) time value.
  let value: Integer({ minimum: { value: 0, isExclusive: true } })

  /// The time unit.
  @Relationship(LimitedBurningTimeUnit)
  let unit: LimitedBurningTimeUnit.ID
  }

@ModelEnum
public enum LimitedBurningTimeUnit {
    case Hours
}
