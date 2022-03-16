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

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CommandSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CommandSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CommandSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="CommandSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CommandSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CommandSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CommandSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CommandSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CommandSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CommandSpecialAbility/translations[key]">CommandSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CommandSpecialAbility/translations[key]"></a> `CommandSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CommandSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#CommandSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#CommandSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#CommandSpecialAbility/translations[key]/errata">See details</a>

#### <a name="CommandSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CommandSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CommandSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="CommandSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
