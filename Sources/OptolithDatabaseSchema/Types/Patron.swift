import FileDB

@Model
public struct Patron {
    /// The patron’s category.
    @Relationship(PatronCategory.self)
    let category: PatronCategory.ID

    /// The patron-specific skills.
    @MinItems(3)
    @MaxItems(3)
    @Relationship(Skill.self)
    let skills: [Skill.ID]

    /// The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference).
    let culture: PatronCulture

    /// The list of cultures where patrons from this category can be the primary patron of.
    @UniqueItems
    @Relationship(Culture.self)
    let primary_patron_cultures: [Culture.ID]

    /// The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons.
    let powers: AnimalPowers?

    /// The patron-specific AE cost. Used by several animist forces for animal patrons.
    @Minimum(2)
    @MultipleOf(2)
    let ae_cost: Int?

    /// The patron-specific improvement cost. Used by several animist forces for animal patrons.
    let improvement_cost: ImprovementCost?

    /// The patron may grant common advantages that are taken into account during character creation.
    ///
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    @MinItems(1)
    @UniqueItems
    @Relationship(Advantage.self)
    let common_advantages: [Advantage.ID]

    /// The patron may grant common disadvantages that are taken into account during character creation.
    ///
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    @MinItems(1)
    @UniqueItems
    @Relationship(Disadvantage.self)
    let common_disadvantages: [Disadvantage.ID]

    /// The animist may learn spellworks common for this patron.
    ///
    /// *Source:* Geisterwald & Knochenklippen, p. 6-7
    @MinItems(1)
    @UniqueItems
    @Relationship(Disadvantage.self)
    let common_spellworks: [Disadvantage.ID]

    /// The publications where you can find the entry.
    @MinItems(1)
    let src: [PublicationRef]

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship(Locale.self)
    let translations: [String: Translation]

    @Embedded
    struct Translation {  // PatronTranslation
        /// The patron’s name.
        @MinLength(1)
        let name: String
    }
}

/// The patron cultures the patron is or is not part of. If the patron is part of all patron cultures, the set should be empty and the operation should be difference.
@Embedded
public struct PatronCulture {
    /// The AE cost value.
    @UniqueItems
    @Relationship(Culture.self)
    let set: [Culture.ID]

    /// The interval in which you have to pay the AE cost again.
    let operation: PatronCultureOperation?
}

/// The set operation to combine the set of all patron cultures with the specified set of patron cultures: If they should intersect, the patron is only part of the given cultures. If they should differ, the patron is only part of the cultures that are not given.
@ModelEnum
public enum PatronCultureOperation {
    case Intersection
    case Difference
}

@Embedded
public struct AnimalPowers {
    @MinItems(1)
    @UniqueItems
    let level1: [AnimalPowerLevel1]

    @MinItems(1)
    @UniqueItems
    let level2: [AnimalPowerLevel2]

    @MinItems(1)
    @UniqueItems
    let level3: [AnimalPowerLevel3]
}

@Embedded
public struct AdvantageAnimalPower {
    /// The advantage’s identifier.
    @Relationship(Advantage.self)
    let id: Advantage.ID

    /// It grants a higher level of the advantage.
    @Minimum(2)
    let level: Int?

    /// It grants a specific general option of the advantage.
    @Minimum(1)
    let option: Int?
}

@Embedded
public struct SkillAnimalPower {
    /// The skill’s identifier.
    @Relationship(Skill.self)
    let id: Skill.ID

    /// The points that gets added to the skill’s rating.
    @Minimum(1)
    let points: Int
}

@ModelEnum
public enum AnimalPowerLevel1 {
    case Advantage(AdvantageAnimalPower)
    case Skill(SkillAnimalPower)
}

@Embedded
public struct CombatAnimalPower {
    /// The combat value.
    let id: CombatAnimalPowerType

    /// The value that gets added to the combat value.
    @Minimum(1)
    let value: Int?
}

@ModelEnum
public enum CombatAnimalPowerType {
    case Attack
    case Parry
    case RangedCombat
    case Dodge
    case DamagePoints
    case Protection
}

@ModelEnum
public enum AnimalPowerLevel2 {
    case Combat(CombatAnimalPower)
}

@Embedded
public struct AttributeAnimalPower {
    /// The attribute’s identifier.
    @Relationship(Attribute.self)
    let id: Attribute.ID

    /// The value that gets added to the attribute.
    @Minimum(1)
    let value: Int
}

@ModelEnum
public enum AnimalPowerLevel3 {
    case Attribute(AttributeAnimalPower)
}
