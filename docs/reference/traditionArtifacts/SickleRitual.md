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

- **Type:** <a href="#Id">Id</a>

#### <a name="SickleRitual/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="SickleRitual/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="SickleRitual/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="SickleRitual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SickleRitual/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="SickleRitual/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="SickleRitual/property"></a> `property`

- **Type:** <a href="#PropertyDeclaration">PropertyDeclaration</a>

#### <a name="SickleRitual/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SickleRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SickleRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SickleRitualTranslation">SickleRitualTranslation</a>&gt;

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

- **Type:** <a href="#Name">Name</a>

#### <a name="SickleRitualTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="SickleRitualTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="SickleRitualTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="SickleRitualTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="SickleRitualTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="SickleRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
