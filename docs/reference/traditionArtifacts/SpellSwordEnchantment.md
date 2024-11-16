# Spell-Sword Enchantment

## Definitions

### <a name="SpellSwordEnchantment"></a> Spell-Sword Enchantment (`SpellSwordEnchantment`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SpellSwordEnchantment/id">See details</a>
`levels?` |  | <a href="#SpellSwordEnchantment/levels">See details</a>
`select_options?` |  | <a href="#SpellSwordEnchantment/select_options">See details</a>
`maximum?` |  | <a href="#SpellSwordEnchantment/maximum">See details</a>
`prerequisites?` |  | <a href="#SpellSwordEnchantment/prerequisites">See details</a>
`volume` |  | <a href="#SpellSwordEnchantment/volume">See details</a>
`cost?` |  | <a href="#SpellSwordEnchantment/cost">See details</a>
`property` |  | <a href="#SpellSwordEnchantment/property">See details</a>
`ap_value` |  | <a href="#SpellSwordEnchantment/ap_value">See details</a>
`src` |  | <a href="#SpellSwordEnchantment/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SpellSwordEnchantment/translations">See details</a>

#### <a name="SpellSwordEnchantment/id"></a> `id`

- **Type:** <a href="#Id">Id</a>

#### <a name="SpellSwordEnchantment/levels"></a> `levels?`

- **Type:** <a href="#Levels">Levels</a>

#### <a name="SpellSwordEnchantment/select_options"></a> `select_options?`

- **Type:** <a href="#SelectOptions">SelectOptions</a>

#### <a name="SpellSwordEnchantment/maximum"></a> `maximum?`

- **Type:** <a href="#Maximum">Maximum</a>

#### <a name="SpellSwordEnchantment/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SpellSwordEnchantment/volume"></a> `volume`

- **Type:** <a href="#Volume">Volume</a>

#### <a name="SpellSwordEnchantment/cost"></a> `cost?`

- **Type:** <a href="#EnchantmentCost">EnchantmentCost</a>

#### <a name="SpellSwordEnchantment/property"></a> `property`

- **Type:** <a href="#PropertyDeclaration">PropertyDeclaration</a>

#### <a name="SpellSwordEnchantment/ap_value"></a> `ap_value`

- **Type:** <a href="#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SpellSwordEnchantment/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SpellSwordEnchantment/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SpellSwordEnchantmentTranslation">SpellSwordEnchantmentTranslation</a>&gt;

---

### <a name="SpellSwordEnchantmentTranslation"></a> `SpellSwordEnchantmentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SpellSwordEnchantmentTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SpellSwordEnchantmentTranslation/name_in_library">See details</a>
`effect` |  | <a href="#SpellSwordEnchantmentTranslation/effect">See details</a>
`volume` |  | <a href="#SpellSwordEnchantmentTranslation/volume">See details</a>
`aeCost?` |  | <a href="#SpellSwordEnchantmentTranslation/aeCost">See details</a>
`bindingCost?` |  | <a href="#SpellSwordEnchantmentTranslation/bindingCost">See details</a>
`ap_value?` | The AP value. It is only used if the text cannot be generated from the given information. | <a href="#SpellSwordEnchantmentTranslation/ap_value">See details</a>
`errata?` |  | <a href="#SpellSwordEnchantmentTranslation/errata">See details</a>

#### <a name="SpellSwordEnchantmentTranslation/name"></a> `name`

- **Type:** <a href="#Name">Name</a>

#### <a name="SpellSwordEnchantmentTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="#NameInLibrary">NameInLibrary</a>

#### <a name="SpellSwordEnchantmentTranslation/effect"></a> `effect`

- **Type:** <a href="#Effect">Effect</a>

#### <a name="SpellSwordEnchantmentTranslation/volume"></a> `volume`

- **Type:** String

#### <a name="SpellSwordEnchantmentTranslation/aeCost"></a> `aeCost?`

- **Type:** String

#### <a name="SpellSwordEnchantmentTranslation/bindingCost"></a> `bindingCost?`

- **Type:** String

#### <a name="SpellSwordEnchantmentTranslation/ap_value"></a> `ap_value?`

The AP value. It is only used if the text cannot be generated from the
given information.

- **Type:** <a href="#AdventurePointsValueReplacement">AdventurePointsValueReplacement</a>

#### <a name="SpellSwordEnchantmentTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
