import FileDB

@Embedded
public struct OneTimePerformanceParameters<CastingTime> {
    let casting_time: CastingTime
    let cost: OneTimeCost
    let range: Range
    let duration: DurationForOneTime
}

@Embedded
public struct SustainedPerformanceParameters<CastingTime> {
    let casting_time: CastingTime
    let cost: SustainedCost
    let range: Range
    let duration: DurationForSustained?
}

@ModelEnum
public enum FastPerformanceParameters {
    case OneTime(FastOneTimePerformanceParameters)
    case Sustained(FastSustainedPerformanceParameters)
}

public typealias FastOneTimePerformanceParameters = OneTimePerformanceParameters<FastCastingTime>

public typealias FastSustainedPerformanceParameters = SustainedPerformanceParameters<FastCastingTime>

@ModelEnum
public enum SlowPerformanceParameters {
    case OneTime(SlowOneTimePerformanceParameters)
    case Sustained(SlowSustainedPerformanceParameters)
}

public typealias SlowOneTimePerformanceParameters = OneTimePerformanceParameters<SlowCastingTime>

public typealias SlowSustainedPerformanceParameters = SustainedPerformanceParameters<SlowCastingTime>

@Embedded
public struct OldParameter {
    let full: String
    let abbr: String
}
