# Vision

## Definitions

### <a name="Vision"></a> Vision (`Vision`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Vision/id">See details</a>
`levels?` |  | <a href="#Vision/levels">See details</a>
`select_options?` |  | <a href="#Vision/select_options">See details</a>
`maximum?` |  | <a href="#Vision/maximum">See details</a>
`prerequisites?` |  | <a href="#Vision/prerequisites">See details</a>
`ap_value` |  | <a href="#Vision/ap_value">See details</a>
`src` |  | <a href="#Vision/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Vision/translations">See details</a>

#### <a name="Vision/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="Vision/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="Vision/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="Vision/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="Vision/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="Vision/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Vision/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Vision/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Vision/translations[key]">Vision/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Vision/translations[key]"></a> `Vision/translations[key]`

- **Type:** <a href="#VisionTranslation">VisionTranslation</a>

---

### <a name="VisionTranslation"></a> `VisionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#VisionTranslation/name">See details</a>
`name_in_library?` |  | <a href="#VisionTranslation/name_in_library">See details</a>
`rules` |  | <a href="#VisionTranslation/rules">See details</a>
`errata?` |  | <a href="#VisionTranslation/errata">See details</a>

#### <a name="VisionTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="VisionTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="VisionTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="VisionTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
