import {
  Array,
  Enum,
  EnumCase,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
  TypeAlias,
} from "tsondb/schema/def"
import { NestedTranslationMap } from "./Locale.js"
import { TargetCategoryIdentifier } from "./_Identifier.js"

export const AffectedTargetCategories = TypeAlias(import.meta.url, {
  name: "AffectedTargetCategories",
  comment: `The target category – the kind of creature or object – the skill affects.

If no target categories are given, the skill applies to all target categories.`,
  type: () => Array(IncludeIdentifier(SpecificAffectedTargetCategory), { minItems: 1 }),
})

const SpecificAffectedTargetCategory = TypeAlias(import.meta.url, {
  name: "SpecificAffectedTargetCategory",
  type: () =>
    Object({
      id: Required({ type: IncludeIdentifier(SpecificAffectedTargetCategoryIdentifier) }),
      translations: NestedTranslationMap(
        Optional,
        "SpecificAffectedTargetCategory",
        Object({
          note: Required({ type: String({ minLength: 1 }) }),
        }),
      ),
    }),
})

const SpecificAffectedTargetCategoryIdentifier = Enum(import.meta.url, {
  name: "SpecificAffectedTargetCategoryIdentifier",
  values: () => ({
    Self: EnumCase({ type: null }),
    Zone: EnumCase({ type: null }),
    LiturgicalChantsAndCeremonies: EnumCase({ type: null }),
    Cantrips: EnumCase({ type: null }),
    Spellworks: EnumCase({ type: null }),
    Predefined: EnumCase({ type: TargetCategoryIdentifier() }),
  }),
})
