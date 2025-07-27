import FileDB

@Model
public struct Disease {
      level,
      resistance,
      cause,

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: NestedLocaleMap(Required, "DiseaseTranslation", DiseaseTranslation),
    }),
}
