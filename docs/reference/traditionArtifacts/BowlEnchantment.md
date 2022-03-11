# Bowl Enchantment

## Definitions

### <a name="BowlEnchantment"></a> Bowl Enchantment (`BowlEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#BowlEnchantment/id">See details</a>
`levels?` |  | <a href="#BowlEnchantment/levels">See details</a>
`select_options?` |  | <a href="#BowlEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#BowlEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#BowlEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#BowlEnchantment/volume">See details</a>
`cost?` |  | <a href="#BowlEnchantment/cost">See details</a>
`property` |  | <a href="#BowlEnchantment/property">See details</a>
`ap_value` |  | <a href="#BowlEnchantment/ap_value">See details</a>
`src` |  | <a href="#BowlEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BowlEnchantment/translations">See details</a>

#### <a name="BowlEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="BowlEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="BowlEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="BowlEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="BowlEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BowlEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="BowlEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="BowlEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="BowlEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BowlEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BowlEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BowlEnchantment/translations[key]">BowlEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BowlEnchantment/translations[key]"></a> `BowlEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BowlEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#BowlEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#BowlEnchantment/translations[key]/effect">See details</a>
`volume` |  | <a href="#BowlEnchantment/translations[key]/volume">See details</a>
`aeCost?` |  | <a href="#BowlEnchantment/translations[key]/aeCost">See details</a>
`bindingCost?` |  | <a href="#BowlEnchantment/translations[key]/bindingCost">See details</a>
`errata?` |  | <a href="#BowlEnchantment/translations[key]/errata">See details</a>

#### <a name="BowlEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="BowlEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="BowlEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="BowlEnchantment/translations[key]/volume"></a> `volume`

- **Type:** String

#### <a name="BowlEnchantment/translations[key]/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="BowlEnchantment/translations[key]/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="BowlEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>