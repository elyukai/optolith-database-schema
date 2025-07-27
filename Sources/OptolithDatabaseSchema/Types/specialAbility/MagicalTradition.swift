import FileDB

@Model
public struct MagicalTradition {
      levels,
      select_options,
      skill_applications,
      skill_uses,
  /// The tradition’s primary attribute. Leave empty if the tradition does not have one.
  @Relationship(PrimaryAttribute)
  let primary: PrimaryAttribute.ID?

  /// Can a member of the tradition learn cantrips?
  let can_learn_cantrips: Boolean()

  /// Can a member of the tradition learn spells?
  let can_learn_spells: Boolean()

  /// Can a member of the tradition learn rituals?
  let can_learn_rituals: Boolean()

  /// Can this magical tradition bind familiars?
  let can_bind_familiars: Boolean()

  /// Does the tradition allow learning more traditions or having learned a different tradition before learning this tradition?
  let allows_multiple_traditions: Boolean()
  /// Is the maximum AP you’re able to spent on magical advantages and able to get by magical disadvantages different than the default of 50 AP?
  let alternative_magical_adventure_points_maximum: Integer({ minimum: 25, maximum: 30, multipleOf: 5 })?

  /// Are advantages/disadvantages required to not exclusively apply to arcane spellworks, but also to the tradition’s magical actions or applications?
  let require_non_spellwork_exclusive_effects: Boolean()

  /// Is this a magical dilettante tradition?
  let is_magical_dilettante: Boolean()
  /// If arcane spellworks from a different tradition count as arcane spellworks of this tradition, this is the different tradition’s reference.
  let use_arcane_spellworks_from_tradition: MagicalTraditionIdentifier()?
  /// The influences for the traditions. Influences are enabled by Focus Rules.
  let influences: Array(InfluenceIdentifier(), { minItems: 2 })?
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,

    /// The publications where you can find the entry.
    let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    @Relationship
    let translations: [String: Translation]

    struct Translation { // MagicalTraditionTranslation
          name,
          name_for_arcane_spellworks: Optional({
            comment:
              "The name used for the arcane spellworks of the tradition if it is different than the `name` of the special ability.",
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          special_rules: Required({
            comment:
              "The special rules of the tradition. They should be sorted like they are in the book.",
            type: Array(IncludeIdentifier(SpecialRule), { minItems: 1 }),
          }),

        let errata: Errata?
    }
}

@Embedded
public struct PrimaryAttribute {
  /// The attribute’s identifier.
  let id: AttributeIdentifier()?

  /// Typically, the value of the primary attribute (if one exists) is added onto the base of 20 AE to get the actual AE. But sometimes, only half the value is added.
  let use_half_for_arcane_energy: Boolean()
  }
