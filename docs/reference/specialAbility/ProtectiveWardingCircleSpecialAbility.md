# Protective Warding Circle Special Ability

## Definitions

### <a name="ProtectiveWardingCircleSpecialAbility"></a> Protective Warding Circle Special Ability (`ProtectiveWardingCircleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ProtectiveWardingCircleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/maximum">See details</a>
`prerequisites?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/prerequisites">See details</a>
`cost` | The cost in AE. | <a href="#ProtectiveWardingCircleSpecialAbility/cost">See details</a>
`ap_value` |  | <a href="#ProtectiveWardingCircleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#ProtectiveWardingCircleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProtectiveWardingCircleSpecialAbility/translations">See details</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/cost"></a> `cost`

The cost in AE.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="ProtectiveWardingCircleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]">ProtectiveWardingCircleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]"></a> `ProtectiveWardingCircleSpecialAbility/translations[key]`

- **Type:** <a href="#ProtectiveWardingCircleSpecialAbilityTranslation">ProtectiveWardingCircleSpecialAbilityTranslation</a>

---

### <a name="ProtectiveWardingCircleSpecialAbilityTranslation"></a> `ProtectiveWardingCircleSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ProtectiveWardingCircleSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#ProtectiveWardingCircleSpecialAbilityTranslation/name_in_library">See details</a>
`protective_circle` | The rules for the protective circle variant. | <a href="#ProtectiveWardingCircleSpecialAbilityTranslation/protective_circle">See details</a>
`warding_circle` | The rules for the warding circle variant. | <a href="#ProtectiveWardingCircleSpecialAbilityTranslation/warding_circle">See details</a>
`errata?` |  | <a href="#ProtectiveWardingCircleSpecialAbilityTranslation/errata">See details</a>

#### <a name="ProtectiveWardingCircleSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="ProtectiveWardingCircleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="ProtectiveWardingCircleSpecialAbilityTranslation/protective_circle"></a> `protective_circle`

The rules for the protective circle variant.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ProtectiveWardingCircleSpecialAbilityTranslation/warding_circle"></a> `warding_circle`

The rules for the warding circle variant.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ProtectiveWardingCircleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
