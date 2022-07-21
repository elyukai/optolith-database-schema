# Fate Point Sex Special Ability

## Definitions

### <a name="FatePointSexSpecialAbility"></a> Fate Point Sex Special Ability (`FatePointSexSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FatePointSexSpecialAbility/id">See details</a>
`levels?` |  | <a href="#FatePointSexSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#FatePointSexSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#FatePointSexSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#FatePointSexSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#FatePointSexSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#FatePointSexSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FatePointSexSpecialAbility/translations">See details</a>

#### <a name="FatePointSexSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="FatePointSexSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="FatePointSexSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="FatePointSexSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="FatePointSexSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="FatePointSexSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FatePointSexSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FatePointSexSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FatePointSexSpecialAbility/translations[key]">FatePointSexSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FatePointSexSpecialAbility/translations[key]"></a> `FatePointSexSpecialAbility/translations[key]`

- **Type:** <a href="#FatePointSexSpecialAbilityTranslation">FatePointSexSpecialAbilityTranslation</a>

---

### <a name="FatePointSexSpecialAbilityTranslation"></a> `FatePointSexSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FatePointSexSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#FatePointSexSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#FatePointSexSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#FatePointSexSpecialAbilityTranslation/errata">See details</a>

#### <a name="FatePointSexSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="FatePointSexSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="FatePointSexSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="FatePointSexSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
