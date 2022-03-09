# Wand Enchantment

## Definitions

### <a name="WandEnchantment"></a> Wand Enchantment (`WandEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#WandEnchantment/id">See details</a>
`levels?` |  | <a href="#WandEnchantment/levels">See details</a>
`maximum?` |  | <a href="#WandEnchantment/maximum">See details</a>
`property` |  | <a href="#WandEnchantment/property">See details</a>
`ap_value` |  | <a href="#WandEnchantment/ap_value">See details</a>
`src` |  | <a href="#WandEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#WandEnchantment/translations">See details</a>

#### <a name="WandEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="WandEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="WandEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="WandEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="WandEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="WandEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="WandEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#WandEnchantment/translations[key]">WandEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="WandEnchantment/translations[key]"></a> `WandEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#WandEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#WandEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#WandEnchantment/translations[key]/effect">See details</a>
`errata?` |  | <a href="#WandEnchantment/translations[key]/errata">See details</a>

#### <a name="WandEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="WandEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="WandEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="WandEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
