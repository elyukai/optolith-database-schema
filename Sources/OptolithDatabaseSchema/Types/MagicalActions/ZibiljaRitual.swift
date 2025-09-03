import FileDB

@Model
public struct ZibiljaRitual {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: SkillCheckPenalty?

    /// Measurable parameters of a zibilja ritual.
    let parameters: ZibiljaRitualPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    let target: AffectedTargetCategories

    /// The associated property.
    @Relationship(Property.self)
    let property: Property.ID

    /// States which column is used to improve the skill.
    let improvement_cost: ImprovementCost

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // ZibiljaRitualTranslation
        /// The zibilja ritual’s name.
        @MinLength(1)
        let name: String

        /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
        let effect: ActivatableSkillEffect

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let casting_time: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let cost: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let range: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        let duration: OldParameter

        @available(*, deprecated, message: "Use language-independent performance parameters instead")
        @MinLength(1)
        let target: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

public typealias ZibiljaRitualPerformanceParameters = OneTimePerformanceParameters<CastingTime<SlowSkillNonModifiableCastingTime>>
