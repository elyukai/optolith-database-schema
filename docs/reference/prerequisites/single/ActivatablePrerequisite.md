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

- **Type:** <a href="../../_IdentifierGroup.md#ActivatableIdentifier">ActivatableIdentifier</a>

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

- **Type:** <a href="../../_IdentifierGroup.md#RequirableSelectOptionIdentifier">RequirableSelectOptionIdentifier</a>
