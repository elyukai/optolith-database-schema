//
//  CoreRule.swift
//  OptolithDatabaseSchema
//

public struct CoreRule: LocalizableEntity {
    /// The core rule's identifier. An unique, increasing integer.
    public let id: Int

    public let content: [ContentNode]

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CoreRuleTranslation>

    public init(id: Int, content: [ContentNode], src: PublicationRefs, translations: LocaleMap<CoreRuleTranslation>) {
        self.id = id
        self.content = content
        self.src = src
        self.translations = translations
    }
}

public struct CoreRuleTranslation: EntitySubtype {
    /// The name of the optional rule.
    public let name: NonEmptyString

    public let errata: Errata?

    public init(name: NonEmptyString, errata: Errata? = nil) {
        self.name = name
        self.errata = errata
    }
}

public enum ContentNode: EntitySubtype {
    case child(ChildNode)
    case text(TextNode)
    case reference(ReferenceNode)
    case referenceList(ReferenceListNode)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case child = "child"
        case text = "text"
        case reference = "reference"
        case referenceList = "reference_list"
    }

    private enum Discriminator: String, Decodable {
        case child = "Child"
        case text = "Text"
        case reference = "Reference"
        case referenceList = "ReferenceList"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .child:
            self = .child(try container.decode(ChildNode.self, forKey: .child))
        case .text:
            self = .text(try container.decode(TextNode.self, forKey: .text))
        case .reference:
            self = .reference(try container.decode(ReferenceNode.self, forKey: .reference))
        case .referenceList:
            self = .referenceList(try container.decode(ReferenceListNode.self, forKey: .referenceList))
        }
    }
}

/// A core rule nested inside this core rule. It may be displayed as a separate page or its content may be included in this rule's text, which will automatically generate a proper heading. No content node of a type other than
/// `Child` should follow a child node, since then it may look like the the text
/// may be part of the child node.
public struct ChildNode: EntitySubtype {
    /// The nested core rule's identifier.
    public let id: CoreRuleIdentifier

    /// If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule.
    public let include: Bool

    public init(id: CoreRuleIdentifier, include: Bool) {
        self.id = id
        self.include = include
    }
}

/// A simple text block, containing one or multiple paragraphs. Headings are not allowed, they should be handled as nested core rules instead.
public struct TextNode: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<TextNodeTranslation>

    public init(translations: LocaleMap<TextNodeTranslation>) {
        self.translations = translations
    }
}

public struct TextNodeTranslation: EntitySubtype {
    /// Markdown-formatted text.
    public let text: NonEmptyMarkdown

    public init(text: NonEmptyMarkdown) {
        self.text = text
    }
}

/// Generate a list or table from a specific entity type.
public struct ReferenceListNode: EntitySubtype {
    public let source: ReferenceListNodeSource

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ReferenceListNodeTranslation>

    public init(source: ReferenceListNodeSource, translations: LocaleMap<ReferenceListNodeTranslation>) {
        self.source = source
        self.translations = translations
    }
}

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

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case attributes = "attributes"
        case qualityLevels = "quality_levels"
        case conditions = "conditions"
        case states = "states"
        case experienceLevels = "experience_levels"
        case races = "races"
        case cultures = "cultures"
        case professions = "professions"
        case advantages = "advantages"
        case disadvantages = "disadvantages"
        case combatTechniques = "combat_techniques"
        case specialAbilities = "special_abilities"
        case primaryAttributes = "primary_attributes"
        case derivedCharacteristics = "derived_characteristics"
        case startingAge = "starting_age"
        case archetypes = "archetypes"
        case requirementsForRoutineChecks = "requirements_for_routine_checks"
        case generalSpecialAbilities = "general_special_abilities"
        case fatePointSpecialAbilities = "fate_point_special_abilities"
        case languagesAndScripts = "languages_and_scripts"
        case closeCombatBotch = "close_combat_botch"
        case defenseBotch = "defense_botch"
        case meleeCombatTechniques = "melee_combat_techniques"
        case rangedCombatBotch = "ranged_combat_botch"
        case rangedCombatDefenseBotch = "ranged_combat_defense_botch"
        case rangedCombatTechniques = "ranged_combat_techniques"
        case combatSpecialAbilities = "combat_special_abilities"
        case properties = "properties"
        case spellBotch = "spell_botch"
        case services = "services"
        case protectiveAndWardingCircles = "protective_and_warding_circles"
        case elixirs = "elixirs"
        case staffEnchantments = "staff_enchantments"
        case familiarsTricks = "familiars_tricks"
        case curses = "curses"
        case elvenMagicalSongs = "elven_magical_songs"
        case magicalSpecialAbilities = "magical_special_abilities"
        case cantrips = "cantrips"
        case spells = "spells"
        case rituals = "rituals"
        case aspects = "aspects"
        case liturgyBotch = "liturgy_botch"
        case karmaSpecialAbilities = "karma_special_abilities"
        case blessings = "blessings"
        case liturgicalChants = "liturgical_chants"
        case ceremonies = "ceremonies"
        case socialStatuses = "social_statuses"
        case poisons = "poisons"
        case diseases = "diseases"
        case healingHerbs = "healing_herbs"
        case visibilityModifier = "visibility_modifier"
        case demons = "demons"
        case elementals = "elementals"
        case animals = "animals"
        case familiars = "familiars"
        case animalSpecialAbilities = "animal_special_abilities"
        case equipmentPackages = "equipment_packages"
        case items = "items"
        case optionalRules = "optional_rules"
        case improvementCost = "improvement_cost"
    }

    private enum Discriminator: String, Decodable {
        case attributes = "Attributes"
        case qualityLevels = "QualityLevels"
        case conditions = "Conditions"
        case states = "States"
        case experienceLevels = "ExperienceLevels"
        case races = "Races"
        case cultures = "Cultures"
        case professions = "Professions"
        case advantages = "Advantages"
        case disadvantages = "Disadvantages"
        case combatTechniques = "CombatTechniques"
        case specialAbilities = "SpecialAbilities"
        case primaryAttributes = "PrimaryAttributes"
        case derivedCharacteristics = "DerivedCharacteristics"
        case startingAge = "StartingAge"
        case archetypes = "Archetypes"
        case requirementsForRoutineChecks = "RequirementsForRoutineChecks"
        case generalSpecialAbilities = "GeneralSpecialAbilities"
        case fatePointSpecialAbilities = "FatePointSpecialAbilities"
        case languagesAndScripts = "LanguagesAndScripts"
        case closeCombatBotch = "CloseCombatBotch"
        case defenseBotch = "DefenseBotch"
        case meleeCombatTechniques = "MeleeCombatTechniques"
        case rangedCombatBotch = "RangedCombatBotch"
        case rangedCombatDefenseBotch = "RangedCombatDefenseBotch"
        case rangedCombatTechniques = "RangedCombatTechniques"
        case combatSpecialAbilities = "CombatSpecialAbilities"
        case properties = "Properties"
        case spellBotch = "SpellBotch"
        case services = "Services"
        case protectiveAndWardingCircles = "ProtectiveAndWardingCircles"
        case elixirs = "Elixirs"
        case staffEnchantments = "StaffEnchantments"
        case familiarsTricks = "FamiliarsTricks"
        case curses = "Curses"
        case elvenMagicalSongs = "ElvenMagicalSongs"
        case magicalSpecialAbilities = "MagicalSpecialAbilities"
        case cantrips = "Cantrips"
        case spells = "Spells"
        case rituals = "Rituals"
        case aspects = "Aspects"
        case liturgyBotch = "LiturgyBotch"
        case karmaSpecialAbilities = "KarmaSpecialAbilities"
        case blessings = "Blessings"
        case liturgicalChants = "LiturgicalChants"
        case ceremonies = "Ceremonies"
        case socialStatuses = "SocialStatuses"
        case poisons = "Poisons"
        case diseases = "Diseases"
        case healingHerbs = "HealingHerbs"
        case visibilityModifier = "VisibilityModifier"
        case demons = "Demons"
        case elementals = "Elementals"
        case animals = "Animals"
        case familiars = "Familiars"
        case animalSpecialAbilities = "AnimalSpecialAbilities"
        case equipmentPackages = "EquipmentPackages"
        case items = "Items"
        case optionalRules = "OptionalRules"
        case improvementCost = "ImprovementCost"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .attributes:
            self = .attributes
        case .qualityLevels:
            self = .qualityLevels
        case .conditions:
            self = .conditions
        case .states:
            self = .states
        case .experienceLevels:
            self = .experienceLevels
        case .races:
            self = .races
        case .cultures:
            self = .cultures
        case .professions:
            self = .professions
        case .advantages:
            self = .advantages
        case .disadvantages:
            self = .disadvantages
        case .combatTechniques:
            self = .combatTechniques
        case .specialAbilities:
            self = .specialAbilities
        case .primaryAttributes:
            self = .primaryAttributes
        case .derivedCharacteristics:
            self = .derivedCharacteristics
        case .startingAge:
            self = .startingAge
        case .archetypes:
            self = .archetypes
        case .requirementsForRoutineChecks:
            self = .requirementsForRoutineChecks
        case .generalSpecialAbilities:
            self = .generalSpecialAbilities
        case .fatePointSpecialAbilities:
            self = .fatePointSpecialAbilities
        case .languagesAndScripts:
            self = .languagesAndScripts
        case .closeCombatBotch:
            self = .closeCombatBotch
        case .defenseBotch:
            self = .defenseBotch
        case .meleeCombatTechniques:
            self = .meleeCombatTechniques
        case .rangedCombatBotch:
            self = .rangedCombatBotch
        case .rangedCombatDefenseBotch:
            self = .rangedCombatDefenseBotch
        case .rangedCombatTechniques:
            self = .rangedCombatTechniques
        case .combatSpecialAbilities:
            self = .combatSpecialAbilities
        case .properties:
            self = .properties
        case .spellBotch:
            self = .spellBotch
        case .services:
            self = .services
        case .protectiveAndWardingCircles:
            self = .protectiveAndWardingCircles
        case .elixirs:
            self = .elixirs
        case .staffEnchantments:
            self = .staffEnchantments
        case .familiarsTricks:
            self = .familiarsTricks
        case .curses:
            self = .curses
        case .elvenMagicalSongs:
            self = .elvenMagicalSongs
        case .magicalSpecialAbilities:
            self = .magicalSpecialAbilities
        case .cantrips:
            self = .cantrips
        case .spells:
            self = .spells
        case .rituals:
            self = .rituals
        case .aspects:
            self = .aspects
        case .liturgyBotch:
            self = .liturgyBotch
        case .karmaSpecialAbilities:
            self = .karmaSpecialAbilities
        case .blessings:
            self = .blessings
        case .liturgicalChants:
            self = .liturgicalChants
        case .ceremonies:
            self = .ceremonies
        case .socialStatuses:
            self = .socialStatuses
        case .poisons:
            self = .poisons
        case .diseases:
            self = .diseases
        case .healingHerbs:
            self = .healingHerbs
        case .visibilityModifier:
            self = .visibilityModifier
        case .demons:
            self = .demons
        case .elementals:
            self = .elementals
        case .animals:
            self = .animals
        case .familiars:
            self = .familiars
        case .animalSpecialAbilities:
            self = .animalSpecialAbilities
        case .equipmentPackages:
            self = .equipmentPackages
        case .items:
            self = .items
        case .optionalRules:
            self = .optionalRules
        case .improvementCost:
            self = .improvementCost(try container.decode(ReferenceListNodeImprovementCostSource.self, forKey: .improvementCost))
        }
    }
}

public struct ReferenceListNodeImprovementCostSource: EntitySubtype {
    /// Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost.
    public let `target`: ReferenceListNodeImprovementCostSourceTarget

    /// The highest value the improvement cost are displayed for.
    /// 
    /// The minimum maximum value should depend on what is the upper bound of the range of adventure point cost that are equal across multiple values (value increases for attributes are always 15 up to (and including) value 14, while value increases for skills are always 1 to 4, depending on the improvement cost, up to (and including) value 12), since those ranges should be combined into a single table row.
    public let maximumRating: Int

    public init(`target`: ReferenceListNodeImprovementCostSourceTarget, maximumRating: Int) {
        self.`target` = `target`
        self.maximumRating = maximumRating
    }

    private enum CodingKeys: String, CodingKey {
        case `target` = "target"
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

    public init(text: NonEmptyMarkdown) {
        self.text = text
    }
}

/// Generate the full text for a single entry as part of this core rule's text.
public struct ReferenceNode: EntitySubtype {
    public let id: CoreRuleDerivableContentIdentifier

    public init(id: CoreRuleDerivableContentIdentifier) {
        self.id = id
    }
}
