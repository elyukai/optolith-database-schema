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
- **Cases:** <a href="#PrimaryAttributeCategory'Blessed">PrimaryAttributeCategory'Blessed</a> | <a href="#PrimaryAttributeCategory'Magical">PrimaryAttributeCategory'Magical</a>

---

### <a name="PrimaryAttributeCategory'Blessed"></a> `PrimaryAttributeCategory'Blessed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeCategory'Blessed/tag">See details</a>

#### <a name="PrimaryAttributeCategory'Blessed/tag"></a> `tag`

- **Constant:** `"Blessed"`

---

### <a name="PrimaryAttributeCategory'Magical"></a> `PrimaryAttributeCategory'Magical`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PrimaryAttributeCategory'Magical/tag">See details</a>

#### <a name="PrimaryAttributeCategory'Magical/tag"></a> `tag`

- **Constant:** `"Magical"`
