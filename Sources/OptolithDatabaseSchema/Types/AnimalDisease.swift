import FileDB

@Model
public struct AnimalDisease {
      level,
      resistance,
      cause,
      animal_types: Required({
        comment: `The animal types this disease applies to.

If no animal types are given, the animal disease applies to all animal types.`,
        type: Array(AnimalTypeIdentifier()),
      }),
      communicability_to_intelligent_creatures: Required({
        comment: `If and at which chance the disease can be communicated to intelligent creatures.

If no causes are given, the disease is not communicable to intelligent creatures.`,
        type: Array(IncludeIdentifier(Cause)),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs
      translations: NestedLocaleMap(Required, "AnimalDiseaseTranslation", DiseaseTranslation),
    }),
}
