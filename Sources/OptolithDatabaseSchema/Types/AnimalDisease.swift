import FileDB

@Model
public struct AnimalDisease {
    /// The disease’s level.
    @Minimum(1)
    let level: Int

    /// Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty.
    let resistance: Resistance

    /// What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection.
    @MinItems(1)
    let cause: [Cause]

    /// The animal types this disease applies to.
    ///
    /// If no animal types are given, the animal disease applies to all animal types.
    @Relationship(AnimalType.self)
    let animal_types: [AnimalType.ID]

    /// If and at which chance the disease can be communicated to intelligent creatures.
    ///
    /// If no causes are given, the disease is not communicable to intelligent creatures.
    let communicability_to_intelligent_creatures: [Cause]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // AnimalDiseaseTranslation
        /// The disease’s name.
        @MinLength(1)
        let name: String

        /// A list of alternative names.
        @MinItems(1)
        let alternative_names: [AlternativeName]?

        /// The disease’s progress, in detail.
        @MinLength(1)
        @Markdown
        let progress: String

        /// After infection, how much time passes before symptoms appear?
        @MinLength(1)
        let incubation_time: String

        /// The damage caused by the disease. If the disease check fails, apply the lessened effects.
        let damage: ReduceableNonEmptyMarkdown

        /// The duration of the disease. If the disease check fails, use the lessened duration.
        let duration: ReduceableNonEmptyMarkdown

        /// Special information about the disease.
        @MinLength(1)
        @Markdown
        let special: String?

        /// Methods known to lessen the disease’s progress or relieve symptoms.
        @MinLength(1)
        @Markdown
        let treatment: String

        /// Known remedies for the disease.
        @MinLength(1)
        @Markdown
        let cure: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}
