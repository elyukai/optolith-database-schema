# [TITLE MISSING]

## Definitions

### <a name="PrimaryAttributePrerequisite"></a> Primary Attribute Prerequisite (`PrimaryAttributePrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributePrerequisite/tag">See details</a>
`category` | Is the required primary attribute for spellcasters or blessed ones? | <a href="#PrimaryAttributePrerequisite/category">See details</a>
`value` | Required value of the attribute | <a href="#PrimaryAttributePrerequisite/value">See details</a>
`display_option?` |  | <a href="#PrimaryAttributePrerequisite/display_option">See details</a>

#### <a name="PrimaryAttributePrerequisite/tag"></a> `tag`

- **Constant:** `"PrimaryAttribute"`

#### <a name="PrimaryAttributePrerequisite/category"></a> `category`

Is the required primary attribute for spellcasters or blessed ones?

- **Type:** Union
- **Cases:** <a href="#PrimaryAttributePrerequisite/category'Blessed">PrimaryAttributePrerequisite/category'Blessed</a> | <a href="#PrimaryAttributePrerequisite/category'Magical">PrimaryAttributePrerequisite/category'Magical</a>

#### <a name="PrimaryAttributePrerequisite/value"></a> `value`

Required value of the attribute

- **Type:** Integer
- **Minimum:** `9`

#### <a name="PrimaryAttributePrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="PrimaryAttributePrerequisite/category'Blessed"></a> `PrimaryAttributePrerequisite/category'Blessed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributePrerequisite/category'Blessed/tag">See details</a>

#### <a name="PrimaryAttributePrerequisite/category'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

---

### <a name="PrimaryAttributePrerequisite/category'Magical"></a> `PrimaryAttributePrerequisite/category'Magical`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributePrerequisite/category'Magical/tag">See details</a>

#### <a name="PrimaryAttributePrerequisite/category'Magical/tag"></a> `tag`

- **Constant:** `"Magical"`
