# Orb Enchantment

## Definitions

### <a name="OrbEnchantment"></a> Orb Enchantment (`OrbEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#OrbEnchantment/id">See details</a>
`levels?` |  | <a href="#OrbEnchantment/levels">See details</a>
`maximum?` |  | <a href="#OrbEnchantment/maximum">See details</a>
`volume` |  | <a href="#OrbEnchantment/volume">See details</a>
`cost?` |  | <a href="#OrbEnchantment/cost">See details</a>
`property` |  | <a href="#OrbEnchantment/property">See details</a>
`ap_value` |  | <a href="#OrbEnchantment/ap_value">See details</a>
`src` |  | <a href="#OrbEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#OrbEnchantment/translations">See details</a>

#### <a name="OrbEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="OrbEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="OrbEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="OrbEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="OrbEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="OrbEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="OrbEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="OrbEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="OrbEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#OrbEnchantment/translations[key]">OrbEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="OrbEnchantment/translations[key]"></a> `OrbEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#OrbEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#OrbEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#OrbEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#OrbEnchantment/translations[key]/errata">See details</a>

#### <a name="OrbEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="OrbEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="OrbEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="OrbEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
