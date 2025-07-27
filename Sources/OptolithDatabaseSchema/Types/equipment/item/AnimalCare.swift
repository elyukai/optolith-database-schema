import FileDB

@Model
public struct AnimalCare {
  name: "AnimalCare",
  namePlural: "AnimalCare",
  type: () =>
    Object({

  /// Values depending on whether the animal care is feed.
  @Relationship(AnimalCareType)
  let type: AnimalCareType.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("AnimalCare"),
    }),
}

/// Values depending on whether the animal care is feed.
@ModelEnum
public enum AnimalCareType {
    case General(IncludeIdentifier(GeneralAnimalCare))
    case Feed(IncludeIdentifier(AnimalFeed))
}

@Embedded
public struct GeneralAnimalCare {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID
  }

@Embedded
public struct AnimalFeed {

  /// The cost in silverthalers.
  @Relationship(AnimalFeedCost)
  let cost: AnimalFeedCost.ID
  }

@ModelEnum
public enum AnimalFeedCost {
    case PerWeek(IncludeIdentifier(FixedCost))
}
