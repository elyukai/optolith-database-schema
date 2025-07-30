import FileDB

@Model
public struct BlessedTradition {
    /// Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.
    ///
    /// Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.
    let select_options: SelectOptions?

    /// Registers new skill applications, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
    let skill_applications: NewSkillApplications?

    /// Registers uses, which get enabled once this entry is activated. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin activatable entry.
    let skill_uses: SkillUses?

    /// The tradition’s primary attribute. Leave empty if the tradition does not have one.
    @Relationship(Attribute.self)
    let primary: Attribute.ID?

    /// The tradition’s aspects, if any.
    @MinItems(2)
    @MaxItems(2)
    @Relationship(Aspect.self)
    let aspects: [Aspect.ID]?

    /// If a tradition restricts the possible blessings, the blessings that are **not** allowed.
    let restricted_blessings: RestrictedBlessings?

    /// A list of favored combat techniques.
    let favored_combat_techniques: FavoredCombatTechniques?

    /// A list of favored skills.
    @MinItems(1)
    @Relationship(Skill.self)
    let favored_skills: [Skill.ID]

    /// On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored.
    let favored_skills_selection: FavoredSkillsSelection?

    /// The type of the tradition. May be either church or shamanistic.
    let type: BlessedTraditionType

    /// The select option’s identifier of the disadvantage *Principles* that represent this tradition’s code, if any.
    let associated_principles_id: Int?

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
    struct Translation {  // BlessedTraditionTranslation
        /// Name of the activatable entry.
        @MinLength(1)
        let name: String

        /// A shorter name of the tradition’s name, used in liturgical chant descriptions. This is not the same as the name in the library.
        @MinLength(1)
        let name_compressed: String?

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

/// If a tradition restricts the possible blessings, the blessings that are **not** allowed.
@ModelEnum
public enum RestrictedBlessings {
    case Three(ThreeRestrictedBlessings)
    case Six(SixRestrictedBlessings)
}

@TypeAlias
public struct ThreeRestrictedBlessings {
    @MinItems(3)
    @MaxItems(3)
    @Relationship(Blessing.self)
    let list: [Blessing.ID]
}

@TypeAlias
public struct SixRestrictedBlessings {
    @MinItems(6)
    @MaxItems(6)
    @Relationship(Blessing.self)
    let list: [Blessing.ID]
}

@ModelEnum
public enum FavoredCombatTechniques {
    case All
    case AllClose
    case AllUsedInHunting
    case Specific(SpecificFavoredCombatTechniques)
}

@Embedded
public struct SpecificFavoredCombatTechniques {
    /// A list of specific favored combat techniques.
    @MinItems(1)
    @UniqueItems
    let list: [CombatTechniqueIdentifier]
}

@Embedded
public struct FavoredSkillsSelection {
    /// The number of skills that can be selected.
    @Minimum(1)
    let number: Int

    /// The possible set of skills.
    @MinItems(2)
    @UniqueItems
    @Relationship(Skill.self)
    let options: [Skill.ID]
}

/// The type of the tradition. May be either church or shamanistic.
@ModelEnum
public enum BlessedTraditionType {
    case Church
    case Shamanistic(ShamanisticBlessedTradition)
}

/// Additional rules for shamanistic traditions.
@Embedded
public struct ShamanisticBlessedTradition {
    let can_use_bone_mace_as_ceremonial_item: Bool
}
