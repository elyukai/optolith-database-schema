import FileDB

@Embedded
public struct AlternativeName {
    /// An alternative name of the disease.
    @MinLength(1)
    let name: String

    /// The region where this alternative name is used.
    @MinLength(1)
    let region: String?
}
