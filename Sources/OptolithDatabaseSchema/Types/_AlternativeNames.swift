import FileDB

@Embedded
public struct AlternativeName {

  /// An alternative name of the disease.
  let name: String({ minLength: 1 })
  /// The region where this alternative name is used.
  let region: String({ minLength: 1 })?
  }
