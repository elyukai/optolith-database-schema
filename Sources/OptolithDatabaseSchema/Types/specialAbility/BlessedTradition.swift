import FileDB

@Model
public struct BlessedTradition {
      select_options,
      skill_applications,
      skill_uses,
  /// The tradition’s primary attribute. Leave empty if the tradition does not have one.
  let primary: AttributeIdentifier()?
  /// The tradition’s aspects, if any.
  let aspects: Array(AspectIdentifier(), { minItems: 2, maxItems: 2 })?
  /// If a tradition restricts the possible blessings, the blessings that are **not** allowed.
  @Relationship(RestrictedBlessings)
  let restricted_blessings: RestrictedBlessings.ID?
  /// A list of favored combat techniques.
  @Relationship(FavoredCombatTechniques)
  let favored_combat_techniques: FavoredCombatTechniques.ID?

  /// A list of favored skills.
  let favored_skills: Array(SkillIdentifier(), { minItems: 1 })
  /// On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored.
  @Relationship(FavoredSkillsSelection)
  let favored_skills_selection: FavoredSkillsSelection.ID?

  /// The type of the tradition. May be either church or shamanistic.
  @Relationship(BlessedTraditionType)
  let type: BlessedTraditionType.ID
  /// The select option’s identifier of the disadvantage *Principles* that represent this tradition’s code, if any.
  let associated_principles_id: Integer()?
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // BlessedTraditionTranslation
          name,
          name_compressed: Optional({
            comment:
              "A shorter name of the tradition’s name, used in liturgical chant descriptions. This is not the same as the name in the library.",
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          special_rules: Required({
            comment:
              "The special rules of the tradition. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(SpecialRule), { minItems: 1 }),
          }),

        let errata: Errata?
    }
}

/// If a tradition restricts the possible blessings, the blessings that are **not** allowed.
@ModelEnum
public enum RestrictedBlessings {
    case Three(Array(BlessingIdentifier(), { minItems: 3, maxItems: 3 }))
    case Six(Array(BlessingIdentifier(), { minItems: 6, maxItems: 6 }))
}

@ModelEnum
public enum FavoredCombatTechniques {
    case All
    case AllClose
    case AllUsedInHunting
    case Specific(IncludeIdentifier(SpecificFavoredCombatTechniques))
}

@Embedded
public struct SpecificFavoredCombatTechniques {
      list: Required({
        comment: "A list of specific favored combat techniques.",
        type: Array(IncludeIdentifier(CombatTechniqueIdentifier), {
          minItems: 1,
          uniqueItems: true,
        }),
      }),
  }

@Embedded
public struct FavoredSkillsSelection {

  /// The number of skills that can be selected.
  let number: Integer({ minimum: 1 })

  /// The possible set of skills.
  let options: Array(SkillIdentifier(), { minItems: 2, uniqueItems: true })
  }

/// The type of the tradition. May be either church or shamanistic.
@ModelEnum
public enum BlessedTraditionType {
    case Church
    case Shamanistic(IncludeIdentifier(ShamanisticBlessedTradition))
}

/// Additional rules for shamanistic traditions.
@Embedded
public struct ShamanisticBlessedTradition {
      can_use_bone_mace_as_ceremonial_item: Required({
        type: Boolean(),
      }),
  }
