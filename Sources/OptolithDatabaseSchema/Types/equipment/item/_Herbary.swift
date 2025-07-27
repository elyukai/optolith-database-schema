/**
 * Herbary-related types.
 */

import FileDB

/// Effect type categories of a plant or recipe.
@ModelEnum
public enum EffectType {
    case Healing
    case Poison
    case PhysicalEffect
    case PsychicEffect
    case Beneficial
    case Defensive
    case Supernatural
}

@ModelEnum
public enum LaboratoryLevel {
    case ArchaicLaboratory
    case WitchKitchen
    case AlchemistsLaboratory
}

@Embedded
public struct RecipeTradeSecret {

  /// The AP value of the trade secret.
  let ap_value: Integer({ minimum: 0 })
  /// The prerequisites of the trade secret, if any.
  @Relationship(PlainGeneralPrerequisites)
  let prerequisites: PlainGeneralPrerequisites.ID?
  }
