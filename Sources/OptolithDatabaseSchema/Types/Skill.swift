import FileDB

@Model
public struct Skill {

  /// Lists the linked three attributes used to make a skill check.
  @Relationship(SkillCheck)
  let check: SkillCheck.ID

  /// Lists applications for the skill, if any. This does not necessarily include all possible applications. There may also be new applications that could be purchased via certain advantages or special abilities.
  @Relationship(Applications)
  let applications: Applications.ID

  /// Indicates whether encumbrance gives a penalty for checks with the skill.
  @Relationship(EncumbranceInfluence)
  let encumbrance: EncumbranceInfluence.ID

  /// States which column is used to improve the skill.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID

  /// The skill group this skill belongs to.
  let group: SkillGroupIdentifier()

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SkillTranslation

        /// The skill’s name.
        let name: String({ minLength: 1 })
          applications_input_label: Optional({
            comment:
              "If there are options available that can not be put into a selection list (like different cults), provide the label text for the input element here. Otherwise leave empty.",
            type: String({ minLength: 1 }),
          }),
          encumbrance_description: Optional({
            comment: `The text listing the certain circumstances in which the encumbrance may count. This text must be used if \`encumbrance\` is set to \`"Maybe"\`, otherwise it is ignored if defined.`,
            type: String({ minLength: 1 }),
          }),
          tools: Optional({
            comment:
              "Mentions any tools from the equipment list that are necessary to employ the skill.",
            type: String({ minLength: 1 }),
          }),

        /// Gives examples of the effects that various QL might provide.
        let quality: String({ minLength: 1 })

        /// Lists examples of results for a failed check.
        let failed: String({ minLength: 1 })

        /// Lists examples of results for a critical success.
        let critical: String({ minLength: 1 })

        /// Lists examples of results for botches.
        let botch: String({ minLength: 1 })

        let errata: Errata?
    }
}

/// The skill’s applications
@ModelEnum
public enum Applications {
    case Derived(IncludeIdentifier(ApplicationCategory))
    /// A list of explicit applications.
    case Explicit(Array(SkillApplicationIdentifier()))
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
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SkillApplicationTranslation

        /// The skill application’s name.
        let name: String({ minLength: 1 })
    }
}

/// Indicates whether encumbrance gives a penalty for checks with the skill.
@ModelEnum
public enum EncumbranceInfluence {
    case Yes
    case No
    case Maybe
}
