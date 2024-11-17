//
//  SexualCharacteristicPrerequisite.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

/// Requires a specific sexual characteristic.
public struct SexualCharacteristicPrerequisite: EntitySubtype {
    public let id: SexualCharacteristic

    public init(id: SexualCharacteristic) {
        self.id = id
    }
}

public enum SexualCharacteristic: String, EntitySubtype {
    case penis = "Penis"
    case vagina = "Vagina"
}
