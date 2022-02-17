# Prerequisites

## Definitions

### <a name="Single"></a> Single Prerequisites

- **Type:** Union

#### Case: Hide

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/Type`0/tag">See details</a>

##### <a name="Single/DisplayOption/Type`0/tag"></a> `tag`

- **Constant:** `"Hide"`

#### Case: ReplaceWith

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/Type`1/tag">See details</a>
`value` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Single/DisplayOption/Type`1/value">See details</a>

##### <a name="Single/DisplayOption/Type`1/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

##### <a name="Single/DisplayOption/Type`1/value"></a> `value`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

###### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** String

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Type/tag">See details</a>
`id` |  | <a href="#Single/Rule/Type/id">See details</a>
`display_option` |  | <a href="#Single/Rule/Type/display_option">See details</a>

#### <a name="Single/Rule/Type/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="Single/Rule/Type/id"></a> `id`

- **Type:** <a href="#Rule/Single/Identifier">Identifier</a>

#### <a name="Single/Rule/Type/display_option"></a> `display_option`

- **Type:** <a href="#DisplayOption/Single/Type">Type</a>

- **Type:** Union

#### Case: FocusRule

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier`0/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier`0/value">See details</a>

##### <a name="Single/Rule/Identifier`0/tag"></a> `tag`

- **Constant:** `"FocusRule"`

##### <a name="Single/Rule/Identifier`0/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

#### Case: OptionalRule

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier`1/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier`1/value">See details</a>

##### <a name="Single/Rule/Identifier`1/tag"></a> `tag`

- **Constant:** `"OptionalRule"`

##### <a name="Single/Rule/Identifier`1/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Publication/Type/tag">See details</a>
`id` |  | <a href="#Single/Publication/Type/id">See details</a>
`display_option` |  | <a href="#Single/Publication/Type/display_option">See details</a>

#### <a name="Single/Publication/Type/tag"></a> `tag`

- **Constant:** `"Publication"`

#### <a name="Single/Publication/Type/id"></a> `id`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Single/Publication/Type/display_option"></a> `display_option`

- **Type:** <a href="#DisplayOption/Single/Type">Type</a>

---

### <a name="Group"></a> Grouped Prerequisites

- **Type:** Union

#### Case: Type

- **Type:** <a href="#Rule/Single/Type">Type</a>

- **Type:** Union

#### Case: Type

- **Type:** <a href="#Publication/Single/Type">Type</a>

---

### <a name="Collection"></a> Prerequisite Collection Types

---

### <a name="GroupCollection"></a> Grouped Prerequisite Collections

- **Type:** List

#### Items

- **Type:** <a href="#Group/DerivedCharacteristic">DerivedCharacteristic</a>

- **Type:** List

#### Items

- **Type:** <a href="#Group/Publication">Publication</a>
