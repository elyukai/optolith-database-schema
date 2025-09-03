import FileDB

@Model
public struct PactCategory {
    /// Types of creatures in this category.
    @MinItems(1)
    @Relationship(PactType.self)
    let types: [PactType.ID]

    /// Domains in this category.
    @MinItems(1)
    @Relationship(PactDomain.self)
    let domains: [PactDomain.ID]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // PactCategoryTranslation
        /// The pact category’s name.
        @MinLength(1)
        let name: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Model
public struct PactType {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // PactTypeTranslation
        /// The type’s name.
        @MinLength(1)
        let name: String
    }
}

@Model
public struct PactDomain {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [Locale.ID: Translation]

    @Embedded
    struct Translation {  // PactDomainTranslation
        /// The domain’s name.
        @MinLength(1)
        let name: String
    }
}
