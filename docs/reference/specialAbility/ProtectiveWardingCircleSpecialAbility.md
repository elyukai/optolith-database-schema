# Protective Warding Circle Special Ability

## Definitions

### <a name="ProtectiveWardingCircleSpecialAbility"></a> Protective Warding Circle Special Ability (`ProtectiveWardingCircleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ProtectiveWardingCircleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/levels">See details</a>
`ap_value` |  | <a href="#ProtectiveWardingCircleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#ProtectiveWardingCircleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ProtectiveWardingCircleSpecialAbility/translations">See details</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]/name_in_library">See details</a>
`protective_circle` | The rules for the protective circle variant. | <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]/protective_circle">See details</a>
`warding_circle` | The rules for the warding circle variant. | <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]/warding_circle">See details</a>
`errata?` |  | <a href="#ProtectiveWardingCircleSpecialAbility/translations[key]/errata">See details</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]/protective_circle"></a> `protective_circle`

The rules for the protective circle variant.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]/warding_circle"></a> `warding_circle`

The rules for the warding circle variant.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="ProtectiveWardingCircleSpecialAbility/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
