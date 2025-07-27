import FileDB

@Model
public struct Armor {
  name: "Armor",
  namePlural: "Armor",
  type: () =>
    Object({

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID

  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID

  /// The PRO value.
  @Relationship(Protection)
  let protection: Protection.ID

  /// The ENC value.
  @Relationship(Encumbrance)
  let encumbrance: Encumbrance.ID

  /// Does the armor have additional penalties (MOV -1, INI -1)?
  @Relationship(HasAdditionalPenalties)
  let has_additional_penalties: HasAdditionalPenalties.ID

  /// The armor type..
  let armor_type: ArmorTypeIdentifier()
  /// Specify if armor is only available for a specific hit zone.
  @Relationship(HitZone)
  let hit_zone: HitZone.ID?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // ArmorTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// An auxiliary name or label of the item, if available.
        let secondary_name: String({ minLength: 1 })?

        /// Note text.
        let note: String({ minLength: 1, isMarkdown: true })?

        /// Special rules text.
        let rules: String({ minLength: 1, isMarkdown: true })?

        /// The armor advantage text.
        let advantage: String({ minLength: 1, isMarkdown: true })?

        /// The armor disadvantage text.
        let disadvantage: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}

@Embedded
public struct SecondaryArmor {

  /// The PRO value.
  @Relationship(Protection)
  let protection: Protection.ID

  /// The ENC value.
  @Relationship(Encumbrance)
  let encumbrance: Encumbrance.ID

  /// Does the armor have additional penalties (MOV -1, INI -1)?
  @Relationship(HasAdditionalPenalties)
  let has_additional_penalties: HasAdditionalPenalties.ID

  /// The armor type..
  let armor_type: ArmorTypeIdentifier()
  /// Specify if armor is only available for a specific hit zone.
  @Relationship(HitZone)
  let hit_zone: HitZone.ID?
      translations: NestedLocaleMap(
        Optional,
        "SecondaryArmorTranslation",
        Object(
          {
            advantage: Optional({
              comment: "The armor advantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            disadvantage: Optional({
              comment: "The armor disadvantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

export const Protection = TypeAlias(import.meta.url, {
  name: "Protection",
  comment: "The PRO value.",
  type: () => Integer({ minimum: 0 }),
})

export const Encumbrance = TypeAlias(import.meta.url, {
  name: "Encumbrance",
  comment: "The ENC value.",
  type: () => Integer({ minimum: 0 }),
})

export const HasAdditionalPenalties = TypeAlias(import.meta.url, {
  name: "HasAdditionalPenalties",
  comment: "Does the armor have additional penalties (MOV -1, INI -1)?",
  type: () => Boolean(),
})

/// Specify if armor is only available for a specific hit zone.
@ModelEnum
public enum HitZone {
    case Head(IncludeIdentifier(HeadHitZone))
    case Torso
    case Arms
    case Legs
}

@Embedded
public struct HeadHitZone {
  /// In some cases, multiple armors for the same hit zone can be combined. They're listed at the item that can be combined with others.
  @Relationship(HeadHitZoneCombinationPossibilities)
  let combination_possibilities: HeadHitZoneCombinationPossibilities.ID?
  }

@Embedded
public struct HeadHitZoneCombinationPossibilities {

  /// A list of armors that can be combined with this armor.
  let armors: Array(ArmorIdentifier(), { minItems: 1, uniqueItems: true })
  /// The PRO value that is added to the PRO value of the other armor instead of adding the normale PRO value.
  let protection: Integer({ minimum: 0 })?
  }
