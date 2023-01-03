# Cauldron Enchantment

## Definitions

### <a name="CauldronEnchantment"></a> Cauldron Enchantment (`CauldronEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CauldronEnchantment/id">See details</a>
`levels?` |  | <a href="#CauldronEnchantment/levels">See details</a>
`select_options?` |  | <a href="#CauldronEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#CauldronEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#CauldronEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#CauldronEnchantment/volume">See details</a>
`brew` | Witches can learn to brew special things in their Witch's Cauldron. These brews can be categorized in different types. | <a href="#CauldronEnchantment/brew">See details</a>
`cost?` |  | <a href="#CauldronEnchantment/cost">See details</a>
`property` |  | <a href="#CauldronEnchantment/property">See details</a>
`ap_value` |  | <a href="#CauldronEnchantment/ap_value">See details</a>
`src` |  | <a href="#CauldronEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CauldronEnchantment/translations">See details</a>

#### <a name="CauldronEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CauldronEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CauldronEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="CauldronEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CauldronEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CauldronEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="CauldronEnchantment/brew"></a> `brew`

Witches can learn to brew special things in their Witch's Cauldron. These
brews can be categorized in different types.

- **Type:** <a href="#BrewReference">BrewReference</a>

#### <a name="CauldronEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="CauldronEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="CauldronEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CauldronEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CauldronEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CauldronEnchantment/translations[key]">CauldronEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CauldronEnchantment/translations[key]"></a> `CauldronEnchantment/translations[key]`

- **Type:** <a href="#CauldronEnchantmentTranslation">CauldronEnchantmentTranslation</a>

---

### <a name="BrewReference"></a> `BrewReference`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The brew's identifier. | <a href="#BrewReference/id">See details</a>

#### <a name="BrewReference/id"></a> `id`

The brew's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `4`

---

### <a name="CauldronEnchantmentTranslation"></a> `CauldronEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CauldronEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#CauldronEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#CauldronEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#CauldronEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#CauldronEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#CauldronEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#CauldronEnchantmentTranslation/errata">See details</a>

#### <a name="CauldronEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CauldronEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CauldronEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="CauldronEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="CauldronEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="CauldronEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="CauldronEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
