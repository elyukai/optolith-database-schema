import FileDB

@Model
public struct Weapon {

  /// The cost in silverthalers.
  @Relationship(Cost)
  let cost: Cost.ID

  /// The weight in kg.
  @Relationship(Weight)
  let weight: Weight.ID

  /// The complexity of crafting the item.
  @Relationship(Complexity)
  let complexity: Complexity.ID
  /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
  @Relationship(StructurePoints)
  let structure_points: StructurePoints.ID?

  /// A list of stat blocks for each combat technique this weapon can be used with.
  let uses: Array(WeaponUseIdentifier(), { minItems: 1 })
  /// If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.
  @Relationship(SanctifiedBy)
  let sanctified_by: SanctifiedBy.ID?
  /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
  @Relationship(RestrictedToCultures)
  let restricted_to_cultures: RestrictedToCultures.ID?
  /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
  let restricted_to_traditions: Array(MagicalTraditionIdentifier(), { minItems: 1 })?

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // WeaponTranslation

        /// The item’s name.
        let name: String({ minLength: 1 })

        /// An auxiliary name or label of the item, if available.
        let secondary_name: String({ minLength: 1 })?

        /// Note text.
        let note: String({ minLength: 1, isMarkdown: true })?

        /// Special rules text.
        let rules: String({ minLength: 1, isMarkdown: true })?

        /// The weapon advantage text.
        let advantage: String({ minLength: 1, isMarkdown: true })?

        /// The weapon disadvantage text.
        let disadvantage: String({ minLength: 1, isMarkdown: true })?

        let errata: Errata?
    }
}

@Embedded
public struct ImprovisedWeapon {

  /// A list of stat blocks for each combat technique this weapon can be used with.
  let uses: Array(WeaponUseIdentifier(), { minItems: 1 })
  /// If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.
  @Relationship(SanctifiedBy)
  let sanctified_by: SanctifiedBy.ID?
  /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
  @Relationship(RestrictedToCultures)
  let restricted_to_cultures: RestrictedToCultures.ID?
  /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
  let restricted_to_traditions: Array(MagicalTraditionIdentifier(), { minItems: 1 })?
      translations: NestedLocaleMap(
        Optional,
        "ImprovisedWeaponTranslation",
        Object(
          {
            advantage: Optional({
              comment: "The weapon advantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
            disadvantage: Optional({
              comment: "The weapon disadvantage text.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 }
        )
      ),
  }

@Model
public struct WeaponUse {
      values: Required({
        type: IncludeIdentifier(WeaponUseValues),
      }),
    }),
  displayName: null,
})

/// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
@ModelEnum
public enum WeaponUseValues {
    case Melee(IncludeIdentifier(MeleeWeapon))
    case Ranged(IncludeIdentifier(RangedWeapon))
}

export const SanctifiedBy = TypeAlias(import.meta.url, {
  name: "SanctifiedBy",
  comment: "If the weapon is sanctified by a god and thus restricted to it's Blessed Ones.",
  type: () => Array(BlessedTraditionIdentifier(), { minItems: 1 }),
})

/// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
@ModelEnum
public enum RestrictedToCultures {
    case CulturesOfRace(RaceIdentifier())
    case Cultures(IncludeIdentifier(RestrictedToSpecificCultures))
}

@Embedded
public struct RestrictedToSpecificCultures {
      list: Required({
        type: Array(CultureIdentifier(), { minItems: 1 }),
      }),
  }
