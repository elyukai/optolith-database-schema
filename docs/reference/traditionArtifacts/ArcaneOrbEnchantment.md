# Arcane Orb Enchantment

## Definitions

### <a name="ArcaneOrbEnchantment"></a> Arcane Orb Enchantment (`ArcaneOrbEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#ArcaneOrbEnchantment/id">See details</a>
`levels?` |  | <a href="#ArcaneOrbEnchantment/levels">See details</a>
`select_options?` |  | <a href="#ArcaneOrbEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#ArcaneOrbEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#ArcaneOrbEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#ArcaneOrbEnchantment/volume">See details</a>
`cost?` |  | <a href="#ArcaneOrbEnchantment/cost">See details</a>
`property` |  | <a href="#ArcaneOrbEnchantment/property">See details</a>
`ap_value` |  | <a href="#ArcaneOrbEnchantment/ap_value">See details</a>
`src` |  | <a href="#ArcaneOrbEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneOrbEnchantment/translations">See details</a>

#### <a name="ArcaneOrbEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="ArcaneOrbEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="ArcaneOrbEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="ArcaneOrbEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="ArcaneOrbEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ArcaneOrbEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="ArcaneOrbEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="ArcaneOrbEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="ArcaneOrbEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="ArcaneOrbEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ArcaneOrbEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneOrbEnchantment/translations[key]">ArcaneOrbEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneOrbEnchantment/translations[key]"></a> `ArcaneOrbEnchantment/translations[key]`

- **Type:** <a href="#ArcaneOrbEnchantmentTranslation">ArcaneOrbEnchantmentTranslation</a>

---

### <a name="ArcaneOrbEnchantmentTranslation"></a> `ArcaneOrbEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#ArcaneOrbEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#ArcaneOrbEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#ArcaneOrbEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#ArcaneOrbEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#ArcaneOrbEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#ArcaneOrbEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#ArcaneOrbEnchantmentTranslation/errata">See details</a>

#### <a name="ArcaneOrbEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="ArcaneOrbEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="ArcaneOrbEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="ArcaneOrbEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="ArcaneOrbEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="ArcaneOrbEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="ArcaneOrbEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
