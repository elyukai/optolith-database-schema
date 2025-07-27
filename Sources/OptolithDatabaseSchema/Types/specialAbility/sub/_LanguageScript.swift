import FileDB

@Embedded
public struct AssociatedContinent {

  /// The continent’s identifier.
  let id: ContinentIdentifier()

  /// Is the language considered virtually extinct in this continent?
  let is_extinct: Boolean()
  }
