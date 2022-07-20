# Domination Ritual

## Definitions

### <a name="DominationRitual"></a> Domination Ritual (`DominationRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The domination ritual's identifier. An unique, increasing integer. | <a href="#DominationRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#DominationRitual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#DominationRitual/check_penalty">See details</a>
`parameters` | Measurable parameters of a curse. | <a href="#DominationRitual/parameters">See details</a>
`property` | The associated property. | <a href="#DominationRitual/property">See details</a>
`src` |  | <a href="#DominationRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DominationRitual/translations">See details</a>

#### <a name="DominationRitual/id"></a> `id`

The domination ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="DominationRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="DominationRitual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="DominationRitual/parameters"></a> `parameters`

Measurable parameters of a curse.

- **Type:** <a href="#DominationRitualPerformanceParameters">DominationRitualPerformanceParameters</a>

#### <a name="DominationRitual/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="DominationRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="DominationRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DominationRitual/translations[key]">DominationRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DominationRitual/translations[key]"></a> `DominationRitual/translations[key]`

- **Type:** <a href="#DominationRitualTranslation">DominationRitualTranslation</a>

---

### <a name="DominationRitualTranslation"></a> `DominationRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the domination ritual. | <a href="#DominationRitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#DominationRitualTranslation/effect">See details</a>
`cost` |  | <a href="#DominationRitualTranslation/cost">See details</a>
`duration` |  | <a href="#DominationRitualTranslation/duration">See details</a>
`errata?` |  | <a href="#DominationRitualTranslation/errata">See details</a>

#### <a name="DominationRitualTranslation/name"></a> `name`

The name of the domination ritual.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DominationRitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="DominationRitualTranslation/cost"></a> `cost`

- **Type:** <a href="#DominationRitualTranslation/cost">Object</a>

#### <a name="DominationRitualTranslation/duration"></a> `duration`

- **Type:** <a href="#DominationRitualTranslation/duration">Object</a>

#### <a name="DominationRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="DominationRitualTranslation/cost"></a> `DominationRitualTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#DominationRitualTranslation/cost/full">See details</a>
`abbr` |  | <a href="#DominationRitualTranslation/cost/abbr">See details</a>

#### <a name="DominationRitualTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="DominationRitualTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="DominationRitualTranslation/duration"></a> `DominationRitualTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#DominationRitualTranslation/duration/full">See details</a>
`abbr` |  | <a href="#DominationRitualTranslation/duration/abbr">See details</a>

#### <a name="DominationRitualTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="DominationRitualTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="DominationRitualPerformanceParameters"></a> `DominationRitualPerformanceParameters`

Measurable parameters of a curse.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#DominationRitualPerformanceParameters/cost">See details</a>
`duration` | The duration. | <a href="#DominationRitualPerformanceParameters/duration">See details</a>

#### <a name="DominationRitualPerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#DominationRitualCost">DominationRitualCost</a>

#### <a name="DominationRitualPerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#DominationRitualDuration">DominationRitualDuration</a>

---

### <a name="DominationRitualCost"></a> `DominationRitualCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#DominationRitualCost/initial_modification_level">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DominationRitualCost/translations">See details</a>

#### <a name="DominationRitualCost/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="DominationRitualCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DominationRitualCost/translations[key]">DominationRitualCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DominationRitualCost/translations[key]"></a> `DominationRitualCost/translations[key]`

- **Type:** <a href="#DominationRitualCostTranslation">DominationRitualCostTranslation</a>

---

### <a name="DominationRitualCostTranslation"></a> `DominationRitualCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`additional` | AE cost in addition to the normal AE cost. | <a href="#DominationRitualCostTranslation/additional">See details</a>

#### <a name="DominationRitualCostTranslation/additional"></a> `additional`

AE cost in addition to the normal AE cost.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="DominationRitualDuration"></a> `DominationRitualDuration`

- **Type:** Union
- **Cases:** <a href="#DominationRitualDuration'Fixed">DominationRitualDuration'Fixed</a> | <a href="#DominationRitualDuration'CheckResultBased">DominationRitualDuration'CheckResultBased</a> | <a href="#DominationRitualDuration'Indefinite">DominationRitualDuration'Indefinite</a>

---

### <a name="DominationRitualDuration'Fixed"></a> `DominationRitualDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#DominationRitualDuration'Fixed/fixed">See details</a>

#### <a name="DominationRitualDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="DominationRitualDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedDominationRitualDuration">FixedDominationRitualDuration</a>

---

### <a name="DominationRitualDuration'CheckResultBased"></a> `DominationRitualDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#DominationRitualDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="DominationRitualDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="DominationRitualDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="DominationRitualDuration'Indefinite"></a> `DominationRitualDuration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DominationRitualDuration'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#DominationRitualDuration'Indefinite/indefinite">See details</a>

#### <a name="DominationRitualDuration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="DominationRitualDuration'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteDominationRitualDuration">IndefiniteDominationRitualDuration</a>

---

### <a name="FixedDominationRitualDuration"></a> `FixedDominationRitualDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#FixedDominationRitualDuration/value">See details</a>
`unit` | The unit of the `value`. | <a href="#FixedDominationRitualDuration/unit">See details</a>

#### <a name="FixedDominationRitualDuration/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedDominationRitualDuration/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>

---

### <a name="IndefiniteDominationRitualDuration"></a> `IndefiniteDominationRitualDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`maximum?` | Specified if the duration has a maximum time span. | <a href="#IndefiniteDominationRitualDuration/maximum">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteDominationRitualDuration/translations">See details</a>

#### <a name="IndefiniteDominationRitualDuration/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#MaximumIndefiniteCurseDuration">MaximumIndefiniteCurseDuration</a>

#### <a name="IndefiniteDominationRitualDuration/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteDominationRitualDuration/translations[key]">IndefiniteDominationRitualDuration/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteDominationRitualDuration/translations[key]"></a> `IndefiniteDominationRitualDuration/translations[key]`

- **Type:** <a href="../_ActivatableSkillDuration.md#IndefiniteDurationTranslation">IndefiniteDurationTranslation</a>

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

- **Type:** <a href="#FixedDominationRitualDuration">FixedDominationRitualDuration</a>

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
