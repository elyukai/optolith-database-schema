/**
 * Requires a specific sexual characteristic.
 * @title Sexual Characteristic Prerequisite
 */
export type SexualCharacteristicPrerequisite = {
  id: SexualCharacteristic
}

export enum SexualCharacteristic {
  Penis = "Penis",
  Vagina = "Vagina",
}
