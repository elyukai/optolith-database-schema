import { SkillIdentifier, TargetCategoryIdentifier } from "./_Identifier.js"
import { ActivatableIdentifier, CombatTechniqueIdentifier, SkillIdentifier as SkillIdentifierGroup } from "./_IdentifierGroup.js"
import { LocaleMap } from "./_LocaleMap.js"
import { CeremonyReference, CloseCombatTechniqueReference, ElementReference, LiturgicalChantReference, RangedCombatTechniqueReference, RitualReference, SkillGroupReference, SkillReference, SpellReference } from "./_SimpleReferences.js"

export type SelectOptionCategory =
  | { tag: "Blessings"; blessings: {} }
  | { tag: "Cantrips"; cantrips: {} }
  | { tag: "TradeSecrets"; trade_secrets: {} }
  | { tag: "Scripts"; scripts: {} }
  | { tag: "AnimalShapes"; animal_shapes: {} }
  | { tag: "ArcaneBardTraditions"; arcane_bard_traditions: {} }
  | { tag: "ArcaneDancerTraditions"; arcane_dancer_traditions: {} }
  | { tag: "SexPractices"; sex_practices: {} }
  | { tag: "Races"; races: {} }
  | { tag: "Cultures"; cultures: {} }
  | { tag: "RacesAndCultures"; races_and_cultures: {} }
  | { tag: "BlessedTraditions"; blessed_traditions: BlessedTraditionsSelectOptionCategory }
  | { tag: "Elements"; elements: ElementsSelectOptionCategory }
  | { tag: "Properties"; properties: PropertiesSelectOptionCategory }
  | { tag: "Aspects"; aspects: AspectSelectOptionCategory }
  | { tag: "Diseases"; diseases: DiseasesPoisonsSelectOptionCategory }
  | { tag: "Poisons"; poisons: DiseasesPoisonsSelectOptionCategory }
  | { tag: "Languages"; languages: LanguagesSelectOptionCategory }
  | { tag: "Skills"; skills: SkillsSelectOptionCategory }
  | { tag: "CombatTechniques"; combat_techniques: CombatTechniquesSelectOptionCategory }
  | { tag: "TargetCategories"; target_categories: TargetCategoriesSelectOptionCategory }

export type BlessedTraditionsSelectOptionCategory = {
  /**
   * Should the principles (code) of the tradition be required to select the
   * respective tradition?
   */
  require_principles?: true
}

export type ElementsSelectOptionCategory = {
  /**
   * Only include entries with the listed identifiers.
   * @minItems 1
   * @uniqueItems
   */
  specific?: ElementReference[]
}

export type PropertiesSelectOptionCategory = {
  /**
   * Does each property require it's corresponding property knowledge?
   */
  require_knowledge?: true

  /**
   * Require a minimum number of spellworks of the respective property to be
   * on a minimum skill rating.
   */
  require_minimum_spellworks_on?: RequiredMinimumSkillsToBeOnSkillRating
}

export type AspectSelectOptionCategory = {
  /**
   * Does each aspect require it's corresponding aspect knowledge?
   */
  require_knowledge?: true

  /**
   * The generated name should be the *Master of (Aspect)* suffix for this
   * aspect instead of the aspect's name. If an aspect does not provide a
   * suffix (such as the General aspect), it is automatically excluded from
   * the list.
   */
  use_master_of_suffix_as_name?: true

  /**
   * Require a minimum number of liturgies of the respective aspect to be on a
   * minimum skill rating.
   */
  require_minimum_liturgies_on?: RequiredMinimumSkillsToBeOnSkillRating
}

/**
 * Require a minimum number of spellworks/liturgies of the respective
 * property/aspect to be on a minimum skill rating.
 */
export type RequiredMinimumSkillsToBeOnSkillRating = {
  /**
   * The minimum number of liturgies that need to be on the defined minimum
   * skill rating.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The minimum skill rating the defined minimum number of liturgies need
   * to be on.
   * @integer
   * @minimum 1
   */
  rating: number
}

export type DiseasesPoisonsSelectOptionCategory = {
  /**
   * Only convert half the disease/poison level into the AP value.
   */
  use_half_level_as_ap_value?: true
}

export type LanguagesSelectOptionCategory = {
  /**
   * Generate prerequisites for each entry of the category.
   * @minItems 1
   */
  prerequisites?: LanguagesSelectOptionCategoryPrerequisite[]
}

export type LanguagesSelectOptionCategoryPrerequisite =
  | { tag: "SelectOption"; select_option: OptionPrerequisite }

export type SkillsSelectOptionCategory = {
  /**
   * A list of skill categories.
   * @minItems 1
   */
  categories: SkillsSelectOptionCategoryCategory[]

  /**
   * Generate AP values for each entry.
   */
  ap_value?: AdventurePointsValue<SkillIdentifierGroup>
}

export type SkillsSelectOptionCategoryCategory =
  | { tag: "Skills"; skills: SkillSelectOptionCategoryCategory }
  | { tag: "Spells"; spells: GenericSkillsSelectOptionCategoryCategory<SpellReference> }
  | { tag: "Rituals"; rituals: GenericSkillsSelectOptionCategoryCategory<RitualReference> }
  | { tag: "LiturgicalChants"; liturgical_chants: GenericSkillsSelectOptionCategoryCategory<LiturgicalChantReference> }
  | { tag: "Ceremonies"; ceremonies: GenericSkillsSelectOptionCategoryCategory<CeremonyReference> }

export type SkillSelectOptionCategoryCategory = {
  /**
   * Only include entries of the specified groups.
   * @minItems 1
   */
  groups?: SkillGroupReference[]

  /**
   * Only include (`Intersection`) or exclude (`Difference`) specific
   * skills.
   */
  specific?: SpecificFromSkillSelectOptionCategoryCategory<SkillReference>

  /**
   * Registers new applications, which get enabled once this entry is
   * activated with its respective select option. It specifies an
   * entry-unique identifier, the skill it belongs to is derived from the
   * select option automatically. A translation can be left out if its
   * name equals the name of the origin entry.
   * @minItems 1
   */
  skill_applications?: SkillApplicationOrUse[]

  /**
   * Registers uses, which get enabled once this entry is activated with
   * its respective select option. It specifies an entry-unique
   * identifier, the skill it belongs to is derived from the select option
   * automatically. A translation can be left out if its name equals the
   * name of the origin entry.
   * @minItems 1
   */
  skill_uses?: SkillApplicationOrUse[]

  /**
   * Generate prerequisites for each entry of the category.
   * @minItems 1
   */
  prerequisites?: SkillSelectOptionCategoryPrerequisite[]

  /**
   * Generate AP values for each entry.
   */
  ap_value?: AdventurePointsValue<SkillIdentifier>
}

export type CombatTechniquesSelectOptionCategory = {
  /**
   * A list of combat technique categories.
   * @minItems 1
   */
  categories: CombatTechniquesSelectOptionCategoryCategory[]

  /**
   * Generate AP values for each entry.
   */
  ap_value?: AdventurePointsValue<CombatTechniqueIdentifier>
}

export type CombatTechniquesSelectOptionCategoryCategory =
  | { tag: "CloseCombatTechniques"; close_combat_techniques: GenericSkillsSelectOptionCategoryCategory<CloseCombatTechniqueReference> }
  | { tag: "RangedCombatTechniques"; ranged_combat_techniques: GenericSkillsSelectOptionCategoryCategory<RangedCombatTechniqueReference> }

export type SkillApplicationOrUse = {
  /**
   * The application's or use's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations?: LocaleMap<SkillApplicationOrUseTranslation>
}

export type SkillApplicationOrUseTranslation = {
  /**
   * The name of the application or use if different from the activatable
   * entry's name.
   * @minLength 1
   */
  name: string
}

export type GenericSkillsSelectOptionCategoryCategory<Ref> = {
  /**
   * Only include (`Intersection`) or exclude (`Difference`) specific entries.
   */
  specific?: SpecificFromSkillSelectOptionCategoryCategory<Ref>

  /**
   * Generate prerequisites for each entry of the category.
   * @minItems 1
   */
  prerequisites?: SkillSelectOptionCategoryPrerequisite[]
}

export type SpecificFromSkillSelectOptionCategoryCategory<Ref> = {
  operation: SpecificFromSkillSelectOptionCategoryCategoryOperation

  /**
   * The list of specific entries.
   * @minItems 1
   * @uniqueItems
   */
  list: Ref[]
}

/**
 * Only include (`Intersection`) or exclude (`Difference`) specific entries.
 */
export type SpecificFromSkillSelectOptionCategoryCategoryOperation =
  | "Intersection"
  | "Difference"

export type SkillSelectOptionCategoryPrerequisite =
  | { tag: "Self"; self: SelfPrerequisite }
  | { tag: "SelectOption"; select_option: OptionPrerequisite }

export type SelfPrerequisite = {
  /**
   * The entry requires itself on a certain Skill Rating.
   * @integer
   * @minimum 1
   */
  value: number
}

/**
 * The entry requires or prohibits itself as a select option of another entry.
 */
export type OptionPrerequisite = {
  /**
   * The target entry's identifier.
   */
  id: ActivatableIdentifier

  /**
   * Is the select option required (`true`) or prohibited (`false`)?
   */
  active: boolean

  /**
   * The required level, if any.
   * @integer
   * @minimum 2
   */
  level?: number
}

/**
 * Generate AP values for each entry.
 */
export type AdventurePointsValue<Identifier> =
  | { tag: "DerivedFromImprovementCost"; derived_from_improvement_cost: DeriveAdventurePointsValueFromImprovementCost }
  | { tag: "Fixed"; fixed: FixedAdventurePointsValue<Identifier> }

/**
 * Derive the cost from the improvement cost of each entry.
 *
 * **Calculation:** AP Value = Improvement Cost × `multiplier` + `offset`
 */
export type DeriveAdventurePointsValueFromImprovementCost = {
  /**
   * This number is multiplied with the improvement cost of the entry
   * (A = 1 to D = 4).
   * @integer
   * @minimum 2
   * @default 1
   */
  multiplier?: number

  /**
   * This number is added to the multiplied improvement cost of the entry.
   * @integer
   * @default 0
   */
  offset?: number
}

export type FixedAdventurePointsValue<Identifier> = {
  /**
   * A mapping of skill identifiers to their specific AP values.
   */
  map: FixedAdventurePointsValueMapping<Identifier>[]

  /**
   * The default value of an entry. Used as a fallback if no value is
   * found in `list`.
   * @integer
   * @minimum 1
   */
  default: number
}

export type FixedAdventurePointsValueMapping<Identifier> = {
  /**
   * The entry's identifier.
   */
  id: Identifier

  /**
   * The AP value for the specified entry.
   * @integer
   * @minimum 1
   */
  ap_value: number
}

export type TargetCategoriesSelectOptionCategory = {
  /**
   * A list of combat technique categories.
   * @minItems 1
   */
  list: SpecificTargetCategory[]
}

export type SpecificTargetCategory = {
  /**
   * The target category’s identifier.
   */
  id: TargetCategoryIdentifier

  /**
   * The volume for this specific selection.
   * @integer
   * @minimum 0
   */
  volume?: number
}
