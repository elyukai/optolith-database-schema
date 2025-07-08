import {
  Array,
  Boolean,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { CoreRuleIdentifier } from "../_Identifier.js"
import { CoreRuleDerivableContentIdentifier } from "../_IdentifierGroup.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CoreRule = Entity(import.meta.url, {
  name: "CoreRule",
  namePlural: "CoreRules",
  type: () =>
    Object({
      content: Required({
        type: Array(IncludeIdentifier(ContentNode), { minItems: 1 }),
      }),
      src,
      translations: NestedLocaleMap(
        Required,
        "CoreRuleTranslation",
        Object({
          name: Required({
            comment: "The core rule’s name.",
            type: String({ minLength: 1 }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const ContentNode = Enum(import.meta.url, {
  name: "ContentNode",
  values: () => ({
    Child: EnumCase({ type: IncludeIdentifier(ChildNode) }),
    Text: EnumCase({ type: IncludeIdentifier(TextNode) }),
    Reference: EnumCase({ type: IncludeIdentifier(ReferenceNode) }),
    ReferenceList: EnumCase({ type: IncludeIdentifier(ReferenceListNode) }),
  }),
})

const ChildNode = TypeAlias(import.meta.url, {
  name: "ChildNode",
  comment:
    "A core rule nested inside this core rule. It may be displayed as a separate page or its content may be included in this rule's text, which will automatically generate a proper heading. No content node of a type other than `Child` should follow a child node, since then it may look like the the text may be part of the child node.",
  type: () =>
    Object({
      id: Required({
        comment: "The nested core rule’s identifier.",
        type: CoreRuleIdentifier,
      }),
      include: Required({
        comment:
          "If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule.",
        type: Boolean(),
      }),
    }),
})

const TextNode = TypeAlias(import.meta.url, {
  name: "TextNode",
  comment:
    "A simple text block, containing one or multiple paragraphs. Headings are not allowed, they should be handled as nested core rules instead.",
  type: () =>
    Object({
      translations: NestedLocaleMap(
        Required,
        "TextNodeTranslation",
        Object({
          text: Required({
            comment: "Markdown-formatted text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

const ReferenceListNode = TypeAlias(import.meta.url, {
  name: "ReferenceListNode",
  comment: "Generate a list or table from a specific entity type.",
  type: () =>
    Object({
      source: Required({
        type: IncludeIdentifier(ReferenceListNodeSource),
      }),
      translations: NestedLocaleMap(
        Required,
        "ReferenceListNodeTranslation",
        Object({
          text: Required({
            comment: "Markdown-formatted text.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
        })
      ),
    }),
})

const ReferenceListNodeSource = Enum(import.meta.url, {
  name: "ReferenceListNodeSource",
  values: () => ({
    Attributes: EnumCase({ type: null }),
    QualityLevels: EnumCase({ type: null }),
    Conditions: EnumCase({ type: null }),
    States: EnumCase({ type: null }),
    ExperienceLevels: EnumCase({ type: null }),
    Races: EnumCase({ type: null }),
    Cultures: EnumCase({ type: null }),
    Professions: EnumCase({ type: null }),
    Advantages: EnumCase({ type: null }),
    Disadvantages: EnumCase({ type: null }),
    CombatTechniques: EnumCase({ type: null }),
    SpecialAbilities: EnumCase({ type: null }),
    PrimaryAttributes: EnumCase({ type: null }),
    DerivedCharacteristics: EnumCase({ type: null }),
    StartingAge: EnumCase({ type: null }),
    Archetypes: EnumCase({ type: null }),
    RequirementsForRoutineChecks: EnumCase({ type: null }),
    GeneralSpecialAbilities: EnumCase({ type: null }),
    FatePointSpecialAbilities: EnumCase({ type: null }),
    LanguagesAndScripts: EnumCase({ type: null }),
    CloseCombatBotch: EnumCase({ type: null }),
    DefenseBotch: EnumCase({ type: null }),
    MeleeCombatTechniques: EnumCase({ type: null }),
    RangedCombatBotch: EnumCase({ type: null }),
    RangedCombatDefenseBotch: EnumCase({ type: null }),
    RangedCombatTechniques: EnumCase({ type: null }),
    CombatSpecialAbilities: EnumCase({ type: null }),
    Properties: EnumCase({ type: null }),
    SpellBotch: EnumCase({ type: null }),
    Services: EnumCase({ type: null }),
    ProtectiveAndWardingCircles: EnumCase({ type: null }),
    Elixirs: EnumCase({ type: null }),
    StaffEnchantments: EnumCase({ type: null }),
    FamiliarsTricks: EnumCase({ type: null }),
    Curses: EnumCase({ type: null }),
    ElvenMagicalSongs: EnumCase({ type: null }),
    MagicalSpecialAbilities: EnumCase({ type: null }),
    Cantrips: EnumCase({ type: null }),
    Spells: EnumCase({ type: null }),
    Rituals: EnumCase({ type: null }),
    Aspects: EnumCase({ type: null }),
    LiturgyBotch: EnumCase({ type: null }),
    KarmaSpecialAbilities: EnumCase({ type: null }),
    Blessings: EnumCase({ type: null }),
    LiturgicalChants: EnumCase({ type: null }),
    Ceremonies: EnumCase({ type: null }),
    SocialStatuses: EnumCase({ type: null }),
    Poisons: EnumCase({ type: null }),
    Diseases: EnumCase({ type: null }),
    HealingHerbs: EnumCase({ type: null }),
    VisibilityModifier: EnumCase({ type: null }),
    Demons: EnumCase({ type: null }),
    Elementals: EnumCase({ type: null }),
    Animals: EnumCase({ type: null }),
    Familiars: EnumCase({ type: null }),
    AnimalSpecialAbilities: EnumCase({ type: null }),
    EquipmentPackages: EnumCase({ type: null }),
    Items: EnumCase({ type: null }),
    OptionalRules: EnumCase({ type: null }),
    ImprovementCost: EnumCase({ type: IncludeIdentifier(ReferenceListNodeImprovementCostSource) }),
  }),
})

const ReferenceListNodeImprovementCostSource = TypeAlias(import.meta.url, {
  name: "ReferenceListNodeImprovementCostSource",
  type: () =>
    Object({
      target: Required({
        comment:
          "Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost.",
        type: IncludeIdentifier(ReferenceListNodeImprovementCostSourceTarget),
      }),
      maximum_rating: Required({
        comment: `The highest value the improvement cost are displayed for.

The minimum maximum value should depend on what is the upper bound of the range of adventure point cost that are equal across multiple values (value increases for attributes are always 15 up to (and including) value 14, while value increases for skills are always 1 to 4, depending on the improvement cost, up to (and including) value 12), since those ranges should be combined into a single table row.`,
        type: Integer({ minimum: 12 }),
      }),
    }),
})

const ReferenceListNodeImprovementCostSourceTarget = Enum(import.meta.url, {
  name: "ReferenceListNodeImprovementCostSourceTarget",
  values: () => ({
    Attributes: EnumCase({ type: null }),
    Skills: EnumCase({ type: null }),
  }),
})

const ReferenceNode = TypeAlias(import.meta.url, {
  name: "ReferenceNode",
  comment: "Generate the full text for a single entry as part of this core rule's text.",
  type: () =>
    Object({
      id: Required({
        comment: "The nested core rule’s identifier.",
        type: IncludeIdentifier(CoreRuleDerivableContentIdentifier),
      }),
    }),
})
