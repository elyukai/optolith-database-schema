# Krallenkettenzauber

## Definitions

### <a name="Krallenkettenzauber"></a> Krallenkettenzauber (`Krallenkettenzauber`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Krallenkettenzauber/id">See details</a>
`levels?` |  | <a href="#Krallenkettenzauber/levels">See details</a>
`maximum?` |  | <a href="#Krallenkettenzauber/maximum">See details</a>
`volume` |  | <a href="#Krallenkettenzauber/volume">See details</a>
`property` |  | <a href="#Krallenkettenzauber/property">See details</a>
`ap_value` |  | <a href="#Krallenkettenzauber/ap_value">See details</a>
`src` |  | <a href="#Krallenkettenzauber/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Krallenkettenzauber/translations">See details</a>

#### <a name="Krallenkettenzauber/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="Krallenkettenzauber/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="Krallenkettenzauber/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="Krallenkettenzauber/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="Krallenkettenzauber/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="Krallenkettenzauber/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Krallenkettenzauber/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Krallenkettenzauber/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Krallenkettenzauber/translations[key]">Krallenkettenzauber/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Krallenkettenzauber/translations[key]"></a> `Krallenkettenzauber/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Krallenkettenzauber/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Krallenkettenzauber/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#Krallenkettenzauber/translations[key]/effect">See details</a>
`errata?` |  | <a href="#Krallenkettenzauber/translations[key]/errata">See details</a>

#### <a name="Krallenkettenzauber/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="Krallenkettenzauber/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Krallenkettenzauber/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="Krallenkettenzauber/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
