# [TITLE MISSING]

## Definitions

### <a name="DurationForOneTime"></a> `DurationForOneTime`

- **Type:** Union
- **Cases:** <a href="#DurationForOneTime'Immediate">DurationForOneTime'Immediate</a> | <a href="#DurationForOneTime'Permanent">DurationForOneTime'Permanent</a> | <a href="#DurationForOneTime'Fixed">DurationForOneTime'Fixed</a> | <a href="#DurationForOneTime'CheckResultBased">DurationForOneTime'CheckResultBased</a> | <a href="#DurationForOneTime'Indefinite">DurationForOneTime'Indefinite</a>

---

### <a name="DurationForOneTime'Immediate"></a> `DurationForOneTime'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DurationForOneTime'Immediate/tag">See details</a>
`immediate` |  | <a href="#DurationForOneTime'Immediate/immediate">See details</a>

#### <a name="DurationForOneTime'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="DurationForOneTime'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#Immediate">Immediate</a>

---

### <a name="DurationForOneTime'Permanent"></a> `DurationForOneTime'Permanent`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DurationForOneTime'Permanent/tag">See details</a>
`permanent` |  | <a href="#DurationForOneTime'Permanent/permanent">See details</a>

#### <a name="DurationForOneTime'Permanent/tag"></a> `tag`

- **Constant:** `"Permanent"`

#### <a name="DurationForOneTime'Permanent/permanent"></a> `permanent`

- **Type:** <a href="#PermanentDuration">PermanentDuration</a>

---

### <a name="DurationForOneTime'Fixed"></a> `DurationForOneTime'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DurationForOneTime'Fixed/tag">See details</a>
`fixed` |  | <a href="#DurationForOneTime'Fixed/fixed">See details</a>

#### <a name="DurationForOneTime'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="DurationForOneTime'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedDuration">FixedDuration</a>

---

### <a name="DurationForOneTime'CheckResultBased"></a> `DurationForOneTime'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DurationForOneTime'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#DurationForOneTime'CheckResultBased/check_result_based">See details</a>

#### <a name="DurationForOneTime'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="DurationForOneTime'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="DurationForOneTime'Indefinite"></a> `DurationForOneTime'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DurationForOneTime'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#DurationForOneTime'Indefinite/indefinite">See details</a>

#### <a name="DurationForOneTime'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="DurationForOneTime'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteDuration">IndefiniteDuration</a>

---

### <a name="Immediate"></a> `Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`maximum?` | Specified if the duration has a maximum time span. | <a href="#Immediate/maximum">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Immediate/translations">See details</a>

#### <a name="Immediate/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#DurationUnitValue">DurationUnitValue</a>

#### <a name="Immediate/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ImmediateTranslation">ImmediateTranslation</a>&gt;

---

### <a name="ImmediateTranslation"></a> `ImmediateTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#ImmediateTranslation/replacement">See details</a>

#### <a name="ImmediateTranslation/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="PermanentDuration"></a> `PermanentDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PermanentDuration/translations">See details</a>

#### <a name="PermanentDuration/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#PermanentDurationTranslation">PermanentDurationTranslation</a>&gt;

---

### <a name="PermanentDurationTranslation"></a> `PermanentDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#PermanentDurationTranslation/replacement">See details</a>

#### <a name="PermanentDurationTranslation/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="FixedDuration"></a> `FixedDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#FixedDuration/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#FixedDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedDuration/unit">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedDuration/translations">See details</a>

#### <a name="FixedDuration/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Constant:** `true`

#### <a name="FixedDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="#DurationUnit">DurationUnit</a>

#### <a name="FixedDuration/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FixedDurationTranslation">FixedDurationTranslation</a>&gt;

---

### <a name="FixedDurationTranslation"></a> `FixedDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#FixedDurationTranslation/replacement">See details</a>

#### <a name="FixedDurationTranslation/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="CheckResultBasedDurationTranslation"></a> `CheckResultBasedDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#CheckResultBasedDurationTranslation/replacement">See details</a>

#### <a name="CheckResultBasedDurationTranslation/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="IndefiniteDuration"></a> `IndefiniteDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteDuration/translations">See details</a>

#### <a name="IndefiniteDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>&gt;

---

### <a name="IndefiniteDurationTranslation"></a> `IndefiniteDurationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#IndefiniteDurationTranslation/description">See details</a>

#### <a name="IndefiniteDurationTranslation/description"></a> `description`

A description of the duration.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="DurationForSustained"></a> `DurationForSustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`maximum` | The sustained skill can be active a maximum amount of time. | <a href="#DurationForSustained/maximum">See details</a>

#### <a name="DurationForSustained/maximum"></a> `maximum`

The sustained skill can be active a maximum amount of time.

- **Type:** <a href="#DurationUnitValue">DurationUnitValue</a>

---

### <a name="DurationUnit"></a> `DurationUnit`

- **Type:** Union
- **Cases:** <a href="#DurationUnit'0">DurationUnit'0</a> | <a href="#DurationUnit'1">DurationUnit'1</a> | <a href="#DurationUnit'2">DurationUnit'2</a> | <a href="#DurationUnit'3">DurationUnit'3</a> | <a href="#DurationUnit'4">DurationUnit'4</a> | <a href="#DurationUnit'5">DurationUnit'5</a> | <a href="#DurationUnit'6">DurationUnit'6</a> | <a href="#DurationUnit'7">DurationUnit'7</a> | <a href="#DurationUnit'8">DurationUnit'8</a> | <a href="#DurationUnit'9">DurationUnit'9</a>

---

### <a name="DurationUnit'0"></a> `DurationUnit'0`

- **Constant:** `"Seconds"`

---

### <a name="DurationUnit'1"></a> `DurationUnit'1`

- **Constant:** `"Minutes"`

---

### <a name="DurationUnit'2"></a> `DurationUnit'2`

- **Constant:** `"Hours"`

---

### <a name="DurationUnit'3"></a> `DurationUnit'3`

- **Constant:** `"Days"`

---

### <a name="DurationUnit'4"></a> `DurationUnit'4`

- **Constant:** `"Weeks"`

---

### <a name="DurationUnit'5"></a> `DurationUnit'5`

- **Constant:** `"Months"`

---

### <a name="DurationUnit'6"></a> `DurationUnit'6`

- **Constant:** `"Years"`

---

### <a name="DurationUnit'7"></a> `DurationUnit'7`

- **Constant:** `"Centuries"`

---

### <a name="DurationUnit'8"></a> `DurationUnit'8`

- **Constant:** `"Actions"`

---

### <a name="DurationUnit'9"></a> `DurationUnit'9`

- **Constant:** `"CombatRounds"`

---

### <a name="DurationUnitValue"></a> `DurationUnitValue`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#DurationUnitValue/value">See details</a>
`unit` | The unit of the `value`. | <a href="#DurationUnitValue/unit">See details</a>

#### <a name="DurationUnitValue/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DurationUnitValue/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#DurationUnit">DurationUnit</a>
