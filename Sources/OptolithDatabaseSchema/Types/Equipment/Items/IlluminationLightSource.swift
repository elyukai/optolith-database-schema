import FileDB

@Model
public struct IlluminationLightSource {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight

    /// The complexity of crafting the item.
    let complexity: Complexity

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    let structure_points: StructurePoints

    /// The burning time is the time how long the light source can be lit. After that time you have to use a new light source.
    let burning_time: BurningTime

    /// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
    let combat_use: CombatUse?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    public struct Translation {  // IlluminationLightSourceTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum BurningTime {
    case unlimited
    case limited(LimitedBurningTime)
}

@Embedded
public struct LimitedBurningTime {
    /// The (unitless) time value.
    @Minimum(0, isExclusive: true)
    let value: Int

    /// The time unit.
    let unit: LimitedBurningTimeUnit
}

@ModelEnum
public enum LimitedBurningTimeUnit {
    case hours
}
