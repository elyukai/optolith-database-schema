import FileDB

@Embedded
public struct MusicDuration {

      let length: MusicLength

      let reusability: MusicReusability
  }

@ModelEnum
public enum MusicLength {
    case Long
    case Short
}

@ModelEnum
public enum MusicReusability {
    case OneTime
    case Sustainable
}
