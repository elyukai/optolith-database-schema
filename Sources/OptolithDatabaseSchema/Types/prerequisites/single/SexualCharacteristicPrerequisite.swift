import FileDB

/// Requires a specific sexual characteristic.
@Embedded
public struct SexualCharacteristicPrerequisite {
      id: Required({
        type: IncludeIdentifier(SexualCharacteristic),
      }),
  }

@ModelEnum
public enum SexualCharacteristic {
    case Penis
    case Vagina
}
