import FileDB

@Model
public struct Culture {

  /// A list of native languages (usually it is only one).
  let language: Array(LanguageIdentifier(), { minItems: 1, uniqueItems: true })
  /// A list of native scripts (usually it is only one). If the culture does not use any script, leave this array empty.
  let script: Array(ScriptIdentifier(), { minItems: 1, uniqueItems: true })?

  /// If the area knowledge has a fixed value or can be adjusted.
  @Relationship(AreaKnowledge)
  let area_knowledge: AreaKnowledge.ID

  /// A list of possible social status in the respective culture.
  let social_status: Array(SocialStatusIdentifier(), { minItems: 1, uniqueItems: true })

  /// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
  @Relationship(CommonProfessions)
  let common_professions: CommonProfessions.ID
      common_advantages: Optional({
        comment: "A list of common advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      common_disadvantages: Optional({
        comment: "A list of common disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      uncommon_advantages: Optional({
        comment: "A list of uncommon advantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [AdvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),
      uncommon_disadvantages: Optional({
        comment: "A list of uncommon disadvantages.",
        type: Array(
          GenIncludeIdentifier(CommonnessRatedAdvantageDisadvantage, [DisadvantageIdentifier()]),
          { minItems: 1 }
        ),
      }),

  /// A list of common skills.
  let common_skills: Array(IncludeIdentifier(CommonnessRatedSkill), { minItems: 1 })
  /// A list of uncommon skills.
  let uncommon_skills: Array(IncludeIdentifier(CommonnessRatedSkill), { minItems: 1 })?

  /// The skill points you get for buying the culture package.
  let cultural_package: Array(IncludeIdentifier(CulturalPackageItem), { minItems: 1 })

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CultureTranslation

        /// The race’s name.
        let name: String({ minLength: 1 })

        /// The description of the area knowledge.
        let area_knowledge: IncludeIdentifier(AreaKnowledgeTranslation)

        /// The respective common advantages text from the source book.
        let common_advantages: String({ minLength: 1 })?

        /// The respective common disadvantages text from the source book.
        let common_disadvantages: String({ minLength: 1 })?

        /// The respective uncommon advantages text from the source book.
        let uncommon_advantages: String({ minLength: 1 })?

        /// The respective uncommon disadvantages text from the source book.
        let uncommon_disadvantages: String({ minLength: 1 })?

        /// Structured description of common names.
        let common_names: IncludeIdentifier(CommonNames)

        let errata: Errata?
    }
}

/// If the area knowledge has a fixed value or can be adjusted.
@Embedded
public struct AreaKnowledge {

  /// `true` if the area knowledge has a fixed value, `false` if it can be adjusted.
  let is_fixed: Boolean()
  }

/// The “weight” difference compared to other professions or profession variants. Some professions or profession variants are simply more common (`Mostly`), but sometimes only specific elements are used (`Only`).
@ModelEnum
public enum CommonnessWeight {
    case Mostly
    case Only
}

const Weighted = GenTypeAlias(import.meta.url, {
  name: "Weighted",
  comment:
    "Some professions or profession variants are more common than others. There may be cultures where some professions or profession variants are not represented at all.",
  parameters: [Param("ProfessionOrVariant")],
  type: ProfessionOrVariant =>
    Object({

  /// The list of more common professions or profession variants.
  let elements: Array(TypeArgument(ProfessionOrVariant), { minItems: 1 })

  /// The list of more common professions or profession variants.
  @Relationship(CommonnessWeight)
  let weight: CommonnessWeight.ID
  }

/// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.
@ModelEnum
public enum CommonProfessionConstraintsOperation {
    case Intersection
    case Difference
}

const CommonProfessionConstraints = GenTypeAlias(import.meta.url, {
  name: "CommonProfessionConstraints",
  comment:
    "A list of professions. The filter specifies how the list is applied to all mundane professions.",
  parameters: [Param("Constraint")],
  type: Constraint =>
    Object({

  /// The list of constraints.
  let constraints: Array(TypeArgument(Constraint), { minItems: 1 })

  /// This defines how the list of constraints should be offset against the list of all mundane professions: Either only the professions are kept that intersect with the constraints or only the professions are kept that are different from the constraints.
  @Relationship(CommonProfessionConstraintsOperation)
  let operation: CommonProfessionConstraintsOperation.ID
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
  let id: ProfessionIdentifier()
  /// Some profession variants are more common than others. There may be cultures where some variants are not represented at all.
  let weighted_variants: GenIncludeIdentifier(Weighted, [ProfessionVariantIdentifier()])?
  /// Some professions may be found in a culture, but are not that common.
  @Relationship(Rarity)
  let rarity: Rarity.ID?
  }

@Embedded
public struct MagicalTraditionConstraint {

  /// The magical tradition’s identifier.
  let id: MagicalTraditionIdentifier()
  /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
  let weighted_professions: GenIncludeIdentifier(Weighted, [ProfessionIdentifier()])?
  /// Some traditions may be found in a culture, but are not that common.
  @Relationship(Rarity)
  let rarity: Rarity.ID?
  }

@Embedded
public struct BlessedTraditionConstraint {

  /// The blessed tradition’s identifier.
  let id: BlessedTraditionIdentifier()
  /// Some professions are more common than others. There may be cultures where some professions are not represented at all.
  let weighted_professions: GenIncludeIdentifier(Weighted, [ProfessionIdentifier()])?
  /// Some traditions may be found in a culture, but are not that common.
  @Relationship(Rarity)
  let rarity: Rarity.ID?
  }

@ModelEnum
public enum MundaneCommonProfessionConstraint {
    case Profession(IncludeIdentifier(ProfessionConstraint))
    case ProfessionSubgroup(IncludeIdentifier(MundaneProfessionGroup))
}

@ModelEnum
public enum MagicCommonProfessionConstraint {
    case Tradition(IncludeIdentifier(MagicalTraditionConstraint))
    case MagicDilettante
    case Profession(IncludeIdentifier(ProfessionConstraint))
}

@ModelEnum
public enum BlessedCommonProfessionConstraint {
    case Tradition(IncludeIdentifier(BlessedTraditionConstraint))
}

const PlainCommonProfessions = TypeAlias(import.meta.url, {
  name: "PlainCommonProfessions",
  type: () => GenIncludeIdentifier(CommonProfessionConstraints, [ProfessionIdentifier()]),
})

const GroupedCommonProfessions = TypeAlias(import.meta.url, {
  name: "GroupedCommonProfessions",
  comment: "Lists of professions by group.",
  type: () =>
    Object(
      {
        mundane: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(MundaneCommonProfessionConstraint),
          ]),
        }),
        magic: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(MagicCommonProfessionConstraint),
          ]),
        }),
        blessed: Optional({
          type: GenIncludeIdentifier(CommonProfessionConstraints, [
            IncludeIdentifier(BlessedCommonProfessionConstraint),
          ]),
        }),
      },
      { minProperties: 1 }
    ),
})

/// A list of professions that are typical for the culture, as well as professions that are rarely practiced or encountered in the culture. The list is either defined by group (as multiple lists) or plain (as a single list).
@ModelEnum
public enum CommonProfessions {
    case Plain(IncludeIdentifier(PlainCommonProfessions))
    case Grouped(IncludeIdentifier(GroupedCommonProfessions))
}

const CommonnessRatedSkill = TypeAlias(import.meta.url, {
  name: "CommonnessRatedSkill",
  type: () => SkillIdentifier(),
})

@Embedded
public struct CulturalPackageItem {

  /// The skill’s identifier.
  let id: SkillIdentifier()

  /// The skill points for the respective skill you get for buying the cultural package.
  let points: Integer({ minimum: 1, maximum: 2 })
  }

/// Description and examples of the area knowledge.
@Embedded
public struct AreaKnowledgeTranslation {

  /// The full description without examples in parenthesis.
  let description: String({ minLength: 1 })

  /// A shorter version of the description, used in input fields and other UI elements where the space might be to small to use the full description.
  let abbreviated: String({ minLength: 1 })
  /// Examples of areas, if applicable.
  let examples: Array(IncludeIdentifier(AreaKnowledgeExample), { minItems: 1 })?
  }

@Embedded
public struct AreaKnowledgeExample {
      area: Required({
        type: String({ minLength: 1 }),
      }),
  }

const CommonNames = TypeAlias(import.meta.url, {
  name: "CommonNames",
  comment: "Structured description of common names.",
  type: () =>
    Object(
      {
        first_name_groups: Optional({
          comment:
            "First names can be gender-neutral, but they can also be for a specific binary sex. They are sorted into groups.",
          type: Array(IncludeIdentifier(CommonNameGroup), { minItems: 1 }),
        }),
        last_name_groups: Optional({
          comment:
            "Last names can be gender-neutral, like family names, but they can also be for a specific binary sex. They are sorted into groups.",
          type: Array(IncludeIdentifier(CommonNameGroup), { minItems: 1 }),
        }),
        naming_rules: Optional({
          comment: "Special naming rules.",
          type: String({ minLength: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})

const CommonNameGroup = TypeAlias(import.meta.url, {
  name: "CommonNameGroup",
  type: () =>
    Object(
      {
        label: Required({
          comment: "The group label.",
          type: String({ minLength: 1 }),
        }),
        sex: Optional({
          comment: "The binary sex if the group is only for a certain binary sex.",
          type: IncludeIdentifier(BinarySex),
        }),
        names: Required({
          comment: "The names from the group.",
          type: Array(IncludeIdentifier(CommonName), { minItems: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})

const CommonName = TypeAlias(import.meta.url, {
  name: "CommonName",
  type: () =>
    Object(
      {
        name: Required({
          type: String({ minLength: 1 }),
        }),
        names: Optional({
          comment: "Additional information about the name, appended in parenthesis.",
          type: String({ minLength: 1 }),
        }),
      },
      { minProperties: 1 }
    ),
})
