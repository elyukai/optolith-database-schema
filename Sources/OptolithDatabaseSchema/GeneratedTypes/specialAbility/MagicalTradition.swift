//
//  MagicalTradition.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public struct MagicalTradition: LocalizableEntity {
    public let id: Id
    
    public let levels: Levels?
    
    public let selectOptions: SelectOptions?
    
    public let skillApplications: SkillApplications?
    
    public let skillUses: SkillUses?
    
    /// The tradition's primary attribute. Leave empty if the tradition does not have one.
    public let primary: PrimaryAttribute?
    
    /// Can a member of the tradition learn cantrips?
    public let canLearnCantrips: Bool
    
    /// Can a member of the tradition learn spells?
    public let canLearnSpells: Bool
    
    /// Can a member of the tradition learn rituals?
    public let canLearnRituals: Bool
    
    /// Can this magical tradition bind familiars?
    public let canBindFamiliars: Bool
    
    /// Does the tradition allow learning more traditions or having learned a different tradition before learning this tradition?
    public let allowsMultipleTraditions: Bool
    
    /// Is the maximum AP you're able to spent on magical advantages and able to get by magical disadvantages different than the default of 50 AP?
    public let alternativeMagicalAdventurePointsMaximum: Int?
    
    /// Are advantages/disadvantages required to not exclusively apply to arcane spellworks, but also to the tradition's magical actions or applications?
    public let requireNonSpellworkExclusiveEffects: Bool
    
    /// Is this a magical dilettante tradition?
    public let isMagicalDilettante: Bool
    
    /// If arcane spellworks from a different tradition count as arcane spellworks of this tradition, this is the different tradition's reference.
    public let useArcaneSpellworksFromTradition: MagicalTraditionReference?
    
    /// The Influences for the traditions. Influences are enabled by Focus Rules.
    public let influences: [Influence]?
    
    public let prerequisites: GeneralPrerequisites?
    
    public let apValue: AdventurePointsValue
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<MagicalTraditionTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case skillApplications = "skill_applications"
        case skillUses = "skill_uses"
        case primary = "primary"
        case canLearnCantrips = "can_learn_cantrips"
        case canLearnSpells = "can_learn_spells"
        case canLearnRituals = "can_learn_rituals"
        case canBindFamiliars = "can_bind_familiars"
        case allowsMultipleTraditions = "allows_multiple_traditions"
        case alternativeMagicalAdventurePointsMaximum = "alternative_magical_adventure_points_maximum"
        case requireNonSpellworkExclusiveEffects = "require_non_spellwork_exclusive_effects"
        case isMagicalDilettante = "is_magical_dilettante"
        case useArcaneSpellworksFromTradition = "use_arcane_spellworks_from_tradition"
        case influences = "influences"
        case prerequisites = "prerequisites"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct PrimaryAttribute: EntitySubtype {
    /// The attribute's identifier.
    public let id: AttributeIdentifier
    
    /// Typically, the value of the primary attribute (if one exists) is added onto the base of 20 AE to get the actual AE. But sometimes, only half the value is added.
    public let useHalfForArcaneEnergy: Bool    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case useHalfForArcaneEnergy = "use_half_for_arcane_energy"
    }
}

public struct MagicalTraditionTranslation: EntitySubtype {
    public let name: Name
    
    /// The name used for the traditions list of arcane spellworks if it is different than the `name` of the special ability.
    public let nameForArcaneSpellworks: String?
    
    public let nameInLibrary: NameInLibrary?
    
    /// The special rules of the tradition. They should be sorted like they are in the book.
    public let specialRules: [SpecialRule]
    
    public let errata: Errata?    
    
    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameForArcaneSpellworks = "name_for_arcane_spellworks"
        case nameInLibrary = "name_in_library"
        case specialRules = "special_rules"
        case errata = "errata"
    }
}
