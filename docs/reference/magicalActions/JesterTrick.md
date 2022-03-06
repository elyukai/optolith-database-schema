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
`property_id` | The property's identifier. | <a href="#JesterTrick/property_id">See details</a>
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

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="JesterTrick/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="JesterTrick/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="JesterTrick/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="JesterTrick/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="JesterTrick/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#JesterTrick/translations[key]">JesterTrick/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="JesterTrick/translations[key]"></a> `JesterTrick/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the jester trick. | <a href="#JesterTrick/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#JesterTrick/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#JesterTrick/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#JesterTrick/translations[key]/cost">See details</a>
`range` |  | <a href="#JesterTrick/translations[key]/range">See details</a>
`duration` |  | <a href="#JesterTrick/translations[key]/duration">See details</a>
`target` |  | <a href="#JesterTrick/translations[key]/target">See details</a>
`errata?` |  | <a href="#JesterTrick/translations[key]/errata">See details</a>

#### <a name="JesterTrick/translations[key]/name"></a> `name`

The name of the jester trick.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="JesterTrick/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="JesterTrick/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#JesterTrick/translations[key]/casting_time">Object</a>

#### <a name="JesterTrick/translations[key]/cost"></a> `cost`

- **Type:** <a href="#JesterTrick/translations[key]/cost">Object</a>

#### <a name="JesterTrick/translations[key]/range"></a> `range`

- **Type:** <a href="#JesterTrick/translations[key]/range">Object</a>

#### <a name="JesterTrick/translations[key]/duration"></a> `duration`

- **Type:** <a href="#JesterTrick/translations[key]/duration">Object</a>

#### <a name="JesterTrick/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="JesterTrick/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="JesterTrick/translations[key]/casting_time"></a> `JesterTrick/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrick/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#JesterTrick/translations[key]/casting_time/abbr">See details</a>

#### <a name="JesterTrick/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="JesterTrick/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrick/translations[key]/cost"></a> `JesterTrick/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrick/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#JesterTrick/translations[key]/cost/abbr">See details</a>

#### <a name="JesterTrick/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="JesterTrick/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrick/translations[key]/range"></a> `JesterTrick/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrick/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#JesterTrick/translations[key]/range/abbr">See details</a>

#### <a name="JesterTrick/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="JesterTrick/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="JesterTrick/translations[key]/duration"></a> `JesterTrick/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#JesterTrick/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#JesterTrick/translations[key]/duration/abbr">See details</a>

#### <a name="JesterTrick/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="JesterTrick/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a jester trick.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#PerformanceParameters/casting_time">See details</a>
`cost` | The AE cost. | <a href="#PerformanceParameters/cost">See details</a>
`range` | The range. | <a href="#PerformanceParameters/range">See details</a>
`duration` | The duration. | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#PerformanceParameters/casting_time">Object</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#PerformanceParameters/cost">Object</a>

#### <a name="PerformanceParameters/range"></a> `range`

The range.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/range'Touch">PerformanceParameters/range'Touch</a> | <a href="#PerformanceParameters/range'Self">PerformanceParameters/range'Self</a> | <a href="#PerformanceParameters/range'Fixed">PerformanceParameters/range'Fixed</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Immediate">PerformanceParameters/duration'Immediate</a> | <a href="#PerformanceParameters/duration'Fixed">PerformanceParameters/duration'Fixed</a> | <a href="#PerformanceParameters/duration'CheckResultBasedTagged">PerformanceParameters/duration'CheckResultBasedTagged</a>

---

### <a name="PerformanceParameters/casting_time"></a> `PerformanceParameters/casting_time`

The casting time.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The casting time in actions. | <a href="#PerformanceParameters/casting_time/value">See details</a>

#### <a name="PerformanceParameters/casting_time/value"></a> `value`

The casting time in actions.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/cost"></a> `PerformanceParameters/cost`

The AE cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#PerformanceParameters/cost/value">See details</a>

#### <a name="PerformanceParameters/cost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/range'Touch"></a> `PerformanceParameters/range'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Touch/tag">See details</a>

#### <a name="PerformanceParameters/range'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

---

### <a name="PerformanceParameters/range'Self"></a> `PerformanceParameters/range'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Self/tag">See details</a>

#### <a name="PerformanceParameters/range'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="PerformanceParameters/range'Fixed"></a> `PerformanceParameters/range'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Fixed/tag">See details</a>
`value` | The range in steps/m. | <a href="#PerformanceParameters/range'Fixed/value">See details</a>

#### <a name="PerformanceParameters/range'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/range'Fixed/value"></a> `value`

The range in steps/m.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="PerformanceParameters/duration'Immediate"></a> `PerformanceParameters/duration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Immediate/tag">See details</a>

#### <a name="PerformanceParameters/duration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="PerformanceParameters/duration'Fixed"></a> `PerformanceParameters/duration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Fixed/tag">See details</a>
`value` | The (unitless) duration. | <a href="#PerformanceParameters/duration'Fixed/value">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters/duration'Fixed/unit">See details</a>

#### <a name="PerformanceParameters/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/duration'Fixed/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="PerformanceParameters/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration'CheckResultBasedTagged"></a> `PerformanceParameters/duration'CheckResultBasedTagged`

- **Type:** <a href="../_ActivatableSkill.md#Duration/CheckResultBasedTagged">Duration/CheckResultBasedTagged</a>
