# [TITLE MISSING]

## Definitions

### <a name="PrimaryAttributePrerequisite"></a> Primary Attribute Prerequisite (`PrimaryAttributePrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`category` | Is the required primary attribute for spellcasters or blessed ones? | <a href="#PrimaryAttributePrerequisite/category">See details</a>
`value` | Required value of the attribute | <a href="#PrimaryAttributePrerequisite/value">See details</a>
`display_option?` |  | <a href="#PrimaryAttributePrerequisite/display_option">See details</a>

#### <a name="PrimaryAttributePrerequisite/category"></a> `category`

Is the required primary attribute for spellcasters or blessed ones?

- **Type:** <a href="#PrimaryAttributeCategory">PrimaryAttributeCategory</a>

#### <a name="PrimaryAttributePrerequisite/value"></a> `value`

Required value of the attribute

- **Type:** Integer
- **Minimum:** `9`

#### <a name="PrimaryAttributePrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="PrimaryAttributeCategory"></a> `PrimaryAttributeCategory`

- **Type:** Union
- **Cases:** <a href="#PrimaryAttributeCategory'0">PrimaryAttributeCategory'0</a> | <a href="#PrimaryAttributeCategory'1">PrimaryAttributeCategory'1</a>

---

### <a name="PrimaryAttributeCategory'0"></a> `PrimaryAttributeCategory'0`

- **Constant:** `"Blessed"`

---

### <a name="PrimaryAttributeCategory'1"></a> `PrimaryAttributeCategory'1`

- **Constant:** `"Magical"`
