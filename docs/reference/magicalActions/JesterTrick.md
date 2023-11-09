# Jester Trick

## Definitions

### <a name="JesterTrick"></a> Jester Trick (`JesterTrick`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The jester trick's identifier. An unique, increasing integer. | <a href="#JesterTrick/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#JesterTrick/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#JesterTrick/check_penalty">See details</a>
`parameters` | Measurable parameters of a jester trick. | <a href="#JesterTrick/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#JesterTrick/target">See details</a>
`property` | The associated property. | <a href="#JesterTrick/property">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#JesterTrick/improvement_cost">See details</a>
`src` |  | <a href="#JesterTrick/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#JesterTrick/translations">See details</a>

#### <a name="JesterTrick/id"></a> `id`

The jester trick's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="JesterTrick/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="JesterTrick/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="JesterTrick/parameters"></a> `parameters`

Measurable parameters of a jester trick.

- **Type:** <a href="#JesterTrickPerformanceParameters">JesterTrickPerformanceParameters</a>

#### <a name="JesterTrick/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="JesterTrick/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="JesterTrick/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="JesterTrick/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="JesterTrick/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#JesterTrickTranslation">JesterTrickTranslation</a>&gt;

---

### <a name="JesterTrickTranslation"></a> `JesterTrickTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the jester trick. | <a href="#JesterTrickTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#JesterTrickTranslation/effect">See details</a>
`casting_time` |  | <a href="#JesterTrickTranslation/casting_time">See details</a>
`cost` |  | <a href="#JesterTrickTranslation/cost">See details</a>
`range` |  | <a href="#JesterTrickTranslation/range">See details</a>
`duration` |  | <a href="#JesterTrickTranslation/duration">See details</a>
`target` |  | <a href="#JesterTrickTranslation/target">See details</a>
`errata?` |  | <a href="#JesterTrickTranslation/errata">See details</a>

#### <a name="JesterTrickTranslation/name"></a> `name`

The name of the jester trick.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="JesterTrickTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="JesterTrickTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="#JesterTrickTranslation/casting_time">Object</a>

#### <a name="JesterTrickTranslation/cost"></a> `cost`

- **Type:** <a href="#JesterTrickTranslation/cost">Object</a>

#### <a name="JesterTrickTranslation/range"></a> `range`

- **Type:** <a href="#JesterTrickTranslation/range">Object</a>

#### <a name="JesterTrickTranslation/duration"></a> `duration`

- **Type:** <a href="#JesterTrickTranslation/duration">Object</a>

#### <a name="JesterTrickTranslation/target"></a> `target`

- **Type:** String

#### <a name="JesterTrickTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="JesterTrickTranslation/casting_time"></a> `JesterTrickTranslation/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrickTranslation/casting_time/full">See details</a>
`abbr` |  | <a href="#JesterTrickTranslation/casting_time/abbr">See details</a>

#### <a name="JesterTrickTranslation/casting_time/full"></a> `full`

- **Type:** String

#### <a name="JesterTrickTranslation/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrickTranslation/cost"></a> `JesterTrickTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrickTranslation/cost/full">See details</a>
`abbr` |  | <a href="#JesterTrickTranslation/cost/abbr">See details</a>

#### <a name="JesterTrickTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="JesterTrickTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrickTranslation/range"></a> `JesterTrickTranslation/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrickTranslation/range/full">See details</a>
`abbr` |  | <a href="#JesterTrickTranslation/range/abbr">See details</a>

#### <a name="JesterTrickTranslation/range/full"></a> `full`

- **Type:** String

#### <a name="JesterTrickTranslation/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrickTranslation/duration"></a> `JesterTrickTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrickTranslation/duration/full">See details</a>
`abbr` |  | <a href="#JesterTrickTranslation/duration/abbr">See details</a>

#### <a name="JesterTrickTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="JesterTrickTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrickPerformanceParameters"></a> `JesterTrickPerformanceParameters`

Measurable parameters of a geode ritual.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#JesterTrickPerformanceParameters/casting_time">See details</a>
`cost` | The AE cost. | <a href="#JesterTrickPerformanceParameters/cost">See details</a>
`range` | The range. | <a href="#JesterTrickPerformanceParameters/range">See details</a>
`duration` | The duration. | <a href="#JesterTrickPerformanceParameters/duration">See details</a>

#### <a name="JesterTrickPerformanceParameters/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#JesterTrickCastingTime">JesterTrickCastingTime</a>

#### <a name="JesterTrickPerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#JesterTrickCost">JesterTrickCost</a>

#### <a name="JesterTrickPerformanceParameters/range"></a> `range`

The range.

- **Type:** <a href="#JesterTrickRange">JesterTrickRange</a>

#### <a name="JesterTrickPerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#JesterTrickDuration">JesterTrickDuration</a>

---

### <a name="JesterTrickCastingTime"></a> `JesterTrickCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The casting time in actions. | <a href="#JesterTrickCastingTime/value">See details</a>

#### <a name="JesterTrickCastingTime/value"></a> `value`

The casting time in actions.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="JesterTrickCost"></a> `JesterTrickCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#JesterTrickCost/value">See details</a>

#### <a name="JesterTrickCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="JesterTrickRange"></a> `JesterTrickRange`

- **Type:** Union
- **Cases:** <a href="#JesterTrickRange'Touch">JesterTrickRange'Touch</a> | <a href="#JesterTrickRange'Self">JesterTrickRange'Self</a> | <a href="#JesterTrickRange'Fixed">JesterTrickRange'Fixed</a>

---

### <a name="JesterTrickRange'Touch"></a> `JesterTrickRange'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickRange'Touch/tag">See details</a>
`touch` |  | <a href="#JesterTrickRange'Touch/touch">See details</a>

#### <a name="JesterTrickRange'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

#### <a name="JesterTrickRange'Touch/touch"></a> `touch`

- **Type:** <a href="#JesterTrickRange'Touch/touch">Object</a>

---

### <a name="JesterTrickRange'Touch/touch"></a> `JesterTrickRange'Touch/touch`

- **Type:** Empty Object

---

### <a name="JesterTrickRange'Self"></a> `JesterTrickRange'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickRange'Self/tag">See details</a>
`self` |  | <a href="#JesterTrickRange'Self/self">See details</a>

#### <a name="JesterTrickRange'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="JesterTrickRange'Self/self"></a> `self`

- **Type:** <a href="#JesterTrickRange'Self/self">Object</a>

---

### <a name="JesterTrickRange'Self/self"></a> `JesterTrickRange'Self/self`

- **Type:** Empty Object

---

### <a name="JesterTrickRange'Fixed"></a> `JesterTrickRange'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickRange'Fixed/tag">See details</a>
`fixed` |  | <a href="#JesterTrickRange'Fixed/fixed">See details</a>

#### <a name="JesterTrickRange'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="JesterTrickRange'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedJesterTrickRange">FixedJesterTrickRange</a>

---

### <a name="FixedJesterTrickRange"></a> `FixedJesterTrickRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The range in steps/m. | <a href="#FixedJesterTrickRange/value">See details</a>

#### <a name="FixedJesterTrickRange/value"></a> `value`

The range in steps/m.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="JesterTrickDuration"></a> `JesterTrickDuration`

- **Type:** Union
- **Cases:** <a href="#JesterTrickDuration'Immediate">JesterTrickDuration'Immediate</a> | <a href="#JesterTrickDuration'Fixed">JesterTrickDuration'Fixed</a> | <a href="#JesterTrickDuration'CheckResultBased">JesterTrickDuration'CheckResultBased</a>

---

### <a name="JesterTrickDuration'Immediate"></a> `JesterTrickDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#JesterTrickDuration'Immediate/immediate">See details</a>

#### <a name="JesterTrickDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="JesterTrickDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#JesterTrickDuration'Immediate/immediate">Object</a>

---

### <a name="JesterTrickDuration'Immediate/immediate"></a> `JesterTrickDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="JesterTrickDuration'Fixed"></a> `JesterTrickDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#JesterTrickDuration'Fixed/fixed">See details</a>

#### <a name="JesterTrickDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="JesterTrickDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedJesterTrickDuration">FixedJesterTrickDuration</a>

---

### <a name="JesterTrickDuration'CheckResultBased"></a> `JesterTrickDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#JesterTrickDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#JesterTrickDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="JesterTrickDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="JesterTrickDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="FixedJesterTrickDuration"></a> `FixedJesterTrickDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration. | <a href="#FixedJesterTrickDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedJesterTrickDuration/unit">See details</a>

#### <a name="FixedJesterTrickDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="FixedJesterTrickDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>
