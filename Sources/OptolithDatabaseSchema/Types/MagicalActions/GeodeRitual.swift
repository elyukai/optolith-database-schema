import FileDB

@Model
public struct GeodeRitual {

  /// Lists the linked three attributes used to make a skill check.
  let check: SkillCheck

  /// Measurable parameters of a geode ritual.
  let parameters: GeodeRitualPerformanceParameters

  /// The target category – the kind of creature or object – the skill affects.
  let target: AffectedTargetCategories

  /// The associated property.
  @Relationship(Property.self)
  let property: Property.ID

  /// The prerequisites for the geode ritual.
  let prerequisites: GeodeRitualPrerequisites?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // GeodeRitualTranslation

        /// The geode ritual’s name.
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

/// Measurable parameters of a geode ritual.
@Embedded
public struct GeodeRitualPerformanceParameters {

  /// The casting time.
  let casting_time: SlowSkillNonModifiableCastingTime

  /// The AE cost.
  let cost: GeodeRitualCost

  /// The range.
  let range: GeodeRitualRange

  /// The duration.
  let duration: GeodeRitualDuration
  }

@ModelEnum
public enum GeodeRitualCost {
    case Fixed(FixedGeodeRitualCost)
    case Map(CostMap)
}

@Embedded
public struct FixedGeodeRitualCost {

  /// The AE cost value.
  @Minimum(1)
  let value: Int
  }

@ModelEnum
public enum GeodeRitualRange {
    case `Self`
    case Fixed(FixedGeodeRitualRange)
}

@Embedded
public struct FixedGeodeRitualRange {

  /// The range in steps/m.
  @Minimum(1)
  let value: Int
  }

@ModelEnum
public enum GeodeRitualDuration {
    case Immediate
    case Fixed(DurationUnitValue)
    case CheckResultBased(CheckResultBasedDuration)
}
