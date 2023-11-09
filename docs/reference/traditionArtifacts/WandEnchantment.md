# Wand Enchantment

## Definitions

### <a name="WandEnchantment"></a> Wand Enchantment (`WandEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#WandEnchantment/id">See details</a>
`levels?` |  | <a href="#WandEnchantment/levels">See details</a>
`select_options?` |  | <a href="#WandEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#WandEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#WandEnchantment/prerequisites">See details</a>
`cost?` |  | <a href="#WandEnchantment/cost">See details</a>
`property` |  | <a href="#WandEnchantment/property">See details</a>
`ap_value` |  | <a href="#WandEnchantment/ap_value">See details</a>
`src` |  | <a href="#WandEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#WandEnchantment/translations">See details</a>

#### <a name="WandEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="WandEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="WandEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="WandEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="WandEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="WandEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="WandEnchantment/property"></a> `property`

- **Type:** <a href="#Property">Property</a>

#### <a name="WandEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="WandEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="WandEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#WandEnchantmentTranslation">WandEnchantmentTranslation</a>&gt;

---

### <a name="WandEnchantmentTranslation"></a> `WandEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#WandEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#WandEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#WandEnchantmentTranslation/effect">See details</a>
`aeCost?` |  | <a href="#WandEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#WandEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#WandEnchantmentTranslation/errata">See details</a>

#### <a name="WandEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="WandEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="WandEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="WandEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="WandEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="WandEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
