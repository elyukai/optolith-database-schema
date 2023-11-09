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

- **Type:** <a href="#Id">Id</a>

#### <a name="Vision/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="Vision/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="Vision/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="Vision/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="Vision/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Vision/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Vision/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#VisionTranslation">VisionTranslation</a>&gt;

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

- **Type:** <a href="#Name">Name</a>

#### <a name="VisionTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="VisionTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="VisionTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
