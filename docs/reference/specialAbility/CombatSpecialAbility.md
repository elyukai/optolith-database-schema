# Combat Special Ability

## Definitions

### <a name="CombatSpecialAbility"></a> Combat Special Ability (`CombatSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CombatSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CombatSpecialAbility/usage_type">See details</a>
`select_options?` |  | <a href="#CombatSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#CombatSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CombatSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CombatSpecialAbility/maximum">See details</a>
`penalty?` |  | <a href="#CombatSpecialAbility/penalty">See details</a>
`prerequisites?` |  | <a href="#CombatSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#CombatSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CombatSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CombatSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CombatSpecialAbility/translations">See details</a>

#### <a name="CombatSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="CombatSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="CombatSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="CombatSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="CombatSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="CombatSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="CombatSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="CombatSpecialAbility/penalty"></a> `penalty?`

- **Type:** <a href="#Penalty">Penalty</a>

#### <a name="CombatSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CombatSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CombatSpecialAbilityTranslation">CombatSpecialAbilityTranslation</a>&gt;

---

### <a name="CombatSpecialAbilityTranslation"></a> `CombatSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CombatSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#CombatSpecialAbilityTranslation/name_in_library">See details</a>
`input?` | A string that is used as a label for an input field. | <a href="#CombatSpecialAbilityTranslation/input">See details</a>
`rules` |  | <a href="#CombatSpecialAbilityTranslation/rules">See details</a>
`penalty?` |  | <a href="#CombatSpecialAbilityTranslation/penalty">See details</a>
`errata?` |  | <a href="#CombatSpecialAbilityTranslation/errata">See details</a>

#### <a name="CombatSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="CombatSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="CombatSpecialAbilityTranslation/input"></a> `input?`

A string that is used as a label for an input field.

- **Type:** <a href="#Input">Input</a>

#### <a name="CombatSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="CombatSpecialAbilityTranslation/penalty"></a> `penalty?`

- **Type:** String

#### <a name="CombatSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
