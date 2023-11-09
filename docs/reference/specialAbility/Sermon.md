# Sermon

## Definitions

### <a name="Sermon"></a> Sermon (`Sermon`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Sermon/id">See details</a>
`levels?` |  | <a href="#Sermon/levels">See details</a>
`select_options?` |  | <a href="#Sermon/select_options">See details</a>
`maximum?` |  | <a href="#Sermon/maximum">See details</a>
`prerequisites?` |  | <a href="#Sermon/prerequisites">See details</a>
`ap_value` |  | <a href="#Sermon/ap_value">See details</a>
`src` |  | <a href="#Sermon/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Sermon/translations">See details</a>

#### <a name="Sermon/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="Sermon/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="Sermon/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="Sermon/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="Sermon/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="Sermon/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Sermon/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Sermon/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SermonTranslation">SermonTranslation</a>&gt;

---

### <a name="SermonTranslation"></a> `SermonTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SermonTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SermonTranslation/name_in_library">See details</a>
`rules` |  | <a href="#SermonTranslation/rules">See details</a>
`errata?` |  | <a href="#SermonTranslation/errata">See details</a>

#### <a name="SermonTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="SermonTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="SermonTranslation/rules"></a> `rules`

- **Type:** <a href="#Rules">Rules</a>

#### <a name="SermonTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
