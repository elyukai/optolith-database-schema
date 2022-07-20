/**
 * @main CoreRule
 */

import { validateSchemaCreator } from "../../validation/schema.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { CoreRuleDerivableContentIdentifier } from "../_Identifier.js"
import { LocaleMap } from "../_LocaleMap.js"
import { NonEmptyMarkdown, NonEmptyString } from "../_NonEmptyString.js"

/**
 * @title Core Rule
 */
export type CoreRule = {
  /**
   * The core rule's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

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
   * @integer
   * @minimum 1
   */
  id: number

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
  | { tag: "Attributes" }
  | { tag: "QualityLevels" }
  | { tag: "Conditions" }
  | { tag: "States" }
  | { tag: "ExperienceLevels" }
  | { tag: "Races" }
  | { tag: "Cultures" }
  | { tag: "Professions" }
  | { tag: "Advantages" }
  | { tag: "Disadvantages" }
  | { tag: "CombatTechniques" }
  | { tag: "SpecialAbilities" }
  | { tag: "PrimaryAttributes" }
  | { tag: "DerivedCharacteristics" }
  | { tag: "StartingAge" }
  | { tag: "Archetypes" }
  | { tag: "RequirementsForRoutineChecks" }
  | { tag: "GeneralSpecialAbilities" }
  | { tag: "FatePointSpecialAbilities" }
  | { tag: "LanguagesAndScripts" }
  | { tag: "CloseCombatBotch" }
  | { tag: "DefenseBotch" }
  | { tag: "MeleeCombatTechniques" }
  | { tag: "RangedCombatBotch" }
  | { tag: "RangedCombatDefenseBotch" }
  | { tag: "RangedCombatTechniques" }
  | { tag: "CombatSpecialAbilities" }
  | { tag: "Properties" }
  | { tag: "SpellBotch" }
  | { tag: "Services" }
  | { tag: "ProtectiveAndWardingCircles" }
  | { tag: "Elixirs" }
  | { tag: "StaffEnchantments" }
  | { tag: "FamiliarsTricks" }
  | { tag: "Curses" }
  | { tag: "ElvenMagicalSongs" }
  | { tag: "MagicalSpecialAbilities" }
  | { tag: "Cantrips" }
  | { tag: "Spells" }
  | { tag: "Rituals" }
  | { tag: "Aspects" }
  | { tag: "LiturgyBotch" }
  | { tag: "KarmaSpecialAbilities" }
  | { tag: "Blessings" }
  | { tag: "LiturgicalChants" }
  | { tag: "Ceremonies" }
  | { tag: "SocialStatuses" }
  | { tag: "Poisons" }
  | { tag: "Diseases" }
  | { tag: "HealingHerbs" }
  | { tag: "VisibilityModifier" }
  | { tag: "Demons" }
  | { tag: "Elementals" }
  | { tag: "Animals" }
  | { tag: "Familiars" }
  | { tag: "AnimalSpecialAbilities" }
  | { tag: "EquipmentPackages" }
  | { tag: "Items" }
  | { tag: "OptionalRules" }
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

export type ReferenceListNodeImprovementCostSourceTarget =
  | { tag: "Attributes" }
  | { tag: "Skills" }

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

export const validateSchema = validateSchemaCreator<CoreRule>(import.meta.url)
