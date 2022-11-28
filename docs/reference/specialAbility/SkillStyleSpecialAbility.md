# Skill Style Special Ability

## Definitions

### <a name="SkillStyleSpecialAbility"></a> Skill Style Special Ability (`SkillStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#SkillStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#SkillStyleSpecialAbility/select_options">See details</a>
`maximum?` |  | <a href="#SkillStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#SkillStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#SkillStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#SkillStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#SkillStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillStyleSpecialAbility/translations">See details</a>

#### <a name="SkillStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="SkillStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="SkillStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="SkillStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="SkillStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** Tuple
- **Items:** [<a href="SkillStyleSpecialAbility/advanced[0]">SkillStyleSpecialAbility/advanced[0]</a>, <a href="SkillStyleSpecialAbility/advanced[1]">SkillStyleSpecialAbility/advanced[1]</a>, <a href="SkillStyleSpecialAbility/advanced[2]">SkillStyleSpecialAbility/advanced[2]</a>]

#### <a name="SkillStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="SkillStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="SkillStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SkillStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillStyleSpecialAbility/translations[key]">SkillStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillStyleSpecialAbility/advanced[0]"></a> `SkillStyleSpecialAbility/advanced[0]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#SkillStyleSpecialAbility/advanced[0]'General">SkillStyleSpecialAbility/advanced[0]'General</a> | <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions">SkillStyleSpecialAbility/advanced[0]'RestrictOptions</a> | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf">SkillStyleSpecialAbility/advanced[0]'OneOf</a> | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption">SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'General"></a> `SkillStyleSpecialAbility/advanced[0]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'General/tag">See details</a>
`general` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'General/general">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="SkillStyleSpecialAbility/advanced[0]'General/general"></a> `general`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'General/general">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'General/general"></a> `SkillStyleSpecialAbility/advanced[0]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'General/general/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions"></a> `SkillStyleSpecialAbility/advanced[0]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]">SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]"></a> `SkillStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="./_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf"></a> `SkillStyleSpecialAbility/advanced[0]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/tag">See details</a>
`one_of` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `SkillStyleSpecialAbility/advanced[0]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options">Object</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options"></a> `SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption"></a> `SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]">SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="./_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]"></a> `SkillStyleSpecialAbility/advanced[1]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#SkillStyleSpecialAbility/advanced[1]'General">SkillStyleSpecialAbility/advanced[1]'General</a> | <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions">SkillStyleSpecialAbility/advanced[1]'RestrictOptions</a> | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf">SkillStyleSpecialAbility/advanced[1]'OneOf</a> | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption">SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'General"></a> `SkillStyleSpecialAbility/advanced[1]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'General/tag">See details</a>
`general` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'General/general">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="SkillStyleSpecialAbility/advanced[1]'General/general"></a> `general`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'General/general">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'General/general"></a> `SkillStyleSpecialAbility/advanced[1]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'General/general/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions"></a> `SkillStyleSpecialAbility/advanced[1]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]">SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]"></a> `SkillStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="./_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf"></a> `SkillStyleSpecialAbility/advanced[1]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/tag">See details</a>
`one_of` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `SkillStyleSpecialAbility/advanced[1]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options">Object</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options"></a> `SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption"></a> `SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]">SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="./_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]"></a> `SkillStyleSpecialAbility/advanced[2]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#SkillStyleSpecialAbility/advanced[2]'General">SkillStyleSpecialAbility/advanced[2]'General</a> | <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions">SkillStyleSpecialAbility/advanced[2]'RestrictOptions</a> | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf">SkillStyleSpecialAbility/advanced[2]'OneOf</a> | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption">SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'General"></a> `SkillStyleSpecialAbility/advanced[2]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'General/tag">See details</a>
`general` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'General/general">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="SkillStyleSpecialAbility/advanced[2]'General/general"></a> `general`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'General/general">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'General/general"></a> `SkillStyleSpecialAbility/advanced[2]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'General/general/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions"></a> `SkillStyleSpecialAbility/advanced[2]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]">SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]"></a> `SkillStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="./_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf"></a> `SkillStyleSpecialAbility/advanced[2]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/tag">See details</a>
`one_of` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `SkillStyleSpecialAbility/advanced[2]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options">Object</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options"></a> `SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption"></a> `SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]">SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="./prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="./_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="SkillStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedSkillSpecialAbilityIdentifier">AdvancedSkillSpecialAbilityIdentifier</a>

---

### <a name="SkillStyleSpecialAbility/translations[key]"></a> `SkillStyleSpecialAbility/translations[key]`

- **Type:** <a href="#SkillStyleSpecialAbilityTranslation">SkillStyleSpecialAbilityTranslation</a>

---

### <a name="SkillStyleSpecialAbilityTranslation"></a> `SkillStyleSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#SkillStyleSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#SkillStyleSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#SkillStyleSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#SkillStyleSpecialAbilityTranslation/errata">See details</a>

#### <a name="SkillStyleSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="SkillStyleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="SkillStyleSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="SkillStyleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
