//
//  _ActivatableSkill.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

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

@DiscriminatedEnum
public enum FastPerformanceParameters: EntitySubtype {
    case oneTime(FastOneTimePerformanceParameters)
    case sustained(FastSustainedPerformanceParameters)
}

public typealias FastOneTimePerformanceParameters = OneTimePerformanceParameters<FastCastingTime>

public typealias FastSustainedPerformanceParameters = SustainedPerformanceParameters<FastCastingTime>

@DiscriminatedEnum
public enum SlowPerformanceParameters: EntitySubtype {
    case oneTime(SlowOneTimePerformanceParameters)
    case sustained(SlowSustainedPerformanceParameters)
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
