import {
  Array,
  Boolean,
  EnumCase,
  GenEnum,
  GenIncludeIdentifier,
  GenTypeAlias,
  IncludeIdentifier,
  Object,
  Optional,
  Param,
  Required,
  type Type,
  TypeArgument,
} from "tsondb/schema/def"
import { MagicalTraditionIdentifier, PatronIdentifier } from "./_Identifier.js"
import { AdvancedSpecialAbilityRestrictedOptionIdentifier } from "./_IdentifierGroup.js"
import { DisplayOption } from "./prerequisites/DisplayOption.js"

const AdvancedSpecialAbility = GenEnum(import.meta.url, {
  name: "AdvancedSpecialAbility",
  comment: "A reference to an advanced special ability.",
  parameters: [Param("Identifier")],
  values: Identifier => ({
    General: EnumCase({ type: TypeArgument(Identifier) }),
    RestrictOptions: EnumCase({
      type: GenIncludeIdentifier(RestrictAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]),
    }),
    OneOf: EnumCase({
      type: GenIncludeIdentifier(OneOfAdvancedSpecialAbilityOptions, [TypeArgument(Identifier)]),
    }),
    DeriveFromExternalOption: EnumCase({
      type: GenIncludeIdentifier(AdvancedSpecialAbilityDerivedFromExternalOption, [
        TypeArgument(Identifier),
      ]),
    }),
  }),
})

const RestrictAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "RestrictAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      id: Required({
        comment: "The advanced special ability’s identifier.",
        type: TypeArgument(Identifier),
      }),
      option: Required({
        comment:
          "Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed.",
        type: Array(IncludeIdentifier(AdvancedSpecialAbilityRestrictedOptionIdentifier), {
          minItems: 1,
        }),
      }),
    }),
})

const OneOfAdvancedSpecialAbilityOptions = GenTypeAlias(import.meta.url, {
  name: "OneOfAdvancedSpecialAbilityOptions",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      options: Required({
        comment: "The possible advanced special abilities.",
        type: Array(TypeArgument(Identifier), { minItems: 2 }),
      }),
      is_selection_required_on_purchase: Required({
        comment:
          "Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later.",
        type: Boolean(),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const AdvancedSpecialAbilityDerivedFromExternalOption = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOption",
  parameters: [Param("Identifier")],
  type: Identifier =>
    Object({
      external_entry: Required({
        comment: "The possible advanced special abilities.",
        type: MagicalTraditionIdentifier(),
      }),
      map: Required({
        comment: "Map options from the external entry to allowed advanced special abilities.",
        type: Array(
          GenIncludeIdentifier(AdvancedSpecialAbilityDerivedFromExternalOptionMapping, [
            TypeArgument(Identifier),
          ]),
          { minItems: 1 },
        ),
      }),
      display_option: Optional({
        type: IncludeIdentifier(DisplayOption),
      }),
    }),
})

const AdvancedSpecialAbilityDerivedFromExternalOptionMapping = GenTypeAlias(import.meta.url, {
  name: "AdvancedSpecialAbilityDerivedFromExternalOptionMapping",
  parameters: [Param("Identifier")],
  comment: "Mapping from an option of the external entry to an allowed advanced special ability.",
  type: Identifier =>
    Object({
      from_option: Required({
        comment: "The select option’s identifier.",
        type: PatronIdentifier(),
      }),
      to_advanced: Required({
        comment: "The advanced special ability’s identifier.",
        type: TypeArgument(Identifier),
      }),
    }),
})

export const advanced = (identifier: Type) =>
  Required({
    comment:
      "The Advanced Special Abilities for the respective Style Special Ability. Sometimes, only a specific select option or a set of select options of an entry is allowed, which can be modelled by the option property. It can also be that you can choose from a set of special abilities, but then you can’t specify an option.",
    type: Array(GenIncludeIdentifier(AdvancedSpecialAbility, [identifier]), {
      minItems: 3,
      maxItems: 3,
    }),
  })
