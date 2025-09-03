import FileDB

@Embedded
public struct MusicDuration {
    let length: MusicLength

    let reusability: MusicReusability
}

@ModelEnum
public enum MusicLength {
    case long
    case short
}

@ModelEnum
public enum MusicReusability {
    case oneTime
    case sustainable
}
