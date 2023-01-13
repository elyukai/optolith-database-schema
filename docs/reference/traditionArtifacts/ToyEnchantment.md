# Toy Enchantment

## Definitions

### <a name="ToyEnchantment"></a> Toy Enchantment (`ToyEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ToyEnchantment/id">See details</a>
`levels?` |  | <a href="#ToyEnchantment/levels">See details</a>
`select_options?` |  | <a href="#ToyEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#ToyEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#ToyEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#ToyEnchantment/volume">See details</a>
`cost?` |  | <a href="#ToyEnchantment/cost">See details</a>
`property` |  | <a href="#ToyEnchantment/property">See details</a>
`ap_value` |  | <a href="#ToyEnchantment/ap_value">See details</a>
`src` |  | <a href="#ToyEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ToyEnchantment/translations">See details</a>

#### <a name="ToyEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="ToyEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="ToyEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="ToyEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="ToyEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ToyEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="ToyEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="ToyEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="ToyEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="ToyEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ToyEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ToyEnchantment/translations[key]">ToyEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ToyEnchantment/translations[key]"></a> `ToyEnchantment/translations[key]`

- **Type:** <a href="#ToyEnchantmentTranslation">ToyEnchantmentTranslation</a>

---

### <a name="ToyEnchantmentTranslation"></a> `ToyEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ToyEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#ToyEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#ToyEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#ToyEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#ToyEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#ToyEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#ToyEnchantmentTranslation/errata">See details</a>

#### <a name="ToyEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="ToyEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="ToyEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="ToyEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="ToyEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="ToyEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="ToyEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
