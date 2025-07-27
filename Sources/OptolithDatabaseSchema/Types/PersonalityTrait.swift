import FileDB

@Model
public struct PersonalityTrait {
  name: "PersonalityTrait",
  namePlural: "PersonalityTraits",
  comment:
    "A personality trait describes character aspects of a person from a certain region. Higher trait levels only cover a part of the region covered by lower-level traits.",
  type: () =>
    Object({

  /// The personality trait’s level.
  let level: Integer({ minimum: 1, maximum: 3 })
      prerequisites: Optional({
        type: IncludeIdentifier(PersonalityTraitPrerequisites),
      }),
  /// The lower-level personality trait(s) this trait can be combined with.
  let combination_options: Array(PersonalityTraitIdentifier(), { minItems: 1, uniqueItems: true })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PersonalityTraitTranslation

        /// The personality trait’s name.
        let name: String({ minLength: 1 })
          effects: Required({
            comment:
              "The effects of the personality trait. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(PersonalityTraitEffect), { minItems: 1 }),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct PersonalityTraitEffect {
  /// A label that is displayed and placed before the actual text.
  let label: String({ minLength: 1 })?

  /// The effect text.
  let text: String({ minLength: 1 })
  }
