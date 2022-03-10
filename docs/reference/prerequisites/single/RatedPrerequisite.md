# [TITLE MISSING]

## Definitions

### <a name="RatedPrerequisite"></a> Rated Prerequisite (`RatedPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedPrerequisite/tag">See details</a>
`id` | The rated entry's identifier. | <a href="#RatedPrerequisite/id">See details</a>
`value` | The required minimum value. | <a href="#RatedPrerequisite/value">See details</a>
`display_option?` |  | <a href="#RatedPrerequisite/display_option">See details</a>

#### <a name="RatedPrerequisite/tag"></a> `tag`

- **Constant:** `"Rated"`

#### <a name="RatedPrerequisite/id"></a> `id`

The rated entry's identifier.

- **Type:** <a href="../../_Identifier.md#RatedIdentifier">RatedIdentifier</a>

#### <a name="RatedPrerequisite/value"></a> `value`

The required minimum value.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="RatedPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="RatedSetPrerequisite"></a> Rated Set Prerequisite (`RatedSetPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedSetPrerequisite/tag">See details</a>
`id` | The possible rated entries' identifiers. | <a href="#RatedSetPrerequisite/id">See details</a>
`value` | The required minimum value. | <a href="#RatedSetPrerequisite/value">See details</a>
`display_option?` |  | <a href="#RatedSetPrerequisite/display_option">See details</a>

#### <a name="RatedSetPrerequisite/tag"></a> `tag`

- **Constant:** `"RatedSet"`

#### <a name="RatedSetPrerequisite/id"></a> `id`

The possible rated entries' identifiers.

- **Type:** List
- **Items:** <a href="#RatedSetPrerequisite/id[]">RatedSetPrerequisite/id[]</a>
- **Minimum Items:** `2`

#### <a name="RatedSetPrerequisite/value"></a> `value`

The required minimum value.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="RatedSetPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="RatedSetPrerequisite/id[]"></a> `RatedSetPrerequisite/id[]`

- **Type:** <a href="../../_Identifier.md#RatedIdentifier">RatedIdentifier</a>

---

### <a name="RatedMinimumNumberPrerequisite"></a> Rated Minimum Number Prerequisite (`RatedMinimumNumberPrerequisite`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisite/tag">See details</a>
`number` | The minimum number of skills that need to be on the defined minimum skill rating.. | <a href="#RatedMinimumNumberPrerequisite/number">See details</a>
`value` | The minimum skill rating the defined minimum number of skills need to be on. | <a href="#RatedMinimumNumberPrerequisite/value">See details</a>
`targets` | The targets that contribute to satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisite/targets">See details</a>
`display_option?` |  | <a href="#RatedMinimumNumberPrerequisite/display_option">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/tag"></a> `tag`

- **Constant:** `"RatedMinimumNumber"`

#### <a name="RatedMinimumNumberPrerequisite/number"></a> `number`

The minimum number of skills that need to be on the defined minimum skill
rating..

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatedMinimumNumberPrerequisite/value"></a> `value`

The minimum skill rating the defined minimum number of skills need to be on.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="RatedMinimumNumberPrerequisite/targets"></a> `targets`

The targets that contribute to satisfying the prerequisite.

- **Type:** Union
- **Cases:** <a href="#RatedMinimumNumberPrerequisite/targets'Skills">RatedMinimumNumberPrerequisite/targets'Skills</a> | <a href="#RatedMinimumNumberPrerequisite/targets'Spellworks">RatedMinimumNumberPrerequisite/targets'Spellworks</a> | <a href="#RatedMinimumNumberPrerequisite/targets'Liturgies">RatedMinimumNumberPrerequisite/targets'Liturgies</a>

#### <a name="RatedMinimumNumberPrerequisite/display_option"></a> `display_option?`

- **Type:** <a href="../DisplayOption.md#DisplayOption">DisplayOption</a>

---

### <a name="RatedMinimumNumberPrerequisite/targets'Skills"></a> `RatedMinimumNumberPrerequisite/targets'Skills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisite/targets'Skills/tag">See details</a>
`skills` | The skills that are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisite/targets'Skills/skills">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Skills/tag"></a> `tag`

- **Constant:** `"Skills"`

#### <a name="RatedMinimumNumberPrerequisite/targets'Skills/skills"></a> `skills`

The skills that are taken into account for satisfying the prerequisite.

- **Type:** List
- **Items:** <a href="#RatedMinimumNumberPrerequisite/targets'Skills/skills[]">RatedMinimumNumberPrerequisite/targets'Skills/skills[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="RatedMinimumNumberPrerequisite/targets'Skills/skills[]"></a> `RatedMinimumNumberPrerequisite/targets'Skills/skills[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. | <a href="#RatedMinimumNumberPrerequisite/targets'Skills/skills[]/id">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Skills/skills[]/id"></a> `id`

The skill's identifier.

- **Type:** Number

---

### <a name="RatedMinimumNumberPrerequisite/targets'Spellworks"></a> `RatedMinimumNumberPrerequisite/targets'Spellworks`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisite/targets'Spellworks/tag">See details</a>
`property` | Spellworks with the referenced property are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisite/targets'Spellworks/property">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Spellworks/tag"></a> `tag`

- **Constant:** `"Spellworks"`

#### <a name="RatedMinimumNumberPrerequisite/targets'Spellworks/property"></a> `property`

Spellworks with the referenced property are taken into account for
satisfying the prerequisite.

- **Type:** <a href="#RatedMinimumNumberPrerequisite/targets'Spellworks/property">Object</a>

---

### <a name="RatedMinimumNumberPrerequisite/targets'Spellworks/property"></a> `RatedMinimumNumberPrerequisite/targets'Spellworks/property`

Spellworks with the referenced property are taken into account for
satisfying the prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The property's identifier. | <a href="#RatedMinimumNumberPrerequisite/targets'Spellworks/property/id">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Spellworks/property/id"></a> `id`

The property's identifier.

- **Type:** Number

---

### <a name="RatedMinimumNumberPrerequisite/targets'Liturgies"></a> `RatedMinimumNumberPrerequisite/targets'Liturgies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RatedMinimumNumberPrerequisite/targets'Liturgies/tag">See details</a>
`aspect` | Liturgies with the referenced aspect are taken into account for satisfying the prerequisite. | <a href="#RatedMinimumNumberPrerequisite/targets'Liturgies/aspect">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Liturgies/tag"></a> `tag`

- **Constant:** `"Liturgies"`

#### <a name="RatedMinimumNumberPrerequisite/targets'Liturgies/aspect"></a> `aspect`

Liturgies with the referenced aspect are taken into account for
satisfying the prerequisite.

- **Type:** <a href="#RatedMinimumNumberPrerequisite/targets'Liturgies/aspect">Object</a>

---

### <a name="RatedMinimumNumberPrerequisite/targets'Liturgies/aspect"></a> `RatedMinimumNumberPrerequisite/targets'Liturgies/aspect`

Liturgies with the referenced aspect are taken into account for
satisfying the prerequisite.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The aspect's identifier. | <a href="#RatedMinimumNumberPrerequisite/targets'Liturgies/aspect/id">See details</a>

#### <a name="RatedMinimumNumberPrerequisite/targets'Liturgies/aspect/id"></a> `id`

The aspect's identifier.

- **Type:** Number
