# Animist Power

## Definitions

### <a name="AnimistPower"></a> Animist Power (`AnimistPower`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animist power's identifier. An unique, increasing integer. | <a href="#AnimistPower/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#AnimistPower/check">See details</a>
`parameters` | Measurable parameters of a animist power. | <a href="#AnimistPower/parameters">See details</a>
`property` | The associated property. | <a href="#AnimistPower/property">See details</a>
`tribe_tradition` | The tribe traditions the animist power is available to. It may be available to all or only specific tribes. | <a href="#AnimistPower/tribe_tradition">See details</a>
`improvement_cost` | States which column is used to improve the skill. It is a fixed value or depends on the primary patron. | <a href="#AnimistPower/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#AnimistPower/prerequisites">See details</a>
`levels?` | The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level. | <a href="#AnimistPower/levels">See details</a>
`src` |  | <a href="#AnimistPower/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPower/translations">See details</a>

#### <a name="AnimistPower/id"></a> `id`

The animist power's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimistPower/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="AnimistPower/parameters"></a> `parameters`

Measurable parameters of a animist power.

- **Type:** <a href="#AnimistPowerPerformanceParameters">AnimistPowerPerformanceParameters</a>

#### <a name="AnimistPower/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="AnimistPower/tribe_tradition"></a> `tribe_tradition`

The tribe traditions the animist power is available to. It may be available to all or only specific tribes.

If no tribe tradition is given, the animist power is generally available to all tribe traditions.

- **Type:** List
- **Items:** <a href="#AnimistPower/tribe_tradition[]">AnimistPower/tribe_tradition[]</a>
- **Unique Items:** Yes

#### <a name="AnimistPower/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill. It is a fixed value or depends on the primary patron.

- **Type:** <a href="#AnimistPowerImprovementCost">AnimistPowerImprovementCost</a>

#### <a name="AnimistPower/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#AnimistPowerPrerequisites">AnimistPowerPrerequisites</a>

#### <a name="AnimistPower/levels"></a> `levels?`

The animist power can have multiple levels. Each level is skilled separately. A previous level must be on at least 10 so that the next higher level can be activated and skilled. A higher level cannot be skilled higher than a lower level. Each level also adds an effect text to the text of the first level.

- **Type:** List
- **Items:** <a href="#AnimistPower/levels[]">AnimistPower/levels[]</a>
- **Minimum Items:** `1`

#### <a name="AnimistPower/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimistPower/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimistPowerTranslation">AnimistPowerTranslation</a>&gt;

---

### <a name="AnimistPower/tribe_tradition[]"></a> `AnimistPower/tribe_tradition[]`

- **Type:** <a href="../_SimpleReferences.md#AnimistTribeReference">AnimistTribeReference</a>

---

### <a name="AnimistPower/levels[]"></a> `AnimistPower/levels[]`

- **Type:** <a href="#AnimistPowerLevel">AnimistPowerLevel</a>

---

### <a name="AnimistPowerTranslation"></a> `AnimistPowerTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the animist power. | <a href="#AnimistPowerTranslation/name">See details</a>
`name_in_library?` | The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes. | <a href="#AnimistPowerTranslation/name_in_library">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#AnimistPowerTranslation/effect">See details</a>
`cost` |  | <a href="#AnimistPowerTranslation/cost">See details</a>
`duration` |  | <a href="#AnimistPowerTranslation/duration">See details</a>
`prerequisites?` | A prerequisites text. | <a href="#AnimistPowerTranslation/prerequisites">See details</a>
`errata?` |  | <a href="#AnimistPowerTranslation/errata">See details</a>

#### <a name="AnimistPowerTranslation/name"></a> `name`

The name of the animist power.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AnimistPowerTranslation/name_in_library"></a> `name_in_library?`

The full name of the entry as stated in the sources. Only use when
`name` needs to be different from full name for text generation
purposes.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="AnimistPowerTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="AnimistPowerTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="AnimistPowerTranslation/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="AnimistPowerTranslation/prerequisites"></a> `prerequisites?`

A prerequisites text.

- **Type:** String

#### <a name="AnimistPowerTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="AnimistPowerLevel"></a> `AnimistPowerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The level number. | <a href="#AnimistPowerLevel/level">See details</a>
`src?` | The source references, if different than the references for level 1. | <a href="#AnimistPowerLevel/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPowerLevel/translations">See details</a>

#### <a name="AnimistPowerLevel/level"></a> `level`

The level number.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="AnimistPowerLevel/src"></a> `src?`

The source references, if different than the references for level 1.

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimistPowerLevel/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimistPowerLevelTranslation">AnimistPowerLevelTranslation</a>&gt;

---

### <a name="AnimistPowerLevelTranslation"></a> `AnimistPowerLevelTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`effect` | An additional effect description for this level. | <a href="#AnimistPowerLevelTranslation/effect">See details</a>

#### <a name="AnimistPowerLevelTranslation/effect"></a> `effect`

An additional effect description for this level.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="AnimistPowerPerformanceParameters"></a> `AnimistPowerPerformanceParameters`

Measurable parameters of a animist power.

- **Type:** Union
- **Cases:** <a href="#AnimistPowerPerformanceParameters'OneTime">AnimistPowerPerformanceParameters'OneTime</a> | <a href="#AnimistPowerPerformanceParameters'Sustained">AnimistPowerPerformanceParameters'Sustained</a>

---

### <a name="AnimistPowerPerformanceParameters'OneTime"></a> `AnimistPowerPerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPerformanceParameters'OneTime/tag">See details</a>
`one_time` |  | <a href="#AnimistPowerPerformanceParameters'OneTime/one_time">See details</a>

#### <a name="AnimistPowerPerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="AnimistPowerPerformanceParameters'OneTime/one_time"></a> `one_time`

- **Type:** <a href="#OneTimeAnimistPowerPerformanceParameters">OneTimeAnimistPowerPerformanceParameters</a>

---

### <a name="AnimistPowerPerformanceParameters'Sustained"></a> `AnimistPowerPerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerPerformanceParameters'Sustained/tag">See details</a>
`sustained` |  | <a href="#AnimistPowerPerformanceParameters'Sustained/sustained">See details</a>

#### <a name="AnimistPowerPerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="AnimistPowerPerformanceParameters'Sustained/sustained"></a> `sustained`

- **Type:** <a href="#SustainedAnimistPowerPerformanceParameters">SustainedAnimistPowerPerformanceParameters</a>

---

### <a name="OneTimeAnimistPowerPerformanceParameters"></a> `OneTimeAnimistPowerPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost value, either a flat value or defined dynamically by the primary patron. | <a href="#OneTimeAnimistPowerPerformanceParameters/cost">See details</a>
`duration` | The duration. | <a href="#OneTimeAnimistPowerPerformanceParameters/duration">See details</a>

#### <a name="OneTimeAnimistPowerPerformanceParameters/cost"></a> `cost`

The AE cost value, either a flat value or defined dynamically by the primary patron.

- **Type:** <a href="#OneTimeAnimistPowerCost">OneTimeAnimistPowerCost</a>

#### <a name="OneTimeAnimistPowerPerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#OneTimeAnimistPowerDuration">OneTimeAnimistPowerDuration</a>

---

### <a name="OneTimeAnimistPowerCost"></a> `OneTimeAnimistPowerCost`

- **Type:** Union
- **Cases:** <a href="#OneTimeAnimistPowerCost'Fixed">OneTimeAnimistPowerCost'Fixed</a> | <a href="#OneTimeAnimistPowerCost'ByPrimaryPatron">OneTimeAnimistPowerCost'ByPrimaryPatron</a>

---

### <a name="OneTimeAnimistPowerCost'Fixed"></a> `OneTimeAnimistPowerCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeAnimistPowerCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#OneTimeAnimistPowerCost'Fixed/fixed">See details</a>

#### <a name="OneTimeAnimistPowerCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="OneTimeAnimistPowerCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedOneTimeAnimistPowerCost">FixedOneTimeAnimistPowerCost</a>

---

### <a name="OneTimeAnimistPowerCost'ByPrimaryPatron"></a> `OneTimeAnimistPowerCost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeAnimistPowerCost'ByPrimaryPatron/tag">See details</a>
`by_primary_patron` |  | <a href="#OneTimeAnimistPowerCost'ByPrimaryPatron/by_primary_patron">See details</a>

#### <a name="OneTimeAnimistPowerCost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

#### <a name="OneTimeAnimistPowerCost'ByPrimaryPatron/by_primary_patron"></a> `by_primary_patron`

- **Type:** <a href="#OneTimeAnimistPowerCostByPrimaryPatron">OneTimeAnimistPowerCostByPrimaryPatron</a>

---

### <a name="FixedOneTimeAnimistPowerCost"></a> `FixedOneTimeAnimistPowerCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#FixedOneTimeAnimistPowerCost/value">See details</a>
`interval?` | If defined, half of the AE cost `value` has to be paid each interval. | <a href="#FixedOneTimeAnimistPowerCost/interval">See details</a>

#### <a name="FixedOneTimeAnimistPowerCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedOneTimeAnimistPowerCost/interval"></a> `interval?`

If defined, half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="OneTimeAnimistPowerCostByPrimaryPatron"></a> `OneTimeAnimistPowerCostByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`interval?` | If defined, half of the AE cost `value` has to be paid each interval. | <a href="#OneTimeAnimistPowerCostByPrimaryPatron/interval">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#OneTimeAnimistPowerCostByPrimaryPatron/translations">See details</a>

#### <a name="OneTimeAnimistPowerCostByPrimaryPatron/interval"></a> `interval?`

If defined, half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="OneTimeAnimistPowerCostByPrimaryPatron/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimistPowerCostByPrimaryPatronTranslation">AnimistPowerCostByPrimaryPatronTranslation</a>&gt;

---

### <a name="OneTimeAnimistPowerDuration"></a> `OneTimeAnimistPowerDuration`

- **Type:** Union
- **Cases:** <a href="#OneTimeAnimistPowerDuration'Immediate">OneTimeAnimistPowerDuration'Immediate</a> | <a href="#OneTimeAnimistPowerDuration'Fixed">OneTimeAnimistPowerDuration'Fixed</a> | <a href="#OneTimeAnimistPowerDuration'CheckResultBased">OneTimeAnimistPowerDuration'CheckResultBased</a>

---

### <a name="OneTimeAnimistPowerDuration'Immediate"></a> `OneTimeAnimistPowerDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeAnimistPowerDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#OneTimeAnimistPowerDuration'Immediate/immediate">See details</a>

#### <a name="OneTimeAnimistPowerDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="OneTimeAnimistPowerDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#OneTimeAnimistPowerDuration'Immediate/immediate">Object</a>

---

### <a name="OneTimeAnimistPowerDuration'Immediate/immediate"></a> `OneTimeAnimistPowerDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="OneTimeAnimistPowerDuration'Fixed"></a> `OneTimeAnimistPowerDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeAnimistPowerDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#OneTimeAnimistPowerDuration'Fixed/fixed">See details</a>

#### <a name="OneTimeAnimistPowerDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="OneTimeAnimistPowerDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="../FamiliarsTrick.md#FamiliarsTrickFixedOneTimeCostTranslation">FamiliarsTrickFixedOneTimeCostTranslation</a>

---

### <a name="OneTimeAnimistPowerDuration'CheckResultBased"></a> `OneTimeAnimistPowerDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#OneTimeAnimistPowerDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#OneTimeAnimistPowerDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="OneTimeAnimistPowerDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="OneTimeAnimistPowerDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="SustainedAnimistPowerPerformanceParameters"></a> `SustainedAnimistPowerPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost value, either a flat value or defined dynamically by the primary patron. | <a href="#SustainedAnimistPowerPerformanceParameters/cost">See details</a>

#### <a name="SustainedAnimistPowerPerformanceParameters/cost"></a> `cost`

The AE cost value, either a flat value or defined dynamically by the primary patron.

- **Type:** <a href="#SustainedAnimistPowerCost">SustainedAnimistPowerCost</a>

---

### <a name="SustainedAnimistPowerCost"></a> `SustainedAnimistPowerCost`

- **Type:** Union
- **Cases:** <a href="#SustainedAnimistPowerCost'Fixed">SustainedAnimistPowerCost'Fixed</a> | <a href="#SustainedAnimistPowerCost'ByPrimaryPatron">SustainedAnimistPowerCost'ByPrimaryPatron</a>

---

### <a name="SustainedAnimistPowerCost'Fixed"></a> `SustainedAnimistPowerCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SustainedAnimistPowerCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#SustainedAnimistPowerCost'Fixed/fixed">See details</a>

#### <a name="SustainedAnimistPowerCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="SustainedAnimistPowerCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedSustainedAnimistPowerCost">FixedSustainedAnimistPowerCost</a>

---

### <a name="SustainedAnimistPowerCost'ByPrimaryPatron"></a> `SustainedAnimistPowerCost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SustainedAnimistPowerCost'ByPrimaryPatron/tag">See details</a>
`by_primary_patron` |  | <a href="#SustainedAnimistPowerCost'ByPrimaryPatron/by_primary_patron">See details</a>

#### <a name="SustainedAnimistPowerCost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

#### <a name="SustainedAnimistPowerCost'ByPrimaryPatron/by_primary_patron"></a> `by_primary_patron`

- **Type:** <a href="#SustainedAnimistPowerCostByPrimaryPatron">SustainedAnimistPowerCostByPrimaryPatron</a>

---

### <a name="FixedSustainedAnimistPowerCost"></a> `FixedSustainedAnimistPowerCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#FixedSustainedAnimistPowerCost/value">See details</a>
`interval` | Half of the AE cost `value` has to be paid each interval. | <a href="#FixedSustainedAnimistPowerCost/interval">See details</a>

#### <a name="FixedSustainedAnimistPowerCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedSustainedAnimistPowerCost/interval"></a> `interval`

Half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="SustainedAnimistPowerCostByPrimaryPatron"></a> `SustainedAnimistPowerCostByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`interval` | Half of the AE cost `value` has to be paid each interval. | <a href="#SustainedAnimistPowerCostByPrimaryPatron/interval">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SustainedAnimistPowerCostByPrimaryPatron/translations">See details</a>

#### <a name="SustainedAnimistPowerCostByPrimaryPatron/interval"></a> `interval`

Half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="SustainedAnimistPowerCostByPrimaryPatron/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#AnimistPowerCostByPrimaryPatronTranslation">AnimistPowerCostByPrimaryPatronTranslation</a>&gt;

---

### <a name="AnimistPowerCostByPrimaryPatronTranslation"></a> `AnimistPowerCostByPrimaryPatronTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#AnimistPowerCostByPrimaryPatronTranslation/note">See details</a>

#### <a name="AnimistPowerCostByPrimaryPatronTranslation/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="AnimistPowerImprovementCost"></a> `AnimistPowerImprovementCost`

- **Type:** Union
- **Cases:** <a href="#AnimistPowerImprovementCost'Fixed">AnimistPowerImprovementCost'Fixed</a> | <a href="#AnimistPowerImprovementCost'ByPrimaryPatron">AnimistPowerImprovementCost'ByPrimaryPatron</a>

---

### <a name="AnimistPowerImprovementCost'Fixed"></a> `AnimistPowerImprovementCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerImprovementCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#AnimistPowerImprovementCost'Fixed/fixed">See details</a>

#### <a name="AnimistPowerImprovementCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="AnimistPowerImprovementCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

---

### <a name="AnimistPowerImprovementCost'ByPrimaryPatron"></a> `AnimistPowerImprovementCost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPowerImprovementCost'ByPrimaryPatron/tag">See details</a>
`by_primary_patron` |  | <a href="#AnimistPowerImprovementCost'ByPrimaryPatron/by_primary_patron">See details</a>

#### <a name="AnimistPowerImprovementCost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

#### <a name="AnimistPowerImprovementCost'ByPrimaryPatron/by_primary_patron"></a> `by_primary_patron`

- **Type:** <a href="#AnimistPowerImprovementCost'ByPrimaryPatron/by_primary_patron">Object</a>

---

### <a name="AnimistPowerImprovementCost'ByPrimaryPatron/by_primary_patron"></a> `AnimistPowerImprovementCost'ByPrimaryPatron/by_primary_patron`

- **Type:** Empty Object
