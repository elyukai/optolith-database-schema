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

- **Type:** <a href="#Id">Id</a>

#### <a name="BrawlingSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="BrawlingSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="BrawlingSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="BrawlingSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="BrawlingSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BrawlingSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="BrawlingSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BrawlingSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BrawlingSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#BrawlingSpecialAbilityTranslation">BrawlingSpecialAbilityTranslation</a>&gt;

---

### <a name="BrawlingSpecialAbilityTranslation"></a> `BrawlingSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BrawlingSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#BrawlingSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#BrawlingSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#BrawlingSpecialAbilityTranslation/errata">See details</a>

#### <a name="BrawlingSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="BrawlingSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="BrawlingSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="BrawlingSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
