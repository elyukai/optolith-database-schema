# Combat Style Special Ability

## Definitions

### <a name="CombatStyleSpecialAbility"></a> Combat Style Special Ability (`CombatStyleSpecialAbility`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/id">See details</a>
`levels?` |  | <a href="#CombatStyleSpecialAbility/levels">See details</a>
`usage_type` |  | <a href="#CombatStyleSpecialAbility/usage_type">See details</a>
`type` | Is this an armed or unarmed combat style? | <a href="#CombatStyleSpecialAbility/type">See details</a>
`select_options?` |  | <a href="#CombatStyleSpecialAbility/select_options">See details</a>
`skill_applications?` |  | <a href="#CombatStyleSpecialAbility/skill_applications">See details</a>
`skill_uses?` |  | <a href="#CombatStyleSpecialAbility/skill_uses">See details</a>
`maximum?` |  | <a href="#CombatStyleSpecialAbility/maximum">See details</a>
`advanced` |  | <a href="#CombatStyleSpecialAbility/advanced">See details</a>
`prerequisites?` |  | <a href="#CombatStyleSpecialAbility/prerequisites">See details</a>
`combat_techniques` |  | <a href="#CombatStyleSpecialAbility/combat_techniques">See details</a>
`ap_value` |  | <a href="#CombatStyleSpecialAbility/ap_value">See details</a>
`src` |  | <a href="#CombatStyleSpecialAbility/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CombatStyleSpecialAbility/translations">See details</a>

#### <a name="CombatStyleSpecialAbility/id"></a> `id`

- **Type:** <a href="../_Activatable.md#Id">Id</a>

#### <a name="CombatStyleSpecialAbility/levels"></a> `levels?`

- **Type:** <a href="../_Activatable.md#Levels">Levels</a>

#### <a name="CombatStyleSpecialAbility/usage_type"></a> `usage_type`

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityUsageType">CombatSpecialAbilityUsageType</a>

#### <a name="CombatStyleSpecialAbility/type"></a> `type`

Is this an armed or unarmed combat style?

- **Type:** <a href="../_Activatable.md#CombatSpecialAbilityType">CombatSpecialAbilityType</a>

#### <a name="CombatStyleSpecialAbility/select_options"></a> `select_options?`

- **Type:** <a href="../_Activatable.md#SelectOptions">SelectOptions</a>

#### <a name="CombatStyleSpecialAbility/skill_applications"></a> `skill_applications?`

- **Type:** <a href="../_Activatable.md#SkillApplications">SkillApplications</a>

#### <a name="CombatStyleSpecialAbility/skill_uses"></a> `skill_uses?`

- **Type:** <a href="../_Activatable.md#SkillUses">SkillUses</a>

#### <a name="CombatStyleSpecialAbility/maximum"></a> `maximum?`

- **Type:** <a href="../_Activatable.md#Maximum">Maximum</a>

#### <a name="CombatStyleSpecialAbility/advanced"></a> `advanced`

- **Type:** Tuple
- **Items:** [<a href="CombatStyleSpecialAbility/advanced[0]">CombatStyleSpecialAbility/advanced[0]</a>, <a href="CombatStyleSpecialAbility/advanced[1]">CombatStyleSpecialAbility/advanced[1]</a>, <a href="CombatStyleSpecialAbility/advanced[2]">CombatStyleSpecialAbility/advanced[2]</a>]

#### <a name="CombatStyleSpecialAbility/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="CombatStyleSpecialAbility/combat_techniques"></a> `combat_techniques`

- **Type:** <a href="../_Activatable.md#ApplicableCombatTechniques">ApplicableCombatTechniques</a>

#### <a name="CombatStyleSpecialAbility/ap_value"></a> `ap_value`

- **Type:** <a href="../_Activatable.md#AdventurePointsValue">AdventurePointsValue</a>

#### <a name="CombatStyleSpecialAbility/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="CombatStyleSpecialAbility/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CombatStyleSpecialAbility/translations[key]">CombatStyleSpecialAbility/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CombatStyleSpecialAbility/advanced[0]"></a> `CombatStyleSpecialAbility/advanced[0]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#CombatStyleSpecialAbility/advanced[0]'General">CombatStyleSpecialAbility/advanced[0]'General</a> | <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions">CombatStyleSpecialAbility/advanced[0]'RestrictOptions</a> | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf">CombatStyleSpecialAbility/advanced[0]'OneOf</a> | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption">CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'General"></a> `CombatStyleSpecialAbility/advanced[0]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'General/tag">See details</a>
`general` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'General/general">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="CombatStyleSpecialAbility/advanced[0]'General/general"></a> `general`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[0]'General/general">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'General/general"></a> `CombatStyleSpecialAbility/advanced[0]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'General/general/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions"></a> `CombatStyleSpecialAbility/advanced[0]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options"></a> `CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]">CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]"></a> `CombatStyleSpecialAbility/advanced[0]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf"></a> `CombatStyleSpecialAbility/advanced[0]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/tag">See details</a>
`one_of` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of"></a> `CombatStyleSpecialAbility/advanced[0]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]">CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]</a>
- **Minimum Items:** `2`

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]"></a> `CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'OneOf/one_of/options[]/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption"></a> `CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option"></a> `CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]">CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[0]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]"></a> `CombatStyleSpecialAbility/advanced[1]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#CombatStyleSpecialAbility/advanced[1]'General">CombatStyleSpecialAbility/advanced[1]'General</a> | <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions">CombatStyleSpecialAbility/advanced[1]'RestrictOptions</a> | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf">CombatStyleSpecialAbility/advanced[1]'OneOf</a> | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption">CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'General"></a> `CombatStyleSpecialAbility/advanced[1]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'General/tag">See details</a>
`general` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'General/general">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="CombatStyleSpecialAbility/advanced[1]'General/general"></a> `general`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[1]'General/general">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'General/general"></a> `CombatStyleSpecialAbility/advanced[1]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'General/general/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions"></a> `CombatStyleSpecialAbility/advanced[1]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options"></a> `CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]">CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]"></a> `CombatStyleSpecialAbility/advanced[1]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf"></a> `CombatStyleSpecialAbility/advanced[1]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/tag">See details</a>
`one_of` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of"></a> `CombatStyleSpecialAbility/advanced[1]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]">CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]</a>
- **Minimum Items:** `2`

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]"></a> `CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'OneOf/one_of/options[]/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption"></a> `CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option"></a> `CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]">CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[1]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]"></a> `CombatStyleSpecialAbility/advanced[2]`

A reference to an advanced special ability.

- **Type:** Union
- **Cases:** <a href="#CombatStyleSpecialAbility/advanced[2]'General">CombatStyleSpecialAbility/advanced[2]'General</a> | <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions">CombatStyleSpecialAbility/advanced[2]'RestrictOptions</a> | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf">CombatStyleSpecialAbility/advanced[2]'OneOf</a> | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption">CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'General"></a> `CombatStyleSpecialAbility/advanced[2]'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'General/tag">See details</a>
`general` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'General/general">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="CombatStyleSpecialAbility/advanced[2]'General/general"></a> `general`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[2]'General/general">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'General/general"></a> `CombatStyleSpecialAbility/advanced[2]'General/general`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'General/general/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'General/general/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions"></a> `CombatStyleSpecialAbility/advanced[2]'RestrictOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/tag">See details</a>
`restrict_options` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/tag"></a> `tag`

- **Constant:** `"RestrictOptions"`

#### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `restrict_options`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options"></a> `CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The advanced special ability’s identifier. | <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id">See details</a>
`option` | Specify the select option(s) that only are allowed for the referenced advanced special ability; others are disallowed. | <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/id"></a> `id`

The advanced special ability’s identifier.

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option"></a> `option`

Specify the select option(s) that only are allowed for the referenced
advanced special ability; others are disallowed.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]">CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]</a>
- **Minimum Items:** `1`

---

### <a name="CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]"></a> `CombatStyleSpecialAbility/advanced[2]'RestrictOptions/restrict_options/option[]`

- **Type:** <a href="../_IdentifierGroup.md#AdvancedSpecialAbilityRestrictedOptionIdentifier">AdvancedSpecialAbilityRestrictedOptionIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf"></a> `CombatStyleSpecialAbility/advanced[2]'OneOf`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/tag">See details</a>
`one_of` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/tag"></a> `tag`

- **Constant:** `"OneOf"`

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `one_of`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of"></a> `CombatStyleSpecialAbility/advanced[2]'OneOf/one_of`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options">See details</a>
`is_selection_required_on_purchase` | Do have to choose the advanced special ability when buying the style special ability? Otherwise the decision can be made later. | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options"></a> `options`

The possible advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]">CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]</a>
- **Minimum Items:** `2`

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/is_selection_required_on_purchase"></a> `is_selection_required_on_purchase`

Do have to choose the advanced special ability when buying the style
special ability? Otherwise the decision can be made later.

- **Type:** Boolean

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]"></a> `CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'OneOf/one_of/options[]/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption"></a> `CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag">See details</a>
`derive_from_external_option` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/tag"></a> `tag`

- **Constant:** `"DeriveFromExternalOption"`

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `derive_from_external_option`

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option"></a> `CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`external_entry` | The possible advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry">See details</a>
`map` | Map options from the external entry to allowed advanced special abilities. | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map">See details</a>
`display_option?` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/external_entry"></a> `external_entry`

The possible advanced special abilities.

- **Type:** <a href="../_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map"></a> `map`

Map options from the external entry to allowed advanced special abilities.

- **Type:** List
- **Items:** <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]">CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]</a>
- **Minimum Items:** `1`

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/display_option"></a> `display_option?`

- **Type:** <a href="../prerequisites/DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]"></a> `CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]`

Mapping from an option of the external entry to an allowed advanced special
ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`from_option` | The select option's identifier. | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option">See details</a>
`to_advanced` | The advanced special ability's identifier. | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/from_option"></a> `from_option`

The select option's identifier.

- **Type:** <a href="../_Identifier.md#PatronIdentifier">PatronIdentifier</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `to_advanced`

The advanced special ability's identifier.

- **Type:** <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced">Object</a>

---

### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced"></a> `CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id">See details</a>

#### <a name="CombatStyleSpecialAbility/advanced[2]'DeriveFromExternalOption/derive_from_external_option/map[]/to_advanced/id"></a> `id`

- **Type:** <a href="../_Identifier.md#AdvancedCombatSpecialAbilityIdentifier">AdvancedCombatSpecialAbilityIdentifier</a>

---

### <a name="CombatStyleSpecialAbility/translations[key]"></a> `CombatStyleSpecialAbility/translations[key]`

- **Type:** <a href="#CombatStyleSpecialAbilityTransition">CombatStyleSpecialAbilityTransition</a>

---

### <a name="CombatStyleSpecialAbilityTransition"></a> `CombatStyleSpecialAbilityTransition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` |  | <a href="#CombatStyleSpecialAbilityTransition/name">See details</a>
`name_in_library?` |  | <a href="#CombatStyleSpecialAbilityTransition/name_in_library">See details</a>
`rules` |  | <a href="#CombatStyleSpecialAbilityTransition/rules">See details</a>
`errata?` |  | <a href="#CombatStyleSpecialAbilityTransition/errata">See details</a>

#### <a name="CombatStyleSpecialAbilityTransition/name"></a> `name`

- **Type:** <a href="../_Activatable.md#Name">Name</a>

#### <a name="CombatStyleSpecialAbilityTransition/name_in_library"></a> `name_in_library?`

- **Type:** <a href="../_Activatable.md#NameInLibrary">NameInLibrary</a>

#### <a name="CombatStyleSpecialAbilityTransition/rules"></a> `rules`

- **Type:** <a href="../_Activatable.md#Rules">Rules</a>

#### <a name="CombatStyleSpecialAbilityTransition/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>
