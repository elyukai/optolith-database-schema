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

- **Type:** Dictionary
- **Property Values:** <a href="#Immediate/translations[key]">Immediate/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Immediate/translations[key]"></a> `Immediate/translations[key]`

- **Type:** <a href="#ImmediateTranslation">ImmediateTranslation</a>

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
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PermanentDuration/translations">See details</a>

#### <a name="PermanentDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PermanentDuration/translations[key]">PermanentDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PermanentDuration/translations[key]"></a> `PermanentDuration/translations[key]`

- **Type:** <a href="#PermanentDurationTranslation">PermanentDurationTranslation</a>

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

- **Type:** Dictionary
- **Property Values:** <a href="#FixedDuration/translations[key]">FixedDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedDuration/translations[key]"></a> `FixedDuration/translations[key]`

- **Type:** <a href="#FixedDurationTranslation">FixedDurationTranslation</a>

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

### <a name="CheckResultBasedDuration"></a> `CheckResultBasedDuration`

Defines the duration being based on a check result.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`base` | The base value that is derived from the check result. | <a href="#CheckResultBasedDuration/base">See details</a>
`modifier?` | If defined, it modifies the base value. | <a href="#CheckResultBasedDuration/modifier">See details</a>
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#CheckResultBasedDuration/is_maximum">See details</a>
`unit` | The duration unit. | <a href="#CheckResultBasedDuration/unit">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#CheckResultBasedDuration/translations">See details</a>

#### <a name="CheckResultBasedDuration/base"></a> `base`

The base value that is derived from the check result.

- **Type:** <a href="./_ActivatableSkillCheckResultBased.md#CheckResultValue">CheckResultValue</a>

#### <a name="CheckResultBasedDuration/modifier"></a> `modifier?`

If defined, it modifies the base value.

- **Type:** <a href="./_ActivatableSkillCheckResultBased.md#CheckResultBasedModifier">CheckResultBasedModifier</a>

#### <a name="CheckResultBasedDuration/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Constant:** `true`

#### <a name="CheckResultBasedDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="#DurationUnit">DurationUnit</a>

#### <a name="CheckResultBasedDuration/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#CheckResultBasedDuration/translations[key]">CheckResultBasedDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="CheckResultBasedDuration/translations[key]"></a> `CheckResultBasedDuration/translations[key]`

- **Type:** <a href="#CheckResultBasedDurationTranslation">CheckResultBasedDurationTranslation</a>

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

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteDuration/translations[key]">IndefiniteDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteDuration/translations[key]"></a> `IndefiniteDuration/translations[key]`

- **Type:** <a href="#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>

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

- **Possible values:** `"Seconds"`, `"Minutes"`, `"Hours"`, `"Days"`, `"Weeks"`, `"Months"`, `"Years"`, `"Centuries"`, `"Actions"`, `"CombatRounds"`

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
