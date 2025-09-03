/// Herbary-related types.

import FileDB

/// Effect type categories of a plant or recipe.
@ModelEnum
public enum EffectType {
    case healing
    case poison
    case physicalEffect
    case psychicEffect
    case beneficial
    case defensive
    case supernatural
}

@ModelEnum
public enum LaboratoryLevel {
    case archaicLaboratory
    case witchKitchen
    case alchemistsLaboratory
}

@Embedded
public struct RecipeTradeSecret {
    /// The AP value of the trade secret.
    @Minimum(0)
    let ap_value: Int

    /// The prerequisites of the trade secret, if any.
    let prerequisites: PlainGeneralPrerequisites?
}
