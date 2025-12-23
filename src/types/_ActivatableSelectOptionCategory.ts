import {
  Array,
  Boolean,
  Enum,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Integer,
  Object,
  Optional,
  Param,
  Required,
  String,
  TypeAlias,
  TypeArgument,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import {
  CeremonyIdentifier,
  CloseCombatTechniqueIdentifier,
  ElementIdentifier,
  LiturgicalChantIdentifier,
  RangedCombatTechniqueIdentifier,
  RitualIdentifier,
  SkillGroupIdentifier,
  SkillIdentifier,
  SpellIdentifier,
  TargetCategoryIdentifier,
} from "./_Identifier.js"
import {
  ActivatableIdentifier,
  CombatTechniqueIdentifier,
  SkillishIdentifier,
} from "./_IdentifierGroup.js"

export const SelectOptionCategory = Enum(import.meta.url, {
  name: "SelectOptionCategory",
  values: () => ({
    Blessings: EnumCase({ type: null }),
    Cantrips: EnumCase({ type: null }),
    TradeSecrets: EnumCase({ type: null }),
    Scripts: EnumCase({ type: null }),
    AnimalShapes: EnumCase({ type: null }),
    ArcaneBardTraditions: EnumCase({ type: null }),
    ArcaneDancerTraditions: EnumCase({ type: null }),
    SexPractices: EnumCase({ type: null }),
    Races: EnumCase({ type: null }),
    Cultures: EnumCase({ type: null }),
    RacesAndCultures: EnumCase({ type: null }),
    HomunculusTypes: EnumCase({ type: null }),
    BlessedTraditions: EnumCase({ type: IncludeIdentifier(BlessedTraditionsSelectOptionCategory) }),
    Elements: EnumCase({ type: IncludeIdentifier(ElementsSelectOptionCategory) }),
    Properties: EnumCase({ type: IncludeIdentifier(PropertiesSelectOptionCategory) }),
    Aspects: EnumCase({ type: IncludeIdentifier(AspectSelectOptionCategory) }),
    Diseases: EnumCase({ type: IncludeIdentifier(DiseasesPoisonsSelectOptionCategory) }),
    Poisons: EnumCase({ type: IncludeIdentifier(DiseasesPoisonsSelectOptionCategory) }),
    Languages: EnumCase({ type: IncludeIdentifier(LanguagesSelectOptionCategory) }),
    Skills: EnumCase({ type: IncludeIdentifier(SkillsSelectOptionCategory) }),
    CombatTechniques: EnumCase({ type: IncludeIdentifier(CombatTechniquesSelectOptionCategory) }),
    TargetCategories: EnumCase({ type: IncludeIdentifier(TargetCategoriesSelectOptionCategory) }),
  }),
})

export const TradeSecretSelectOptionCategory = Enum(import.meta.url, {
  name: "TradeSecretSelectOptionCategory",
  values: () => ({
    Blessings: EnumCase({ type: null }),
    Cantrips: EnumCase({ type: null }),
    Scripts: EnumCase({ type: null }),
    AnimalShapes: EnumCase({ type: null }),
    ArcaneBardTraditions: EnumCase({ type: null }),
    ArcaneDancerTraditions: EnumCase({ type: null }),
    SexPractices: EnumCase({ type: null }),
    Races: EnumCase({ type: null }),
    Cultures: EnumCase({ type: null }),
    RacesAndCultures: EnumCase({ type: null }),
    HomunculusTypes: EnumCase({ type: null }),
    BlessedTraditions: EnumCase({ type: IncludeIdentifier(BlessedTraditionsSelectOptionCategory) }),
    Elements: EnumCase({ type: IncludeIdentifier(ElementsSelectOptionCategory) }),
    Properties: EnumCase({ type: IncludeIdentifier(PropertiesSelectOptionCategory) }),
    Aspects: EnumCase({ type: IncludeIdentifier(AspectSelectOptionCategory) }),
    Diseases: EnumCase({ type: IncludeIdentifier(DiseasesPoisonsSelectOptionCategory) }),
    Poisons: EnumCase({ type: IncludeIdentifier(DiseasesPoisonsSelectOptionCategory) }),
    Languages: EnumCase({ type: IncludeIdentifier(LanguagesSelectOptionCategory) }),
    Skills: EnumCase({ type: IncludeIdentifier(SkillsSelectOptionCategory) }),
    CombatTechniques: EnumCase({ type: IncludeIdentifier(CombatTechniquesSelectOptionCategory) }),
    TargetCategories: EnumCase({ type: IncludeIdentifier(TargetCategoriesSelectOptionCategory) }),
  }),
})

const BlessedTraditionsSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "BlessedTraditionsSelectOptionCategory",
  type: () =>
    Object({
      require_principles: Optional({
        comment:
          "Should the principles (code) of the tradition be required to select the respective tradition?",
        type: Boolean(),
      }),
    }),
})

const ElementsSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "ElementsSelectOptionCategory",
  type: () =>
    Object({
      specific: Optional({
        comment: "Only include entries with the listed identifiers.",
        type: Array(ElementIdentifier(), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const PropertiesSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "PropertiesSelectOptionCategory",
  type: () =>
    Object({
      require_knowledge: Optional({
        comment: "Does each property require its corresponding property knowledge?",
        type: Boolean(),
      }),
      require_minimum_spellworks_on: Optional({
        comment:
          "Require a minimum number of spellworks of the respective property to be on a minimum skill rating.",
        type: IncludeIdentifier(RequiredMinimumSkillsToBeOnSkillRating),
      }),
    }),
})

const AspectSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "AspectSelectOptionCategory",
  type: () =>
    Object({
      require_knowledge: Optional({
        comment: "Does each aspect require its corresponding aspect knowledge?",
        type: Boolean(),
      }),
      use_master_of_suffix_as_name: Optional({
        comment:
          "The generated name should be the *Master of (Aspect)* suffix for this aspect instead of the aspect's name. If an aspect does not provide a suffix (such as the General aspect), it is automatically excluded from the list.",
        type: Boolean(),
      }),
      require_minimum_liturgies_on: Optional({
        comment:
          "Require a minimum number of liturgies of the respective aspect to be on a minimum skill rating.",
        type: IncludeIdentifier(RequiredMinimumSkillsToBeOnSkillRating),
      }),
    }),
})

const RequiredMinimumSkillsToBeOnSkillRating = TypeAlias(import.meta.url, {
  name: "RequiredMinimumSkillsToBeOnSkillRating",
  comment:
    "Require a minimum number of spellworks/liturgies of the respective property/aspect to be on a minimum skill rating.",
  type: () =>
    Object({
      number: Required({
        comment:
          "The minimum number of liturgies that need to be on the defined minimum skill rating.",
        type: Integer({ minimum: 1 }),
      }),
      rating: Required({
        comment: "The minimum skill rating the defined minimum number of liturgies need to be on.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const DiseasesPoisonsSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "DiseasesPoisonsSelectOptionCategory",
  type: () =>
    Object({
      use_half_level_as_ap_value: Optional({
        comment: "Only convert half the disease/poison level into the AP value.",
        type: Boolean(),
      }),
    }),
})

const LanguagesSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "LanguagesSelectOptionCategory",
  type: () =>
    Object({
      prerequisites: Optional({
        comment: "Generate prerequisites for each entry of the category.",
        type: Array(IncludeIdentifier(LanguagesSelectOptionCategoryPrerequisite), { minItems: 1 }),
      }),
    }),
})

const LanguagesSelectOptionCategoryPrerequisite = Enum(import.meta.url, {
  name: "LanguagesSelectOptionCategoryPrerequisite",
  values: () => ({
    SelectOption: EnumCase({ type: IncludeIdentifier(OptionPrerequisite) }),
  }),
})

const SkillsSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "SkillsSelectOptionCategory",
  type: () =>
    Object({
      categories: Required({
        comment: "A list of skill categories.",
        type: Array(IncludeIdentifier(SkillsSelectOptionCategoryCategory), { minItems: 1 }),
      }),
      ap_value: Optional({
        comment: "Generate AP values for each entry.",
        type: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [
          IncludeIdentifier(SkillishIdentifier),
        ]),
      }),
    }),
})

const SkillsSelectOptionCategoryCategory = Enum(import.meta.url, {
  name: "SkillsSelectOptionCategoryCategory",
  values: () => ({
    Skills: EnumCase({ type: IncludeIdentifier(SkillSelectOptionCategoryCategory) }),
    Spells: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [SpellIdentifier()]),
    }),
    Rituals: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [RitualIdentifier()]),
    }),
    LiturgicalChants: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        LiturgicalChantIdentifier(),
      ]),
    }),
    Ceremonies: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [CeremonyIdentifier()]),
    }),
  }),
})

const SkillSelectOptionCategoryCategory = TypeAlias(import.meta.url, {
  name: "SkillSelectOptionCategoryCategory",
  type: () =>
    Object({
      groups: Optional({
        comment: "Only include entries of the specified groups.",
        type: Array(SkillGroupIdentifier(), { minItems: 1 }),
      }),
      specific: Optional({
        comment: "Only include or exclude specific skills.",
        type: GenIncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategory, [
          SkillIdentifier(),
        ]),
      }),
      skill_applications: Optional({
        comment:
          "Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.",
        type: Array(IncludeIdentifier(SkillApplicationOrUse), { minItems: 1 }),
      }),
      skill_uses: Optional({
        comment:
          "Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier, the skill it belongs to is derived from the select option automatically. A translation can be left out if its name equals the name of the origin entry.",
        type: Array(IncludeIdentifier(SkillApplicationOrUse), { minItems: 1 }),
      }),
      prerequisites: Optional({
        comment: "Generate prerequisites for each entry of the category.",
        type: Array(IncludeIdentifier(SkillSelectOptionCategoryPrerequisite), { minItems: 1 }),
      }),
      ap_value: Optional({
        comment: "Generate AP values for each entry.",
        type: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [SkillIdentifier()]),
      }),
    }),
})

const CombatTechniquesSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "CombatTechniquesSelectOptionCategory",
  type: () =>
    Object({
      categories: Required({
        comment: "A list of combat technique categories.",
        type: Array(IncludeIdentifier(CombatTechniquesSelectOptionCategoryCategory), {
          minItems: 1,
        }),
      }),
      bindingCost: Optional({
        comment:
          "Generate binding cost values for each entry.\n\n*Note: This only works if the entry it is defined on supports binding costs, i.e. is a tradition artifact enchantment.*",
        type: GenIncludeIdentifier(SelectOptionsBindingCostValue, [
          IncludeIdentifier(CombatTechniqueIdentifier),
        ]),
      }),
      ap_value: Optional({
        comment: "Generate AP values for each entry.",
        type: GenIncludeIdentifier(SelectOptionsAdventurePointsValue, [
          IncludeIdentifier(CombatTechniqueIdentifier),
        ]),
      }),
    }),
})

const CombatTechniquesSelectOptionCategoryCategory = Enum(import.meta.url, {
  name: "CombatTechniquesSelectOptionCategoryCategory",
  values: () => ({
    CloseCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        CloseCombatTechniqueIdentifier(),
      ]),
    }),
    RangedCombatTechniques: EnumCase({
      type: GenIncludeIdentifier(GenericSkillsSelectOptionCategoryCategory, [
        RangedCombatTechniqueIdentifier(),
      ]),
    }),
  }),
})

const SkillApplicationOrUse = TypeAlias(import.meta.url, {
  name: "SkillApplicationOrUse",
  type: () =>
    Object({
      id: Required({
        comment: "The application’s or use’s identifier. An entry-unique, increasing integer.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "SkillApplicationOrUse",
        Object({
          name: Required({
            comment:
              "The name of the application or use if different from the activatable entry’s name.",
            type: String({ minLength: 1 }),
          }),
        }),
      ),
    }),
})

const GenericSkillsSelectOptionCategoryCategory = GenTypeAlias(import.meta.url, {
  name: "GenericSkillsSelectOptionCategoryCategory",
  parameters: [Param("Ref")],
  type: Ref =>
    Object({
      specific: Optional({
        comment: "Only include (`Intersection`) or exclude (`Difference`) specific entries.",
        type: GenIncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategory, [
          TypeArgument(Ref),
        ]),
      }),
      prerequisites: Optional({
        comment: "Generate prerequisites for each entry of the category.",
        type: Array(IncludeIdentifier(SkillSelectOptionCategoryPrerequisite), { minItems: 1 }),
      }),
    }),
})

const SpecificFromSkillSelectOptionCategoryCategory = GenTypeAlias(import.meta.url, {
  name: "SpecificFromSkillSelectOptionCategoryCategory",
  parameters: [Param("Ref")],
  type: Ref =>
    Object({
      operation: Required({
        type: IncludeIdentifier(SpecificFromSkillSelectOptionCategoryCategoryOperation),
      }),
      list: Required({
        comment: "The list of specific entries.",
        type: Array(TypeArgument(Ref), { minItems: 1, uniqueItems: true }),
      }),
    }),
})

const SpecificFromSkillSelectOptionCategoryCategoryOperation = Enum(import.meta.url, {
  name: "SpecificFromSkillSelectOptionCategoryCategoryOperation",
  comment: "Only include (`Intersection`) or exclude (`Difference`) specific entries.",
  values: () => ({
    Intersection: EnumCase({ type: null }),
    Difference: EnumCase({ type: null }),
  }),
})

const SkillSelectOptionCategoryPrerequisite = Enum(import.meta.url, {
  name: "SkillSelectOptionCategoryPrerequisite",
  values: () => ({
    Self: EnumCase({ type: IncludeIdentifier(SelfPrerequisite) }),
    SelectOption: EnumCase({ type: IncludeIdentifier(OptionPrerequisite) }),
  }),
})

const SelfPrerequisite = TypeAlias(import.meta.url, {
  name: "SelfPrerequisite",
  type: () =>
    Object({
      value: Required({
        comment: "The entry requires itself on a certain Skill Rating.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const OptionPrerequisite = TypeAlias(import.meta.url, {
  name: "OptionPrerequisite",
  comment: "The entry requires or prohibits itself as a select option of another entry.",
  type: () =>
    Object({
      id: Required({
        comment: "The target entry's identifier.",
        type: IncludeIdentifier(ActivatableIdentifier),
      }),
      active: Required({
        comment: "Is the select option required (`true`) or prohibited (`false`)?",
        type: Boolean(),
      }),
      level: Optional({
        comment: "The required level, if any.",
        type: Integer({ minimum: 2 }),
      }),
    }),
})

const SelectOptionsAdventurePointsValue = GenEnum(import.meta.url, {
  name: "SelectOptionsAdventurePointsValue",
  comment: "Generate AP values for each entry.",
  parameters: [Param("Identifier")],
  values: Identifier => ({
    DerivedFromImprovementCost: EnumCase({
      type: IncludeIdentifier(SelectOptionsDeriveAdventurePointsValueFromImprovementCost),
    }),
    Fixed: EnumCase({
      type: GenIncludeIdentifier(SelectOptionsFixedAdventurePointsValue, [
        TypeArgument(Identifier),
      ]),
    }),
  }),
})

const SelectOptionsDeriveAdventurePointsValueFromImprovementCost = TypeAlias(import.meta.url, {
  name: "SelectOptionsDeriveAdventurePointsValueFromImprovementCost",
  comment:
    "Derive the cost from the improvement cost of each entry. The AP value is calculated by multiplying the improvement cost with `multiplier` and then adding `offset`.",
  type: () =>
    Object({
      multiplier: Optional({
        comment:
          "This number is multiplied with the improvement cost of the entry (A = 1 to D = 4).",
        type: Integer({ minimum: 2 }),
      }),
      offset: Optional({
        comment: "This number is added to the multiplied improvement cost of the entry.",
        type: Integer(),
      }),
    }),
})

const SelectOptionsFixedAdventurePointsValue = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedAdventurePointsValue",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      map: Required({
        comment: "A mapping of skill identifiers to their specific AP values.",
        type: Array(
          GenIncludeIdentifier(SelectOptionsFixedAdventurePointsValueMapping, [
            TypeArgument(Identifier),
          ]),
        ),
      }),
      default: Required({
        comment:
          "The default value of an entry. Used as a fallback if no value is found in `list`.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SelectOptionsFixedAdventurePointsValueMapping = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedAdventurePointsValueMapping",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      id: Required({
        comment: "The entry’s identifier.",
        type: TypeArgument(Identifier),
      }),
      ap_value: Required({
        comment: "The AP value for the specified entry.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SelectOptionsBindingCostValue = GenEnum(import.meta.url, {
  name: "SelectOptionsBindingCostValue",
  comment: "Generate binding cost for each entry.",
  parameters: [Param("Identifier")],
  values: Identifier => ({
    Fixed: EnumCase({
      type: GenIncludeIdentifier(SelectOptionsFixedBindingCostValue, [TypeArgument(Identifier)]),
    }),
  }),
})

const SelectOptionsFixedBindingCostValue = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedBindingCostValue",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      map: Required({
        comment: "A mapping of skill identifiers to their specific binding cost values.",
        type: Array(
          GenIncludeIdentifier(SelectOptionsFixedBindingCostValueMapping, [
            TypeArgument(Identifier),
          ]),
        ),
      }),
      default: Required({
        comment:
          "The default value of an entry. Used as a fallback if no value is found in `list`.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const SelectOptionsFixedBindingCostValueMapping = GenTypeAlias(import.meta.url, {
  name: "SelectOptionsFixedBindingCostValueMapping",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      id: Required({
        comment: "The entry’s identifier.",
        type: TypeArgument(Identifier),
      }),
      bindingCost: Required({
        comment: "The binding cost for the specified entry.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const TargetCategoriesSelectOptionCategory = TypeAlias(import.meta.url, {
  name: "TargetCategoriesSelectOptionCategory",
  type: () =>
    Object({
      list: Required({
        comment: "A list of target categories.",
        type: Array(IncludeIdentifier(SpecificTargetCategory), { minItems: 1 }),
      }),
    }),
})

const SpecificTargetCategory = TypeAlias(import.meta.url, {
  name: "SpecificTargetCategory",
  type: () =>
    Object({
      id: Required({
        comment: "The target category’s identifier.",
        type: TargetCategoryIdentifier(),
      }),
      volume: Optional({
        comment: "The volume for this specific selection.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})
