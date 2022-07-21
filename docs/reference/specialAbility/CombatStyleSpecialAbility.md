# Combat Style Special Ability

## Definitions

### <a name="CombatStyleSpecialAbility"></a> Combat Style Special Ability (`CombatStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CombatStyleSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CombatStyleSpecialAbility/usage_type">See details</a>
`type` | Is this an armed or unarmed combat style? | <a href="#CombatStyleSpecialAbility/type">See details</a>
`select_options?` |  | <a href="#CombatStyleSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#CombatStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CombatStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CombatStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#CombatStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#CombatStyleSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#CombatStyleSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CombatStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CombatStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CombatStyleSpecialAbility/translations">See details</a>

#### <a name="CombatStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CombatStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CombatStyleSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="CombatStyleSpecialAbility/type"></a> `type`

Is this an armed or unarmed combat style?

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CombatStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="CombatStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="CombatStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="CombatStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CombatStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="../_Activatable.md#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>

#### <a name="CombatStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CombatStyleSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CombatStyleSpecialAbility/translations[key]">CombatStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CombatStyleSpecialAbility/translations[key]"></a> `CombatStyleSpecialAbility/translations[key]`

- **Type:** <a href="#CombatStyleSpecialAbilityTransition">CombatStyleSpecialAbilityTransition</a>

---

### <a name="CombatStyleSpecialAbilityTransition"></a> `CombatStyleSpecialAbilityTransition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CombatStyleSpecialAbilityTransition/name">See details</a>
`name_in_library?` |  | <a href="#CombatStyleSpecialAbilityTransition/name_in_library">See details</a>
`rules` |  | <a href="#CombatStyleSpecialAbilityTransition/rules">See details</a>
`errata?` |  | <a href="#CombatStyleSpecialAbilityTransition/errata">See details</a>

#### <a name="CombatStyleSpecialAbilityTransition/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CombatStyleSpecialAbilityTransition/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CombatStyleSpecialAbilityTransition/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="CombatStyleSpecialAbilityTransition/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
