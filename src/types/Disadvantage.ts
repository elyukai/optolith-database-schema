import {
  Boolean,
  Entity,
  IncludeIdentifier,
  Object,
  Optional,
  Required,
  String,
} from "tsondb/schema/def"
import {
  ap_value,
  ap_value_append,
  ap_value_l10n,
  explicit_select_options,
  input,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  skill_applications,
  skill_uses,
} from "./_Activatable.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Disadvantage = Entity(import.meta.url, {
  name: "Disadvantage",
  namePlural: "Disadvantages",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      skill_applications,
      skill_uses,
      maximum,
      prerequisites: Optional({
        type: IncludeIdentifier(AdvantageDisadvantagePrerequisites),
      }),
      ap_value,
      has_maximum_spent_influence: Required({
        comment: "Does this advantage count towards the maximum of AP to be spent on advantages?",
        type: Boolean(),
      }),
      is_exclusive_to_arcane_spellworks: Required({
        comment:
          "Does this advantage exclusively applies to arcane spellworks and not to magical actions and magical applications?",
        type: Boolean(),
      }),
      src,
      translations: NestedTranslationMap(
        Required,
        "Disadvantage",
        Object({
          name,
          name_in_library,
          input,
          rules,
          range: Optional({
            comment: "The range.",
            type: String({ minLength: 1, isMarkdown: true }),
          }),
          ap_value_append,
          ap_value: ap_value_l10n,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
