//
//  _ActivatableSkill.swift
//  OptolithDatabaseSchema
//

public struct OneTimePerformanceParameters<CastingTime: EntitySubtype>: EntitySubtype {
    public let castingTime: CastingTime

    public let cost: OneTimeCost

    public let range: Range

    public let duration: DurationForOneTime

    public init(castingTime: CastingTime, cost: OneTimeCost, range: Range, duration: DurationForOneTime) {
        self.castingTime = castingTime
        self.cost = cost
        self.range = range
        self.duration = duration
    }

    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
    }
}

public struct SustainedPerformanceParameters<CastingTime: EntitySubtype>: EntitySubtype {
    public let castingTime: CastingTime

    public let cost: SustainedCost

    public let range: Range

    public let duration: DurationForSustained?

    public init(castingTime: CastingTime, cost: SustainedCost, range: Range, duration: DurationForSustained? = nil) {
        self.castingTime = castingTime
        self.cost = cost
        self.range = range
        self.duration = duration
    }

    private enum CodingKeys: String, CodingKey {
        case castingTime = "casting_time"
        case cost = "cost"
        case range = "range"
        case duration = "duration"
    }
}

public enum FastPerformanceParameters: EntitySubtype {
    case oneTime(FastOneTimePerformanceParameters)
    case sustained(FastSustainedPerformanceParameters)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case oneTime = "one_time"
        case sustained = "sustained"
    }

    private enum Discriminator: String, Decodable {
        case oneTime = "OneTime"
        case sustained = "Sustained"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .oneTime:
            self = .oneTime(try container.decode(FastOneTimePerformanceParameters.self, forKey: .oneTime))
        case .sustained:
            self = .sustained(try container.decode(FastSustainedPerformanceParameters.self, forKey: .sustained))
        }
    }
}

public typealias FastOneTimePerformanceParameters = OneTimePerformanceParameters<FastCastingTime>

public typealias FastSustainedPerformanceParameters = SustainedPerformanceParameters<FastCastingTime>

public enum SlowPerformanceParameters: EntitySubtype {
    case oneTime(SlowOneTimePerformanceParameters)
    case sustained(SlowSustainedPerformanceParameters)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case oneTime = "one_time"
        case sustained = "sustained"
    }

    private enum Discriminator: String, Decodable {
        case oneTime = "OneTime"
        case sustained = "Sustained"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .oneTime:
            self = .oneTime(try container.decode(SlowOneTimePerformanceParameters.self, forKey: .oneTime))
        case .sustained:
            self = .sustained(try container.decode(SlowSustainedPerformanceParameters.self, forKey: .sustained))
        }
    }
}

public typealias SlowOneTimePerformanceParameters = OneTimePerformanceParameters<SlowCastingTime>

public typealias SlowSustainedPerformanceParameters = SustainedPerformanceParameters<SlowCastingTime>

public struct OldParameter: EntitySubtype {
    public let full: String

    public let abbr: String

    public init(full: String, abbr: String) {
        self.full = full
        self.abbr = abbr
    }
}
