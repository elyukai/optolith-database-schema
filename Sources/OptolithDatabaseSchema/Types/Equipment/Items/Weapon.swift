import FileDB

@Model
public struct Weapon {
    /// The cost in silverthalers.
    let cost: Cost

    /// The weight in kg.
    let weight: Weight

    /// The complexity of crafting the item.
    let complexity: Complexity

    /// The structure points of the item. Use an array if the item consists of multiple components that have individual structure points.
    let structure_points: StructurePoints?

    /// A list of stat blocks for each combat technique this weapon can be used with.
    @MinItems(1)
    @Relationship(WeaponUse.self)
    let uses: [WeaponUse.ID]

    /// If the weapon is sanctified by a god and thus restricted to its Blessed Ones.
    @Relationship(BlessedTradition.self)
    @MinItems(1)
    let sanctified_by: [BlessedTradition.ID]?

    /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
    let restricted_to_cultures: RestrictedToCultures?

    /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
    @MinItems(1)
    @Relationship(MagicalTradition.self)
    let restricted_to_traditions: [MagicalTradition.ID]?

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // WeaponTranslation
        /// The item’s name.
        @MinLength(1)
        let name: String

        /// An auxiliary name or label of the item, if available.
        @MinLength(1)
        let secondary_name: String?

        /// Note text.
        @MinLength(1)
        @Markdown
        let note: String?

        /// Special rules text.
        @MinLength(1)
        @Markdown
        let rules: String?

        /// The weapon advantage text.
        @MinLength(1)
        @Markdown
        let advantage: String?

        /// The weapon disadvantage text.
        @MinLength(1)
        @Markdown
        let disadvantage: String?

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct ImprovisedWeapon {
    /// A list of stat blocks for each combat technique this weapon can be used with.
    @MinItems(1)
    @Relationship(WeaponUse.self)
    let uses: [WeaponUse.ID]

    /// If the weapon is sanctified by a god and thus restricted to its Blessed Ones.
    @Relationship(BlessedTradition.self)
    @MinItems(1)
    let sanctified_by: [BlessedTradition.ID]?

    /// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
    let restricted_to_cultures: RestrictedToCultures?

    /// Define if during character creation this weapon can only be bought by characters of specific magical or blessed traditions.
    @MinItems(1)
    @Relationship(MagicalTradition.self)
    let restricted_to_traditions: [MagicalTradition.ID]?

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]?

    @Embedded
    @MinProperties(1)
    struct Translation {  // ImprovisedWeaponTranslation
        /// The weapon advantage text.
        @MinLength(1)
        @Markdown
        let advantage: String?

        /// The weapon disadvantage text.
        @MinLength(1)
        @Markdown
        let disadvantage: String?
    }
}

@Model
public struct WeaponUse {
    let values: WeaponUseValues
}

/// The item can also be used either as an improvised weapon or as an armor, although this is not the primary use case of the item.
@ModelEnum
public enum WeaponUseValues {
    case Melee(MeleeWeapon)
    case Ranged(RangedWeapon)
}

/// Define if during character creation this weapon can only be bought by characters of a specific race or culture.
@ModelEnum
public enum RestrictedToCultures {
    case CulturesOfRace(RaceIdentifierObject)
    case Cultures(RestrictedToSpecificCultures)
}

@Embedded
public struct RestrictedToSpecificCultures {
    @MinItems(1)
    @Relationship(Culture.self)
    let list: [Culture.ID]
}
