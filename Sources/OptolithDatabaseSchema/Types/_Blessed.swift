import FileDB

@ModelEnum
public enum LiturgyTradition {
    case GeneralAspect(AspectIdentifier())
    case Tradition(IncludeIdentifier(LiturgyTraditionWithAspects))
}

@Embedded
public struct LiturgyTraditionWithAspects {

  /// The blessed tradition.
  let tradition: BlessedTraditionIdentifier()
  /// The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
  let aspects: Array(AspectIdentifier(), { minItems: 1, maxItems: 2 })?
  }
