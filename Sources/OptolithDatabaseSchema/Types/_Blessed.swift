import FileDB

@ModelEnum
public enum LiturgyTradition {
    case GeneralAspect(AspectIdentifierObject)
    case Tradition(LiturgyTraditionWithAspects)
}

@Embedded
public struct LiturgyTraditionWithAspects {

  /// The blessed tradition.
  @Relationship(BlessedTradition.self)
  let tradition: BlessedTradition.ID

  /// The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
  @MinItems(1)
  @MaxItems(2)
  @Relationship(Aspect.self)
  let aspects: [Aspect.ID]?
  }
