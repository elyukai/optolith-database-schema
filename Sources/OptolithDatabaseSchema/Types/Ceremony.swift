import FileDB

@Model
public struct Ceremony {
    /// Lists the linked three attributes used to make a skill check.
    let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    let check_penalty: SkillCheckPenalty?

    /// Measurable parameters of a ceremony.
    let parameters: FastPerformanceParameters

    /// The target category – the kind of creature or object – the skill affects.
    let target: AffectedTargetCategories

    /// The tradition(s) the ceremony is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way.
    @MinItems(1)
    let traditions: [LiturgyTradition]

    /// States which column is used to improve the skill.
    let improvement_cost: ImprovementCost

    /// The prerequisites for the ceremony.
    let prerequisites: LiturgyPrerequisites?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // LiturgicalChantTranslation
        /// The ceremony’s name.
        @MinLength(1)
        let name: String
        /// A compressed name of the ceremony for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet.
        @MinLength(1)
        let name_compressed: String?

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

    let enhancements: Enhancements?
}
