# Geode Ritual

## Definitions

### <a name="GeodeRitual"></a> Geode Ritual (`GeodeRitual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The geode ritual's identifier. An unique, increasing integer. | <a href="#GeodeRitual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#GeodeRitual/check">See details</a>
`parameters` | Measurable parameters of a geode ritual. | <a href="#GeodeRitual/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#GeodeRitual/target">See details</a>
`property` | The associated property. | <a href="#GeodeRitual/property">See details</a>
`prerequisites?` |  | <a href="#GeodeRitual/prerequisites">See details</a>
`src` |  | <a href="#GeodeRitual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#GeodeRitual/translations">See details</a>

#### <a name="GeodeRitual/id"></a> `id`

The geode ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeodeRitual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="GeodeRitual/parameters"></a> `parameters`

Measurable parameters of a geode ritual.

- **Type:** <a href="#GeodeRitualPerformanceParameters">GeodeRitualPerformanceParameters</a>

#### <a name="GeodeRitual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="../_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="GeodeRitual/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="GeodeRitual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../_Prerequisite.md#GeodeRitualPrerequisites">GeodeRitualPrerequisites</a>

#### <a name="GeodeRitual/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="GeodeRitual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#GeodeRitual/translations[key]">GeodeRitual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="GeodeRitual/translations[key]"></a> `GeodeRitual/translations[key]`

- **Type:** <a href="#GeodeRitualTranslation">GeodeRitualTranslation</a>

---

### <a name="GeodeRitualTranslation"></a> `GeodeRitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the geode ritual. | <a href="#GeodeRitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#GeodeRitualTranslation/effect">See details</a>
`casting_time` |  | <a href="#GeodeRitualTranslation/casting_time">See details</a>
`cost` |  | <a href="#GeodeRitualTranslation/cost">See details</a>
`range` |  | <a href="#GeodeRitualTranslation/range">See details</a>
`duration` |  | <a href="#GeodeRitualTranslation/duration">See details</a>
`target` |  | <a href="#GeodeRitualTranslation/target">See details</a>
`errata?` |  | <a href="#GeodeRitualTranslation/errata">See details</a>

#### <a name="GeodeRitualTranslation/name"></a> `name`

The name of the geode ritual.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="GeodeRitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="GeodeRitualTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="#GeodeRitualTranslation/casting_time">Object</a>

#### <a name="GeodeRitualTranslation/cost"></a> `cost`

- **Type:** <a href="#GeodeRitualTranslation/cost">Object</a>

#### <a name="GeodeRitualTranslation/range"></a> `range`

- **Type:** <a href="#GeodeRitualTranslation/range">Object</a>

#### <a name="GeodeRitualTranslation/duration"></a> `duration`

- **Type:** <a href="#GeodeRitualTranslation/duration">Object</a>

#### <a name="GeodeRitualTranslation/target"></a> `target`

- **Type:** String

#### <a name="GeodeRitualTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="GeodeRitualTranslation/casting_time"></a> `GeodeRitualTranslation/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitualTranslation/casting_time/full">See details</a>
`abbr` |  | <a href="#GeodeRitualTranslation/casting_time/abbr">See details</a>

#### <a name="GeodeRitualTranslation/casting_time/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitualTranslation/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitualTranslation/cost"></a> `GeodeRitualTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitualTranslation/cost/full">See details</a>
`abbr` |  | <a href="#GeodeRitualTranslation/cost/abbr">See details</a>

#### <a name="GeodeRitualTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitualTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitualTranslation/range"></a> `GeodeRitualTranslation/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitualTranslation/range/full">See details</a>
`abbr` |  | <a href="#GeodeRitualTranslation/range/abbr">See details</a>

#### <a name="GeodeRitualTranslation/range/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitualTranslation/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitualTranslation/duration"></a> `GeodeRitualTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#GeodeRitualTranslation/duration/full">See details</a>
`abbr` |  | <a href="#GeodeRitualTranslation/duration/abbr">See details</a>

#### <a name="GeodeRitualTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="GeodeRitualTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="GeodeRitualPerformanceParameters"></a> `GeodeRitualPerformanceParameters`

Measurable parameters of a geode ritual.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#GeodeRitualPerformanceParameters/casting_time">See details</a>
`cost` | The AE cost. | <a href="#GeodeRitualPerformanceParameters/cost">See details</a>
`range` | The range. | <a href="#GeodeRitualPerformanceParameters/range">See details</a>
`duration` | The duration. | <a href="#GeodeRitualPerformanceParameters/duration">See details</a>

#### <a name="GeodeRitualPerformanceParameters/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#GeodeRitualCastingTime">GeodeRitualCastingTime</a>

#### <a name="GeodeRitualPerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#GeodeRitualCost">GeodeRitualCost</a>

#### <a name="GeodeRitualPerformanceParameters/range"></a> `range`

The range.

- **Type:** <a href="#GeodeRitualRange">GeodeRitualRange</a>

#### <a name="GeodeRitualPerformanceParameters/duration"></a> `duration`

The duration.

- **Type:** <a href="#GeodeRitualDuration">GeodeRitualDuration</a>

---

### <a name="GeodeRitualCastingTime"></a> `GeodeRitualCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time. | <a href="#GeodeRitualCastingTime/value">See details</a>
`unit` | The casting time unit. | <a href="#GeodeRitualCastingTime/unit">See details</a>

#### <a name="GeodeRitualCastingTime/value"></a> `value`

The (unitless) casting time.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="GeodeRitualCastingTime/unit"></a> `unit`

The casting time unit.

- **Type:** <a href="../SkillModificationLevel.md#SlowSkillCastingTimeUnit">SlowSkillCastingTimeUnit</a>

---

### <a name="GeodeRitualCost"></a> `GeodeRitualCost`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualCost'Fixed">GeodeRitualCost'Fixed</a> | <a href="#GeodeRitualCost'Map">GeodeRitualCost'Map</a>

---

### <a name="GeodeRitualCost'Fixed"></a> `GeodeRitualCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#GeodeRitualCost'Fixed/fixed">See details</a>

#### <a name="GeodeRitualCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="GeodeRitualCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedGeodeRitualCost">FixedGeodeRitualCost</a>

---

### <a name="GeodeRitualCost'Map"></a> `GeodeRitualCost'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualCost'Map/tag">See details</a>
`map` |  | <a href="#GeodeRitualCost'Map/map">See details</a>

#### <a name="GeodeRitualCost'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="GeodeRitualCost'Map/map"></a> `map`

- **Type:** <a href="../_ActivatableSkillCost.md#CostMap">CostMap</a>

---

### <a name="FixedGeodeRitualCost"></a> `FixedGeodeRitualCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#FixedGeodeRitualCost/value">See details</a>

#### <a name="FixedGeodeRitualCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="GeodeRitualRange"></a> `GeodeRitualRange`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualRange'Self">GeodeRitualRange'Self</a> | <a href="#GeodeRitualRange'Fixed">GeodeRitualRange'Fixed</a>

---

### <a name="GeodeRitualRange'Self"></a> `GeodeRitualRange'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualRange'Self/tag">See details</a>
`self` |  | <a href="#GeodeRitualRange'Self/self">See details</a>

#### <a name="GeodeRitualRange'Self/tag"></a> `tag`

- **Constant:** `"Self"`

#### <a name="GeodeRitualRange'Self/self"></a> `self`

- **Type:** <a href="#GeodeRitualRange'Self/self">Object</a>

---

### <a name="GeodeRitualRange'Self/self"></a> `GeodeRitualRange'Self/self`

- **Type:** Empty Object

---

### <a name="GeodeRitualRange'Fixed"></a> `GeodeRitualRange'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualRange'Fixed/tag">See details</a>
`fixed` |  | <a href="#GeodeRitualRange'Fixed/fixed">See details</a>

#### <a name="GeodeRitualRange'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="GeodeRitualRange'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedGeodeRitualRange">FixedGeodeRitualRange</a>

---

### <a name="FixedGeodeRitualRange"></a> `FixedGeodeRitualRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The range in steps/m. | <a href="#FixedGeodeRitualRange/value">See details</a>

#### <a name="FixedGeodeRitualRange/value"></a> `value`

The range in steps/m.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="GeodeRitualDuration"></a> `GeodeRitualDuration`

- **Type:** Union
- **Cases:** <a href="#GeodeRitualDuration'Immediate">GeodeRitualDuration'Immediate</a> | <a href="#GeodeRitualDuration'Fixed">GeodeRitualDuration'Fixed</a> | <a href="#GeodeRitualDuration'CheckResultBased">GeodeRitualDuration'CheckResultBased</a>

---

### <a name="GeodeRitualDuration'Immediate"></a> `GeodeRitualDuration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualDuration'Immediate/tag">See details</a>
`immediate` |  | <a href="#GeodeRitualDuration'Immediate/immediate">See details</a>

#### <a name="GeodeRitualDuration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="GeodeRitualDuration'Immediate/immediate"></a> `immediate`

- **Type:** <a href="#GeodeRitualDuration'Immediate/immediate">Object</a>

---

### <a name="GeodeRitualDuration'Immediate/immediate"></a> `GeodeRitualDuration'Immediate/immediate`

- **Type:** Empty Object

---

### <a name="GeodeRitualDuration'Fixed"></a> `GeodeRitualDuration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualDuration'Fixed/tag">See details</a>
`fixed` |  | <a href="#GeodeRitualDuration'Fixed/fixed">See details</a>

#### <a name="GeodeRitualDuration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="GeodeRitualDuration'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedGeodeRitualDuration">FixedGeodeRitualDuration</a>

---

### <a name="GeodeRitualDuration'CheckResultBased"></a> `GeodeRitualDuration'CheckResultBased`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#GeodeRitualDuration'CheckResultBased/tag">See details</a>
`check_result_based` |  | <a href="#GeodeRitualDuration'CheckResultBased/check_result_based">See details</a>

#### <a name="GeodeRitualDuration'CheckResultBased/tag"></a> `tag`

- **Constant:** `"CheckResultBased"`

#### <a name="GeodeRitualDuration'CheckResultBased/check_result_based"></a> `check_result_based`

- **Type:** <a href="../_ActivatableSkillDuration.md#CheckResultBasedDuration">CheckResultBasedDuration</a>

---

### <a name="FixedGeodeRitualDuration"></a> `FixedGeodeRitualDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration. | <a href="#FixedGeodeRitualDuration/value">See details</a>
`unit` | The duration unit. | <a href="#FixedGeodeRitualDuration/unit">See details</a>

#### <a name="FixedGeodeRitualDuration/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `2`

#### <a name="FixedGeodeRitualDuration/unit"></a> `unit`

The duration unit.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnit">DurationUnit</a>
