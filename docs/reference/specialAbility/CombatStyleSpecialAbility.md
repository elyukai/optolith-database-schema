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

- **Type:** <a href="#Id">Id</a>

#### <a name="CombatStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="CombatStyleSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="CombatStyleSpecialAbility/type"></a> `type`

Is this an armed or unarmed combat style?

- **Type:** <a href="#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CombatStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="CombatStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="CombatStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="CombatStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="CombatStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** <a href="#AdvancedSpecialAbilities">AdvancedSpecialAbilities</a>&lt;<a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>&gt;

#### <a name="CombatStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CombatStyleSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CombatStyleSpecialAbilityTransition">CombatStyleSpecialAbilityTransition</a>&gt;

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

- **Type:** <a href="#Name">Name</a>

#### <a name="CombatStyleSpecialAbilityTransition/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="CombatStyleSpecialAbilityTransition/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="CombatStyleSpecialAbilityTransition/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
