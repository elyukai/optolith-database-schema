# Curse

## Definitions

### <a name="Curse"></a> Curse (`Curse`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The curse's identifier. An unique, increasing integer. | <a href="#Curse/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Curse/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Curse/check_penalty">See details</a>
`parameters` | Measurable parameters of a curse. | <a href="#Curse/parameters">See details</a>
`property` | The associated property. | <a href="#Curse/property">See details</a>
`src` |  | <a href="#Curse/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Curse/translations">See details</a>

#### <a name="Curse/id"></a> `id`

The curse's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Curse/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Curse/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Curse/parameters"></a> `parameters`

Measurable parameters of a curse.

- **Type:** <a href="#CursePerformanceParameters">CursePerformanceParameters</a>

#### <a name="Curse/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="Curse/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Curse/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#CurseTranslation">CurseTranslation</a>&gt;

---

### <a name="CurseTranslation"></a> `CurseTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the curse. | <a href="#CurseTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#CurseTranslation/effect">See details</a>
`cost` |  | <a href="#CurseTranslation/cost">See details</a>
`duration` |  | <a href="#CurseTranslation/duration">See details</a>
`errata?` |  | <a href="#CurseTranslation/errata">See details</a>

#### <a name="CurseTranslation/name"></a> `name`

The name of the curse.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CurseTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="CurseTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="CurseTranslation/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="CurseTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="CursePerformanceParameters"></a> `CursePerformanceParameters`

Measurable parameters of a curse.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#CursePerformanceParameters/cost">See details</a>
`duration` | The duration. | <a href="#CursePerformanceParameters/duration">See details</a>

#### <a name="CursePerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#CurseCost">CurseCost</a>

#### <a name="CursePerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#CurseDuration">CurseDuration</a>

---

### <a name="CurseCost"></a> `CurseCost`

- **Type:** Union
- **Cases:** <a href="#CurseCost'Fixed">CurseCost'Fixed</a> | <a href="#CurseCost'Indefinite">CurseCost'Indefinite</a>

---

### <a name="CurseCost'Fixed"></a> `CurseCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#CurseCost'Fixed/fixed">See details</a>

#### <a name="CurseCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CurseCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedCurseCost">FixedCurseCost</a>

---

### <a name="CurseCost'Indefinite"></a> `CurseCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#CurseCost'Indefinite/indefinite">See details</a>

#### <a name="CurseCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="CurseCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="../_ActivatableSkillCost.md#IndefiniteOneTimeCost">IndefiniteOneTimeCost</a>

---

### <a name="FixedCurseCost"></a> `FixedCurseCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value. | <a href="#FixedCurseCost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedCurseCost/translations">See details</a>

#### <a name="FixedCurseCost/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedCurseCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#FixedCurseCostTranslation">FixedCurseCostTranslation</a>&gt;

---

### <a name="FixedCurseCostTranslation"></a> `FixedCurseCostTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person`. | <a href="#FixedCurseCostTranslation/per">See details</a>
`note?` | A note, appended to the generated string in parenthesis. | <a href="#FixedCurseCostTranslation/note">See details</a>

#### <a name="FixedCurseCostTranslation/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP
per person`.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

#### <a name="FixedCurseCostTranslation/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="CurseDuration"></a> `CurseDuration`

- **Type:** Union
- **Cases:** <a href="#CurseDuration'Immediate">CurseDuration'Immediate</a> | <a href="#CurseDuration'Fixed">CurseDuration'Fixed</a> | <a href="#CurseDuration'CheckResultBased">CurseDuration'CheckResultBased</a> | <a href="#CurseDuration'Indefinite">CurseDuration'Indefinite</a>

---

### <a name="CurseDuration'Immediate"></a> `CurseDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#CurseDuration'Immediate/immediate">See details</a>

#### <a name="CurseDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="CurseDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#CurseDuration'Immediate/immediate">Object</a>

---

### <a name="CurseDuration'Immediate/immediate"></a> `CurseDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="CurseDuration'Fixed"></a> `CurseDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#CurseDuration'Fixed/fixed">See details</a>

#### <a name="CurseDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="CurseDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedCurseDuration">FixedCurseDuration</a>

---

### <a name="CurseDuration'CheckResultBased"></a> `CurseDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#CurseDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="CurseDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="CurseDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="CurseDuration'Indefinite"></a> `CurseDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CurseDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#CurseDuration'Indefinite/indefinite">See details</a>

#### <a name="CurseDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="CurseDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteCurseDuration">IndefiniteCurseDuration</a>

---

### <a name="FixedCurseDuration"></a> `FixedCurseDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#FixedCurseDuration/value">See details</a>
`unit` | The unit of the `value`. | <a href="#FixedCurseDuration/unit">See details</a>

#### <a name="FixedCurseDuration/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedCurseDuration/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="IndefiniteCurseDuration"></a> `IndefiniteCurseDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`maximum?` | Specified if the duration has a maximum time span. | <a href="#IndefiniteCurseDuration/maximum">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteCurseDuration/translations">See details</a>

#### <a name="IndefiniteCurseDuration/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#MaximumIndefiniteCurseDuration">MaximumIndefiniteCurseDuration</a>

#### <a name="IndefiniteCurseDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="../_ActivatableSkillDuration.md#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>&gt;

---

### <a name="MaximumIndefiniteCurseDuration"></a> `MaximumIndefiniteCurseDuration`

- **Type:** Union
- **Cases:** <a href="#MaximumIndefiniteCurseDuration'Fixed">MaximumIndefiniteCurseDuration'Fixed</a> | <a href="#MaximumIndefiniteCurseDuration'CheckResultBased">MaximumIndefiniteCurseDuration'CheckResultBased</a>

---

### <a name="MaximumIndefiniteCurseDuration'Fixed"></a> `MaximumIndefiniteCurseDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MaximumIndefiniteCurseDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#MaximumIndefiniteCurseDuration'Fixed/fixed">See details</a>

#### <a name="MaximumIndefiniteCurseDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="MaximumIndefiniteCurseDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedCurseDuration">FixedCurseDuration</a>

---

### <a name="MaximumIndefiniteCurseDuration'CheckResultBased"></a> `MaximumIndefiniteCurseDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MaximumIndefiniteCurseDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#MaximumIndefiniteCurseDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="MaximumIndefiniteCurseDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="MaximumIndefiniteCurseDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>
