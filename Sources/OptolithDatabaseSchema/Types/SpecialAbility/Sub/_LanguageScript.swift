import FileDB

@Embedded
public struct AssociatedContinent {
    /// The continent’s identifier.
    @Relationship(Continent.self)
    let id: Continent.ID

    /// Is the language considered virtually extinct in this continent?
    let is_extinct: Bool
}
