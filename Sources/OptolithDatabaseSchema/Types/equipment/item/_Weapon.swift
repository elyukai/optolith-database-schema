import FileDB

/// The primary attribute damage and threshold value. You can either use an integer, an object or a pair. Use an integer if you just have to define a single threshold value for the default primary attribute of the combat technique. Use an object if you need to define the value only or if you need to define the value as well as a single different primary attribute than which the combat technique uses. Use the pair if you need to set the primary attributes to AGI and STR (the combat technique has AGI but this item has AGI/STR) and/or if you need to set different thresholds for AGI and STR (e.g. AGI 14/STR 15). If the same values are in the pair, they will be merged (AGI 14/STR 14 will be AGI/STR 14).
@ModelEnum
public enum PrimaryAttributeDamageThreshold {
    case Default(IncludeIdentifier(DefaultPrimaryAttributeDamageThreshold))
    case List(IncludeIdentifier(PrimaryAttributeDamageThresholdList))
}

@Embedded
public struct DefaultPrimaryAttributeDamageThreshold {

  /// The attribute value representing the damage threshold for the primary attribute of the item's combat technique.
  let threshold: Integer({ minimum: 1 })
  }

@Embedded
public struct PrimaryAttributeDamageThresholdList {
      list: Required({
        comment: "A list of primary attributes with their associated threshold.",
        type: Array(IncludeIdentifier(SinglePrimaryAttributeDamageThreshold), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
  }

@Embedded
public struct SinglePrimaryAttributeDamageThreshold {

  /// The primary attribute.
  let attribute: AttributeIdentifier()

  /// The attribute value representing the damage threshold.
  let threshold: Integer({ minimum: 1 })
  }

export const Length = TypeAlias(import.meta.url, {
  name: "Length",
  comment: "The length of the weapon in cm/halffingers.",
  type: () => Integer({ minimum: 1 }),
})
