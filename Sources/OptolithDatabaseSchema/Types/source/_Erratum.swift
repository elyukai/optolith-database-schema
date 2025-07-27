import FileDB

export const Errata = TypeAlias(import.meta.url, {
  name: "Errata",
  comment: "A list of errata for the entry in the specific language.",
  type: () => Array(IncludeIdentifier(Erratum), { minItems: 1 }),
})

@Embedded
public struct Erratum {

  /// The date when the change was confirmed and applied to the entry.
  let date: Date()

  /// A description of what changed.
  let description: String({ minLength: 1 })
  }
