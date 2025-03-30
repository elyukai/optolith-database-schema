# Command Special Ability

## Definitions

### <a name="CommandSpecialAbility"></a> Command Special Ability (`CommandSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CommandSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CommandSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CommandSpecialAbility/usage_type">See details</a>
`select_options?` |  | <a href="#CommandSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#CommandSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#CommandSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#CommandSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CommandSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CommandSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CommandSpecialAbility/translations">See details</a>

#### <a name="CommandSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="CommandSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="CommandSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="CommandSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="CommandSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="CommandSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CommandSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CommandSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CommandSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CommandSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CommandSpecialAbilityTranslation">CommandSpecialAbilityTranslation</a>&gt;

---

### <a name="CommandSpecialAbilityTranslation"></a> `CommandSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CommandSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#CommandSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#CommandSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#CommandSpecialAbilityTranslation/errata">See details</a>

#### <a name="CommandSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="CommandSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="CommandSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="CommandSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
