import { Boolean, Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import { input, levels, maximum, name, name_in_library, range_l10n, rules } from "./_Activatable.js"
import { ap_value, ap_value_append, ap_value_l10n } from "./_ActivatableAdventurePointsValue.js"
import { automatic_entries } from "./_ActivatableAutomatic.js"
import { explicit_select_options, select_options } from "./_ActivatableSelectOptions.js"
import { skill_applications, skill_uses } from "./_ActivatableSkillApplicationsAndUses.js"
import { AdvantageDisadvantagePrerequisites } from "./_Prerequisite.js"
import { NestedTranslationMap } from "./Locale.js"
import { Errata } from "./source/_Erratum.js"
import { src } from "./source/_PublicationRef.js"

export const Advantage = Entity(import.meta.url, {
  name: "Advantage",
  namePlural: "Advantages",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      skill_applications,
      skill_uses,
      maximum,
      automatic_entries,
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
        "Advantage",
        Object({
          name,
          name_in_library,
          input,
          rules,
          range: range_l10n,
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
