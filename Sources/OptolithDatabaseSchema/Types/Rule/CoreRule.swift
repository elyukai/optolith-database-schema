import FileDB

@Model
public struct CoreRule {
    @MinItems(1)
    let content: [ContentNode]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // CoreRuleTranslation
        /// The core rule’s name.
        @MinLength(1)
        let name: String

        /// A list of errata for the entry in the specific language.
        @MinItems(1)
        let errata: [Erratum]?
    }
}

@ModelEnum
public enum ContentNode {
    case child(ChildNode)
    case text(TextNode)
    case reference(ReferenceNode)
    case referenceList(ReferenceListNode)
}

/// A core rule nested inside this core rule. It may be displayed as a separate page or its content may be included in this rule's text, which will automatically generate a proper heading. No content node of a type other than `Child` should follow a child node, since then it may look like the the text may be part of the child node.
@Embedded
public struct ChildNode {
    /// The nested core rule’s identifier.
    @Relationship(CoreRule.self)
    let id: CoreRule.ID

    /// If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule.
    let include: Bool
}

/// A simple text block, containing one or multiple paragraphs. Headings are not allowed, they should be handled as nested core rules instead.
@Embedded
public struct TextNode {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // TextNodeTranslation
        /// Markdown-formatted text.
        @MinLength(1)
        @Markdown
        let text: String
    }
}

/// Generate a list or table from a specific entity type.
@Embedded
public struct ReferenceListNode {
    let source: ReferenceListNodeSource

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // ReferenceListNodeTranslation
        /// Markdown-formatted text.
        @MinLength(1)
        @Markdown
        let text: String
    }
}

@ModelEnum
public enum ReferenceListNodeSource {
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

@Embedded
public struct ReferenceListNodeImprovementCostSource {
    /// Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost.
    let target: ReferenceListNodeImprovementCostSourceTarget

    /// The highest value the improvement cost are displayed for.
    ///
    /// The minimum maximum value should depend on what is the upper bound of the range of adventure point cost that are equal across multiple values (value increases for attributes are always 15 up to (and including) value 14, while value increases for skills are always 1 to 4, depending on the improvement cost, up to (and including) value 12), since those ranges should be combined into a single table row.
    @Minimum(12)
    let maximum_rating: Int
}

@ModelEnum
public enum ReferenceListNodeImprovementCostSourceTarget {
    case attributes
    case skills
}

/// Generate the full text for a single entry as part of this core rule's text.
@Embedded
public struct ReferenceNode {
    /// The nested core rule’s identifier.
    let id: CoreRuleDerivableContentIdentifier
}
