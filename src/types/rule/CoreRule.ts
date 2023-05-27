/**
 * @main CoreRule
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../validation/filename.js"
import { CoreRuleIdentifier } from "../_Identifier.js"
import { CoreRuleDerivableContentIdentifier } from "../_IdentifierGroup.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"

/**
 * @title Core Rule
 */
export type CoreRule = {
  /**
   * The core rule's identifier. An unique, increasing integer.
   */
  id: CoreRuleIdentifier

  /**
   * @minItems 1
   */
  content: ContentNode[]

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<CoreRuleTranslation>
}

export type CoreRuleTranslation = {
  /**
   * The name of the optional rule.
   */
  name: NonEmptyString

  errata?: Errata
}

export type ContentNode =
  | { tag: "Child"; child: ChildNode }
  | { tag: "Text"; text: TextNode }
  | { tag: "Reference"; reference: ReferenceNode }
  | { tag: "ReferenceList"; reference_list: ReferenceListNode }

/**
 * A core rule nested inside this core rule. It may be displayed as a separate
 * page or its content may be included in this rule's text, which will
 * automatically generate a proper heading. No content node of a type other than
 * `Child` should follow a child node, since then it may look like the the text
 * may be part of the child node.
 */
export type ChildNode = {
  /**
   * The nested core rule's identifier.
   */
  id: CoreRuleIdentifier

  /**
   * If the nested core rule's content should be integrated into this core rule
   * and a proper heading should be added. Otherwise create a link to a separate
   * view of that core rule.
   */
  include: boolean
}

/**
 * A simple text block, containing one or multiple paragraphs. Headings are not
 * allowed, they should be handled as nested core rules instead.
 */
export type TextNode = {
  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<TextNodeTranslation>
}

export type TextNodeTranslation = {
  /**
   * Markdown-formatted text.
   */
  text: NonEmptyMarkdown
}

/**
 * Generate a list or table from a specific entity type.
 */
export type ReferenceListNode = {
  source: ReferenceListNodeSource

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<ReferenceListNodeTranslation>
}

export type ReferenceListNodeSource =
  | { tag: "Attributes"; attributes: {} }
  | { tag: "QualityLevels"; quality_levels: {} }
  | { tag: "Conditions"; conditions: {} }
  | { tag: "States"; states: {} }
  | { tag: "ExperienceLevels"; experience_levels: {} }
  | { tag: "Races"; races: {} }
  | { tag: "Cultures"; cultures: {} }
  | { tag: "Professions"; professions: {} }
  | { tag: "Advantages"; advantages: {} }
  | { tag: "Disadvantages"; disadvantages: {} }
  | { tag: "CombatTechniques"; combat_techniques: {} }
  | { tag: "SpecialAbilities"; special_abilities: {} }
  | { tag: "PrimaryAttributes"; primary_attributes: {} }
  | { tag: "DerivedCharacteristics"; derived_characteristics: {} }
  | { tag: "StartingAge"; starting_age: {} }
  | { tag: "Archetypes"; archetypes: {} }
  | { tag: "RequirementsForRoutineChecks"; requirements_for_routine_checks: {} }
  | { tag: "GeneralSpecialAbilities"; general_special_abilities: {} }
  | { tag: "FatePointSpecialAbilities"; fate_point_special_abilities: {} }
  | { tag: "LanguagesAndScripts"; languages_and_scripts: {} }
  | { tag: "CloseCombatBotch"; close_combat_botch: {} }
  | { tag: "DefenseBotch"; defense_botch: {} }
  | { tag: "MeleeCombatTechniques"; melee_combat_techniques: {} }
  | { tag: "RangedCombatBotch"; ranged_combat_botch: {} }
  | { tag: "RangedCombatDefenseBotch"; ranged_combat_defense_botch: {} }
  | { tag: "RangedCombatTechniques"; ranged_combat_techniques: {} }
  | { tag: "CombatSpecialAbilities"; combat_special_abilities: {} }
  | { tag: "Properties"; properties: {} }
  | { tag: "SpellBotch"; spell_botch: {} }
  | { tag: "Services"; services: {} }
  | { tag: "ProtectiveAndWardingCircles"; protective_and_warding_circles: {} }
  | { tag: "Elixirs"; elixirs: {} }
  | { tag: "StaffEnchantments"; staff_enchantments: {} }
  | { tag: "FamiliarsTricks"; familiars_tricks: {} }
  | { tag: "Curses"; curses: {} }
  | { tag: "ElvenMagicalSongs"; elven_magical_songs: {} }
  | { tag: "MagicalSpecialAbilities"; magical_special_abilities: {} }
  | { tag: "Cantrips"; cantrips: {} }
  | { tag: "Spells"; spells: {} }
  | { tag: "Rituals"; rituals: {} }
  | { tag: "Aspects"; aspects: {} }
  | { tag: "LiturgyBotch"; liturgy_botch: {} }
  | { tag: "KarmaSpecialAbilities"; karma_special_abilities: {} }
  | { tag: "Blessings"; blessings: {} }
  | { tag: "LiturgicalChants"; liturgical_chants: {} }
  | { tag: "Ceremonies"; ceremonies: {} }
  | { tag: "SocialStatuses"; social_statuses: {} }
  | { tag: "Poisons"; poisons: {} }
  | { tag: "Diseases"; diseases: {} }
  | { tag: "HealingHerbs"; healing_herbs: {} }
  | { tag: "VisibilityModifier"; visibility_modifier: {} }
  | { tag: "Demons"; demons: {} }
  | { tag: "Elementals"; elementals: {} }
  | { tag: "Animals"; animals: {} }
  | { tag: "Familiars"; familiars: {} }
  | { tag: "AnimalSpecialAbilities"; animal_special_abilities: {} }
  | { tag: "EquipmentPackages"; equipment_packages: {} }
  | { tag: "Items"; items: {} }
  | { tag: "OptionalRules"; optional_rules: {} }
  | { tag: "ImprovementCost"; improvement_cost: ReferenceListNodeImprovementCostSource }

export type ReferenceListNodeImprovementCostSource = {
  /**
   * Define if the cost for attributes or skills should be defined. The
   * cost for attributes start with value 9, while the cost for skills
   * start with 1 in addition to possible activation cost.
   */
  target: ReferenceListNodeImprovementCostSourceTarget

  /**
   * The highest value the improvement cost are displayed for.
   *
   * The minimum maximum value should depend on what is the upper bound of
   * the range of adventure point cost that are equal across multiple
   * values (value increases for attributes are always 15 up to (and
   * including) value 14, while value increases for skills are always 1 to
   * 4, depending on the improvement cost, up to (and including) value
   * 12), since those ranges should be combined into a single table row.
   * @integer
   * @minimum 12
   */
  maximum_rating: number
}

export enum ReferenceListNodeImprovementCostSourceTarget {
  Attributes = "Attributes",
  Skills = "Skills",
}

export type ReferenceListNodeTranslation = {
  /**
   * Markdown-formatted text.
   */
  text: NonEmptyMarkdown
}

/**
 * Generate the full text for a single entry as part of this core rule's text.
 */
export type ReferenceNode = {
  id: CoreRuleDerivableContentIdentifier
}

export const config: TypeConfig<CoreRule> = {
  name: "CoreRule",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("CoreRule"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
