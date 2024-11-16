# Weapon Enchantment

## Definitions

### <a name="WeaponEnchantment"></a> Weapon Enchantment (`WeaponEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#WeaponEnchantment/id">See details</a>
`levels?` |  | <a href="#WeaponEnchantment/levels">See details</a>
`select_options?` |  | <a href="#WeaponEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#WeaponEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#WeaponEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#WeaponEnchantment/volume">See details</a>
`cost?` |  | <a href="#WeaponEnchantment/cost">See details</a>
`property` |  | <a href="#WeaponEnchantment/property">See details</a>
`ap_value` |  | <a href="#WeaponEnchantment/ap_value">See details</a>
`src` |  | <a href="#WeaponEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#WeaponEnchantment/translations">See details</a>

#### <a name="WeaponEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="WeaponEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="WeaponEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="WeaponEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="WeaponEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="WeaponEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="WeaponEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="WeaponEnchantment/property"></a> `property`

- **Type:** <a href="#PropertyDeclaration">PropertyDeclaration</a>

#### <a name="WeaponEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="WeaponEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="WeaponEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#WeaponEnchantmentTranslation">WeaponEnchantmentTranslation</a>&gt;

---

### <a name="WeaponEnchantmentTranslation"></a> `WeaponEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#WeaponEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#WeaponEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#WeaponEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#WeaponEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#WeaponEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#WeaponEnchantmentTranslation/bindingCost">See details</a>
`errata?` |  | <a href="#WeaponEnchantmentTranslation/errata">See details</a>

#### <a name="WeaponEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="WeaponEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="WeaponEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="WeaponEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="WeaponEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="WeaponEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="WeaponEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
