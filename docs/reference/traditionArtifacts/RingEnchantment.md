# Ring Enchantment

## Definitions

### <a name="RingEnchantment"></a> Ring Enchantment (`RingEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#RingEnchantment/id">See details</a>
`levels?` |  | <a href="#RingEnchantment/levels">See details</a>
`maximum?` |  | <a href="#RingEnchantment/maximum">See details</a>
`volume` |  | <a href="#RingEnchantment/volume">See details</a>
`cost?` |  | <a href="#RingEnchantment/cost">See details</a>
`property` |  | <a href="#RingEnchantment/property">See details</a>
`ap_value` |  | <a href="#RingEnchantment/ap_value">See details</a>
`src` |  | <a href="#RingEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RingEnchantment/translations">See details</a>

#### <a name="RingEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="RingEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="RingEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="RingEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="RingEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="RingEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="RingEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="RingEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="RingEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#RingEnchantment/translations[key]">RingEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="RingEnchantment/translations[key]"></a> `RingEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#RingEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#RingEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#RingEnchantment/translations[key]/effect">See details</a>
`volume` |  | <a href="#RingEnchantment/translations[key]/volume">See details</a>
`aeCost?` |  | <a href="#RingEnchantment/translations[key]/aeCost">See details</a>
`bindingCost?` |  | <a href="#RingEnchantment/translations[key]/bindingCost">See details</a>
`errata?` |  | <a href="#RingEnchantment/translations[key]/errata">See details</a>

#### <a name="RingEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="RingEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="RingEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="RingEnchantment/translations[key]/volume"></a> `volume`

- **Type:** String

#### <a name="RingEnchantment/translations[key]/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="RingEnchantment/translations[key]/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="RingEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
