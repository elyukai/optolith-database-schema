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

- **Type:** <a href="#Id">Id</a>

#### <a name="BowlEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="BowlEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="BowlEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="BowlEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="BowlEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="BowlEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="BowlEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="BowlEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="BowlEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="BowlEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#BowlEnchantmentTranslation">BowlEnchantmentTranslation</a>&gt;

---

### <a name="BowlEnchantmentTranslation"></a> `BowlEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#BowlEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#BowlEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#BowlEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#BowlEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#BowlEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#BowlEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#BowlEnchantmentTranslation/errata">See details</a>

#### <a name="BowlEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="BowlEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="BowlEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="BowlEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="BowlEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="BowlEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="BowlEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
