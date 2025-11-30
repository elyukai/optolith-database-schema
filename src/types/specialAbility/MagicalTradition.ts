import {
  Array,
  Boolean,
  Entity,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  explicit_select_options,
  levels,
  name,
  name_in_library,
  select_options,
  skill_applications,
  skill_uses,
} from "../_Activatable.js"
import {
  AttributeIdentifier,
  InfluenceIdentifier,
  MagicalTraditionIdentifier,
} from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"
import { SpecialRule } from "./_Tradition.js"

export const MagicalTradition = Entity(import.meta.url, {
  name: "MagicalTradition",
  namePlural: "MagicalTraditions",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      skill_applications,
      skill_uses,
      primary: Optional({
        comment:
          "The tradition’s primary attribute. Leave empty if the tradition does not have one.",
        type: IncludeIdentifier(PrimaryAttribute),
      }),
      can_learn_cantrips: Required({
        comment: "Can a member of the tradition learn cantrips?",
        type: Boolean(),
      }),
      can_learn_spells: Required({
        comment: "Can a member of the tradition learn spells?",
        type: Boolean(),
      }),
      can_learn_rituals: Required({
        comment: "Can a member of the tradition learn rituals?",
        type: Boolean(),
      }),
      can_bind_familiars: Required({
        comment: "Can this magical tradition bind familiars?",
        type: Boolean(),
      }),
      allows_multiple_traditions: Required({
        comment:
          "Does the tradition allow learning more traditions or having learned a different tradition before learning this tradition?",
        type: Boolean(),
      }),
      alternative_magical_adventure_points_maximum: Optional({
        comment:
          "Is the maximum AP you’re able to spent on magical advantages and able to get by magical disadvantages different than the default of 50 AP?",
        type: Integer({ minimum: 25, maximum: 30, multipleOf: 5 }),
      }),
      require_non_spellwork_exclusive_effects: Required({
        comment:
          "Are advantages/disadvantages required to not exclusively apply to arcane spellworks, but also to the tradition’s magical actions or applications?",
        type: Boolean(),
      }),
      is_magical_dilettante: Required({
        comment: "Is this a magical dilettante tradition?",
        type: Boolean(),
      }),
      use_arcane_spellworks_from_tradition: Optional({
        comment:
          "If arcane spellworks from a different tradition count as arcane spellworks of this tradition, this is the different tradition’s reference.",
        type: MagicalTraditionIdentifier(),
      }),
      influences: Optional({
        comment: "The influences for the traditions. Influences are enabled by Focus Rules.",
        type: Array(InfluenceIdentifier(), { minItems: 2 }),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "MagicalTradition",
        Object({
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
          supplemental_content: Optional({
            comment:
              "Supplemental content for the tradition, such as additional information or clarifications.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  displayName: {},
})

export const PrimaryAttribute = TypeAlias(import.meta.url, {
  name: "PrimaryAttribute",
  type: () =>
    Object({
      id: Optional({
        comment: "The attribute’s identifier.",
        type: AttributeIdentifier(),
      }),
      use_half_for_arcane_energy: Required({
        comment:
          "Typically, the value of the primary attribute (if one exists) is added onto the base of 20 AE to get the actual AE. But sometimes, only half the value is added.",
        type: Boolean(),
      }),
    }),
})
