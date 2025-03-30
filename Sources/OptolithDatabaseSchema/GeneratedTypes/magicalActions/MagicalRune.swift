//
//  MagicalRune.swift
//  OptolithDatabaseSchema
//

public struct MagicalRune: LocalizableEntity {
    /// The magical rune's identifier. An unique, increasing integer.
    public let id: Int

    /// The options the magical rune has, if any.
    /// 
    /// If there are multiple options, the magical rune may be activated for each option, that is, multiple times.
    public let options: [MagicalRuneOption]?

    /// Lists the linked three attributes used to make a skill check.
    public let check: SkillCheck

    /// In some cases, the target's Spirit or Toughness is applied as a penalty.
    public let checkPenalty: MagicalRuneCheckPenalty?

    /// Measurable parameters of a magical rune.
    public let parameters: MagicalRunePerformanceParameters

    /// The associated property.
    public let property: PropertyReference

    /// States which column is used to improve the skill.
    public let improvementCost: MagicalRuneImprovementCost

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneTranslation>

    public init(id: Int, options: [MagicalRuneOption]? = nil, check: SkillCheck, checkPenalty: MagicalRuneCheckPenalty? = nil, parameters: MagicalRunePerformanceParameters, property: PropertyReference, improvementCost: MagicalRuneImprovementCost, src: PublicationRefs, translations: LocaleMap<MagicalRuneTranslation>) {
        self.id = id
        self.options = options
        self.check = check
        self.checkPenalty = checkPenalty
        self.parameters = parameters
        self.property = property
        self.improvementCost = improvementCost
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case options = "options"
        case check = "check"
        case checkPenalty = "check_penalty"
        case parameters = "parameters"
        case property = "property"
        case improvementCost = "improvement_cost"
        case src = "src"
        case translations = "translations"
    }
}

public struct MagicalRuneTranslation: EntitySubtype {
    /// The name of the magical rune.
    /// 
    /// If the rune has an option, the option’s name will/should not be included in the name as well as its surrounding parenthesis. It will/should be combined on demand.
    public let name: NonEmptyString

    /// The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes.
    public let nameInLibrary: NonEmptyString?

    /// The native name of the magical rune.
    public let nativeName: NonEmptyString?

    /// The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.
    public let effect: ActivatableSkillEffect

    @available(*, deprecated)
    public let cost: OldParameter

    @available(*, deprecated)
    public let craftingTime: OldParameterBySpeed

    @available(*, deprecated)
    public let duration: OldParameterBySpeed

    public let errata: Errata?

    public init(name: NonEmptyString, nameInLibrary: NonEmptyString? = nil, nativeName: NonEmptyString? = nil, effect: ActivatableSkillEffect, cost: OldParameter, craftingTime: OldParameterBySpeed, duration: OldParameterBySpeed, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.nativeName = nativeName
        self.effect = effect
        self.cost = cost
        self.craftingTime = craftingTime
        self.duration = duration
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case nativeName = "native_name"
        case effect = "effect"
        case cost = "cost"
        case craftingTime = "crafting_time"
        case duration = "duration"
        case errata = "errata"
    }
}

public struct OldParameterBySpeed: EntitySubtype {
    public let slow: OldParameter

    public let fast: OldParameter

    public init(slow: OldParameter, fast: OldParameter) {
        self.slow = slow
        self.fast = fast
    }
}

public struct MagicalRuneCheckPenalty: EntitySubtype {
    public let tag: String

    public let combatTechnique: MagicalRuneCombatTechniqueCheckPenalty

    public init(tag: String, combatTechnique: MagicalRuneCombatTechniqueCheckPenalty) {
        self.tag = tag
        self.combatTechnique = combatTechnique
    }

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case combatTechnique = "combat_technique"
    }
}

public struct MagicalRuneCombatTechniqueCheckPenalty: EntitySubtype {
    /// A map from combat techniques to their modifiers.
    public let map: [MagicalRuneCombatTechniqueCheckPenaltyMapping]

    public let rest: MagicalRuneCombatTechniqueCheckPenaltyRest

    public init(map: [MagicalRuneCombatTechniqueCheckPenaltyMapping], rest: MagicalRuneCombatTechniqueCheckPenaltyRest) {
        self.map = map
        self.rest = rest
    }
}

public struct MagicalRuneCombatTechniqueCheckPenaltyMapping: EntitySubtype {
    /// The combat technique's identifier.
    public let id: CombatTechniqueIdentifier

    /// The check modifier for the specified combat technique.
    public let modifier: Int

    public init(id: CombatTechniqueIdentifier, modifier: Int) {
        self.id = id
        self.modifier = modifier
    }
}

public struct MagicalRuneCombatTechniqueCheckPenaltyRest: EntitySubtype {
    /// The check modifier for combat techniques not specified in `map`.
    public let modifier: Int

    public init(modifier: Int) {
        self.modifier = modifier
    }
}

/// Measurable parameters of a magical rune.
public struct MagicalRunePerformanceParameters: EntitySubtype {
    /// The AE cost.
    public let cost: MagicalRuneCost

    /// The crafting time.
    public let craftingTime: MagicalRuneCraftingTime

    /// The duration.
    public let duration: MagicalRuneDuration

    public init(cost: MagicalRuneCost, craftingTime: MagicalRuneCraftingTime, duration: MagicalRuneDuration) {
        self.cost = cost
        self.craftingTime = craftingTime
        self.duration = duration
    }

    private enum CodingKeys: String, CodingKey {
        case cost = "cost"
        case craftingTime = "crafting_time"
        case duration = "duration"
    }
}

public enum MagicalRuneCost: EntitySubtype {
    case single(SingleMagicalRuneCost)
    case disjunction(MagicalRuneCostDisjunction)
    case derivedFromOption

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case single = "single"
        case disjunction = "disjunction"
        case derivedFromOption = "derived_from_option"
    }

    private enum Discriminator: String, Decodable {
        case single = "Single"
        case disjunction = "Disjunction"
        case derivedFromOption = "DerivedFromOption"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .single:
            self = .single(try container.decode(SingleMagicalRuneCost.self, forKey: .single))
        case .disjunction:
            self = .disjunction(try container.decode(MagicalRuneCostDisjunction.self, forKey: .disjunction))
        case .derivedFromOption:
            self = .derivedFromOption
        }
    }
}

public enum MagicalRuneOptionCost: EntitySubtype {
    case single(SingleMagicalRuneCost)
    case disjunction(MagicalRuneCostDisjunction)

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case single = "single"
        case disjunction = "disjunction"
    }

    private enum Discriminator: String, Decodable {
        case single = "Single"
        case disjunction = "Disjunction"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .single:
            self = .single(try container.decode(SingleMagicalRuneCost.self, forKey: .single))
        case .disjunction:
            self = .disjunction(try container.decode(MagicalRuneCostDisjunction.self, forKey: .disjunction))
        }
    }
}

public struct SingleMagicalRuneCost: EntitySubtype {
    /// The AE cost value.
    public let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<SingleMagicalRuneCostTranslation>?

    public init(value: Int, translations: LocaleMap<SingleMagicalRuneCostTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
}

public struct SingleMagicalRuneCostTranslation: EntitySubtype {
    /// A note, appended to the generated string in parenthesis.
    public let note: ResponsiveTextOptional

    public init(note: ResponsiveTextOptional) {
        self.note = note
    }
}

public struct MagicalRuneCostDisjunction: EntitySubtype {
    /// A set of possible AE cost values.
    public let list: [SingleMagicalRuneCost]

    public init(list: [SingleMagicalRuneCost]) {
        self.list = list
    }
}

public struct MagicalRuneCraftingTime: EntitySubtype {
    /// The (unitless) crafting time.
    public let value: Int

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneCraftingTimeTranslation>?

    public init(value: Int, translations: LocaleMap<MagicalRuneCraftingTimeTranslation>? = nil) {
        self.value = value
        self.translations = translations
    }
}

public struct MagicalRuneCraftingTimeTranslation: EntitySubtype {
    /// The crafting time has to be per a specific countable entity, e.g. `8 action per person`.
    public let per: ResponsiveText

    public init(per: ResponsiveText) {
        self.per = per
    }
}

public struct MagicalRuneDuration: EntitySubtype {
    /// The duration on slow rune application.
    public let slow: CheckResultBasedDuration

    /// The duration on fast rune application.
    public let fast: CheckResultBasedDuration

    public init(slow: CheckResultBasedDuration, fast: CheckResultBasedDuration) {
        self.slow = slow
        self.fast = fast
    }
}

public enum MagicalRuneImprovementCost: EntitySubtype {
    case constant(ConstantMagicalRuneImprovementCost)
    case derivedFromOption

    private enum CodingKeys: String, CodingKey {
        case tag = "tag"
        case constant = "constant"
        case derivedFromOption = "derived_from_option"
    }

    private enum Discriminator: String, Decodable {
        case constant = "Constant"
        case derivedFromOption = "DerivedFromOption"
    }

    public init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let tag = try container.decode(Discriminator.self, forKey: .tag)
        switch tag {
        case .constant:
            self = .constant(try container.decode(ConstantMagicalRuneImprovementCost.self, forKey: .constant))
        case .derivedFromOption:
            self = .derivedFromOption
        }
    }
}

public struct ConstantMagicalRuneImprovementCost: EntitySubtype {
    public let value: ImprovementCost

    public init(value: ImprovementCost) {
        self.value = value
    }
}

public struct MagicalRuneOption: EntitySubtype {
    /// The magical rune option’s identifier. An unique, increasing integer.
    public let id: Int

    /// The option-specific AE cost.
    public let cost: MagicalRuneOptionCost

    /// The option-specific improvement cost.
    public let improvementCost: ImprovementCost

    public let suboption: MagicalRuneSuboption

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalRuneOptionTranslation>

    public init(id: Int, cost: MagicalRuneOptionCost, improvementCost: ImprovementCost, suboption: MagicalRuneSuboption, translations: LocaleMap<MagicalRuneOptionTranslation>) {
        self.id = id
        self.cost = cost
        self.improvementCost = improvementCost
        self.suboption = suboption
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case cost = "cost"
        case improvementCost = "improvement_cost"
        case suboption = "suboption"
        case translations = "translations"
    }
}

public struct MagicalRuneSuboption: EntitySubtype {
    public let tag: String

    public let custom: CustomMagicalRuneSuboption

    public init(tag: String, custom: CustomMagicalRuneSuboption) {
        self.tag = tag
        self.custom = custom
    }
}

public struct CustomMagicalRuneSuboption: EntitySubtype {
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CustomMagicalRuneSuboptionTranslation>

    public init(translations: LocaleMap<CustomMagicalRuneSuboptionTranslation>) {
        self.translations = translations
    }
}

public struct CustomMagicalRuneSuboptionTranslation: EntitySubtype {
    /// One or more examples for the suboption.
    public let examples: [NonEmptyString]?

    public init(examples: [NonEmptyString]? = nil) {
        self.examples = examples
    }
}

public struct MagicalRuneOptionTranslation: EntitySubtype {
    /// The name of the option.
    /// 
    /// The surrounding parenthesis will/should not be included, they will/should be generated.
    public let name: NonEmptyString

    /// The native name of the magical rune option.
    public let nativeName: NonEmptyString

    public init(name: NonEmptyString, nativeName: NonEmptyString) {
        self.name = name
        self.nativeName = nativeName
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nativeName = "native_name"
    }
}
