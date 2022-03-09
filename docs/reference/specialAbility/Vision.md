# Vision

## Definitions

### <a name="Vision"></a> Vision (`Vision`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Vision/id">See details</a>
`levels?` |  | <a href="#Vision/levels">See details</a>
`ap_value` |  | <a href="#Vision/ap_value">See details</a>
`src` |  | <a href="#Vision/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Vision/translations">See details</a>

#### <a name="Vision/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="Vision/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Vision/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Vision/translations[key]/name_in_library">See details</a>
`rules` |  | <a href="#Vision/translations[key]/rules">See details</a>
`errata?` |  | <a href="#Vision/translations[key]/errata">See details</a>

#### <a name="Vision/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="Vision/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Vision/translations[key]/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="Vision/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
