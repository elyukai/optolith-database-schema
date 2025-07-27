import FileDB

@Model
public struct Guideline {

  /// Maximum number of spells that can be exchanged.
  let spellwork_changes_allowed: Integer({ minimum: 0 })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // GuidelineTranslation

        /// The guideline’s name.
        let name: String({ minLength: 1 })
    }
}

@Model
public struct Curriculum {
  name: "Curriculum",
  namePlural: "Curricula",
  comment:
    "This is a curriculum of a specified or other institutions such as private teachers, containing the guideline, elective and restricted spellworks as well as the lesson packages of that academy. It is used with the focus rule *Lessons*.",
  type: () =>
    Object({

  /// The institution’s guideline.
  let guideline: GuidelineIdentifier()

  /// The institution’s elective spellworks package.
  @Relationship(ElectiveSpellworks)
  let elective_spellworks: ElectiveSpellworks.ID

  /// The institution’s restricted spellworks package.
  @Relationship(RestrictedSpellworks)
  let restricted_spellworks: RestrictedSpellworks.ID
      lesson_packages: Required({
        comment: "A list of available lesson packages.",
        type: IncludeIdentifier(LessonPackages),
        // isTransient: true,
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // CurriculumTranslation

        /// The institution’s name.
        let name: String({ minLength: 1 })

        let errata: Errata?
    }
}

/// The institution’s elective spellworks package.
@ModelEnum
public enum ElectiveSpellworks {
    case DefinedByGameMaster
    case Specific(IncludeIdentifier(SpecificElectiveSpellworks))
}

@Embedded
public struct SpecificElectiveSpellworks {
      list: Required({
        type: Array(IncludeIdentifier(ElectiveSpellwork), { minItems: 1, uniqueItems: true }),
      }),
  }

@Embedded
public struct ElectiveSpellwork {
      id: Required({
        type: IncludeIdentifier(SpellworkIdentifier),
      }),
  /// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
  @Relationship(ElectiveSpellworkRestriction)
  let restriction: ElectiveSpellworkRestriction.ID?
  }

/// The elective spellwork may only take effect if a certain condition is met. The condition may be related to professions or profession variants, but it is designed so that it can work without a specific profession, as multiple may belong to an institute, but with referencing other entities instead.
@ModelEnum
public enum ElectiveSpellworkRestriction {
    case Element(ElementIdentifier())
}

const RestrictedSpellworks = TypeAlias(import.meta.url, {
  name: "RestrictedSpellworks",
  comment: "The institution’s restricted spellworks package.",
  type: () => Array(IncludeIdentifier(RestrictedSpellwork), { minItems: 1, uniqueItems: true }),
})

@ModelEnum
public enum RestrictedSpellwork {
    case Property(IncludeIdentifier(RestrictedProperty))
    case Spellwork(IncludeIdentifier(SpellworkIdentifier))
    case DemonSummoning
    case Borbaradian
    case DamageIntelligent
}

@Embedded
public struct RestrictedProperty {

  /// The identifier of the property that spellworks are disallowed from.
  let id: PropertyIdentifier()
  /// Exclude specific spellworks from the restriction.
  let exclude: Array(IncludeIdentifier(SpellworkIdentifier), { minItems: 1, uniqueItems: true })?
  /// Spellworks from this property up to a certain number are allowed. Spellworks excluded from this restriction definition using `exclude` do not contribute to the maximum.
  let maximum: Integer({ minimum: 1 })?
  }

const LessonPackages = TypeAlias(import.meta.url, {
  name: "LessonPackages",
  comment: "A list of available lesson packages.",
  type: () => Array(LessonPackageIdentifier(), { minItems: 2, maxItems: 2 }),
})

@Model
public struct LessonPackage {
  name: "LessonPackage",
  namePlural: "LessonPackages",
  type: () =>
    Object(
      {
        curriculum: Required({
          comment: "The associated curriculum.",
          type: CurriculumIdentifier(),
        }),
        spellwork_changes: Required({
          comment:
            "The spell values difference of the lesson package. This field reflects the changes (difference) to the field of the same name in the profession package. If a spell gets to SR 0 because of this, it will be removed completely.",
          type: Array(IncludeIdentifier(SpellworkChange), { minItems: 1, uniqueItems: true }),
        }),
        skills: Required({
          type: Array(IncludeIdentifier(AbilityAdjustment), { minItems: 1, uniqueItems: true }),
        }),

    /// The publications where you can find the entry.
    let src: PublicationRefs
        translations: NestedLocaleMap(
          Required,
          "LessonPackageTranslation",
          Object({
            name: Required({
              comment: "The lesson package’s name.",
              type: String({ minLength: 1 }),
            }),
            spellwork_changes: Optional({
              comment:
                "The spell values difference of the lesson package. Use this field to specify a text that is displayed instead of the generated `spellwork_changes` list. The field is displayed even if no list is present.",
              type: String({ minLength: 1 }),
            }),
          })
        ),
      },
      { minProperties: 3 }
    ),
}

@Embedded
public struct SpellworkChange {
      base: Required({
        type: IncludeIdentifier(SpellworkAdjustment),
      }),
      replacement: Required({
        type: IncludeIdentifier(SpellworkAdjustment),
      }),
  }

@ModelEnum
public enum AbilityAdjustment {
    case CombatTechnique(IncludeIdentifier(CombatTechniqueAdjustment))
    case Skill(IncludeIdentifier(SkillAdjustment))
    case Spellwork(IncludeIdentifier(SpellworkAdjustment))
}

@Embedded
public struct CombatTechniqueAdjustment {
      id: Required({
        type: IncludeIdentifier(CombatTechniqueIdentifier),
      }),

  /// The combat technique points that will be added to the current combat technique rating.
  let points: Integer({ minimum: -6, maximum: 6 })
  }

@Embedded
public struct SkillAdjustment {
      id: Required({
        type: SkillIdentifier(),
      }),

  /// The skill points that will be added to the current skill rating.
  let points: Integer({ minimum: -8, maximum: 8 })
  }

@Embedded
public struct SpellworkAdjustment {
      id: Required({
        type: IncludeIdentifier(SpellworkIdentifier),
      }),

  /// The skill points that will be added to the current skill rating. If a spell gets to a skill rating of 0 because of this, it will be removed completely.
  let points: Integer({ minimum: -10, maximum: 10 })
  /// The target tradition. If the target spell is not from the Guild Mage tradition, specify the tradition identifier here.
  let tradition: MagicalTraditionIdentifier()?
  }
