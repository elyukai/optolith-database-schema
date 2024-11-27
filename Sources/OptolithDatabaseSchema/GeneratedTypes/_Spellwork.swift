//
//  _Spellwork.swift
//  OptolithDatabaseSchema
//

/// The tradition(s) the ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions.
public enum Traditions: EntitySubtype {
    case general
    case specific(SpecificTraditions)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case general = "general"
        case specific = "specific"
    }

    private enum Discriminator: String, Decodable {
        case general = "General"
        case specific = "Specific"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .general:
            self = .general
        case .specific:
            self = .specific(try container.decode(SpecificTraditions.self, forKey: .specific))
        }
    }
}

/// A list of specific traditions.
public typealias SpecificTraditions = [MagicalTraditionIdentifier]
