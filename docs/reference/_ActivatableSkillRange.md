# [TITLE MISSING]

## Definitions

### <a name="Range"></a> `Range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#Range/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Range/translations">See details</a>

#### <a name="Range/value"></a> `value`

- **Type:** <a href="#RangeValue">RangeValue</a>

#### <a name="Range/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RangeTranslation">RangeTranslation</a>&gt;

---

### <a name="RangeValue"></a> `RangeValue`

- **Type:** Union
- **Cases:** <a href="#RangeValue'Modifiable">RangeValue'Modifiable</a> | <a href="#RangeValue'Sight">RangeValue'Sight</a> | <a href="#RangeValue'Self">RangeValue'Self</a> | <a href="#RangeValue'Global">RangeValue'Global</a> | <a href="#RangeValue'Touch">RangeValue'Touch</a> | <a href="#RangeValue'Fixed">RangeValue'Fixed</a> | <a href="#RangeValue'CheckResultBased">RangeValue'CheckResultBased</a>

---

### <a name="RangeValue'Modifiable"></a> `RangeValue'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Modifiable/tag">See details</a>
`modifiable` |  | <a href="#RangeValue'Modifiable/modifiable">See details</a>

#### <a name="RangeValue'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="RangeValue'Modifiable/modifiable"></a> `modifiable`

- **Type:** <a href="#ModifiableRange">ModifiableRange</a>

---

### <a name="RangeValue'Sight"></a> `RangeValue'Sight`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Sight/tag">See details</a>
`sight` |  | <a href="#RangeValue'Sight/sight">See details</a>

#### <a name="RangeValue'Sight/tag"></a> `tag`

- **Constant:** `"Sight"`

#### <a name="RangeValue'Sight/sight"></a> `sight`

- **Type:** <a href="#RangeValue'Sight/sight">Object</a>

---

### <a name="RangeValue'Sight/sight"></a> `RangeValue'Sight/sight`

- **Type:** Empty Object

---

### <a name="RangeValue'Self"></a> `RangeValue'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Self/tag">See details</a>
`self` |  | <a href="#RangeValue'Self/self">See details</a>

#### <a name="RangeValue'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="RangeValue'Self/self"></a> `self`

- **Type:** <a href="#RangeValue'Self/self">Object</a>

---

### <a name="RangeValue'Self/self"></a> `RangeValue'Self/self`

- **Type:** Empty Object

---

### <a name="RangeValue'Global"></a> `RangeValue'Global`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Global/tag">See details</a>
`global` |  | <a href="#RangeValue'Global/global">See details</a>

#### <a name="RangeValue'Global/tag"></a> `tag`

- **Constant:** `"Global"`

#### <a name="RangeValue'Global/global"></a> `global`

- **Type:** <a href="#RangeValue'Global/global">Object</a>

---

### <a name="RangeValue'Global/global"></a> `RangeValue'Global/global`

- **Type:** Empty Object

---

### <a name="RangeValue'Touch"></a> `RangeValue'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Touch/tag">See details</a>
`touch` |  | <a href="#RangeValue'Touch/touch">See details</a>

#### <a name="RangeValue'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

#### <a name="RangeValue'Touch/touch"></a> `touch`

- **Type:** <a href="#RangeValue'Touch/touch">Object</a>

---

### <a name="RangeValue'Touch/touch"></a> `RangeValue'Touch/touch`

- **Type:** Empty Object

---

### <a name="RangeValue'Fixed"></a> `RangeValue'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'Fixed/tag">See details</a>
`fixed` |  | <a href="#RangeValue'Fixed/fixed">See details</a>

#### <a name="RangeValue'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="RangeValue'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedRange">FixedRange</a>

---

### <a name="RangeValue'CheckResultBased"></a> `RangeValue'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#RangeValue'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#RangeValue'CheckResultBased/check_result_based">See details</a>

#### <a name="RangeValue'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="RangeValue'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="#CheckResultBasedRange">CheckResultBasedRange</a>

---

### <a name="ModifiableRange"></a> `ModifiableRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If `true`, the range is a maximum range. | <a href="#ModifiableRange/is_maximum">See details</a>
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#ModifiableRange/initial_modification_level">See details</a>
`is_radius?` | If `true`, the range is a radius. | <a href="#ModifiableRange/is_radius">See details</a>

#### <a name="ModifiableRange/is_maximum"></a> `is_maximum?`

If `true`, the range is a maximum range.

- **Constant:** `true`

#### <a name="ModifiableRange/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="ModifiableRange/is_radius"></a> `is_radius?`

If `true`, the range is a radius.

- **Constant:** `true`

---

### <a name="FixedRange"></a> `FixedRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If `true`, the range is a maximum range. | <a href="#FixedRange/is_maximum">See details</a>
`value` | The (unitless) range value. | <a href="#FixedRange/value">See details</a>
`unit` | The unit of the `value`. | <a href="#FixedRange/unit">See details</a>
`is_radius?` | If `true`, the range is a radius. | <a href="#FixedRange/is_radius">See details</a>

#### <a name="FixedRange/is_maximum"></a> `is_maximum?`

If `true`, the range is a maximum range.

- **Constant:** `true`

#### <a name="FixedRange/value"></a> `value`

The (unitless) range value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedRange/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#RangeUnit">RangeUnit</a>

#### <a name="FixedRange/is_radius"></a> `is_radius?`

If `true`, the range is a radius.

- **Constant:** `true`

---

### <a name="CheckResultBasedRange"></a> `CheckResultBasedRange`

Defines the range being based on a check result.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If the range is the maximum range. | <a href="#CheckResultBasedRange/is_maximum">See details</a>
`base` | The base value that is derived from the check result. | <a href="#CheckResultBasedRange/base">See details</a>
`modifier?` | If defined, it modifies the base value. | <a href="#CheckResultBasedRange/modifier">See details</a>
`unit` | The duration unit. | <a href="#CheckResultBasedRange/unit">See details</a>
`is_radius?` | If `true`, the range is a radius. | <a href="#CheckResultBasedRange/is_radius">See details</a>

#### <a name="CheckResultBasedRange/is_maximum"></a> `is_maximum?`

If the range is the maximum range.

- **Constant:** `true`

#### <a name="CheckResultBasedRange/base"></a> `base`

The base value that is derived from the check result.

- **Type:** <a href="./_ActivatableSkillCheckResultBased.md#CheckResultValue">CheckResultValue</a>

#### <a name="CheckResultBasedRange/modifier"></a> `modifier?`

If defined, it modifies the base value.

- **Type:** <a href="./_ActivatableSkillCheckResultBased.md#CheckResultBasedModifier">CheckResultBasedModifier</a>

#### <a name="CheckResultBasedRange/unit"></a> `unit`

The duration unit.

- **Type:** <a href="#RangeUnit">RangeUnit</a>

#### <a name="CheckResultBasedRange/is_radius"></a> `is_radius?`

If `true`, the range is a radius.

- **Constant:** `true`

---

### <a name="RangeTranslation"></a> `RangeTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated string in parenthesis. If the generated is modified using `replacement`, the note is appended to the modifier string. | <a href="#RangeTranslation/note">See details</a>
`replacement?` | A replacement string. If `note` is provided, it is appended to the replaced string. | <a href="#RangeTranslation/replacement">See details</a>

#### <a name="RangeTranslation/note"></a> `note?`

A note, appended to the generated string in parenthesis. If the
generated is modified using `replacement`, the note is appended to
the modifier string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

#### <a name="RangeTranslation/replacement"></a> `replacement?`

A replacement string. If `note` is provided, it is appended to the
replaced string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="RangeUnit"></a> `RangeUnit`

- **Type:** Union
- **Cases:** <a href="#RangeUnit'0">RangeUnit'0</a> | <a href="#RangeUnit'1">RangeUnit'1</a>

---

### <a name="RangeUnit'0"></a> `RangeUnit'0`

- **Constant:** `"Steps"`

---

### <a name="RangeUnit'1"></a> `RangeUnit'1`

- **Constant:** `"Miles"`
