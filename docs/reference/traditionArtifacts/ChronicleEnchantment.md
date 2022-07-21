# Chronicle Enchantment

## Definitions

### <a name="ChronicleEnchantment"></a> Chronicle Enchantment (`ChronicleEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ChronicleEnchantment/id">See details</a>
`levels?` |  | <a href="#ChronicleEnchantment/levels">See details</a>
`select_options?` |  | <a href="#ChronicleEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#ChronicleEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#ChronicleEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#ChronicleEnchantment/volume">See details</a>
`cost?` |  | <a href="#ChronicleEnchantment/cost">See details</a>
`property` |  | <a href="#ChronicleEnchantment/property">See details</a>
`ap_value` |  | <a href="#ChronicleEnchantment/ap_value">See details</a>
`src` |  | <a href="#ChronicleEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ChronicleEnchantment/translations">See details</a>

#### <a name="ChronicleEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="ChronicleEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="ChronicleEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="ChronicleEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="ChronicleEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ChronicleEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="ChronicleEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="ChronicleEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="ChronicleEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="ChronicleEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ChronicleEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ChronicleEnchantment/translations[key]">ChronicleEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ChronicleEnchantment/translations[key]"></a> `ChronicleEnchantment/translations[key]`

- **Type:** <a href="#ChronicleEnchantmentTranslation">ChronicleEnchantmentTranslation</a>

---

### <a name="ChronicleEnchantmentTranslation"></a> `ChronicleEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ChronicleEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#ChronicleEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#ChronicleEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#ChronicleEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#ChronicleEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#ChronicleEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#ChronicleEnchantmentTranslation/errata">See details</a>

#### <a name="ChronicleEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="ChronicleEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="ChronicleEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="ChronicleEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="ChronicleEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="ChronicleEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="ChronicleEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
