//
//  _Sex.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public enum BinarySex: String, EntitySubtype {
    case male = "Male"
    case female = "Female"
}
