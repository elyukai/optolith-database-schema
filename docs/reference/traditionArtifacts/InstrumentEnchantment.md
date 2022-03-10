# Instrument Enchantment

## Definitions

### <a name="InstrumentEnchantment"></a> Instrument Enchantment (`InstrumentEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#InstrumentEnchantment/id">See details</a>
`levels?` |  | <a href="#InstrumentEnchantment/levels">See details</a>
`maximum?` |  | <a href="#InstrumentEnchantment/maximum">See details</a>
`volume` |  | <a href="#InstrumentEnchantment/volume">See details</a>
`cost?` |  | <a href="#InstrumentEnchantment/cost">See details</a>
`property` |  | <a href="#InstrumentEnchantment/property">See details</a>
`ap_value` |  | <a href="#InstrumentEnchantment/ap_value">See details</a>
`src` |  | <a href="#InstrumentEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#InstrumentEnchantment/translations">See details</a>

#### <a name="InstrumentEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="InstrumentEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="InstrumentEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="InstrumentEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="InstrumentEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="InstrumentEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="InstrumentEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="InstrumentEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="InstrumentEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#InstrumentEnchantment/translations[key]">InstrumentEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="InstrumentEnchantment/translations[key]"></a> `InstrumentEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#InstrumentEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#InstrumentEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#InstrumentEnchantment/translations[key]/effect">See details</a>
`volume` |  | <a href="#InstrumentEnchantment/translations[key]/volume">See details</a>
`aeCost?` |  | <a href="#InstrumentEnchantment/translations[key]/aeCost">See details</a>
`bindingCost?` |  | <a href="#InstrumentEnchantment/translations[key]/bindingCost">See details</a>
`errata?` |  | <a href="#InstrumentEnchantment/translations[key]/errata">See details</a>

#### <a name="InstrumentEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="InstrumentEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="InstrumentEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="InstrumentEnchantment/translations[key]/volume"></a> `volume`

- **Type:** String

#### <a name="InstrumentEnchantment/translations[key]/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="InstrumentEnchantment/translations[key]/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="InstrumentEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
