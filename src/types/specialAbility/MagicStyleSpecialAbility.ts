import { Entity, IncludeIdentifier, Object, Optional, Required } from "tsondb/schema/def"
import {
  advanced,
  ap_value,
  levels,
  maximum,
  name,
  name_in_library,
  rules,
  select_options,
  skill_applications,
  skill_uses,
} from "../_Activatable.js"
import { AdvancedMagicalSpecialAbilityIdentifier } from "../_Identifier.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import { NestedLocaleMap } from "../Locale.js"
import { Errata } from "../source/_Erratum.js"
import { src } from "../source/_PublicationRef.js"

export const MagicStyleSpecialAbility = Entity(import.meta.url, {
  name: "MagicStyleSpecialAbility",
  namePlural: "MagicStyleSpecialAbilities",
  type: () =>
    Object({
      levels,
      select_options,
      skill_applications,
      skill_uses,
      maximum,
      advanced: advanced(AdvancedMagicalSpecialAbilityIdentifier()),
      prerequisites: Optional({
        type: IncludeIdentifier(GeneralPrerequisites),
      }),
      ap_value,
      src,
      translations: NestedLocaleMap(
        Required,
        "MagicStyleSpecialAbilityTranslation",
        Object({
          name,
          name_in_library,
          rules,
          errata: Optional({
            type: IncludeIdentifier(Errata),
          }),
        })
      ),
    }),
  displayName: {},
})
