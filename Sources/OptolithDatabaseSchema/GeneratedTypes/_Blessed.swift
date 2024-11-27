//
//  _Blessed.swift
//  OptolithDatabaseSchema
//

public enum SkillTradition: EntitySubtype {
    case generalAspect(AspectReference)
    case tradition(SkillTraditionWithAspects)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case generalAspect = "general_aspect"
        case tradition = "tradition"
    }

    private enum Discriminator: String, Decodable {
        case generalAspect = "GeneralAspect"
        case tradition = "Tradition"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .generalAspect:
            self = .generalAspect(try container.decode(AspectReference.self, forKey: .generalAspect))
        case .tradition:
            self = .tradition(try container.decode(SkillTraditionWithAspects.self, forKey: .tradition))
        }
    }
}

public struct SkillTraditionWithAspects: EntitySubtype {
    /// The blessed tradition.
    public let tradition: BlessedTraditionReference

    /// The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
    public let aspects: [AspectReference]?

    public init(tradition: BlessedTraditionReference, aspects: [AspectReference]? = nil) {
        self.tradition = tradition
        self.aspects = aspects
    }
}
