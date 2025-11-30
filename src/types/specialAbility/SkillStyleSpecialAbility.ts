import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  advanced,
  ap_value,
  ap_value_append,
  ap_value_l10n,
  explicit_select_options,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
} from "../_Activatable.js"
import { AdvancedSkillSpecialAbilityIdentifier } from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const SkillStyleSpecialAbility = Entity(import.meta.url, {
  name: "SkillStyleSpecialAbility",
  namePlural: "SkillStyleSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      explicit_select_options,
      maximum,
      advanced: advanced(AdvancedSkillSpecialAbilityIdentifier()),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        Required,
        "SkillStyleSpecialAbility",
        Object({
          name,
          name_in_library,
          rules,
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
