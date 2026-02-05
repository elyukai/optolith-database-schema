import * as DB from "tsondb/schema/dsl"
import { levels, maximum, name, name_in_library, rules } from "../_Activatable.js"
import { advanced } from "../_ActivatableAdvanced.js"
import { ap_value, ap_value_append, ap_value_l10n } from "../_ActivatableAdventurePointsValue.js"
import { explicit_select_options, select_options } from "../_ActivatableSelectOptions.js"
import { AdvancedSkillSpecialAbilityIdentifier } from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedTranslationMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const SkillStyleSpecialAbility = DB.Entity(import.meta.url, {
  name: "SkillStyleSpecialAbility",
  namePlural: "SkillStyleSpecialAbilities",
  type: () =>
    DB.Object({
      levels,
      select_options,
      explicit_select_options,
      maximum,
      advanced: advanced(AdvancedSkillSpecialAbilityIdentifier()),
      prerequisites: DB.Optional({
        type: DB.IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedTranslationMap(
        DB.Required,
        "SkillStyleSpecialAbility",
        DB.Object({
          name,
          name_in_library,
          rules,
          ap_value_append,
          ap_value: ap_value_l10n,
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
      keyPathInEntityMap: "name_in_library",
      keyPathInEntityMapFallback: "name",
    },
  ],
})
