import * as DB from "tsondb/schema/dsl"
import { CoreRuleIdentifier } from "../_Identifier.js"
import { CoreRuleDerivableContentIdentifier } from "../_IdentifierGroup.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const CoreRule = DB.Entity(import.meta.url, {
  name: "CoreRule",
  namePlural: "CoreRules",
  type: () =>
    DB.Object({
      content: DB.Required({
        type: DB.Array(DB.IncludeIdentifier(ContentNode), { minItems: 1 }),
      }),
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "CoreRule",
        DB.Object({
          name: DB.Required({
            comment: "The core rule’s name.",
            type: DB.String({ minLength: 1 }),
          }),
          errata: DB.Optional({
            type: DB.IncludeIdentifier(Errata),
          }),
        }),
      ),
    }),
  instanceDisplayName: {},
  uniqueConstraints: [
    {
      entityMapKeyPath: "translations",
      keyPathInEntityMap: "name",
    },
  ],
})

const ContentNode = DB.Enum(import.meta.url, {
  name: "ContentNode",
  values: () => ({
    Child: DB.EnumCase({ type: DB.IncludeIdentifier(ChildNode) }),
    Text: DB.EnumCase({ type: DB.IncludeIdentifier(TextNode) }),
    Reference: DB.EnumCase({ type: DB.IncludeIdentifier(ReferenceNode) }),
    ReferenceList: DB.EnumCase({ type: DB.IncludeIdentifier(ReferenceListNode) }),
  }),
})

const ChildNode = DB.TypeAlias(import.meta.url, {
  name: "ChildNode",
  comment:
    "A core rule nested inside this core rule. It may be displayed as a separate page or its content may be included in this rule's text, which will automatically generate a proper heading. No content node of a type other than `Child` should follow a child node, since then it may look like the the text may be part of the child node.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The nested core rule’s identifier.",
        type: CoreRuleIdentifier(),
      }),
      include: DB.Required({
        comment:
          "If the nested core rule's content should be integrated into this core rule and a proper heading should be added. Otherwise create a link to a separate view of that core rule.",
        type: DB.Boolean(),
      }),
    }),
})

const TextNode = DB.TypeAlias(import.meta.url, {
  name: "TextNode",
  comment:
    "A simple text block, containing one or multiple paragraphs. Headings are not allowed, they should be handled as nested core rules instead.",
  type: () =>
    DB.Object({
      translations: NestedTranslationMap(
        DB.Required,
        "TextNode",
        DB.Object({
          text: DB.Required({
            comment: "Markdown-formatted text.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})

const ReferenceListNode = DB.TypeAlias(import.meta.url, {
  name: "ReferenceListNode",
  comment: "Generate a list or table from a specific entity type.",
  type: () =>
    DB.Object({
      source: DB.Required({
        type: DB.IncludeIdentifier(ReferenceListNodeSource),
      }),
      translations: NestedTranslationMap(
        DB.Required,
        "ReferenceListNode",
        DB.Object({
          text: DB.Required({
            comment: "Markdown-formatted text.",
            type: DB.String({ minLength: 1, isMarkdown: true }),
          }),
        }),
      ),
    }),
})

const ReferenceListNodeSource = DB.Enum(import.meta.url, {
  name: "ReferenceListNodeSource",
  values: () => ({
    Attributes: DB.EnumCase({ type: null }),
    QualityLevels: DB.EnumCase({ type: null }),
    Conditions: DB.EnumCase({ type: null }),
    States: DB.EnumCase({ type: null }),
    ExperienceLevels: DB.EnumCase({ type: null }),
    Races: DB.EnumCase({ type: null }),
    Cultures: DB.EnumCase({ type: null }),
    Professions: DB.EnumCase({ type: null }),
    Advantages: DB.EnumCase({ type: null }),
    Disadvantages: DB.EnumCase({ type: null }),
    CombatTechniques: DB.EnumCase({ type: null }),
    SpecialAbilities: DB.EnumCase({ type: null }),
    PrimaryAttributes: DB.EnumCase({ type: null }),
    DerivedCharacteristics: DB.EnumCase({ type: null }),
    StartingAge: DB.EnumCase({ type: null }),
    Archetypes: DB.EnumCase({ type: null }),
    RequirementsForRoutineChecks: DB.EnumCase({ type: null }),
    GeneralSpecialAbilities: DB.EnumCase({ type: null }),
    FatePointSpecialAbilities: DB.EnumCase({ type: null }),
    LanguagesAndScripts: DB.EnumCase({ type: null }),
    CloseCombatBotch: DB.EnumCase({ type: null }),
    DefenseBotch: DB.EnumCase({ type: null }),
    MeleeCombatTechniques: DB.EnumCase({ type: null }),
    RangedCombatBotch: DB.EnumCase({ type: null }),
    RangedCombatDefenseBotch: DB.EnumCase({ type: null }),
    RangedCombatTechniques: DB.EnumCase({ type: null }),
    CombatSpecialAbilities: DB.EnumCase({ type: null }),
    Properties: DB.EnumCase({ type: null }),
    SpellBotch: DB.EnumCase({ type: null }),
    Services: DB.EnumCase({ type: null }),
    ProtectiveAndWardingCircles: DB.EnumCase({ type: null }),
    Elixirs: DB.EnumCase({ type: null }),
    StaffEnchantments: DB.EnumCase({ type: null }),
    FamiliarsTricks: DB.EnumCase({ type: null }),
    Curses: DB.EnumCase({ type: null }),
    ElvenMagicalSongs: DB.EnumCase({ type: null }),
    MagicalSpecialAbilities: DB.EnumCase({ type: null }),
    Cantrips: DB.EnumCase({ type: null }),
    Spells: DB.EnumCase({ type: null }),
    Rituals: DB.EnumCase({ type: null }),
    Aspects: DB.EnumCase({ type: null }),
    LiturgyBotch: DB.EnumCase({ type: null }),
    KarmaSpecialAbilities: DB.EnumCase({ type: null }),
    Blessings: DB.EnumCase({ type: null }),
    LiturgicalChants: DB.EnumCase({ type: null }),
    Ceremonies: DB.EnumCase({ type: null }),
    SocialStatuses: DB.EnumCase({ type: null }),
    Poisons: DB.EnumCase({ type: null }),
    Diseases: DB.EnumCase({ type: null }),
    HealingHerbs: DB.EnumCase({ type: null }),
    VisibilityModifier: DB.EnumCase({ type: null }),
    Demons: DB.EnumCase({ type: null }),
    Elementals: DB.EnumCase({ type: null }),
    Animals: DB.EnumCase({ type: null }),
    Familiars: DB.EnumCase({ type: null }),
    AnimalSpecialAbilities: DB.EnumCase({ type: null }),
    EquipmentPackages: DB.EnumCase({ type: null }),
    Items: DB.EnumCase({ type: null }),
    OptionalRules: DB.EnumCase({ type: null }),
    ImprovementCost: DB.EnumCase({
      type: DB.IncludeIdentifier(ReferenceListNodeImprovementCostSource),
    }),
  }),
})

const ReferenceListNodeImprovementCostSource = DB.TypeAlias(import.meta.url, {
  name: "ReferenceListNodeImprovementCostSource",
  type: () =>
    DB.Object({
      target: DB.Required({
        comment:
          "Define if the cost for attributes or skills should be defined. The cost for attributes start with value 9, while the cost for skills start with 1 in addition to possible activation cost.",
        type: DB.IncludeIdentifier(ReferenceListNodeImprovementCostSourceTarget),
      }),
      maximum_rating: DB.Required({
        comment: `The highest value the improvement cost are displayed for.

The minimum maximum value should depend on what is the upper bound of the range of adventure point cost that are equal across multiple values (value increases for attributes are always 15 up to (and including) value 14, while value increases for skills are always 1 to 4, depending on the improvement cost, up to (and including) value 12), since those ranges should be combined into a single table row.`,
        type: DB.Integer({ minimum: 12 }),
      }),
    }),
})

const ReferenceListNodeImprovementCostSourceTarget = DB.Enum(import.meta.url, {
  name: "ReferenceListNodeImprovementCostSourceTarget",
  values: () => ({
    Attributes: DB.EnumCase({ type: null }),
    Skills: DB.EnumCase({ type: null }),
  }),
})

const ReferenceNode = DB.TypeAlias(import.meta.url, {
  name: "ReferenceNode",
  comment: "Generate the full text for a single entry as part of this core rule's text.",
  type: () =>
    DB.Object({
      id: DB.Required({
        comment: "The nested core rule’s identifier.",
        type: DB.IncludeIdentifier(CoreRuleDerivableContentIdentifier),
      }),
    }),
})
