# Advanced Combat Special Ability

## Definitions

### <a name="AdvancedCombatSpecialAbility"></a> Advanced Combat Special Ability (`AdvancedCombatSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AdvancedCombatSpecialAbility/id">See details</a>
`levels?` |  | <a href="#AdvancedCombatSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#AdvancedCombatSpecialAbility/usage_type">See details</a>
`select_options?` |  | <a href="#AdvancedCombatSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#AdvancedCombatSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#AdvancedCombatSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#AdvancedCombatSpecialAbility/maximum">See details</a>
`penalty?` |  | <a href="#AdvancedCombatSpecialAbility/penalty">See details</a>
`prerequisites?` |  | <a href="#AdvancedCombatSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#AdvancedCombatSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#AdvancedCombatSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#AdvancedCombatSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AdvancedCombatSpecialAbility/translations">See details</a>

#### <a name="AdvancedCombatSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="AdvancedCombatSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="AdvancedCombatSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="AdvancedCombatSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="AdvancedCombatSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="AdvancedCombatSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="AdvancedCombatSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="AdvancedCombatSpecialAbility/penalty"></a> `penalty?`

- **Type:** <a href="#Penalty">Penalty</a>

#### <a name="AdvancedCombatSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AdvancedCombatSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="AdvancedCombatSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AdvancedCombatSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AdvancedCombatSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AdvancedCombatSpecialAbilityTranslation">AdvancedCombatSpecialAbilityTranslation</a>&gt;

---

### <a name="AdvancedCombatSpecialAbilityTranslation"></a> `AdvancedCombatSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AdvancedCombatSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#AdvancedCombatSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#AdvancedCombatSpecialAbilityTranslation/rules">See details</a>
`penalty?` |  | <a href="#AdvancedCombatSpecialAbilityTranslation/penalty">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#AdvancedCombatSpecialAbilityTranslation/ap_value">See details</a>
`ap_value_append?` | A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced. | <a href="#AdvancedCombatSpecialAbilityTranslation/ap_value_append">See details</a>
`errata?` |  | <a href="#AdvancedCombatSpecialAbilityTranslation/errata">See details</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/penalty"></a> `penalty?`

- **Type:** String

#### <a name="AdvancedCombatSpecialAbilityTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the given information.

- **Type:** <a href="#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/ap_value_append"></a> `ap_value_append?`

A string that gets appended to the default AP Value text with a preceding space. This always happens if present, even if the generated AP Value text is replaced.

- **Type:** <a href="#AdventurePointsValueAppend">AdventurePointsValueAppend</a>

#### <a name="AdvancedCombatSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
