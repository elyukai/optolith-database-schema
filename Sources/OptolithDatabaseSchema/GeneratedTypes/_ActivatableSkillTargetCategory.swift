//
//  _ActivatableSkillTargetCategory.swift
//  OptolithDatabaseSchema
//

/// The target category – the kind of creature or object – the skill affects.
/// 
/// If no target categories are given, the skill applies to all target categories.
public typealias AffectedTargetCategories = [SpecificAffectedTargetCategory]

public struct SpecificAffectedTargetCategory: EntitySubtype {
    public let id: SpecificAffectedTargetCategoryIdentifier

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SpecificAffectedTargetCategoryTranslation>?

    public init(id: SpecificAffectedTargetCategoryIdentifier, translations: LocaleMap<SpecificAffectedTargetCategoryTranslation>? = nil) {
        self.id = id
        self.translations = translations
    }
}

public struct SpecificAffectedTargetCategoryTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: NonEmptyString

    public init(note: NonEmptyString) {
        self.note = note
    }
}

public enum SpecificAffectedTargetCategoryIdentifier: EntitySubtype {
    case `self`
    case zone
    case liturgicalChantsAndCeremonies
    case cantrips
    case predefined(TargetCategoryReference)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case `self` = "self"
        case zone = "zone"
        case liturgicalChantsAndCeremonies = "liturgical_chants_and_ceremonies"
        case cantrips = "cantrips"
        case predefined = "predefined"
    }

    private enum Discriminator: String, Decodable {
        case `self` = "Self"
        case zone = "Zone"
        case liturgicalChantsAndCeremonies = "LiturgicalChantsAndCeremonies"
        case cantrips = "Cantrips"
        case predefined = "Predefined"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .`self`:
            self = .`self`
        case .zone:
            self = .zone
        case .liturgicalChantsAndCeremonies:
            self = .liturgicalChantsAndCeremonies
        case .cantrips:
            self = .cantrips
        case .predefined:
            self = .predefined(try container.decode(TargetCategoryReference.self, forKey: .predefined))
        }
    }
}
