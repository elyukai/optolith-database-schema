# Prerequisites

## Definitions

### <a name="Single/DisplayOption/Type"></a> `Single/DisplayOption/Type`

- **Type:** Union
- **Cases:** <a href="Single/DisplayOption/Type'Hide">Single/DisplayOption/Type'Hide</a> | <a href="Single/DisplayOption/Type'ReplaceWith">Single/DisplayOption/Type'ReplaceWith</a>

---

### <a name="Single/DisplayOption/Type'Hide"></a> `Single/DisplayOption/Type'Hide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/Type'Hide/tag">See details</a>

#### <a name="Single/DisplayOption/Type'Hide/tag"></a> `tag`

- **Constant:** `"Hide"`

---

### <a name="Single/DisplayOption/Type'ReplaceWith"></a> `Single/DisplayOption/Type'ReplaceWith`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/DisplayOption/Type'ReplaceWith/tag">See details</a>
`value` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Single/DisplayOption/Type'ReplaceWith/value">See details</a>

#### <a name="Single/DisplayOption/Type'ReplaceWith/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

#### <a name="Single/DisplayOption/Type'ReplaceWith/value"></a> `value`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Single/DisplayOption/Type'ReplaceWith/value[key]">Single/DisplayOption/Type'ReplaceWith/value[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Single/DisplayOption/Type'ReplaceWith/value[key]"></a> `Single/DisplayOption/Type'ReplaceWith/value[key]`

- **Type:** String

---

### <a name="Single/Rule/Type"></a> `Single/Rule/Type`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Type/tag">See details</a>
`id` |  | <a href="#Single/Rule/Type/id">See details</a>
`display_option` |  | <a href="#Single/Rule/Type/display_option">See details</a>

#### <a name="Single/Rule/Type/tag"></a> `tag`

- **Constant:** `"Rule"`

#### <a name="Single/Rule/Type/id"></a> `id`

- **Type:** <a href="#Single/Rule/Identifier">Single/Rule/Identifier</a>

#### <a name="Single/Rule/Type/display_option"></a> `display_option`

- **Type:** <a href="#Single/DisplayOption/Type">Single/DisplayOption/Type</a>

---

### <a name="Single/Rule/Identifier"></a> `Single/Rule/Identifier`

- **Type:** Union
- **Cases:** <a href="Single/Rule/Identifier'FocusRule">Single/Rule/Identifier'FocusRule</a> | <a href="Single/Rule/Identifier'OptionalRule">Single/Rule/Identifier'OptionalRule</a>

---

### <a name="Single/Rule/Identifier'FocusRule"></a> `Single/Rule/Identifier'FocusRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier'FocusRule/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier'FocusRule/value">See details</a>

#### <a name="Single/Rule/Identifier'FocusRule/tag"></a> `tag`

- **Constant:** `"FocusRule"`

#### <a name="Single/Rule/Identifier'FocusRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Single/Rule/Identifier'OptionalRule"></a> `Single/Rule/Identifier'OptionalRule`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Single/Rule/Identifier'OptionalRule/tag">See details</a>
`value` |  | <a href="#Single/Rule/Identifier'OptionalRule/value">See details</a>

#### <a name="Single/Rule/Identifier'OptionalRule/tag"></a> `tag`

- **Constant:** `"OptionalRule"`

#### <a name="Single/Rule/Identifier'OptionalRule/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Single/Publication/Type"></a> `Single/Publication/Type`

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

- **Type:** <a href="#Single/DisplayOption/Type">Single/DisplayOption/Type</a>

---

### <a name="Group/DerivedCharacteristic"></a> `Group/DerivedCharacteristic`

- **Type:** Union
- **Cases:** <a href="Group/DerivedCharacteristic'Type">Group/DerivedCharacteristic'Type</a>

---

### <a name="Group/DerivedCharacteristic'Type"></a> `Group/DerivedCharacteristic'Type`

- **Type:** <a href="#Single/Rule/Type">Single/Rule/Type</a>

---

### <a name="Group/Publication"></a> `Group/Publication`

- **Type:** Union
- **Cases:** <a href="Group/Publication'Type">Group/Publication'Type</a>

---

### <a name="Group/Publication'Type"></a> `Group/Publication'Type`

- **Type:** <a href="#Single/Publication/Type">Single/Publication/Type</a>

---

### <a name="GroupCollection/DerivedCharacteristic"></a> `GroupCollection/DerivedCharacteristic`

- **Type:** List
- **Items:** <a href="#GroupCollection/DerivedCharacteristic[]">GroupCollection/DerivedCharacteristic[]</a>

---

### <a name="GroupCollection/DerivedCharacteristic[]"></a> `GroupCollection/DerivedCharacteristic[]`

- **Type:** <a href="#Group/DerivedCharacteristic">Group/DerivedCharacteristic</a>

---

### <a name="GroupCollection/Publication"></a> `GroupCollection/Publication`

- **Type:** List
- **Items:** <a href="#GroupCollection/Publication[]">GroupCollection/Publication[]</a>

---

### <a name="GroupCollection/Publication[]"></a> `GroupCollection/Publication[]`

- **Type:** <a href="#Group/Publication">Group/Publication</a>
