# Ring Enchantment

## Definitions

### <a name="RingEnchantment"></a> Ring Enchantment (`RingEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#RingEnchantment/id">See details</a>
`levels?` |  | <a href="#RingEnchantment/levels">See details</a>
`select_options?` |  | <a href="#RingEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#RingEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#RingEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#RingEnchantment/volume">See details</a>
`cost?` |  | <a href="#RingEnchantment/cost">See details</a>
`property` |  | <a href="#RingEnchantment/property">See details</a>
`ap_value` |  | <a href="#RingEnchantment/ap_value">See details</a>
`src` |  | <a href="#RingEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#RingEnchantment/translations">See details</a>

#### <a name="RingEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="RingEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="RingEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="RingEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="RingEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="RingEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="RingEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="RingEnchantment/property"></a> `property`

- **Type:** <a href="#PropertyDeclaration">PropertyDeclaration</a>

#### <a name="RingEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="RingEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="RingEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RingEnchantmentTranslation">RingEnchantmentTranslation</a>&gt;

---

### <a name="RingEnchantmentTranslation"></a> `RingEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#RingEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#RingEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#RingEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#RingEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#RingEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#RingEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#RingEnchantmentTranslation/errata">See details</a>

#### <a name="RingEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="RingEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="RingEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="RingEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="RingEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="RingEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="RingEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
