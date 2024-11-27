//
//  Advantage.swift
//  OptolithDatabaseSchema
//

public struct Advantage: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let selectOptions: SelectOptions?

    public let skillApplications: SkillApplications?

    public let skillUses: SkillUses?

    public let maximum: Maximum?

    public let prerequisites: AdvantageDisadvantagePrerequisites?

    public let apValue: AdventurePointsValue

    /// Does this advantage count towards the maximum of AP to be spent on advantages?
    public let hasMaximumSpentInfluence: Bool

    /// Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications?
    public let isExclusiveToArcaneSpellworks: Bool

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AdvantageTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, maximum: Maximum? = nil, prerequisites: AdvantageDisadvantagePrerequisites? = nil, apValue: AdventurePointsValue, hasMaximumSpentInfluence: Bool, isExclusiveToArcaneSpellworks: Bool, src: PublicationRefs, translations: LocaleMap<AdvantageTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.maximum = maximum
        self.prerequisites = prerequisites
        self.apValue = apValue
        self.hasMaximumSpentInfluence = hasMaximumSpentInfluence
        self.isExclusiveToArcaneSpellworks = isExclusiveToArcaneSpellworks
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case hasMaximumSpentInfluence = "has_maximum_spent_influence"
        case isExclusiveToArcaneSpellworks = "is_exclusive_to_arcane_spellworks"
        case src = "src"
        case translations = "translations"
    }
}

public struct AdvantageTranslation: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    /// A string that is used as a label for an input field.
    public let input: Input?

    public let rules: Rules

    /// The range.
    public let range: String?

    public let apValue: AdventurePointsValueReplacement?

    /// A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced.
    public let apValueAppend: AdventurePointsValueAppend?

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, input: Input? = nil, rules: Rules, range: String? = nil, apValue: AdventurePointsValueReplacement? = nil, apValueAppend: AdventurePointsValueAppend? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.input = input
        self.rules = rules
        self.range = range
        self.apValue = apValue
        self.apValueAppend = apValueAppend
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case input = "input"
        case rules = "rules"
        case range = "range"
        case apValue = "ap_value"
        case apValueAppend = "ap_value_append"
        case errata = "errata"
    }
}