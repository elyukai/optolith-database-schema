import FileDB

@Model
public struct MagicalArtifact {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: DefaultItemTranslations("MagicalArtifact"),
    }),
}
