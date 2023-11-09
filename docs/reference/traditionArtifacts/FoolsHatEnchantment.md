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

- **Type:** <a href="#Id">Id</a>

#### <a name="FoolsHatEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="FoolsHatEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="FoolsHatEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="FoolsHatEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="FoolsHatEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="FoolsHatEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="FoolsHatEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="FoolsHatEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="FoolsHatEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="FoolsHatEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FoolsHatEnchantmentTranslation">FoolsHatEnchantmentTranslation</a>&gt;

---

### <a name="FoolsHatEnchantmentTranslation"></a> `FoolsHatEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#FoolsHatEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#FoolsHatEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#FoolsHatEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#FoolsHatEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#FoolsHatEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#FoolsHatEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#FoolsHatEnchantmentTranslation/errata">See details</a>

#### <a name="FoolsHatEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="FoolsHatEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="FoolsHatEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="FoolsHatEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="FoolsHatEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="FoolsHatEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="FoolsHatEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
