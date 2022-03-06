# Animist Power

## Definitions

### <a name="AnimistPower"></a> Animist Power (`AnimistPower`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animist power's identifier. An unique, increasing integer. | <a href="#AnimistPower/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#AnimistPower/check">See details</a>
`parameters` | Measurable parameters of a animist power. | <a href="#AnimistPower/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#AnimistPower/property_id">See details</a>
`tribe_tradition` | The tribe traditions the animist power is available to. It may be available to all or only specific tribes. | <a href="#AnimistPower/tribe_tradition">See details</a>
`improvement_cost` | States which column is used to improve the skill. It is a fixed value or depends on the primary patron. | <a href="#AnimistPower/improvement_cost">See details</a>
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

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="AnimistPower/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimistPower/tribe_tradition"></a> `tribe_tradition`

The tribe traditions the animist power is available to. It may be available
to all or only specific tribes.

- **Type:** Union
- **Cases:** <a href="#AnimistPower/tribe_tradition'General">AnimistPower/tribe_tradition'General</a> | <a href="#AnimistPower/tribe_tradition'Specific">AnimistPower/tribe_tradition'Specific</a>

#### <a name="AnimistPower/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill. It is a fixed value or
depends on the primary patron.

- **Type:** Union
- **Cases:** <a href="#AnimistPower/improvement_cost'Flat">AnimistPower/improvement_cost'Flat</a> | <a href="#AnimistPower/improvement_cost'ByPrimaryPatron">AnimistPower/improvement_cost'ByPrimaryPatron</a>

#### <a name="AnimistPower/levels"></a> `levels?`

The animist power can have multiple levels. Each level is skilled
separately. A previous level must be on at least 10 so that the next higher
level can be activated and skilled. A higher level cannot be skilled higher
than a lower level. Each level also adds an effect text to the text of the
first level.

- **Type:** List
- **Items:** <a href="#AnimistPower/levels[]">AnimistPower/levels[]</a>
- **Minimum Items:** `1`

#### <a name="AnimistPower/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimistPower/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPower/translations[key]">AnimistPower/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPower/tribe_tradition'General"></a> `AnimistPower/tribe_tradition'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPower/tribe_tradition'General/tag">See details</a>

#### <a name="AnimistPower/tribe_tradition'General/tag"></a> `tag`

- **Constant:** `"General"`

---

### <a name="AnimistPower/tribe_tradition'Specific"></a> `AnimistPower/tribe_tradition'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPower/tribe_tradition'Specific/tag">See details</a>
`list` | The specific tribe traditions this animist power is available to. | <a href="#AnimistPower/tribe_tradition'Specific/list">See details</a>

#### <a name="AnimistPower/tribe_tradition'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="AnimistPower/tribe_tradition'Specific/list"></a> `list`

The specific tribe traditions this animist power is available to.

- **Type:** List
- **Items:** <a href="#AnimistPower/tribe_tradition'Specific/list[]">AnimistPower/tribe_tradition'Specific/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="AnimistPower/tribe_tradition'Specific/list[]"></a> `AnimistPower/tribe_tradition'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The tribe's identifier. | <a href="#AnimistPower/tribe_tradition'Specific/list[]/id">See details</a>

#### <a name="AnimistPower/tribe_tradition'Specific/list[]/id"></a> `id`

The tribe's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="AnimistPower/improvement_cost'Flat"></a> `AnimistPower/improvement_cost'Flat`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPower/improvement_cost'Flat/tag">See details</a>
`value` |  | <a href="#AnimistPower/improvement_cost'Flat/value">See details</a>

#### <a name="AnimistPower/improvement_cost'Flat/tag"></a> `tag`

- **Constant:** `"Flat"`

#### <a name="AnimistPower/improvement_cost'Flat/value"></a> `value`

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

---

### <a name="AnimistPower/improvement_cost'ByPrimaryPatron"></a> `AnimistPower/improvement_cost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimistPower/improvement_cost'ByPrimaryPatron/tag">See details</a>

#### <a name="AnimistPower/improvement_cost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

---

### <a name="AnimistPower/levels[]"></a> `AnimistPower/levels[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The level number. | <a href="#AnimistPower/levels[]/level">See details</a>
`src?` | The source references, if different than the references for level 1. | <a href="#AnimistPower/levels[]/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimistPower/levels[]/translations">See details</a>

#### <a name="AnimistPower/levels[]/level"></a> `level`

The level number.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="AnimistPower/levels[]/src"></a> `src?`

The source references, if different than the references for level 1.

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimistPower/levels[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimistPower/levels[]/translations[key]">AnimistPower/levels[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimistPower/levels[]/translations[key]"></a> `AnimistPower/levels[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`effect` | An additional effect description for this level. | <a href="#AnimistPower/levels[]/translations[key]/effect">See details</a>

#### <a name="AnimistPower/levels[]/translations[key]/effect"></a> `effect`

An additional effect description for this level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="AnimistPower/translations[key]"></a> `AnimistPower/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the animist power. | <a href="#AnimistPower/translations[key]/name">See details</a>
`name_in_library?` | The full name of the entry as stated in the sources. Only use when `name` needs to be different from full name for text generation purposes. | <a href="#AnimistPower/translations[key]/name_in_library">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#AnimistPower/translations[key]/effect">See details</a>
`cost` |  | <a href="#AnimistPower/translations[key]/cost">See details</a>
`duration` |  | <a href="#AnimistPower/translations[key]/duration">See details</a>
`errata?` |  | <a href="#AnimistPower/translations[key]/errata">See details</a>

#### <a name="AnimistPower/translations[key]/name"></a> `name`

The name of the animist power.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimistPower/translations[key]/name_in_library"></a> `name_in_library?`

The full name of the entry as stated in the sources. Only use when
`name` needs to be different from full name for text generation
purposes.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimistPower/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="AnimistPower/translations[key]/cost"></a> `cost`

- **Type:** <a href="#AnimistPower/translations[key]/cost">Object</a>

#### <a name="AnimistPower/translations[key]/duration"></a> `duration`

- **Type:** <a href="#AnimistPower/translations[key]/duration">Object</a>

#### <a name="AnimistPower/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="AnimistPower/translations[key]/cost"></a> `AnimistPower/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#AnimistPower/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#AnimistPower/translations[key]/cost/abbr">See details</a>

#### <a name="AnimistPower/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="AnimistPower/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="AnimistPower/translations[key]/duration"></a> `AnimistPower/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#AnimistPower/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#AnimistPower/translations[key]/duration/abbr">See details</a>

#### <a name="AnimistPower/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="AnimistPower/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a animist power.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime">PerformanceParameters'OneTime</a> | <a href="#PerformanceParameters'Sustained">PerformanceParameters'Sustained</a>

---

### <a name="PerformanceParameters'OneTime"></a> `PerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/tag">See details</a>
`cost` | The AE cost value, either a flat value or defined dynamically by the primary patron. | <a href="#PerformanceParameters'OneTime/cost">See details</a>
`duration` | The duration. | <a href="#PerformanceParameters'OneTime/duration">See details</a>

#### <a name="PerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="PerformanceParameters'OneTime/cost"></a> `cost`

The AE cost value, either a flat value or defined dynamically by the
primary patron.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime/cost'Fixed">PerformanceParameters'OneTime/cost'Fixed</a> | <a href="#PerformanceParameters'OneTime/cost'ByPrimaryPatron">PerformanceParameters'OneTime/cost'ByPrimaryPatron</a>

#### <a name="PerformanceParameters'OneTime/duration"></a> `duration`

The duration.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime/duration'Immediate">PerformanceParameters'OneTime/duration'Immediate</a> | <a href="#PerformanceParameters'OneTime/duration'Fixed">PerformanceParameters'OneTime/duration'Fixed</a> | <a href="#PerformanceParameters'OneTime/duration'CheckResultBasedTaggedAnimistPower">PerformanceParameters'OneTime/duration'CheckResultBasedTaggedAnimistPower</a>

---

### <a name="PerformanceParameters'OneTime/cost'Fixed"></a> `PerformanceParameters'OneTime/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/cost'Fixed/tag">See details</a>
`value` | The AE cost value. | <a href="#PerformanceParameters'OneTime/cost'Fixed/value">See details</a>
`interval?` | If defined, half of the AE cost `value` has to be paid each interval. | <a href="#PerformanceParameters'OneTime/cost'Fixed/interval">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters'OneTime/cost'Fixed/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'OneTime/cost'Fixed/interval"></a> `interval?`

If defined, half of the AE cost `value` has to be paid each
interval.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="PerformanceParameters'OneTime/cost'ByPrimaryPatron"></a> `PerformanceParameters'OneTime/cost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/cost'ByPrimaryPatron/tag">See details</a>
`interval?` | If defined, half of the AE cost `value` has to be paid each interval. | <a href="#PerformanceParameters'OneTime/cost'ByPrimaryPatron/interval">See details</a>

#### <a name="PerformanceParameters'OneTime/cost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

#### <a name="PerformanceParameters'OneTime/cost'ByPrimaryPatron/interval"></a> `interval?`

If defined, half of the AE cost `value` has to be paid each
interval.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="PerformanceParameters'OneTime/duration'Immediate"></a> `PerformanceParameters'OneTime/duration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/duration'Immediate/tag">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="PerformanceParameters'OneTime/duration'Fixed"></a> `PerformanceParameters'OneTime/duration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/duration'Fixed/tag">See details</a>
`is_maximum?` | If the duration is the maximum duration, so it may end earlier. | <a href="#PerformanceParameters'OneTime/duration'Fixed/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#PerformanceParameters'OneTime/duration'Fixed/value">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters'OneTime/duration'Fixed/unit">See details</a>

#### <a name="PerformanceParameters'OneTime/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters'OneTime/duration'Fixed/is_maximum"></a> `is_maximum?`

If the duration is the maximum duration, so it may end earlier.

- **Type:** Boolean

#### <a name="PerformanceParameters'OneTime/duration'Fixed/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="PerformanceParameters'OneTime/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters'OneTime/duration'CheckResultBasedTaggedAnimistPower"></a> `PerformanceParameters'OneTime/duration'CheckResultBasedTaggedAnimistPower`

- **Type:** <a href="../_ActivatableSkill.md#Duration/CheckResultBasedTaggedAnimistPower">Duration/CheckResultBasedTaggedAnimistPower</a>

---

### <a name="PerformanceParameters'Sustained"></a> `PerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/tag">See details</a>
`cost` | The AE cost value, either a flat value or defined dynamically by the primary patron. | <a href="#PerformanceParameters'Sustained/cost">See details</a>

#### <a name="PerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="PerformanceParameters'Sustained/cost"></a> `cost`

The AE cost value, either a flat value or defined dynamically by the
primary patron.

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'Sustained/cost'Fixed">PerformanceParameters'Sustained/cost'Fixed</a> | <a href="#PerformanceParameters'Sustained/cost'ByPrimaryPatron">PerformanceParameters'Sustained/cost'ByPrimaryPatron</a>

---

### <a name="PerformanceParameters'Sustained/cost'Fixed"></a> `PerformanceParameters'Sustained/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/cost'Fixed/tag">See details</a>
`value` | The AE cost value. | <a href="#PerformanceParameters'Sustained/cost'Fixed/value">See details</a>
`interval` | Half of the AE cost `value` has to be paid each interval. | <a href="#PerformanceParameters'Sustained/cost'Fixed/interval">See details</a>

#### <a name="PerformanceParameters'Sustained/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters'Sustained/cost'Fixed/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters'Sustained/cost'Fixed/interval"></a> `interval`

Half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="PerformanceParameters'Sustained/cost'ByPrimaryPatron"></a> `PerformanceParameters'Sustained/cost'ByPrimaryPatron`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/cost'ByPrimaryPatron/tag">See details</a>
`interval` | Half of the AE cost `value` has to be paid each interval. | <a href="#PerformanceParameters'Sustained/cost'ByPrimaryPatron/interval">See details</a>

#### <a name="PerformanceParameters'Sustained/cost'ByPrimaryPatron/tag"></a> `tag`

- **Constant:** `"ByPrimaryPatron"`

#### <a name="PerformanceParameters'Sustained/cost'ByPrimaryPatron/interval"></a> `interval`

Half of the AE cost `value` has to be paid each interval.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>
