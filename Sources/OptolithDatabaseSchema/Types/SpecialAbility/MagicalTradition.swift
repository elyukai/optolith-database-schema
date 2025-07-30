import FileDB

@Model
public struct MagicalTradition {
    /// Number of available levels.
    @Minimum(2)
    let levels: Int?

    /// Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.
    ///
    /// Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.
    let select_options: SelectOptions?

    /// Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
    let skill_applications: NewSkillApplications?

    /// Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
    let skill_uses: SkillUses?

    /// The tradition’s primary attribute. Leave empty if the tradition does not have one.
    let primary: PrimaryAttribute?

    /// Can a member of the tradition learn cantrips?
    let can_learn_cantrips: Bool

    /// Can a member of the tradition learn spells?
    let can_learn_spells: Bool

    /// Can a member of the tradition learn rituals?
    let can_learn_rituals: Bool

    /// Can this magical tradition bind familiars?
    let can_bind_familiars: Bool

    /// Does the tradition allow learning more traditions or having learned a different tradition before learning this tradition?
    let allows_multiple_traditions: Bool

    /// Is the maximum AP you’re able to spent on magical advantages and able to get by magical disadvantages different than the default of 50 AP?
    @Minimum(25)
    @Maximum(30)
    @MultipleOf(5)
    let alternative_magical_adventure_points_maximum: Int?

    /// Are advantages/disadvantages required to not exclusively apply to arcane spellworks, but also to the tradition’s magical actions or applications?
    let require_non_spellwork_exclusive_effects: Bool

    /// Is this a magical dilettante tradition?
    let is_magical_dilettante: Bool

    /// If arcane spellworks from a different tradition count as arcane spellworks of this tradition, this is the different tradition’s reference.
    @Relationship(MagicalTradition.self)
    let use_arcane_spellworks_from_tradition: MagicalTradition.ID?

    /// The influences for the traditions. Influences are enabled by Focus Rules.
    @MinItems(2)
    @Relationship(Influence.self)
    let influences: [Influence.ID]?

    let prerequisites: GeneralPrerequisites?

    /// The adventure points value.
    let ap_value: AdventurePointsValue

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // MagicalTraditionTranslation
        /// Name of the activatable entry.
        @MinLength(1)
        let name: String

        /// The name used for the arcane spellworks of the tradition if it is different than the `name` of the special ability.
        @MinLength(1)
        let name_for_arcane_spellworks: String?

        /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
        @MinLength(1)
        let name_in_library: String?

        /// The special rules of the tradition. They should be sorted like they are in the book.
        @MinItems(1)
        let special_rules: [SpecialRule]

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@Embedded
public struct PrimaryAttribute {
    /// The attribute’s identifier.
    @Relationship(Attribute.self)
    let id: Attribute.ID?

    /// Typically, the value of the primary attribute (if one exists) is added onto the base of 20 AE to get the actual AE. But sometimes, only half the value is added.
    let use_half_for_arcane_energy: Bool
}
