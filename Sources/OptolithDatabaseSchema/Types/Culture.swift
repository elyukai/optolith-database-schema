import FileDB

@Model
public struct Culture {

  /// A list of native languages (usually it is only one).
  @MinItems(1)
  @UniqueItems
  @Relationship(Language.self)
  let language: [Language.ID]

  /// A list of native scripts (usually it is only one). If the culture does not use any script, leave this array empty.
  @MinItems(1)
  @UniqueItems
  @Relationship(Script.self)
  let script: [Script.ID]?

  /// If the area knowledge has a fixed value or can be adjusted.
  let area_knowledge: AreaKnowledge

  /// A list of possible social status in the respective culture.
  @MinItems(1)
  @UniqueItems
  @Relationship(SocialStatus.self)
  let social_status: [SocialStatus.ID]

  /// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
  let common_professions: CommonProfessions

      /// A list of common advantages.
      @MinItems(1)
      @Relationship(Advantage.self)
      let common_advantages: [CommonnessRatedAdvantageDisadvantage<Advantage.ID>]?

      /// A list of common disadvantages.
      @MinItems(1)
      @Relationship(Disadvantage.self)
      let common_disadvantages: [CommonnessRatedAdvantageDisadvantage<Disadvantage.ID>]?

      /// A list of uncommon advantages.
      @MinItems(1)
      @Relationship(Advantage.self)
      let uncommon_advantages: [CommonnessRatedAdvantageDisadvantage<Advantage.ID>]?

      /// A list of uncommon disadvantages.
      @MinItems(1)
      @Relationship(Disadvantage.self)
      let uncommon_disadvantages: [CommonnessRatedAdvantageDisadvantage<Disadvantage.ID>]?

  /// A list of common skills.
  @Relationship(Skill.self)
  @MinItems(1)
  let common_skills: [Skill.ID]

  /// A list of uncommon skills.
  @Relationship(Skill.self)
  @MinItems(1)
  let uncommon_skills: [Skill.ID]?

  /// The skill points you get for buying the culture package.
  @MinItems(1)
  let cultural_package: [CulturalPackageItem]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // CultureTranslation

        /// The race’s name.
        @MinLength(1)
        let name: String

        /// The description of the area knowledge.
        let area_knowledge: AreaKnowledgeTranslation

        /// The respective common advantages text from the source book.
        @MinLength(1)
        let common_advantages: String?

        /// The respective common disadvantages text from the source book.
        @MinLength(1)
        let common_disadvantages: String?

        /// The respective uncommon advantages text from the source book.
        @MinLength(1)
        let uncommon_advantages: String?

        /// The respective uncommon disadvantages text from the source book.
        @MinLength(1)
        let uncommon_disadvantages: String?

        /// Structured description of common names.
        let common_names: CommonNames

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// If the area knowledge has a fixed value or can be adjusted.
@Embedded
public struct AreaKnowledge {

  /// `true` if the area knowledge has a fixed value, `false` if it can be adjusted.
  let is_fixed: Bool
  }

/// The “weight” difference compared to other professions or profession variants. Some professions or profession variants are simply more common (`Mostly`), but sometimes only specific elements are used (`Only`).
@ModelEnum
public enum CommonnessWeight {
    case Mostly
    case Only
}

/// Some professions or profession variants are more common than others. There may be cultures where some professions or profession variants are not represented at all.
@Embedded
public struct Weighted<ProfessionOrVariant> {
  /// The list of more common professions or profession variants.
  @MinItems(1)
  let elements: [ProfessionOrVariant]

  /// The list of more common professions or profession variants.
  let weight: CommonnessWeight
  }

/// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.
@ModelEnum
public enum CommonProfessionConstraintsOperation {
    case Intersection
    case Difference
}

/// A list of professions. The filter specifies how the list is applied to all mundane professions.
@Embedded
public struct CommonProfessionConstraints<Constraint> {
  /// The list of constraints.
  @MinItems(1)
  let constraints: [Constraint]

  /// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.
  let operation: CommonProfessionConstraintsOperation
  }

/// Some professions may be found in a culture, but are not that common.
@ModelEnum
public enum Rarity {
    case Rare
    case VeryRare
}

@Embedded
public struct ProfessionConstraint {

  /// The profession’s identifier.
  @Relationship(Profession.self)
  let id: Profession.ID

  /// Some profession variants are more common than others. There may be cultures where some variants are not represented at all.
  @Relationship(ProfessionVariant.self)
  let weighted_variants: Weighted<ProfessionVariant.ID>?

  /// Some professions may be found in a culture, but are not that common.
  let rarity: Rarity?
  }

@Embedded
public struct MagicalTraditionConstraint {

  /// The magical tradition’s identifier.
  @Relationship(MagicalTradition.self)
  let id: MagicalTradition.ID

  /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
  @Relationship(Profession.self)
  let weighted_professions: Weighted<Profession.ID>?

  /// Some traditions may be found in a culture, but are not that common.
  let rarity: Rarity?
  }

@Embedded
public struct BlessedTraditionConstraint {

  /// The blessed tradition’s identifier.
  @Relationship(BlessedTradition.self)
  let id: BlessedTradition.ID

  /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
  @Relationship(Profession.self)
  let weighted_professions: Weighted<Profession.ID>?

  /// Some traditions may be found in a culture, but are not that common.
  let rarity: Rarity?
  }

@ModelEnum
public enum MundaneCommonProfessionConstraint {
    case Profession(ProfessionConstraint)
    case ProfessionSubgroup(MundaneProfessionGroup)
}

@ModelEnum
public enum MagicCommonProfessionConstraint {
    case Tradition(MagicalTraditionConstraint)
    case MagicDilettante
    case Profession(ProfessionConstraint)
}

@ModelEnum
public enum BlessedCommonProfessionConstraint {
    case Tradition(BlessedTraditionConstraint)
}

@TypeAlias
public struct PlainCommonProfessions {
  @Relationship(Profession.self)
  let list: CommonProfessionConstraints<Profession.ID>
}

/// Lists of professions by group.
@Embedded
@MinProperties(1)
public struct GroupedCommonProfessions {
    let mundane: CommonProfessionConstraints<MundaneCommonProfessionConstraint>?

    let magic: CommonProfessionConstraints<MagicCommonProfessionConstraint>?

    let blessed: CommonProfessionConstraints<BlessedCommonProfessionConstraint>?
}

/// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
@ModelEnum
public enum CommonProfessions {
    case Plain(PlainCommonProfessions)
    case Grouped(GroupedCommonProfessions)
}

@Embedded
public struct CulturalPackageItem {

  /// The skill’s identifier.
  @Relationship(Skill.self)
  let id: Skill.ID

  /// The skill points for the respective skill you get for buying the cultural package.
  @Minimum(1)
  @Maximum(2)
  let points: Int
  }

/// Description and examples of the area knowledge.
@Embedded
public struct AreaKnowledgeTranslation {

  /// The full description without examples in parenthesis.
  @MinLength(1)
  let description: String

  /// A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description.
  @MinLength(1)
  let abbreviated: String

  /// Examples of areas, if applicable.
  @MinItems(1)
  let examples: [AreaKnowledgeExample]?
  }

@Embedded
public struct AreaKnowledgeExample {

      @MinLength(1)
      let area: String
  }

/// Structured description of common names.
@Embedded
@MinProperties(1)
public struct CommonNames {
    /// First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.
    @MinItems(1)
    let first_name_groups: [CommonNameGroup]?

    /// Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.
    @MinItems(1)
    let last_name_groups: [CommonNameGroup]?

    /// Special naming rules.
    @MinLength(1)
    let naming_rules: String?
}

@Embedded
@MinProperties(1)
public struct CommonNameGroup {
    /// The group label.
    @MinLength(1)
    let label: String

    /// The binary sex if the group is only for a certain binary sex.
    let sex: BinarySex?

    /// The names from the group.
    @MinItems(1)
    let names: [CommonName]
}

@Embedded
@MinProperties(1)
public struct CommonName {
    @MinLength(1)
    let name: String

    /// Additional information about the name, appended in parenthesis.
    @MinLength(1)
    let names: String?
}
