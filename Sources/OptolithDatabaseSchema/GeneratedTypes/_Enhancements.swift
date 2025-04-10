//
//  _Enhancements.swift
//  OptolithDatabaseSchema
//

/// A list of enhancements.
public typealias Enhancements = [Enhancement]

public struct Enhancement: EntitySubtype {
    /// The enhancement's identifier. An unique, increasing integer.
    public let id: Int

    /// The skill rating required to learn this enhancement.
    public let skillRating: Int

    /// The value to multiply with the numeric representation of the associated skill's improvement cost to form the final AP cost of this enhancement.
    public let adventurePointsModifier: Int

    public let prerequisites: EnhancementPrerequisites?

    /// Only defined if different than the associated skill.
    public let src: PublicationRefs?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<EnhancementTranslation>

    public init(id: Int, skillRating: Int, adventurePointsModifier: Int, prerequisites: EnhancementPrerequisites? = nil, src: PublicationRefs? = nil, translations: LocaleMap<EnhancementTranslation>) {
        self.id = id
        self.skillRating = skillRating
        self.adventurePointsModifier = adventurePointsModifier
        self.prerequisites = prerequisites
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case skillRating = "skill_rating"
        case adventurePointsModifier = "adventure_points_modifier"
        case prerequisites = "prerequisites"
        case src = "src"
        case translations = "translations"
    }
}

public struct EnhancementTranslation: EntitySubtype {
    /// The name of the enhancement.
    public let name: String

    /// The effect description.
    public let effect: String

    public let errata: Errata?

    public init(name: String, effect: String, errata: Errata? = nil) {
        self.name = name
        self.effect = effect
        self.errata = errata
    }
}
