import {
  Array,
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
import { BlessedTraditionIdentifier } from "./_Identifier.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Talisman = Entity(import.meta.url, {
  name: "Talisman",
  namePlural: "Talismans",
  type: () =>
    Object({
      tradition: Required({
        comment: "The tradition(s) the talisman belongs to.",
        type: Array(BlessedTraditionIdentifier(), { minItems: 1 }),
      }),
      type: Optional({
        comment: "The talisman type, if any.",
        type: IncludeIdentifier(TalismanType),
      }),
      ap_value: Optional({
        comment: "The AP value for the required trade secret, if possible.",
        type: Integer({ minimum: 5, multipleOf: 5 }),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Talisman",
        Object({
          name: Required({
            comment: "The talisman’s name.",
            type: String({ minLength: 1 }),
          }),
          effect: Required({
            comment: "The effect description.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          activation: Optional({
            comment: "The activation parameters.",
            type: IncludeIdentifier(TalismanActivationTranslation),
          }),
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})

const TalismanType = Enum(import.meta.url, {
  name: "TalismanType",
  values: () => ({
    MainTalisman: EnumCase({ type: null }),
    Talisman: EnumCase({ type: null }),
    MinorTalisman: EnumCase({ type: null }),
    Regalia: EnumCase({ type: null }),
    PowerfulTalisman: EnumCase({ type: null }),
  }),
})

const TalismanActivationTranslation = TypeAlias(import.meta.url, {
  name: "TalismanActivationTranslation",
  type: () =>
    Object({
      cost: Required({
        comment: "The KP cost.",
        type: Integer({ minimum: 0 }),
      }),
      duration: Required({
        comment: "The duration.",
        type: String({ minLength: 1 }),
      }),
    }),
})
