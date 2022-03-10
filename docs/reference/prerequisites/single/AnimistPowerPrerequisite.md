# [TITLE MISSING]

## Definitions

### <a name="AnimistPowerPrerequisite"></a> Animist Power Prerequisite (`AnimistPowerPrerequisite`)

Requires a specific animist power to be on a minimum value.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPrerequisite/tag">See details</a>
`id` | The animist power's identifier. | <a href="#AnimistPowerPrerequisite/id">See details</a>
`level?` | The level to which the minimum value applies. | <a href="#AnimistPowerPrerequisite/level">See details</a>
`value` | The required minimum value. | <a href="#AnimistPowerPrerequisite/value">See details</a>
`display_option?` |  | <a href="#AnimistPowerPrerequisite/display_option">See details</a>

#### <a name="AnimistPowerPrerequisite/tag"></a> `tag`

- **Constant:** `"AnimistPower"`

#### <a name="AnimistPowerPrerequisite/id"></a> `id`

The animist power's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimistPowerPrerequisite/level"></a> `level?`

The level to which the minimum value applies.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="AnimistPowerPrerequisite/value"></a> `value`

The required minimum value.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="AnimistPowerPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>
