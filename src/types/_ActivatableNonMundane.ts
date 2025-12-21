import {
  Array,
  Boolean,
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
import { NestedTranslationMap } from "./Locale.js"
import { DurationUnitValue } from "./_ActivatableSkillDuration.js"
import { AspectIdentifier, PropertyIdentifier } from "./_Identifier.js"
import { VolumePointsOptionReferenceIdentifier } from "./_IdentifierGroup.js"
import { ResponsiveText, ResponsiveTextOptional } from "./_ResponsiveText.js"

const EnchantmentCost = Enum(import.meta.url, {
  name: "EnchantmentCost",
  values: () => ({
    ArcaneEnergyCost: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCost) }),
    BindingCost: EnumCase({ type: IncludeIdentifier(BindingCost) }),
  }),
})

export const cost = Optional({
  comment: "The cost when casting the entry.",
  type: IncludeIdentifier(EnchantmentCost),
})

export const ArcaneEnergyCost = Enum(import.meta.url, {
  name: "ArcaneEnergyCost",
  comment: "The AE cost.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedArcaneEnergyCost) }),
    PerCountable: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCostPerCountable) }),
    Interval: EnumCase({ type: IncludeIdentifier(IntervalArcaneEnergyCost) }),
    ActivationAndHalfInterval: EnumCase({
      type: IncludeIdentifier(ActivationAndHalfIntervalArcaneEnergyCost),
    }),
    Indefinite: EnumCase({ type: IncludeIdentifier(IndefiniteArcaneEnergyCost) }),
    Disjunction: EnumCase({ type: IncludeIdentifier(ArcaneEnergyCostDisjunction) }),
    Variable: EnumCase({ type: null }),
  }),
})

export const aeCost = Optional({
  comment: "The AE cost.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "FixedArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      is_permanent: Optional({
        comment: "Set to `true` if the AE costs are permanent.",
        type: Boolean(),
      }),
      interval: Optional({
        comment: "Specified if the AE cost `value` has to be paid for each time interval.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      per_level: Optional({
        comment:
          "The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).",
        type: IncludeIdentifier(FixedArcaneEnergyCostPerLevel),
      }),
      translations: NestedTranslationMap(
        Optional,
        "FixedArcaneEnergyCost",
        Object(
          {
            note: Optional({
              comment: "A note, appended to the generated option string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const FixedArcaneEnergyCostPerLevel = Enum(import.meta.url, {
  name: "FixedArcaneEnergyCostPerLevel",
  comment:
    "The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`).",
  values: () => ({
    Compressed: EnumCase({ type: null }),
    Verbose: EnumCase({ type: null }),
  }),
})

const ArcaneEnergyCostPerCountable = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostPerCountable",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value that has to be per a specific countable entity.",
        type: Integer({ minimum: 1 }),
      }),
      base_value: Optional({
        comment:
          "If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "ArcaneEnergyCostPerCountable",
        Object({
          per: Required({
            comment: "The cost have to be per a specific countable entity, e.g. `8 AE per person`.",
            type: IncludeIdentifier(ResponsiveText),
          }),
          note: Optional({
            comment: "A note, appended to the generated string in parenthesis.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        }),
      ),
    }),
})

const IntervalArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "IntervalArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment: "The AE cost value that has to be payed each interval.",
        type: Integer({ minimum: 1 }),
      }),
      interval: Required({
        comment: "The time interval for which the AE cost `value` has to be paid.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const ActivationAndHalfIntervalArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "ActivationAndHalfIntervalArcaneEnergyCost",
  type: () =>
    Object({
      value: Required({
        comment:
          "The AE cost value that has to be payed for activation. Half of this value has to be payed each interval.",
        type: Integer({ minimum: 2, multipleOf: 2 }),
      }),
      interval: Required({
        comment: "The time interval for which the AE cost `value` has to be paid.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
    }),
})

const IndefiniteArcaneEnergyCost = TypeAlias(import.meta.url, {
  name: "IndefiniteArcaneEnergyCost",
  type: () =>
    Object({
      modifier: Optional({
        comment:
          "Specified if the indefinite AP cost description needs to be modified by a certain value.",
        type: IncludeIdentifier(IndefiniteArcaneEnergyCostModifier),
      }),
      translations: NestedTranslationMap(
        Required,
        "IndefiniteArcaneEnergyCost",
        Object({
          description: Required({
            comment: "A description of where the cost come from.",
            type: IncludeIdentifier(ResponsiveText),
          }),
        }),
      ),
    }),
})

const IndefiniteArcaneEnergyCostModifier = TypeAlias(import.meta.url, {
  name: "IndefiniteArcaneEnergyCostModifier",
  type: () =>
    Object({
      arithmetic: Required({
        comment: "The arithmetic how to apply the `value` to the `base`.",
        type: IncludeIdentifier(IndefiniteArcaneEnergyCostModifierArithmetic),
      }),
      value: Required({
        comment: "The value that is applied to the `base` using the defined `arithmetic`.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const IndefiniteArcaneEnergyCostModifierArithmetic = Enum(import.meta.url, {
  name: "IndefiniteArcaneEnergyCostModifierArithmetic",
  values: () => ({
    Add: EnumCase({ type: null }),
  }),
})

const ArcaneEnergyCostDisjunction = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunction",
  type: () =>
    Object({
      interval: Optional({
        comment: "Specified if the selected AE cost option has to be paid for each time interval.",
        type: IncludeIdentifier(ArcaneEnergyCostDisjunctionInterval),
      }),
      options: Required({
        comment: "The possible AE cost values.",
        type: Array(IncludeIdentifier(ArcaneEnergyCostDisjunctionOption), { minItems: 1 }),
      }),
    }),
})

const ArcaneEnergyCostDisjunctionInterval = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunctionInterval",
  type: () =>
    Object({
      value: Required({
        comment: "The interval itself.",
        type: IncludeIdentifier(DurationUnitValue),
      }),
      activation_value: Required({
        comment: "The AE cost value for activation.",
        type: Integer({ minimum: 1 }),
      }),
      after_activation: Required({
        comment: `Set to \`true\` if the action where the enchantment is casted does not as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation.

This works different than other sustained spells, since for them the end of the cast usually already counts as part of the first interval.`,
        type: Boolean(),
      }),
    }),
})

const ArcaneEnergyCostDisjunctionOption = TypeAlias(import.meta.url, {
  name: "ArcaneEnergyCostDisjunctionOption",
  type: () =>
    Object({
      value: Required({
        comment: "A possible AE cost value.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "ArcaneEnergyCostDisjunctionOption",
        Object(
          {
            note: Optional({
              comment: "A note, appended to the generated option string in parenthesis.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const Volume = Enum(import.meta.url, {
  name: "Volume",
  comment: "The volume points the enchantment needs.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedVolume) }),
    PerLevel: EnumCase({ type: IncludeIdentifier(VolumePerLevel) }),
    ByLevel: EnumCase({ type: IncludeIdentifier(VolumeByLevel) }),
    Map: EnumCase({ type: IncludeIdentifier(VolumeMap) }),
    DerivedFromSelection: EnumCase({ type: IncludeIdentifier(VolumeDerivedFromSelection) }),
  }),
})

export const volume = Required({
  comment: "The volume points the enchantment needs.",
  type: IncludeIdentifier(Volume),
})

export const volume_l10n = Optional({
  comment: "The volume points the enchantment needs.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedVolume = TypeAlias(import.meta.url, {
  name: "FixedVolume",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const VolumePerLevel = TypeAlias(import.meta.url, {
  name: "VolumePerLevel",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points per level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const VolumeByLevel = TypeAlias(import.meta.url, {
  name: "VolumeByLevel",
  type: () =>
    Object({
      list: Required({
        comment:
          "The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on.",
        type: Array(IncludeIdentifier(VolumeByLevelItem), { minItems: 2 }),
      }),
    }),
})

const VolumeByLevelItem = TypeAlias(import.meta.url, {
  name: "VolumeByLevelItem",
  type: () =>
    Object({
      points: Required({
        comment: "The volume points for this level.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

const VolumeMap = TypeAlias(import.meta.url, {
  name: "VolumeMap",
  comment: `A content that is \`3/4/5 Points for Chimera, Daimonid, Golems, Undead / Fairies, Ghosts / Demons, Elementals\` may be respresented as the following map:

\`\`\`yaml
options:
  - points: 3
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Chimera, Daimonid, Golems, Undead"
        label_standalone: "Chimera/Daimonid/Golems/Undead"
  - points: 4
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Fairies, Ghosts"
        label_standalone: "Fairies/Ghosts"
  - points: 5
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Demons, Elementals"
        label_standalone: "Demons/Elementals"
\`\`\`

This will generate the exact same string as seen above. The associated options are not present in the example, but they link to the options the volume specification is meant for.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(VolumeMapOption), { minItems: 2 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "VolumeMap",
        Object(
          {
            list_prepend: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            list_append: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const VolumeMapOption = TypeAlias(import.meta.url, {
  name: "VolumeMapOption",
  type: () =>
    Object({
      points: Required({
        comment: "The full permanent AE cost value for this option.",
        type: Integer({ minimum: 1 }),
      }),
      associated_options: Required({
        comment: "Links to the options this volume specification is meant for.",
        type: Array(IncludeIdentifier(VolumeMapOptionAssociatedOption), { minItems: 1 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "VolumeMapOption",
        Object(
          {
            label: Required({
              comment: "The description of the option for cost string generation.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            label_standalone: Optional({
              comment:
                "The description of the option if used standalone. Only used if different from `label`.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const VolumeMapOptionAssociatedOption = TypeAlias(import.meta.url, {
  name: "VolumeMapOptionAssociatedOption",
  type: () =>
    Object({
      id: Required({
        comment: "The option’s identifier.",
        type: IncludeIdentifier(VolumePointsOptionReferenceIdentifier),
      }),
    }),
})

const VolumeDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "VolumeDerivedFromSelection",
  type: () =>
    Object({
      fallback: Required({
        comment: "The volume for the selection if it does not define a specific one.",
        type: Integer({ minimum: 0 }),
      }),
    }),
})

export const BindingCost = Enum(import.meta.url, {
  name: "BindingCost",
  comment: "The binding cost for an enchantment.",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedBindingCost) }),
    PerLevel: EnumCase({ type: IncludeIdentifier(BindingCostPerLevel) }),
    Map: EnumCase({ type: IncludeIdentifier(BindingCostMap) }),
    DerivedFromSelection: EnumCase({ type: IncludeIdentifier(BindingCostDerivedFromSelection) }),
  }),
})

export const bindingCost = Optional({
  comment: "The binding cost for an enchantment.",
  isDeprecated: true,
  type: String({ minLength: 1 }),
})

const FixedBindingCost = TypeAlias(import.meta.url, {
  name: "FixedBindingCost",
  type: () =>
    Object({
      permanent_value: Required({
        comment: `The permanent AE cost.

If the enchantment has multiple levels, it is only applied for the first level.`,
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const BindingCostPerLevel = TypeAlias(import.meta.url, {
  name: "BindingCostPerLevel",
  type: () =>
    Object({
      permanent_value: Required({
        comment: "The permanent AE cost per level.",
        type: Integer({ minimum: 1 }),
      }),
    }),
})

const BindingCostMap = TypeAlias(import.meta.url, {
  name: "BindingCostMap",
  comment: `A content that is \`2/4/8 permanent AE for spell-swords with the combat technique Daggers, Swords, or Two-Handed Swords\` may be respresented as the following map:

\`\`\`yaml
options:
  - permanent_value: 2
    translations:
      en-US:
        label: "Daggers"
        label_standalone: "Dagger"
  - permanent_value: 4
    translations:
      en-US:
        label: "Swords"
        label_standalone: "Sword"
  - permanent_value: 8
    translations:
      en-US:
        label: "Two-Handed Swords"
        label_standalone: "Two-Handed Sword"
list_prepend: "spell-swords with the combat technique"
\`\`\`

This will generate the exact same string as seen above.`,
  type: () =>
    Object({
      options: Required({
        comment: "The possible costs and associated labels.",
        type: Array(IncludeIdentifier(BindingCostMapOption), { minItems: 2 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "BindingCostMap",
        Object(
          {
            list_prepend: Optional({
              comment: "Place a string between the `for` and the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            list_append: Optional({
              comment: "Place a string after the grouped map option labels.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
            replacement: Optional({
              comment:
                "If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.",
              type: IncludeIdentifier(ResponsiveTextOptional),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const BindingCostMapOption = TypeAlias(import.meta.url, {
  name: "BindingCostMapOption",
  type: () =>
    Object({
      permanent_value: Required({
        comment: "The full permanent AE cost value for this option.",
        type: Integer({ minimum: 1 }),
      }),
      translations: NestedTranslationMap(
        Required,
        "BindingCostMapOption",
        Object({
          label: Required({
            comment: "The description of the option for cost string generation.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
          label_standalone: Optional({
            comment:
              "The description of the option if used standalone. Only used if different from `label`.",
            type: IncludeIdentifier(ResponsiveTextOptional),
          }),
        }),
      ),
    }),
})

const BindingCostDerivedFromSelection = TypeAlias(import.meta.url, {
  name: "BindingCostDerivedFromSelection",
  type: () =>
    Object({
      fallback: Required({
        comment: "The binding cost for the selection if it does not define a specific one.",
        type: Integer({ minimum: 0 }),
      }),
      translations: NestedTranslationMap(
        Optional,
        "BindingCostDerivedFromSelection",
        Object(
          {
            listPrepend: Optional({
              comment: "Place a string between the `for` and the grouped option names.",
              type: String({ minLength: 1 }),
            }),
            replacement: Optional({
              comment:
                "A replacement for the generated text if it would not match the original one.",
              type: String({ minLength: 1, isMarkdown: true }),
            }),
          },
          { minProperties: 1 },
        ),
      ),
    }),
})

const PropertyDeclaration = Enum(import.meta.url, {
  name: "PropertyDeclaration",
  comment:
    "The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.",
  values: () => ({
    DependingOnSelection: EnumCase({ type: null }),
    Fixed: EnumCase({ type: PropertyIdentifier() }),
  }),
})

export const property = () =>
  Required({
    comment:
      "The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.",
    type: IncludeIdentifier(PropertyDeclaration),
  })

export const propertyOptional = () =>
  Optional({
    comment:
      "The magic property’s identifier. `DependingOnProperty` can only be used if the special ability has an option to select a property.",
    type: IncludeIdentifier(PropertyDeclaration),
  })

export const aspect = () =>
  Required({
    comment: "The blessed aspect.",
    type: AspectIdentifier(),
  })

export const aspectOptional = () =>
  Optional({
    comment: "The blessed aspect.",
    type: AspectIdentifier(),
  })
