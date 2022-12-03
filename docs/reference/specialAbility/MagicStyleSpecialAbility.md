# Magic Style Special Ability

## Definitions

### <a name="MagicStyleSpecialAbility"></a> Magic Style Special Ability (`MagicStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#MagicStyleSpecialAbility/levels">See details</a>
`select_options?` |  | <a href="#MagicStyleSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#MagicStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#MagicStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#MagicStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#MagicStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#MagicStyleSpecialAbility/prerequisites">See details</a>
`ap_value` |  | <a href="#MagicStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#MagicStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicStyleSpecialAbility/translations">See details</a>

#### <a name="MagicStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="MagicStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="MagicStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="MagicStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="MagicStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="MagicStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="MagicStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** Tuple
- **Items:** [<a href="MagicStyleSpecialAbility/advanced[0]">MagicStyleSpecialAbility/advanced[0]</a>, <a href="MagicStyleSpecialAbility/advanced[1]">MagicStyleSpecialAbility/advanced[1]</a>, <a href="MagicStyleSpecialAbility/advanced[2]">MagicStyleSpecialAbility/advanced[2]</a>]

#### <a name="MagicStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="MagicStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="MagicStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicStyleSpecialAbility/translations[key]">MagicStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicStyleSpecialAbility/advanced[0]"></a> `MagicStyleSpecialAbility/advanced[0]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#MagicStyleSpecialAbility/advanced[0]'General">MagicStyleSpecialAbility/advanced[0]'General</a> | <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions">MagicStyleSpecialAbility/advanced[0]'RestrictOptions</a> | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf">MagicStyleSpecialAbility/advanced[0]'OneOf</a> | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption">MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'General"></a> `MagicStyleSpecialAbility/advanced[0]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'General/tag">See details</a>
`general` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'General/general">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="MagicStyleSpecialAbility/advanced[0]'General/general"></a> `general`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'General/general">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'General/general"></a> `MagicStyleSpecialAbility/advanced[0]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'General/general/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions"></a> `MagicStyleSpecialAbility/advanced[0]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]">MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]"></a> `MagicStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf"></a> `MagicStyleSpecialAbility/advanced[0]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/tag">See details</a>
`one_of` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `MagicStyleSpecialAbility/advanced[0]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options">Object</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options"></a> `MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption"></a> `MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]">MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]"></a> `MagicStyleSpecialAbility/advanced[1]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#MagicStyleSpecialAbility/advanced[1]'General">MagicStyleSpecialAbility/advanced[1]'General</a> | <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions">MagicStyleSpecialAbility/advanced[1]'RestrictOptions</a> | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf">MagicStyleSpecialAbility/advanced[1]'OneOf</a> | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption">MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'General"></a> `MagicStyleSpecialAbility/advanced[1]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'General/tag">See details</a>
`general` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'General/general">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="MagicStyleSpecialAbility/advanced[1]'General/general"></a> `general`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'General/general">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'General/general"></a> `MagicStyleSpecialAbility/advanced[1]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'General/general/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions"></a> `MagicStyleSpecialAbility/advanced[1]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]">MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]"></a> `MagicStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf"></a> `MagicStyleSpecialAbility/advanced[1]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/tag">See details</a>
`one_of` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `MagicStyleSpecialAbility/advanced[1]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options">Object</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options"></a> `MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption"></a> `MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]">MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]"></a> `MagicStyleSpecialAbility/advanced[2]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#MagicStyleSpecialAbility/advanced[2]'General">MagicStyleSpecialAbility/advanced[2]'General</a> | <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions">MagicStyleSpecialAbility/advanced[2]'RestrictOptions</a> | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf">MagicStyleSpecialAbility/advanced[2]'OneOf</a> | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption">MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'General"></a> `MagicStyleSpecialAbility/advanced[2]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'General/tag">See details</a>
`general` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'General/general">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="MagicStyleSpecialAbility/advanced[2]'General/general"></a> `general`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'General/general">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'General/general"></a> `MagicStyleSpecialAbility/advanced[2]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'General/general/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions"></a> `MagicStyleSpecialAbility/advanced[2]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]">MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]"></a> `MagicStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf"></a> `MagicStyleSpecialAbility/advanced[2]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/tag">See details</a>
`one_of` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `MagicStyleSpecialAbility/advanced[2]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options">Object</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options"></a> `MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'OneOf/one_of/options/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption"></a> `MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]">MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="MagicStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedMagicalSpecialAbilityIdentifier">AdvancedMagicalSpecialAbilityIdentifier</a>

---

### <a name="MagicStyleSpecialAbility/translations[key]"></a> `MagicStyleSpecialAbility/translations[key]`

- **Type:** <a href="#MagicStyleSpecialAbilityTranslation">MagicStyleSpecialAbilityTranslation</a>

---

### <a name="MagicStyleSpecialAbilityTranslation"></a> `MagicStyleSpecialAbilityTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#MagicStyleSpecialAbilityTranslation/name">See details</a>
`name_in_library?` |  | <a href="#MagicStyleSpecialAbilityTranslation/name_in_library">See details</a>
`rules` |  | <a href="#MagicStyleSpecialAbilityTranslation/rules">See details</a>
`errata?` |  | <a href="#MagicStyleSpecialAbilityTranslation/errata">See details</a>

#### <a name="MagicStyleSpecialAbilityTranslation/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="MagicStyleSpecialAbilityTranslation/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="MagicStyleSpecialAbilityTranslation/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="MagicStyleSpecialAbilityTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
