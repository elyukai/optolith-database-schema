import FileDB

@Model
public struct PactCategory {

  /// Types of creatures in this category.
  let types: Array(PactTypeIdentifier(), { minItems: 1 })

  /// Domains in this category.
  let domains: Array(PactDomainIdentifier(), { minItems: 1 })

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PactCategoryTranslation

        /// The pact category’s name.
        let name: String({ minLength: 1 })

        let errata: Errata
    }
}

@Model
public struct PactType {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PactTypeTranslation

        /// The type’s name.
        let name: String({ minLength: 1 })
    }
}

@Model
public struct PactDomain {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PactDomainTranslation

        /// The domain’s name.
        let name: String({ minLength: 1 })
    }
}
