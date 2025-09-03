import FileDB

/// A prerequisite group has no influence on validation logic. It serves as a single unit for displaying purposes, where the source uses a prerequisites item that cannot be represented as a single prerequisite.
public struct PrerequisiteGroup<T> {
    @MinItems(2)
    let list: [T]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // PrerequisiteGroupTranslation
        @MinLength(1)
        let text: String
    }
}

public struct PrerequisitesDisjunction<T> {
    @MinItems(2)
    let list: [T]

    let display_option: DisplayOption?
}

@ModelEnum
public enum PrerequisitesElement<T> {
    case single(T)
    case disjunction(PrerequisitesDisjunction<T>)
    case group(PrerequisiteGroup<T>)
}

@TypeAlias
public struct PlainPrerequisites<T> {
    @MinItems(1)
    let list: [PrerequisitesElement<T>]
}

public struct PrerequisiteForLevel<T> {
    /// The level to which the prerequisite applies.
    @MinLength(1)
    let level: String

    /// The prerequisite.
    let prerequisite: PrerequisitesElement<T>
}

@TypeAlias
public struct PrerequisitesForLevels<T> {
    @MinItems(1)
    let list: [PrerequisiteForLevel<T>]
}

typealias DerivedCharacteristicPrerequisites = PlainPrerequisites<
    DerivedCharacteristicPrerequisiteGroup
>

typealias PublicationPrerequisites = PlainPrerequisites<PublicationPrerequisiteGroup>

typealias PlainGeneralPrerequisites = PlainPrerequisites<GeneralPrerequisiteGroup>

typealias GeneralPrerequisites = PrerequisitesForLevels<GeneralPrerequisiteGroup>

typealias ProfessionPrerequisites = PlainPrerequisites<ProfessionPrerequisiteGroup>

typealias AdvantageDisadvantagePrerequisites = PrerequisitesForLevels<
    AdvantageDisadvantagePrerequisiteGroup
>

typealias ArcaneTraditionPrerequisites = PlainPrerequisites<ArcaneTraditionPrerequisiteGroup>

typealias PersonalityTraitPrerequisites = PlainPrerequisites<PersonalityTraitPrerequisiteGroup>

typealias SpellworkPrerequisites = PlainPrerequisites<SpellworkPrerequisiteGroup>

typealias LiturgyPrerequisites = PlainPrerequisites<LiturgyPrerequisiteGroup>

typealias InfluencePrerequisites = PlainPrerequisites<InfluencePrerequisiteGroup>

typealias LanguagePrerequisites = PrerequisitesForLevels<LanguagePrerequisiteGroup>

typealias AnimistPowerPrerequisites = PlainPrerequisites<AnimistPowerPrerequisiteGroup>

typealias GeodeRitualPrerequisites = PlainPrerequisites<GeodeRitualPrerequisiteGroup>

typealias EnhancementPrerequisites = PlainPrerequisites<EnhancementPrerequisiteGroup>
