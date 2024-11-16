//
//  CoreRule.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct CoreRule: LocalizableEntity {
    /// The core rule's identifier. An unique, increasing integer.
    public let id: Int
    
    public let content: [ContentNode]
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CoreRuleTranslation>
}

public struct CoreRuleTranslation: EntitySubtype {
    /// The name of the optional rule.
    public let name: NonEmptyString
    
    public let errata: Errata?
}

@DiscriminatedEnum
public enum ContentNode: EntitySubtype {
    case child(ChildNode)
    case text(TextNode)
    case reference(ReferenceNode)
    case referenceList(ReferenceListNode)
}

/// A core rule nested inside this core rule. It may be displayed as a separate page or its content may be included in this rule's text, which will automatically generate a proper heading. No content node of a type other than
/// `Child` should follow a child node, since then it may look like the the text
/// may be part of the child node.
public struct ChildNode: EntitySubtype {
    /// The nested core rule's identifier.
    public let id: CoreRuleIdentifier
    
    /// If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule.
    public let include: Bool
}

/// A simple text block, containing one or multiple paragraphs. Headings are not allowed, they should be handled as nested core rules instead.
public struct TextNode: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TextNodeTranslation>
}

public struct TextNodeTranslation: EntitySubtype {
    /// Markdown-formatted text.
    public let text: NonEmptyMarkdown
}

/// Generate a list or table from a specific entity type.
public struct ReferenceListNode: EntitySubtype {
    public let source: ReferenceListNodeSource
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ReferenceListNodeTranslation>
}

@DiscriminatedEnum
public enum ReferenceListNodeSource: EntitySubtype {
    case attributes
    case qualityLevels
    case conditions
    case states
    case experienceLevels
    case races
    case cultures
    case professions
    case advantages
    case disadvantages
    case combatTechniques
    case specialAbilities
    case primaryAttributes
    case derivedCharacteristics
    case startingAge
    case archetypes
    case requirementsForRoutineChecks
    case generalSpecialAbilities
    case fatePointSpecialAbilities
    case languagesAndScripts
    case closeCombatBotch
    case defenseBotch
    case meleeCombatTechniques
    case rangedCombatBotch
    case rangedCombatDefenseBotch
    case rangedCombatTechniques
    case combatSpecialAbilities
    case properties
    case spellBotch
    case services
    case protectiveAndWardingCircles
    case elixirs
    case staffEnchantments
    case familiarsTricks
    case curses
    case elvenMagicalSongs
    case magicalSpecialAbilities
    case cantrips
    case spells
    case rituals
    case aspects
    case liturgyBotch
    case karmaSpecialAbilities
    case blessings
    case liturgicalChants
    case ceremonies
    case socialStatuses
    case poisons
    case diseases
    case healingHerbs
    case visibilityModifier
    case demons
    case elementals
    case animals
    case familiars
    case animalSpecialAbilities
    case equipmentPackages
    case items
    case optionalRules
    case improvementCost(ReferenceListNodeImprovementCostSource)
}

public struct ReferenceListNodeImprovementCostSource: EntitySubtype {
    /// Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost.
    public let target: ReferenceListNodeImprovementCostSourceTarget
    
    /// The highest value the improvement cost are displayed for.
    /// 
    /// The minimum maximum value should depend on what is the upper bound of the range of adventure point cost that are equal across multiple values (value increases for attributes are always 15 up to (and including) value 14, while value increases for skills are always 1 to 4, depending on the improvement cost, up to (and including) value 12), since those ranges should be combined into a single table row.
    public let maximumRating: Int    
    
    private enum CodingKeys: String, CodingKey {
        case target = "target"
        case maximumRating = "maximum_rating"
    }
}

public enum ReferenceListNodeImprovementCostSourceTarget: String, EntitySubtype {
    case attributes = "Attributes"
    case skills = "Skills"
}

public struct ReferenceListNodeTranslation: EntitySubtype {
    /// Markdown-formatted text.
    public let text: NonEmptyMarkdown
}

/// Generate the full text for a single entry as part of this core rule's text.
public struct ReferenceNode: EntitySubtype {
    public let id: CoreRuleDerivableContentIdentifier
}
