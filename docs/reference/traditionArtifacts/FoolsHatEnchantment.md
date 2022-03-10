# Fool's Hat Enchantment

## Definitions

### <a name="FoolsHatEnchantment"></a> Fool's Hat Enchantment (`FoolsHatEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#FoolsHatEnchantment/id">See details</a>
`levels?` |  | <a href="#FoolsHatEnchantment/levels">See details</a>
`select_options?` |  | <a href="#FoolsHatEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#FoolsHatEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#FoolsHatEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#FoolsHatEnchantment/volume">See details</a>
`cost?` |  | <a href="#FoolsHatEnchantment/cost">See details</a>
`property` |  | <a href="#FoolsHatEnchantment/property">See details</a>
`ap_value` |  | <a href="#FoolsHatEnchantment/ap_value">See details</a>
`src` |  | <a href="#FoolsHatEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FoolsHatEnchantment/translations">See details</a>

#### <a name="FoolsHatEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="FoolsHatEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="FoolsHatEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="FoolsHatEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="FoolsHatEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="FoolsHatEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="FoolsHatEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="FoolsHatEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="FoolsHatEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FoolsHatEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FoolsHatEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FoolsHatEnchantment/translations[key]">FoolsHatEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FoolsHatEnchantment/translations[key]"></a> `FoolsHatEnchantment/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FoolsHatEnchantment/translations[key]/name">See details</a>
`name_in_library?` |  | <a href="#FoolsHatEnchantment/translations[key]/name_in_library">See details</a>
`effect` |  | <a href="#FoolsHatEnchantment/translations[key]/effect">See details</a>
`volume` |  | <a href="#FoolsHatEnchantment/translations[key]/volume">See details</a>
`aeCost?` |  | <a href="#FoolsHatEnchantment/translations[key]/aeCost">See details</a>
`bindingCost?` |  | <a href="#FoolsHatEnchantment/translations[key]/bindingCost">See details</a>
`errata?` |  | <a href="#FoolsHatEnchantment/translations[key]/errata">See details</a>

#### <a name="FoolsHatEnchantment/translations[key]/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="FoolsHatEnchantment/translations[key]/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="FoolsHatEnchantment/translations[key]/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="FoolsHatEnchantment/translations[key]/volume"></a> `volume`

- **Type:** String

#### <a name="FoolsHatEnchantment/translations[key]/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="FoolsHatEnchantment/translations[key]/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="FoolsHatEnchantment/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
