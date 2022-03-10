# [TITLE MISSING]

## Definitions

### <a name="InfluencePrerequisite"></a> Influence Prerequisite (`InfluencePrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#InfluencePrerequisite/tag">See details</a>
`id` | The influence's identifier. | <a href="#InfluencePrerequisite/id">See details</a>
`active` | If the referenced influence must or must not be chosen. | <a href="#InfluencePrerequisite/active">See details</a>
`display_option?` |  | <a href="#InfluencePrerequisite/display_option">See details</a>

#### <a name="InfluencePrerequisite/tag"></a> `tag`

- **Constant:** `"Influence"`

#### <a name="InfluencePrerequisite/id"></a> `id`

The influence's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="InfluencePrerequisite/active"></a> `active`

If the referenced influence must or must not be chosen.

- **Type:** Boolean

#### <a name="InfluencePrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>
