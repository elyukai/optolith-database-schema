import FileDB

@Model
public struct Skill {

  /// Lists the linked three attributes used to make a skill check.
  let check: SkillCheck

  /// Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities.
  let applications: Applications

  /// Indicates whether encumbrance gives a penalty for checks with the skill.
  let encumbrance: EncumbranceInfluence

  /// States which column is used to improve the skill.
  let improvement_cost: ImprovementCost

  /// The skill group this skill belongs to.
  @Relationship(SkillGroup.self)
  let group: SkillGroup.ID

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // SkillTranslation

        /// The skill’s name.
        @MinLength(1)
        let name: String

          /// If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty.
          @MinLength(1)
          let applications_input_label: String?

          /// The text listing the certain circumstances in which the encumbrance may count. This text must be used if `encumbrance` is set to `"Maybe"`, otherwise it is ignored if defined.
          @MinLength(1)
          let encumbrance_description: String?

          /// Mentions any tools from the equipment list that are necessary to employ the skill.
          @MinLength(1)
          let tools: String?

        /// Gives examples of the effects that various QL might provide.
        @MinLength(1)
        let quality: String

        /// Lists examples of results for a failed check.
        @MinLength(1)
        let failed: String

        /// Lists examples of results for a critical success.
        @MinLength(1)
        let critical: String

        /// Lists examples of results for botches.
        @MinLength(1)
        let botch: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

/// The skill’s applications
@ModelEnum
public enum Applications {
    case Derived(ApplicationCategory)
    /// A list of explicit applications.
    case Explicit(SpecificApplications)
}

@TypeAlias
public struct SpecificApplications {
    @Relationship(SkillApplication.self)
    @MinItems(1)
    let list: [SkillApplication.ID]
}

/// A category. All available entries from the specified category will be included as separate applications.
@ModelEnum
public enum ApplicationCategory {
    case BlessedTraditions
    case Diseases
    case Regions
}

@Model
public struct SkillApplication {

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation { // SkillApplicationTranslation

        /// The skill application’s name.
        @MinLength(1)
        let name: String
    }
}

/// Indicates whether encumbrance gives a penalty for checks with the skill.
@ModelEnum
public enum EncumbranceInfluence {
    case Yes
    case No
    case Maybe
}
