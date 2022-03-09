# Combat Special Ability

## Definitions

### <a name="CombatSpecialAbility"></a> Combat Special Ability (`CombatSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CombatSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CombatSpecialAbility/usage_type">See details</a>
`maximum?` |  | <a href="#CombatSpecialAbility/maximum">See details</a>
`combat_techniques` |  | <a href="#CombatSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CombatSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CombatSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CombatSpecialAbility/translations">See details</a>

#### <a name="CombatSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CombatSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CombatSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CombatSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CombatSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CombatSpecialAbility/translations[key]">CombatSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CombatSpecialAbility/translations[key]"></a> `CombatSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CombatSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#CombatSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#CombatSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#CombatSpecialAbility/translations[key]/errata">See details</a>

#### <a name="CombatSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CombatSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CombatSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="CombatSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
