# Staff Enchantment

## Definitions

### <a name="StaffEnchantment"></a> Staff Enchantment (`StaffEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#StaffEnchantment/id">See details</a>
`levels?` |  | <a href="#StaffEnchantment/levels">See details</a>
`select_options?` |  | <a href="#StaffEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#StaffEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#StaffEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#StaffEnchantment/volume">See details</a>
`cost?` |  | <a href="#StaffEnchantment/cost">See details</a>
`property` |  | <a href="#StaffEnchantment/property">See details</a>
`ap_value` |  | <a href="#StaffEnchantment/ap_value">See details</a>
`src` |  | <a href="#StaffEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#StaffEnchantment/translations">See details</a>

#### <a name="StaffEnchantment/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="StaffEnchantment/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="StaffEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="StaffEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="StaffEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="StaffEnchantment/volume"></a> `volume`

- **Type:** <a href="../_Activatable.md#Volume">Volume</a>

#### <a name="StaffEnchantment/cost"></a> `cost?`

- **Type:** <a href="../_Activatable.md#EnchantmentCost">EnchantmentCost</a>

#### <a name="StaffEnchantment/property"></a> `property`

- **Type:** <a href="../_Activatable.md#Property">Property</a>

#### <a name="StaffEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="StaffEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="StaffEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#StaffEnchantment/translations[key]">StaffEnchantment/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="StaffEnchantment/translations[key]"></a> `StaffEnchantment/translations[key]`

- **Type:** <a href="#StaffEnchantmentTranslation">StaffEnchantmentTranslation</a>

---

### <a name="StaffEnchantmentTranslation"></a> `StaffEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#StaffEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#StaffEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#StaffEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#StaffEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#StaffEnchantmentTranslation/aeCost">See details</a>
`cost_note?` | A note, appended to the generated cost string in parenthesis. | <a href="#StaffEnchantmentTranslation/cost_note">See details</a>
`bindingCost?` |  | <a href="#StaffEnchantmentTranslation/bindingCost">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#StaffEnchantmentTranslation/ap_value">See details</a>
`errata?` |  | <a href="#StaffEnchantmentTranslation/errata">See details</a>

#### <a name="StaffEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="StaffEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="StaffEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="../_Activatable.md#Effect">Effect</a>

#### <a name="StaffEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="StaffEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="StaffEnchantmentTranslation/cost_note"></a> `cost_note?`

A note, appended to the generated cost string in parenthesis.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

#### <a name="StaffEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="StaffEnchantmentTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the
given information.

- **Type:** <a href="../_Activatable.md#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="StaffEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
