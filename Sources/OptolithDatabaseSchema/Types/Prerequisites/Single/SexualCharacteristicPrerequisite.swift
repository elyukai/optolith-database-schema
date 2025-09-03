import FileDB

/// Requires a specific sexual characteristic.
@Embedded
public struct SexualCharacteristicPrerequisite {
    let id: SexualCharacteristic
}

@ModelEnum
public enum SexualCharacteristic {
    case penis
    case vagina
}
