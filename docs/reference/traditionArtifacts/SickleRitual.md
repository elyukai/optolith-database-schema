# Sickle Ritual

## Definitions

### <a name="SickleRitual"></a> Sickle Ritual (`SickleRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SickleRitual/id">See details</a>
`levels?` |  | <a href="#SickleRitual/levels">See details</a>
`select_options?` |  | <a href="#SickleRitual/select_options">See details</a>
`maximum?` |  | <a href="#SickleRitual/maximum">See details</a>
`prerequisites?` |  | <a href="#SickleRitual/prerequisites">See details</a>
`volume` |  | <a href="#SickleRitual/volume">See details</a>
`cost?` |  | <a href="#SickleRitual/cost">See details</a>
`property` |  | <a href="#SickleRitual/property">See details</a>
`ap_value` |  | <a href="#SickleRitual/ap_value">See details</a>
`src` |  | <a href="#SickleRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SickleRitual/translations">See details</a>

#### <a name="SickleRitual/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="SickleRitual/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="SickleRitual/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="SickleRitual/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="SickleRitual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SickleRitual/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="SickleRitual/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="SickleRitual/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="SickleRitual/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SickleRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SickleRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SickleRitual/translations[key]">SickleRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SickleRitual/translations[key]"></a> `SickleRitual/translations[key]`

- **Type:** <a href="#SickleRitualTranslation">SickleRitualTranslation</a>

---

### <a name="SickleRitualTranslation"></a> `SickleRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SickleRitualTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SickleRitualTranslation/name_in_library">See details</a>
`effect` |  | <a href="#SickleRitualTranslation/effect">See details</a>
`volume` |  | <a href="#SickleRitualTranslation/volume">See details</a>
`aeCost?` |  | <a href="#SickleRitualTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#SickleRitualTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#SickleRitualTranslation/errata">See details</a>

#### <a name="SickleRitualTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="SickleRitualTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="SickleRitualTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="SickleRitualTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="SickleRitualTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="SickleRitualTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="SickleRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
