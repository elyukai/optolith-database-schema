import FileDB

@ModelEnum
public enum SelectOptionCategory {
    case Blessings
    case Cantrips
    case TradeSecrets
    case Scripts
    case AnimalShapes
    case ArcaneBardTraditions
    case ArcaneDancerTraditions
    case SexPractices
    case Races
    case Cultures
    case RacesAndCultures
    case BlessedTraditions(IncludeIdentifier(BlessedTraditionsSelectOptionCategory))
    case Elements(IncludeIdentifier(ElementsSelectOptionCategory))
    case Properties(IncludeIdentifier(PropertiesSelectOptionCategory))
    case Aspects(IncludeIdentifier(AspectSelectOptionCategory))
    case Diseases(IncludeIdentifier(DiseasesPoisonsSelectOptionCategory))
    case Poisons(IncludeIdentifier(DiseasesPoisonsSelectOptionCategory))
    case Languages(IncludeIdentifier(LanguagesSelectOptionCategory))
    case Skills(IncludeIdentifier(SkillsSelectOptionCategory))
    case CombatTechniques(IncludeIdentifier(CombatTechniquesSelectOptionCategory))
    case TargetCategories(IncludeIdentifier(TargetCategoriesSelectOptionCategory))
}

@Embedded
public struct BlessedTraditionsSelectOptionCategory {
  /// Should the principles (code) of the tradition be required to select the respective tradition?
  let require_principles: Boolean()?
  }

@Embedded
public struct ElementsSelectOptionCategory {
  /// Only include entries with the listed identifiers.
  let specific: Array(ElementIdentifier(), { minItems: 1, uniqueItems: true })?
  }

@Embedded
public struct PropertiesSelectOptionCategory {
  /// Does each property require it's corresponding property knowledge?
  let require_principles: Boolean()?
  /// Require a minimum number of spellworks of the respective property to be on a minimum skill rating.
  @Relationship(RequiredMinimumSkillsToBeOnSkillRating)
  let require_minimum_spellworks_on: RequiredMinimumSkillsToBeOnSkillRating.ID?
  }

@Embedded
public struct AspectSelectOptionCategory {
  /// Does each aspect require it's corresponding aspect knowledge?
  let require_knowledge: Boolean()?
  /// The generated name should be the *Master of (Aspect)* suffix for this aspect instead of the aspect's name. If an aspect does not provide a suffix (such as the General aspect), it is automatically excluded from the list.
  let use_master_of_suffix_as_name: Boolean()?
  /// Require a minimum number of liturgies of the respective aspect to be on a minimum skill rating.
  @Relationship(RequiredMinimumSkillsToBeOnSkillRating)
  let require_minimum_liturgies_on: RequiredMinimumSkillsToBeOnSkillRating.ID?
  }

/// Require a minimum number of spellworks/liturgies of the respective property/aspect to be on a minimum skill rating.
@Embedded
public struct RequiredMinimumSkillsToBeOnSkillRating {

  /// The minimum number of liturgies that need to be on the defined minimum skill rating.
  let number: Integer({ minimum: 1 })

  /// The minimum skill rating the defined minimum number of liturgies need to be on.
  let rating: Integer({ minimum: 1 })
  }

@Embedded
public struct DiseasesPoisonsSelectOptionCategory {
  /// Only convert half the disease/poison level into the AP value.
  let use_half_level_as_ap_value: Boolean()?
  }

@Embedded
public struct LanguagesSelectOptionCategory {
  /// Generate prerequisites for each entry of the category.
  let prerequisites: Array(IncludeIdentifier(LanguagesSelectOptionCategoryPrerequisite), { minItems: 1 })?
  }

@ModelEnum
public enum LanguagesSelectOptionCategoryPrerequisite {
    case SelectOption(IncludeIdentifier(OptionPrerequisite))
}

@Embedded
public struct SkillsSelectOptionCategory {

  /// A list of skill categories.
  let categories: Array(IncludeIdentifier(SkillsSelectOptionCategoryCategory), { minItems: 1 })
      ap_value: Optional({
        comment: "Generate AP values for each entry.",
        type: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [
          IncludeIdentifier(SkillishIdentifier),
        ]),
      }),
  }

@ModelEnum
public enum SkillsSelectOptionCategoryCategory {
    case Skills(IncludeIdentifier(SkillSelectOptionCategoryCategory))
    case Spells(GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [SpellIdentifier()]))
    case Rituals(GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [RitualIdentifier()]))
    LiturgicalChants: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        LiturgicalChantIdentifier(),
      ]),
    }),
    case Ceremonies(GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [CeremonyIdentifier()]))
}

@Embedded
public struct SkillSelectOptionCategoryCategory {
  /// Only include entries of the specified groups.
  let groups: Array(SkillGroupIdentifier(), { minItems: 1 })?
      specific: Optional({
        comment: "Only include or exclude specific skills.",
        type: GenIncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategory, [
          SkillIdentifier(),
        ]),
      }),
  /// Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
  let skill_applications: Array(IncludeIdentifier(SkillApplicationOrUse), { minItems: 1 })?
  /// Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.
  let skill_uses: Array(IncludeIdentifier(SkillApplicationOrUse), { minItems: 1 })?
  /// Generate prerequisites for each entry of the category.
  let prerequisites: Array(IncludeIdentifier(SkillSelectOptionCategoryPrerequisite), { minItems: 1 })?
  /// Generate AP values for each entry.
  let ap_value: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [SkillIdentifier()])?
  }

@Embedded
public struct CombatTechniquesSelectOptionCategory {
      categories: Required({
        comment: "A list of combat technique categories.",
        type: Array(IncludeIdentifier(CombatTechniquesSelectOptionCategoryCategory), {
          minItems: 1,
        }),
      }),
      ap_value: Optional({
        comment: "Generate AP values for each entry.",
        type: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [
          IncludeIdentifier(CombatTechniqueIdentifier),
        ]),
      }),
  }

@ModelEnum
public enum CombatTechniquesSelectOptionCategoryCategory {
    CloseCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        CloseCombatTechniqueIdentifier(),
      ]),
    }),
    RangedCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        RangedCombatTechniqueIdentifier(),
      ]),
    }),
}

@Embedded
public struct SkillApplicationOrUse {

  /// The application’s or use’s identifier. An entry-unique, increasing integer.
  let id: Integer({ minimum: 1 })

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // SkillApplicationOrUseTranslation
          name: Required({
            comment:
              "The name of the application or use if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        })
      ),
  }

const GenericSkillsSelectOptionCategoryCategory = GenTypeAlias(import.meta.url, {
  name: "GenericSkillsSelectOptionCategoryCategory",
  parameters: [Param("Ref")],
  type: Ref =>
    Object({
      specific: Optional({
        comment: "Only include (`Intersection`) or exclude (`Difference`) specific entries.",
        type: GenIncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategory, [
          TypeArgument(Ref),
        ]),
      }),
  /// Generate prerequisites for each entry of the category.
  let prerequisites: Array(IncludeIdentifier(SkillSelectOptionCategoryPrerequisite), { minItems: 1 })?
  }

const SpecificFromSkillSelectOptionCategoryCategory = GenTypeAlias(import.meta.url, {
  name: "SpecificFromSkillSelectOptionCategoryCategory",
  parameters: [Param("Ref")],
  type: Ref =>
    Object({
      operation: Required({
        type: IncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategoryOperation),
      }),

  /// The list of specific entries.
  let list: Array(TypeArgument(Ref), { minItems: 1, uniqueItems: true })
  }

/// Only include (`Intersection`) or exclude (`Difference`) specific entries.
@ModelEnum
public enum SpecificFromSkillSelectOptionCategoryCategoryOperation {
    case Intersection
    case Difference
}

@ModelEnum
public enum SkillSelectOptionCategoryPrerequisite {
    case Self(IncludeIdentifier(SelfPrerequisite))
    case SelectOption(IncludeIdentifier(OptionPrerequisite))
}

@Embedded
public struct SelfPrerequisite {

  /// The entry requires itself on a certain Skill Rating.
  let value: Integer({ minimum: 1 })
  }

/// The entry requires or prohibits itself as a select option of another entry.
@Embedded
public struct OptionPrerequisite {

  /// The target entry's identifier.
  @Relationship(ActivatableIdentifier)
  let id: ActivatableIdentifier.ID

  /// Is the select option required (`true`) or prohibited (`false`)?
  let active: Boolean()
  /// The required level, if any.
  let level: Integer({ minimum: 2 })?
  }

const SelectOptionsAdventurePointsValue = GenEnum(import.meta.url, {
  name: "SelectOptionsAdventurePointsValue",
  comment: "Generate AP values for each entry.",
  parameters: [Param("Identifier")],
  values: Identifier => ({
    case DerivedFromImprovementCost(IncludeIdentifier(SelectOptionsDeriveAdventurePointsValueFromImprovementCost))
    Fixed: EnumCase({
      type: GenIncludeIdentifier(SelectOptionsFixedAdventurePointsValue, [
        TypeArgument(Identifier),
      ]),
    }),
}

/// Derive the cost from the improvement cost of each entry. The AP value is calculated by multiplying the improvement cost with `multiplier` and then adding `offset`.
@Embedded
public struct SelectOptionsDeriveAdventurePointsValueFromImprovementCost {
  /// This number is multiplied with the improvement cost of the entry (A = 1 to D = 4).
  let multiplier: Integer({ minimum: 2 })?
  /// This number is added to the multiplied improvement cost of the entry.
  let offset: Integer()?
  }

const SelectOptionsFixedAdventurePointsValue = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedAdventurePointsValue",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      map: Required({
        comment: "A mapping of skill identifiers to their specific AP values.",
        type: Array(
          GenIncludeIdentifier(SelectOptionsFixedAdventurePointsValueMapping, [
            TypeArgument(Identifier),
          ])
        ),
      }),

  /// The default value of an entry. Used as a fallback if no value is found in `list`.
  let default: Integer({ minimum: 1 })
  }

const SelectOptionsFixedAdventurePointsValueMapping = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedAdventurePointsValueMapping",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({

  /// The entry’s identifier.
  let id: TypeArgument(Identifier)

  /// The AP value for the specified entry.
  let ap_value: Integer({ minimum: 1 })
  }

@Embedded
public struct TargetCategoriesSelectOptionCategory {

  /// A list of target categories.
  let list: Array(IncludeIdentifier(SpecificTargetCategory), { minItems: 1 })
  }

@Embedded
public struct SpecificTargetCategory {

  /// The target category’s identifier.
  let id: TargetCategoryIdentifier()
  /// The volume for this specific selection.
  let volume: Integer({ minimum: 0 })?
  }
