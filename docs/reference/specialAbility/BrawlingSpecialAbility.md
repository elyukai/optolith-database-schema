# Brawling Special Ability

## Definitions

### <a name="BrawlingSpecialAbility"></a> Brawling Special Ability (`BrawlingSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#BrawlingSpecialAbility/id">See details</a>
`levels?` |  | <a href="#BrawlingSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#BrawlingSpecialAbility/usage_type">See details</a>
`select_options?` |  | <a href="#BrawlingSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#BrawlingSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#BrawlingSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#BrawlingSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#BrawlingSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#BrawlingSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BrawlingSpecialAbility/translations">See details</a>

#### <a name="BrawlingSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="BrawlingSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="BrawlingSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="BrawlingSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="BrawlingSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="BrawlingSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BrawlingSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="BrawlingSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BrawlingSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BrawlingSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BrawlingSpecialAbility/translations[key]">BrawlingSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BrawlingSpecialAbility/translations[key]"></a> `BrawlingSpecialAbility/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BrawlingSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#BrawlingSpecialAbility/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#BrawlingSpecialAbility/translations[key]/rules">See details</a>
`errata?` |  | <a href="#BrawlingSpecialAbility/translations[key]/errata">See details</a>

#### <a name="BrawlingSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="BrawlingSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="BrawlingSpecialAbility/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="BrawlingSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
