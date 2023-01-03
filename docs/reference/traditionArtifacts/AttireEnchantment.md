# Attire Enchantment

## Definitions

### <a name="AttireEnchantment"></a> Attire Enchantment (`AttireEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#AttireEnchantment/id">See details</a>
`levels?` |  | <a href="#AttireEnchantment/levels">See details</a>
`select_options?` |  | <a href="#AttireEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#AttireEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#AttireEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#AttireEnchantment/volume">See details</a>
`cost?` |  | <a href="#AttireEnchantment/cost">See details</a>
`property` |  | <a href="#AttireEnchantment/property">See details</a>
`ap_value` |  | <a href="#AttireEnchantment/ap_value">See details</a>
`src` |  | <a href="#AttireEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AttireEnchantment/translations">See details</a>

#### <a name="AttireEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="AttireEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="AttireEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="AttireEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="AttireEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="AttireEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="AttireEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="AttireEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="AttireEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="AttireEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AttireEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AttireEnchantment/translations[key]">AttireEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AttireEnchantment/translations[key]"></a> `AttireEnchantment/translations[key]`

- **Type:** <a href="#AttireEnchantmentTranslation">AttireEnchantmentTranslation</a>

---

### <a name="AttireEnchantmentTranslation"></a> `AttireEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#AttireEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#AttireEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#AttireEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#AttireEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#AttireEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#AttireEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#AttireEnchantmentTranslation/errata">See details</a>

#### <a name="AttireEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="AttireEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="AttireEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="AttireEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="AttireEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="AttireEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="AttireEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
