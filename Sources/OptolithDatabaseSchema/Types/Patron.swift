import FileDB

@Model
public struct Patron {

  /// The patron’s category.
  let category: PatronCategoryIdentifier()

  /// The patron-specific skills.
  let skills: Array(SkillIdentifier(), { minItems: 3, maxItems: 3 })

  /// The patron is only available to a certain set of cultures. It may be available to all, it may be available to only specific ones (intersection) and it may be available to all except specific ones to the listed cultures (difference).
  @Relationship(PatronCulture)
  let culture: PatronCulture.ID

  /// The list of cultures where patrons from this category can be the primary patron of.
  let primary_patron_cultures: Array(CultureIdentifier(), { uniqueItems: true })
  /// The patron-specific powers. Used by animist power Animal Powers I–III and should only be present on animal patrons.
  @Relationship(AnimalPowers)
  let powers: AnimalPowers.ID?
  /// The patron-specific AE cost. Used by several animist forces for animal patrons.
  let ae_cost: Integer({ minimum: 2, multipleOf: 2 })?
  /// The patron-specific improvement cost. Used by several animist forces for animal patrons.
  @Relationship(ImprovementCost)
  let improvement_cost: ImprovementCost.ID?
      common_advantages: Required({
        comment: `The patron may grant common advantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(AdvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_disadvantages: Required({
        comment: `The patron may grant common disadvantages that are taken into account during character creation.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(DisadvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
      common_spellworks: Required({
        comment: `The animist may learn spellworks common for this patron.

*Source:* Geisterwald & Knochenklippen, p. 6-7`,
        type: Array(DisadvantageIdentifier(), { minItems: 1, uniqueItems: true }),
      }),

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // PatronTranslation

        /// The patron’s name.
        let name: String({ minLength: 1 })
    }
}

/// The patron cultures the patron is or is not part of. If the patron is part of all patron cultures, the set should be empty and the operation should be difference.
@Embedded
public struct PatronCulture {

  /// The AE cost value.
  let set: Array(CultureIdentifier(), { uniqueItems: true })
  /// The interval in which you have to pay the AE cost again.
  @Relationship(PatronCultureOperation)
  let operation: PatronCultureOperation.ID?
  }

/// The set operation to combine the set of all patron cultures with the specified set of patron cultures: If they should intersect, the patron is only part of the given cultures. If they should differ, the patron is only part of the cultures that are not given.
@ModelEnum
public enum PatronCultureOperation {
    case Intersection
    case Difference
}

@Embedded
public struct AnimalPowers {
      level1: Required({
        type: IncludeIdentifier(AnimalPowersLevel1),
      }),
      level2: Required({
        type: IncludeIdentifier(AnimalPowersLevel2),
      }),
      level3: Required({
        type: IncludeIdentifier(AnimalPowersLevel3),
      }),
  }

@Embedded
public struct AdvantageAnimalPower {

  /// The advantage’s identifier.
  let id: AdvantageIdentifier()
  /// It grants a higher level of the advantage.
  let level: Integer({ minimum: 2 })?
  /// It grants a specific general option of the advantage.
  let option: Integer({ minimum: 1 })?
  }

@Embedded
public struct SkillAnimalPower {

  /// The skill’s identifier.
  let id: SkillIdentifier()

  /// The points that gets added to the skill’s rating.
  let points: Integer({ minimum: 1 })
  }

@ModelEnum
public enum AnimalPowerLevel1 {
    case Advantage(IncludeIdentifier(AdvantageAnimalPower))
    case Skill(IncludeIdentifier(SkillAnimalPower))
}

const AnimalPowersLevel1 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel1",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel1), { minItems: 1, uniqueItems: true }),
})

@Embedded
public struct CombatAnimalPower {

  /// The combat value.
  @Relationship(CombatAnimalPowerType)
  let id: CombatAnimalPowerType.ID
  /// The value that gets added to the combat value.
  let value: Integer({ minimum: 1 })?
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
    case Combat(IncludeIdentifier(CombatAnimalPower))
}

const AnimalPowersLevel2 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel2",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel2), { minItems: 1, uniqueItems: true }),
})

@Embedded
public struct AttributeAnimalPower {

  /// The attribute’s identifier.
  let id: AttributeIdentifier()

  /// The value that gets added to the attribute.
  let value: Integer({ minimum: 1 })
  }

@ModelEnum
public enum AnimalPowerLevel3 {
    case Attribute(IncludeIdentifier(AttributeAnimalPower))
}

const AnimalPowersLevel3 = TypeAlias(import.meta.url, {
  name: "AnimalPowersLevel3",
  type: () => Array(IncludeIdentifier(AnimalPowerLevel3), { minItems: 1, uniqueItems: true }),
})
