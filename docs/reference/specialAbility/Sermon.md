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

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="Sermon/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="Sermon/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="Sermon/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="Sermon/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="Sermon/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Sermon/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Sermon/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Sermon/translations[key]">Sermon/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Sermon/translations[key]"></a> `Sermon/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Sermon/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Sermon/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#Sermon/translations[key]/rules">See details</a>
`errata?` |  | <a href="#Sermon/translations[key]/errata">See details</a>

#### <a name="Sermon/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="Sermon/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Sermon/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="Sermon/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
