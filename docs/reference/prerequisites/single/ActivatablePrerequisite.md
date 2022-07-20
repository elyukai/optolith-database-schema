# [TITLE MISSING]

## Definitions

### <a name="ActivatablePrerequisite"></a> Activatable Prerequisite (`ActivatablePrerequisite`)

Requires a specific advantage, disadvantage or special ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The activatable entry's identifier. | <a href="#ActivatablePrerequisite/id">See details</a>
`active` | If the required entry should be required to be active or inactive. | <a href="#ActivatablePrerequisite/active">See details</a>
`level?` | The required minimum level of the entry. | <a href="#ActivatablePrerequisite/level">See details</a>
`options?` | Required select options. Order is important. Typically, you only need the first array index, though. | <a href="#ActivatablePrerequisite/options">See details</a>
`display_option?` |  | <a href="#ActivatablePrerequisite/display_option">See details</a>
`when?` |  | <a href="#ActivatablePrerequisite/when">See details</a>

#### <a name="ActivatablePrerequisite/id"></a> `id`

The activatable entry's identifier.

- **Type:** <a href="../../_Identifier.md#ActivatableIdentifier">ActivatableIdentifier</a>

#### <a name="ActivatablePrerequisite/active"></a> `active`

If the required entry should be required to be active or inactive.

- **Type:** Boolean

#### <a name="ActivatablePrerequisite/level"></a> `level?`

The required minimum level of the entry.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ActivatablePrerequisite/options"></a> `options?`

Required select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#ActivatablePrerequisite/options[]">ActivatablePrerequisite/options[]</a>
- **Minimum Items:** `1`

#### <a name="ActivatablePrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

#### <a name="ActivatablePrerequisite/when"></a> `when?`

- **Type:** <a href="../ConditionalPrerequisites.md#Preconditions">Preconditions</a>

---

### <a name="ActivatablePrerequisite/options[]"></a> `ActivatablePrerequisite/options[]`

- **Type:** <a href="../../_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="ActivatableSetPrerequisite"></a> Activatable Set Prerequisite (`ActivatableSetPrerequisite`)

Requires a specific advantage, disadvantage or special ability from a given
set of entries.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The possible activatable entries' identifiers. | <a href="#ActivatableSetPrerequisite/id">See details</a>
`active` | If the required entry should be required to be active or inactive. | <a href="#ActivatableSetPrerequisite/active">See details</a>
`level?` | The required minimum level of the entry. | <a href="#ActivatableSetPrerequisite/level">See details</a>
`options?` | Required select options. Order is important. Typically, you only need the first array index, though. | <a href="#ActivatableSetPrerequisite/options">See details</a>
`display_option?` |  | <a href="#ActivatableSetPrerequisite/display_option">See details</a>

#### <a name="ActivatableSetPrerequisite/id"></a> `id`

The possible activatable entries' identifiers.

- **Type:** List
- **Items:** <a href="#ActivatableSetPrerequisite/id[]">ActivatableSetPrerequisite/id[]</a>
- **Minimum Items:** `2`

#### <a name="ActivatableSetPrerequisite/active"></a> `active`

If the required entry should be required to be active or inactive.

- **Type:** Boolean

#### <a name="ActivatableSetPrerequisite/level"></a> `level?`

The required minimum level of the entry.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ActivatableSetPrerequisite/options"></a> `options?`

Required select options. Order is important. Typically, you only need the
first array index, though.

- **Type:** List
- **Items:** <a href="#ActivatableSetPrerequisite/options[]">ActivatableSetPrerequisite/options[]</a>
- **Minimum Items:** `1`

#### <a name="ActivatableSetPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="ActivatableSetPrerequisite/id[]"></a> `ActivatableSetPrerequisite/id[]`

- **Type:** <a href="../../_Identifier.md#ActivatableIdentifier">ActivatableIdentifier</a>

---

### <a name="ActivatableSetPrerequisite/options[]"></a> `ActivatableSetPrerequisite/options[]`

- **Type:** <a href="../../_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="ActivatableOptionSetPrerequisite"></a> Activatable Option Set Prerequisite (`ActivatableOptionSetPrerequisite`)

Requires one option from a set of options from a specific advantage,
disadvantage or special ability.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The activatable entry's identifier. | <a href="#ActivatableOptionSetPrerequisite/id">See details</a>
`active` | If the required entry should be required to be active or inactive. | <a href="#ActivatableOptionSetPrerequisite/active">See details</a>
`level?` | The required minimum level of the entry. | <a href="#ActivatableOptionSetPrerequisite/level">See details</a>
`first_option` | The possible set of first options. | <a href="#ActivatableOptionSetPrerequisite/first_option">See details</a>
`other_options?` | Required other select options. Order is important. | <a href="#ActivatableOptionSetPrerequisite/other_options">See details</a>
`display_option?` |  | <a href="#ActivatableOptionSetPrerequisite/display_option">See details</a>

#### <a name="ActivatableOptionSetPrerequisite/id"></a> `id`

The activatable entry's identifier.

- **Type:** <a href="../../_Identifier.md#ActivatableIdentifier">ActivatableIdentifier</a>

#### <a name="ActivatableOptionSetPrerequisite/active"></a> `active`

If the required entry should be required to be active or inactive.

- **Type:** Boolean

#### <a name="ActivatableOptionSetPrerequisite/level"></a> `level?`

The required minimum level of the entry.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ActivatableOptionSetPrerequisite/first_option"></a> `first_option`

The possible set of first options.

- **Type:** List
- **Items:** <a href="#ActivatableOptionSetPrerequisite/first_option[]">ActivatableOptionSetPrerequisite/first_option[]</a>
- **Minimum Items:** `2`

#### <a name="ActivatableOptionSetPrerequisite/other_options"></a> `other_options?`

Required other select options. Order is important.

- **Type:** List
- **Items:** <a href="#ActivatableOptionSetPrerequisite/other_options[]">ActivatableOptionSetPrerequisite/other_options[]</a>
- **Minimum Items:** `1`

#### <a name="ActivatableOptionSetPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="ActivatableOptionSetPrerequisite/first_option[]"></a> `ActivatableOptionSetPrerequisite/first_option[]`

- **Type:** <a href="../../_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>

---

### <a name="ActivatableOptionSetPrerequisite/other_options[]"></a> `ActivatableOptionSetPrerequisite/other_options[]`

- **Type:** <a href="../../_Identifier.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>
