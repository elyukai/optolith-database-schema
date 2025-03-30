//
//  _Prerequisite.swift
//  OptolithDatabaseSchema
//

/// A prerequisite group has no influence on validation logic. It serves as a single unit for displaying purposes, where the source uses a prerequisites item that cannot be represented as a single prerequisite.
public struct PrerequisiteGroup<T: EntitySubtype>: EntitySubtype {
    public let list: [T]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<NonEmptyString>

    public init(list: [T], translations: LocaleMap<NonEmptyString>) {
        self.list = list
        self.translations = translations
    }
}

public struct PrerequisitesDisjunction<T: EntitySubtype>: EntitySubtype {
    public let list: [T]

    public let displayOption: DisplayOption?

    public init(list: [T], displayOption: DisplayOption? = nil) {
        self.list = list
        self.displayOption = displayOption
    }

    private enum CodingKeys: String, CodingKey {
        case list = "list"
        case displayOption = "display_option"
    }
}

public enum PrerequisitesElement<T: EntitySubtype>: EntitySubtype {
    case single(T)
    case disjunction(PrerequisitesDisjunction<T>)
    case group(PrerequisiteGroup<T>)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case single = "single"
        case disjunction = "disjunction"
        case group = "group"
    }

    private enum Discriminator: String, Decodable {
        case single = "Single"
        case disjunction = "Disjunction"
        case group = "Group"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .single:
            self = .single(try container.decode(T.self, forKey: .single))
        case .disjunction:
            self = .disjunction(try container.decode(PrerequisitesDisjunction<T>.self, forKey: .disjunction))
        case .group:
            self = .group(try container.decode(PrerequisiteGroup<T>.self, forKey: .group))
        }
    }
}

public typealias PlainPrerequisites<T: EntitySubtype> = [PrerequisitesElement<T>]

public struct PrerequisiteForLevel<T: EntitySubtype>: EntitySubtype {
    public let level: Int

    public let prerequisite: PrerequisitesElement<T>

    public init(level: Int, prerequisite: PrerequisitesElement<T>) {
        self.level = level
        self.prerequisite = prerequisite
    }
}

public typealias PrerequisitesForLevels<T: EntitySubtype> = [PrerequisiteForLevel<T>]

public typealias DerivedCharacteristicPrerequisites = PlainPrerequisites<DerivedCharacteristicPrerequisiteGroup>

public typealias PublicationPrerequisites = PlainPrerequisites<PublicationPrerequisiteGroup>

public typealias PlainGeneralPrerequisites = PlainPrerequisites<GeneralPrerequisiteGroup>

public typealias GeneralPrerequisites = PrerequisitesForLevels<GeneralPrerequisiteGroup>

public typealias ProfessionPrerequisites = PlainPrerequisites<ProfessionPrerequisiteGroup>

public typealias AdvantageDisadvantagePrerequisites = PrerequisitesForLevels<AdvantageDisadvantagePrerequisiteGroup>

public typealias ArcaneTraditionPrerequisites = PlainPrerequisites<ArcaneTraditionPrerequisiteGroup>

public typealias PersonalityTraitPrerequisites = PlainPrerequisites<PersonalityTraitPrerequisiteGroup>

public typealias SpellworkPrerequisites = PlainPrerequisites<SpellworkPrerequisiteGroup>

public typealias LiturgyPrerequisites = PlainPrerequisites<LiturgyPrerequisiteGroup>

public typealias InfluencePrerequisites = PlainPrerequisites<InfluencePrerequisiteGroup>

public typealias LanguagePrerequisites = PrerequisitesForLevels<LanguagePrerequisiteGroup>

public typealias AnimistPowerPrerequisites = PlainPrerequisites<AnimistPowerPrerequisiteGroup>

public typealias GeodeRitualPrerequisites = PlainPrerequisites<GeodeRitualPrerequisiteGroup>

public typealias EnhancementPrerequisites = PlainPrerequisites<EnhancementPrerequisiteGroup>
