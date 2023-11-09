# Orb Enchantment

## Definitions

### <a name="OrbEnchantment"></a> Orb Enchantment (`OrbEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#OrbEnchantment/id">See details</a>
`levels?` |  | <a href="#OrbEnchantment/levels">See details</a>
`select_options?` |  | <a href="#OrbEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#OrbEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#OrbEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#OrbEnchantment/volume">See details</a>
`cost?` |  | <a href="#OrbEnchantment/cost">See details</a>
`property` |  | <a href="#OrbEnchantment/property">See details</a>
`ap_value` |  | <a href="#OrbEnchantment/ap_value">See details</a>
`src` |  | <a href="#OrbEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#OrbEnchantment/translations">See details</a>

#### <a name="OrbEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="OrbEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="OrbEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="OrbEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="OrbEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="OrbEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="OrbEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="OrbEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="OrbEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="OrbEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="OrbEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#OrbEnchantmentTranslation">OrbEnchantmentTranslation</a>&gt;

---

### <a name="OrbEnchantmentTranslation"></a> `OrbEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#OrbEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#OrbEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#OrbEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#OrbEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#OrbEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#OrbEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#OrbEnchantmentTranslation/errata">See details</a>

#### <a name="OrbEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="OrbEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="OrbEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="OrbEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="OrbEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="OrbEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="OrbEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
