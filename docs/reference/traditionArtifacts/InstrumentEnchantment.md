# Instrument Enchantment

## Definitions

### <a name="InstrumentEnchantment"></a> Instrument Enchantment (`InstrumentEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#InstrumentEnchantment/id">See details</a>
`levels?` |  | <a href="#InstrumentEnchantment/levels">See details</a>
`select_options?` |  | <a href="#InstrumentEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#InstrumentEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#InstrumentEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#InstrumentEnchantment/volume">See details</a>
`cost?` |  | <a href="#InstrumentEnchantment/cost">See details</a>
`property` |  | <a href="#InstrumentEnchantment/property">See details</a>
`ap_value` |  | <a href="#InstrumentEnchantment/ap_value">See details</a>
`src` |  | <a href="#InstrumentEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InstrumentEnchantment/translations">See details</a>

#### <a name="InstrumentEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="InstrumentEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="InstrumentEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="InstrumentEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="InstrumentEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="InstrumentEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="InstrumentEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="InstrumentEnchantment/property"></a> `property`

- **Type:** <a href="#PropertyDeclaration">PropertyDeclaration</a>

#### <a name="InstrumentEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="InstrumentEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="InstrumentEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#InstrumentEnchantmentTranslation">InstrumentEnchantmentTranslation</a>&gt;

---

### <a name="InstrumentEnchantmentTranslation"></a> `InstrumentEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#InstrumentEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#InstrumentEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#InstrumentEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#InstrumentEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#InstrumentEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#InstrumentEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#InstrumentEnchantmentTranslation/errata">See details</a>

#### <a name="InstrumentEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="InstrumentEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="InstrumentEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="InstrumentEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="InstrumentEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="InstrumentEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="InstrumentEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
