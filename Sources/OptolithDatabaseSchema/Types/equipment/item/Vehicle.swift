import FileDB

@Model
public struct Vehicle {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("Vehicle"),
    }),
}
