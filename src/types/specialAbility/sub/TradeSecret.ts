import {
  Boolean,
  Entity,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/dsl"
import { name_in_library } from "../../_Activatable.js"
import {
  AdventurePointsDependingOnActiveInstances,
  FixedAdventurePointsValue,
} from "../../_ActivatableAdventurePointsValue.js"
import { TradeSecretSelectOptionCategory } from "../../_ActivatableSelectOptionCategory.js"
import { explicit_select_options } from "../../_ActivatableSelectOptions.js"
import { PlainGeneralPrerequisites } from "../../_Prerequisite.js"
import { NestedTranslationMap } from "../../Locale.js"
import { Errata } from "../../source/_Erratum.js"
import { src } from "../../source/_PublicationRef.js"

export const TradeSecret = Entity(import.meta.url, {
  name: "TradeSecret",
  namePlural: "TradeSecrets",
  type: () =>
    Object({
      select_options: Optional({
        comment: `Definitions for possible options for the activatable entry.

      Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
        type: IncludeIdentifier(TradeSecretSelectOptions),
      }),
      explicit_select_options,
      ap_value: Required({
        comment: "The trade secret’s adventure point value",
        type: IncludeIdentifier(TradeSecretAdventurePointsValue),
      }),
      is_secret_knowledge: Required({
        comment: "Is this trade secret considered secret knowledge?",
        type: Boolean(),
      }),
      prerequisites: Optional({
        type: IncludeIdentifier(PlainGeneralPrerequisites),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "TradeSecret",
        Object({
          name: Required({
            comment: "The trade secret’s name.",
            type: String({ minLength: 1 }),
          }),
          name_in_library,
          description: Optional({
            comment: "The description of the trade secret.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
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

const TradeSecretSelectOptions = TypeAlias(import.meta.url, {
  name: "TradeSecretSelectOptions",
  comment: `Definitions for possible options for the activatable entry. They can either be derived from entry categories or be defined explicitly. Both can happen as well, but if there is an explicitly defined select option and a derived select option has the same identifier (which may only happen if skill or combat technique identifiers are used for explicit select options), the explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can be made explicit using the more detailed configuration for both derived categories and explicit options. There are quite a few entries whose option logic cannot be fully represented here, so that it needs to be implemented manually.`,
  type: () =>
    Object(
      {
        derived: Optional({
          comment: `An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then.`,
          type: IncludeIdentifier(TradeSecretSelectOptionCategory),
        }),
      },
      { minProperties: 1 },
    ),
})

const TradeSecretAdventurePointsValue = Enum(import.meta.url, {
  name: "TradeSecretAdventurePointsValue",
  values: () => ({
    Fixed: EnumCase({ type: IncludeIdentifier(FixedAdventurePointsValue) }),
    DependingOnActiveInstances: EnumCase({
      type: IncludeIdentifier(AdventurePointsDependingOnActiveInstances),
    }),
  }),
})
