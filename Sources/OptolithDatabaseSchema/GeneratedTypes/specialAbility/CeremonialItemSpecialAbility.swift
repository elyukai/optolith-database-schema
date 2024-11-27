//
//  CeremonialItemSpecialAbility.swift
//  OptolithDatabaseSchema
//

public struct CeremonialItemSpecialAbility: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let selectOptions: SelectOptions?

    public let skillApplications: SkillApplications?

    public let skillUses: SkillUses?

    public let maximum: Maximum?

    public let aspect: AspectDeclaration?

    public let prerequisites: GeneralPrerequisites?

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<CeremonialItemSpecialAbilityTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, skillApplications: SkillApplications? = nil, skillUses: SkillUses? = nil, maximum: Maximum? = nil, aspect: AspectDeclaration? = nil, prerequisites: GeneralPrerequisites? = nil, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<CeremonialItemSpecialAbilityTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.skillApplications = skillApplications
        self.skillUses = skillUses
        self.maximum = maximum
        self.aspect = aspect
        self.prerequisites = prerequisites
        self.apValue = apValue
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
        case aspect = "aspect"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct CeremonialItemSpecialAbilityTranslation: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    public let effect: Effect

    /// The prerequisites text. It is only used if the text cannot be generated from the given information.
    public let prerequisites: PrerequisitesReplacement?

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, effect: Effect, prerequisites: PrerequisitesReplacement? = nil, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.effect = effect
        self.prerequisites = prerequisites
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case effect = "effect"
        case prerequisites = "prerequisites"
        case errata = "errata"
    }
}
