# Trinkhornzauber

## Definitions

### <a name="Trinkhornzauber"></a> Trinkhornzauber (`Trinkhornzauber`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#Trinkhornzauber/id">See details</a>
`levels?` |  | <a href="#Trinkhornzauber/levels">See details</a>
`maximum?` |  | <a href="#Trinkhornzauber/maximum">See details</a>
`prerequisites?` |  | <a href="#Trinkhornzauber/prerequisites">See details</a>
`volume` |  | <a href="#Trinkhornzauber/volume">See details</a>
`cost?` |  | <a href="#Trinkhornzauber/cost">See details</a>
`property` |  | <a href="#Trinkhornzauber/property">See details</a>
`ap_value` |  | <a href="#Trinkhornzauber/ap_value">See details</a>
`src` |  | <a href="#Trinkhornzauber/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Trinkhornzauber/translations">See details</a>

#### <a name="Trinkhornzauber/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="Trinkhornzauber/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="Trinkhornzauber/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="Trinkhornzauber/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="Trinkhornzauber/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="Trinkhornzauber/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="Trinkhornzauber/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="Trinkhornzauber/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="Trinkhornzauber/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Trinkhornzauber/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Trinkhornzauber/translations[key]">Trinkhornzauber/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Trinkhornzauber/translations[key]"></a> `Trinkhornzauber/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#Trinkhornzauber/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#Trinkhornzauber/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#Trinkhornzauber/translations[key]/effect">See details</a>
`volume` |  | <a href="#Trinkhornzauber/translations[key]/volume">See details</a>
`aeCost?` |  | <a href="#Trinkhornzauber/translations[key]/aeCost">See details</a>
`bindingCost?` |  | <a href="#Trinkhornzauber/translations[key]/bindingCost">See details</a>
`errata?` |  | <a href="#Trinkhornzauber/translations[key]/errata">See details</a>

#### <a name="Trinkhornzauber/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="Trinkhornzauber/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="Trinkhornzauber/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="Trinkhornzauber/translations[key]/volume"></a> `volume`

- **Type:** String

#### <a name="Trinkhornzauber/translations[key]/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="Trinkhornzauber/translations[key]/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="Trinkhornzauber/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
