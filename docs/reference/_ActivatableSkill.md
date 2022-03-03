# Activatable Skill

## Definitions

### <a name="Effect/T"></a> `Effect/T`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** Union
- **Cases:** <a href="#Effect/T'Plain">Effect/T'Plain</a> | <a href="#Effect/T'ForEachQualityLevel">Effect/T'ForEachQualityLevel</a> | <a href="#Effect/T'ForEachTwoQualityLevels">Effect/T'ForEachTwoQualityLevels</a>

---

### <a name="Effect/T'Plain"></a> `Effect/T'Plain`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect/T'Plain/tag">See details</a>
`text` | The effect description. | <a href="#Effect/T'Plain/text">See details</a>

#### <a name="Effect/T'Plain/tag"></a> `tag`

- **Constant:** `"Plain"`

#### <a name="Effect/T'Plain/text"></a> `text`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/T'ForEachQualityLevel"></a> `Effect/T'ForEachQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect/T'ForEachQualityLevel/tag">See details</a>
`text_before` | The effect description before the list of effects for each quality level. | <a href="#Effect/T'ForEachQualityLevel/text_before">See details</a>
`quality_levels` | The list of effects for each quality level. | <a href="#Effect/T'ForEachQualityLevel/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#Effect/T'ForEachQualityLevel/text_after">See details</a>

#### <a name="Effect/T'ForEachQualityLevel/tag"></a> `tag`

- **Constant:** `"ForEachQualityLevel"`

#### <a name="Effect/T'ForEachQualityLevel/text_before"></a> `text_before`

The effect description before the list of effects for each quality level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Effect/T'ForEachQualityLevel/quality_levels"></a> `quality_levels`

The list of effects for each quality level.

- **Type:** Tuple
- **Items:** [<a href="Effect/T'ForEachQualityLevel/quality_levels[0]">Effect/T'ForEachQualityLevel/quality_levels[0]</a>, <a href="Effect/T'ForEachQualityLevel/quality_levels[1]">Effect/T'ForEachQualityLevel/quality_levels[1]</a>, <a href="Effect/T'ForEachQualityLevel/quality_levels[2]">Effect/T'ForEachQualityLevel/quality_levels[2]</a>, <a href="Effect/T'ForEachQualityLevel/quality_levels[3]">Effect/T'ForEachQualityLevel/quality_levels[3]</a>, <a href="Effect/T'ForEachQualityLevel/quality_levels[4]">Effect/T'ForEachQualityLevel/quality_levels[4]</a>, <a href="Effect/T'ForEachQualityLevel/quality_levels[5]">Effect/T'ForEachQualityLevel/quality_levels[5]</a>]

#### <a name="Effect/T'ForEachQualityLevel/text_after"></a> `text_after?`

The effect description after the list of effects for each quality level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[0]"></a> `Effect/T'ForEachQualityLevel/quality_levels[0]`

- **Type:** <a href="#Effect/QualityLevel1">Effect/QualityLevel1</a>

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[1]"></a> `Effect/T'ForEachQualityLevel/quality_levels[1]`

- **Type:** <a href="#Effect/QualityLevel2">Effect/QualityLevel2</a>

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[2]"></a> `Effect/T'ForEachQualityLevel/quality_levels[2]`

- **Type:** <a href="#Effect/QualityLevel3">Effect/QualityLevel3</a>

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[3]"></a> `Effect/T'ForEachQualityLevel/quality_levels[3]`

- **Type:** <a href="#Effect/QualityLevel4">Effect/QualityLevel4</a>

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[4]"></a> `Effect/T'ForEachQualityLevel/quality_levels[4]`

- **Type:** <a href="#Effect/QualityLevel5">Effect/QualityLevel5</a>

---

### <a name="Effect/T'ForEachQualityLevel/quality_levels[5]"></a> `Effect/T'ForEachQualityLevel/quality_levels[5]`

- **Type:** <a href="#Effect/QualityLevel6">Effect/QualityLevel6</a>

---

### <a name="Effect/T'ForEachTwoQualityLevels"></a> `Effect/T'ForEachTwoQualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Effect/T'ForEachTwoQualityLevels/tag">See details</a>
`text_before` | The effect description before the list of effects for each quality level. | <a href="#Effect/T'ForEachTwoQualityLevels/text_before">See details</a>
`quality_levels` | The list of effects for each two quality levels. | <a href="#Effect/T'ForEachTwoQualityLevels/quality_levels">See details</a>
`text_after?` | The effect description after the list of effects for each quality level. | <a href="#Effect/T'ForEachTwoQualityLevels/text_after">See details</a>

#### <a name="Effect/T'ForEachTwoQualityLevels/tag"></a> `tag`

- **Constant:** `"ForEachTwoQualityLevels"`

#### <a name="Effect/T'ForEachTwoQualityLevels/text_before"></a> `text_before`

The effect description before the list of effects for each quality level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Effect/T'ForEachTwoQualityLevels/quality_levels"></a> `quality_levels`

The list of effects for each two quality levels.

- **Type:** Tuple
- **Items:** [<a href="Effect/T'ForEachTwoQualityLevels/quality_levels[0]">Effect/T'ForEachTwoQualityLevels/quality_levels[0]</a>, <a href="Effect/T'ForEachTwoQualityLevels/quality_levels[1]">Effect/T'ForEachTwoQualityLevels/quality_levels[1]</a>, <a href="Effect/T'ForEachTwoQualityLevels/quality_levels[2]">Effect/T'ForEachTwoQualityLevels/quality_levels[2]</a>]

#### <a name="Effect/T'ForEachTwoQualityLevels/text_after"></a> `text_after?`

The effect description after the list of effects for each quality level.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/T'ForEachTwoQualityLevels/quality_levels[0]"></a> `Effect/T'ForEachTwoQualityLevels/quality_levels[0]`

- **Type:** <a href="#Effect/QualityLevel1To2">Effect/QualityLevel1To2</a>

---

### <a name="Effect/T'ForEachTwoQualityLevels/quality_levels[1]"></a> `Effect/T'ForEachTwoQualityLevels/quality_levels[1]`

- **Type:** <a href="#Effect/QualityLevel3To4">Effect/QualityLevel3To4</a>

---

### <a name="Effect/T'ForEachTwoQualityLevels/quality_levels[2]"></a> `Effect/T'ForEachTwoQualityLevels/quality_levels[2]`

- **Type:** <a href="#Effect/QualityLevel5To6">Effect/QualityLevel5To6</a>

---

### <a name="Effect/QualityLevel1"></a> `Effect/QualityLevel1`

Effect at QL 1.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel2"></a> `Effect/QualityLevel2`

Effect at QL 2.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel3"></a> `Effect/QualityLevel3`

Effect at QL 3.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel4"></a> `Effect/QualityLevel4`

Effect at QL 4.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel5"></a> `Effect/QualityLevel5`

Effect at QL 5.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel6"></a> `Effect/QualityLevel6`

Effect at QL 6.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel1To2"></a> `Effect/QualityLevel1To2`

Effect at QL 1–2.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel3To4"></a> `Effect/QualityLevel3To4`

Effect at QL 3–4.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Effect/QualityLevel5To6"></a> `Effect/QualityLevel5To6`

Effect at QL 5–6.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters'OneTime">PerformanceParameters'OneTime</a> | <a href="#PerformanceParameters'Sustained">PerformanceParameters'Sustained</a>

---

### <a name="PerformanceParameters'OneTime"></a> `PerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'OneTime/tag">See details</a>
`casting_time` |  | <a href="#PerformanceParameters'OneTime/casting_time">See details</a>
`cost` |  | <a href="#PerformanceParameters'OneTime/cost">See details</a>
`range` |  | <a href="#PerformanceParameters'OneTime/range">See details</a>
`duration` |  | <a href="#PerformanceParameters'OneTime/duration">See details</a>

#### <a name="PerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="PerformanceParameters'OneTime/casting_time"></a> `casting_time`

- **Type:** <a href="#CastingTime/T">CastingTime/T</a>

#### <a name="PerformanceParameters'OneTime/cost"></a> `cost`

- **Type:** <a href="#Cost/OneTime/T">Cost/OneTime/T</a>

#### <a name="PerformanceParameters'OneTime/range"></a> `range`

- **Type:** <a href="#Range/T">Range/T</a>

#### <a name="PerformanceParameters'OneTime/duration"></a> `duration`

- **Type:** <a href="#Duration/OneTime/T">Duration/OneTime/T</a>

---

### <a name="PerformanceParameters'Sustained"></a> `PerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters'Sustained/tag">See details</a>
`casting_time` |  | <a href="#PerformanceParameters'Sustained/casting_time">See details</a>
`cost` |  | <a href="#PerformanceParameters'Sustained/cost">See details</a>
`range` |  | <a href="#PerformanceParameters'Sustained/range">See details</a>
`duration` |  | <a href="#PerformanceParameters'Sustained/duration">See details</a>

#### <a name="PerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="PerformanceParameters'Sustained/casting_time"></a> `casting_time`

- **Type:** <a href="#CastingTime/T">CastingTime/T</a>

#### <a name="PerformanceParameters'Sustained/cost"></a> `cost`

- **Type:** <a href="#Cost/Sustained/T">Cost/Sustained/T</a>

#### <a name="PerformanceParameters'Sustained/range"></a> `range`

- **Type:** <a href="#Range/T">Range/T</a>

#### <a name="PerformanceParameters'Sustained/duration"></a> `duration`

- **Type:** <a href="#Duration/Sustained/T">Duration/Sustained/T</a>

---

### <a name="CastingTime/T"></a> `CastingTime/T`

- **Type:** Union
- **Cases:** <a href="#CastingTime/T'DefaultCastingTime">CastingTime/T'DefaultCastingTime</a> | <a href="#CastingTime/T'AventurianIntimacyCastingTime">CastingTime/T'AventurianIntimacyCastingTime</a>

---

### <a name="CastingTime/T'DefaultCastingTime"></a> `CastingTime/T'DefaultCastingTime`

- **Type:** <a href="#CastingTime/DefaultCastingTime">CastingTime/DefaultCastingTime</a>

---

### <a name="CastingTime/T'AventurianIntimacyCastingTime"></a> `CastingTime/T'AventurianIntimacyCastingTime`

- **Type:** <a href="#CastingTime/AventurianIntimacyCastingTime">CastingTime/AventurianIntimacyCastingTime</a>

---

### <a name="CastingTime/DefaultCastingTime"></a> `CastingTime/DefaultCastingTime`

The default casting time definition.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CastingTime/DefaultCastingTime/tag">See details</a>
`modification_id` | The skill modification increment identifier/level. | <a href="#CastingTime/DefaultCastingTime/modification_id">See details</a>
`is_modifiable` | Is the casting time modifiable? | <a href="#CastingTime/DefaultCastingTime/is_modifiable">See details</a>

#### <a name="CastingTime/DefaultCastingTime/tag"></a> `tag`

- **Constant:** `"Default"`

#### <a name="CastingTime/DefaultCastingTime/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="CastingTime/DefaultCastingTime/is_modifiable"></a> `is_modifiable`

Is the casting time modifiable?

- **Type:** Boolean

---

### <a name="CastingTime/AventurianIntimacyCastingTime"></a> `CastingTime/AventurianIntimacyCastingTime`

In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CastingTime/AventurianIntimacyCastingTime/tag">See details</a>
`before_lovemaking` | The casting time before lovemaking (the normal casting time). | <a href="#CastingTime/AventurianIntimacyCastingTime/before_lovemaking">See details</a>
`during_lovemaking` | The casting time during lovemaking. | <a href="#CastingTime/AventurianIntimacyCastingTime/during_lovemaking">See details</a>

#### <a name="CastingTime/AventurianIntimacyCastingTime/tag"></a> `tag`

- **Constant:** `"Intimacy"`

#### <a name="CastingTime/AventurianIntimacyCastingTime/before_lovemaking"></a> `before_lovemaking`

The casting time before lovemaking (the normal casting time).

- **Type:** <a href="#CastingTime/CastingTimeBeforeLovemaking">CastingTime/CastingTimeBeforeLovemaking</a>

#### <a name="CastingTime/AventurianIntimacyCastingTime/during_lovemaking"></a> `during_lovemaking`

The casting time during lovemaking.

- **Type:** <a href="#CastingTime/CastingTimeDuringLovemaking">CastingTime/CastingTimeDuringLovemaking</a>

---

### <a name="CastingTime/CastingTimeBeforeLovemaking"></a> `CastingTime/CastingTimeBeforeLovemaking`

The casting time before lovemaking (the normal casting time).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modification_id` | The skill modification increment identifier/level. | <a href="#CastingTime/CastingTimeBeforeLovemaking/modification_id">See details</a>
`is_modifiable` | Is the casting time modifiable? | <a href="#CastingTime/CastingTimeBeforeLovemaking/is_modifiable">See details</a>

#### <a name="CastingTime/CastingTimeBeforeLovemaking/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="CastingTime/CastingTimeBeforeLovemaking/is_modifiable"></a> `is_modifiable`

Is the casting time modifiable?

- **Type:** Boolean

---

### <a name="CastingTime/CastingTimeDuringLovemaking"></a> `CastingTime/CastingTimeDuringLovemaking`

The casting time during lovemaking.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#CastingTime/CastingTimeDuringLovemaking/value">See details</a>
`unit` | The unit of the `value`. | <a href="#CastingTime/CastingTimeDuringLovemaking/unit">See details</a>

#### <a name="CastingTime/CastingTimeDuringLovemaking/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CastingTime/CastingTimeDuringLovemaking/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#CastingTime/CastingTimeDuringLovemakingUnit">CastingTime/CastingTimeDuringLovemakingUnit</a>

---

### <a name="CastingTime/CastingTimeDuringLovemakingUnit"></a> `CastingTime/CastingTimeDuringLovemakingUnit`

- **Possible values:** `"SeductionActions"`, `"Rounds"`

---

### <a name="Cost/Minimum"></a> `Cost/Minimum`

- **Type:** Union
- **Cases:** <a href="#Cost/Minimum'RelativeMinimum">Cost/Minimum'RelativeMinimum</a> | <a href="#Cost/Minimum'AbsoluteMinimum">Cost/Minimum'AbsoluteMinimum</a>

---

### <a name="Cost/Minimum'RelativeMinimum"></a> `Cost/Minimum'RelativeMinimum`

- **Type:** <a href="#Cost/RelativeMinimum">Cost/RelativeMinimum</a>

---

### <a name="Cost/Minimum'AbsoluteMinimum"></a> `Cost/Minimum'AbsoluteMinimum`

- **Type:** <a href="#Cost/AbsoluteMinimum">Cost/AbsoluteMinimum</a>

---

### <a name="Cost/RelativeMinimum"></a> `Cost/RelativeMinimum`

The cost `value` represents a minimum value, so that the minimum value itself may be modified by other cost display modifiers. E.g., it may be rendered as `at least 1 AE per person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/RelativeMinimum/tag">See details</a>

#### <a name="Cost/RelativeMinimum/tag"></a> `tag`

- **Constant:** `"Relative"`

---

### <a name="Cost/AbsoluteMinimum"></a> `Cost/AbsoluteMinimum`

There is an absolute minimum value that is not influenced by other cost modifications. E.g., it may be rendered as `1 AE per person, at least 4 AE`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/AbsoluteMinimum/tag">See details</a>
`value` |  | <a href="#Cost/AbsoluteMinimum/value">See details</a>

#### <a name="Cost/AbsoluteMinimum/tag"></a> `tag`

- **Constant:** `"Absolute"`

#### <a name="Cost/AbsoluteMinimum/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Cost/OneTime/T"></a> `Cost/OneTime/T`

- **Type:** Union
- **Cases:** <a href="#Cost/OneTime/T'Single">Cost/OneTime/T'Single</a> | <a href="#Cost/OneTime/T'Conjunction">Cost/OneTime/T'Conjunction</a> | <a href="#Cost/OneTime/T'Disjunction">Cost/OneTime/T'Disjunction</a> | <a href="#Cost/OneTime/T'Map">Cost/OneTime/T'Map</a>

---

### <a name="Cost/OneTime/T'Single"></a> `Cost/OneTime/T'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/T'Single/tag">See details</a>
`value` |  | <a href="#Cost/OneTime/T'Single/value">See details</a>

#### <a name="Cost/OneTime/T'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="Cost/OneTime/T'Single/value"></a> `value`

- **Type:** <a href="#Cost/OneTime/Single">Cost/OneTime/Single</a>

---

### <a name="Cost/OneTime/T'Conjunction"></a> `Cost/OneTime/T'Conjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/T'Conjunction/tag">See details</a>
`list` |  | <a href="#Cost/OneTime/T'Conjunction/list">See details</a>

#### <a name="Cost/OneTime/T'Conjunction/tag"></a> `tag`

- **Constant:** `"Conjunction"`

#### <a name="Cost/OneTime/T'Conjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#Cost/OneTime/T'Conjunction/list[]">Cost/OneTime/T'Conjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="Cost/OneTime/T'Conjunction/list[]"></a> `Cost/OneTime/T'Conjunction/list[]`

- **Type:** <a href="#Cost/OneTime/Single">Cost/OneTime/Single</a>

---

### <a name="Cost/OneTime/T'Disjunction"></a> `Cost/OneTime/T'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/T'Disjunction/tag">See details</a>
`list` |  | <a href="#Cost/OneTime/T'Disjunction/list">See details</a>

#### <a name="Cost/OneTime/T'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="Cost/OneTime/T'Disjunction/list"></a> `list`

- **Type:** List
- **Items:** <a href="#Cost/OneTime/T'Disjunction/list[]">Cost/OneTime/T'Disjunction/list[]</a>
- **Minimum Items:** `2`

---

### <a name="Cost/OneTime/T'Disjunction/list[]"></a> `Cost/OneTime/T'Disjunction/list[]`

- **Type:** <a href="#Cost/OneTime/Single">Cost/OneTime/Single</a>

---

### <a name="Cost/OneTime/T'Map"></a> `Cost/OneTime/T'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/T'Map/tag">See details</a>
`map` |  | <a href="#Cost/OneTime/T'Map/map">See details</a>

#### <a name="Cost/OneTime/T'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="Cost/OneTime/T'Map/map"></a> `map`

- **Type:** <a href="#Cost/OneTime/Map">Cost/OneTime/Map</a>

---

### <a name="Cost/OneTime/Single"></a> `Cost/OneTime/Single`

- **Type:** Union
- **Cases:** <a href="#Cost/OneTime/Single'Modifiable">Cost/OneTime/Single'Modifiable</a> | <a href="#Cost/OneTime/Single'NonModifiable">Cost/OneTime/Single'NonModifiable</a> | <a href="#Cost/OneTime/Single'Indefinite">Cost/OneTime/Single'Indefinite</a>

---

### <a name="Cost/OneTime/Single'Modifiable"></a> `Cost/OneTime/Single'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/Single'Modifiable/tag">See details</a>
`modification_id` | The skill modification increment identifier/level. | <a href="#Cost/OneTime/Single'Modifiable/modification_id">See details</a>
`permanent?` | The part of the cost value that has to be spent permanently. | <a href="#Cost/OneTime/Single'Modifiable/permanent">See details</a>

#### <a name="Cost/OneTime/Single'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="Cost/OneTime/Single'Modifiable/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="Cost/OneTime/Single'Modifiable/permanent"></a> `permanent?`

The part of the cost value that has to be spent permanently.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Cost/OneTime/Single'NonModifiable"></a> `Cost/OneTime/Single'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/Single'NonModifiable/tag">See details</a>
`minimum?` | A minimum cost value. It may be rendered relative to the actual cost `value` or may be an absolute value, not affected by other modifications of this cost value. | <a href="#Cost/OneTime/Single'NonModifiable/minimum">See details</a>
`value` |  | <a href="#Cost/OneTime/Single'NonModifiable/value">See details</a>
`permanent?` | The part of the cost value that has to be spent permanently. | <a href="#Cost/OneTime/Single'NonModifiable/permanent">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cost/OneTime/Single'NonModifiable/translations">See details</a>

#### <a name="Cost/OneTime/Single'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="Cost/OneTime/Single'NonModifiable/minimum"></a> `minimum?`

A minimum cost value. It may be rendered relative to the actual cost `value` or may be an absolute value, not affected by other modifications of this cost value.

- **Type:** <a href="#Cost/Minimum">Cost/Minimum</a>

#### <a name="Cost/OneTime/Single'NonModifiable/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Cost/OneTime/Single'NonModifiable/permanent"></a> `permanent?`

The part of the cost value that has to be spent permanently.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Cost/OneTime/Single'NonModifiable/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cost/OneTime/Single'NonModifiable/translations[key]">Cost/OneTime/Single'NonModifiable/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Cost/OneTime/Single'NonModifiable/translations[key]"></a> `Cost/OneTime/Single'NonModifiable/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 KP per person` | <a href="#Cost/OneTime/Single'NonModifiable/translations[key]/per">See details</a>
`note?` | A note, appended to the generated string in parenthesis. | <a href="#Cost/OneTime/Single'NonModifiable/translations[key]/note">See details</a>

#### <a name="Cost/OneTime/Single'NonModifiable/translations[key]/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 KP per person`

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Cost/OneTime/Single'NonModifiable/translations[key]/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Cost/OneTime/Single'Indefinite"></a> `Cost/OneTime/Single'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/OneTime/Single'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cost/OneTime/Single'Indefinite/translations">See details</a>

#### <a name="Cost/OneTime/Single'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="Cost/OneTime/Single'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cost/OneTime/Single'Indefinite/translations[key]">Cost/OneTime/Single'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Cost/OneTime/Single'Indefinite/translations[key]"></a> `Cost/OneTime/Single'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of where the cost come from. | <a href="#Cost/OneTime/Single'Indefinite/translations[key]/description">See details</a>

#### <a name="Cost/OneTime/Single'Indefinite/translations[key]/description"></a> `description`

A description of where the cost come from.

- **Type:** <a href="#Cost/OneTime/Single'Indefinite/translations[key]/description">Object</a>

---

### <a name="Cost/OneTime/Single'Indefinite/translations[key]/description"></a> `Cost/OneTime/Single'Indefinite/translations[key]/description`

A description of where the cost come from.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of where the cost come from. | <a href="#Cost/OneTime/Single'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of where the cost come from for use in small areas (e.g. on character sheet). | <a href="#Cost/OneTime/Single'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="Cost/OneTime/Single'Indefinite/translations[key]/description/default"></a> `default`

The full description of where the cost come from.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Cost/OneTime/Single'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of where the cost come from for use in small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Cost/OneTime/Map"></a> `Cost/OneTime/Map`

A content that is `2/4/8/16 AE for an item the size of a cup/chest/door/castle gate` may be respresented as the following map:

```yaml options:   - value: 2     label: "cup"   - value: 4     label: "chest"   - value: 8     label: "door"   - value: 16     label: "castle gate" for_append: "an item the size of a" ```

This will generate the exact same string as seen above – given it is set for a spellwork and thus `AE` is used.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#Cost/OneTime/Map/options">See details</a>
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#Cost/OneTime/Map/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#Cost/OneTime/Map/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#Cost/OneTime/Map/replacement">See details</a>

#### <a name="Cost/OneTime/Map/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#Cost/OneTime/Map/options[]">Cost/OneTime/Map/options[]</a>
- **Minimum Items:** `2`

#### <a name="Cost/OneTime/Map/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** String

#### <a name="Cost/OneTime/Map/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** String

#### <a name="Cost/OneTime/Map/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players.

- **Type:** String

---

### <a name="Cost/OneTime/Map/options[]"></a> `Cost/OneTime/Map/options[]`

- **Type:** <a href="#Cost/OneTime/MapOption">Cost/OneTime/MapOption</a>

---

### <a name="Cost/OneTime/MapOption"></a> `Cost/OneTime/MapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The full cost value for this option. | <a href="#Cost/OneTime/MapOption/value">See details</a>
`permanent?` | The part of the `value` that has to be paid permanently. | <a href="#Cost/OneTime/MapOption/permanent">See details</a>
`label` | The description of the option for cost string generation. | <a href="#Cost/OneTime/MapOption/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#Cost/OneTime/MapOption/label_standalone">See details</a>

#### <a name="Cost/OneTime/MapOption/value"></a> `value`

The full cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Cost/OneTime/MapOption/permanent"></a> `permanent?`

The part of the `value` that has to be paid permanently.

- **Type:** Integer
- **Minimum:** `0`

#### <a name="Cost/OneTime/MapOption/label"></a> `label`

The description of the option for cost string generation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Cost/OneTime/MapOption/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if different from `label`.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Cost/Sustained/T"></a> `Cost/Sustained/T`

- **Type:** Union
- **Cases:** <a href="#Cost/Sustained/T'Modifiable">Cost/Sustained/T'Modifiable</a> | <a href="#Cost/Sustained/T'NonModifiable">Cost/Sustained/T'NonModifiable</a>

---

### <a name="Cost/Sustained/T'Modifiable"></a> `Cost/Sustained/T'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/Sustained/T'Modifiable/tag">See details</a>
`modification_id` | The skill modification increment identifier/level. | <a href="#Cost/Sustained/T'Modifiable/modification_id">See details</a>

#### <a name="Cost/Sustained/T'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="Cost/Sustained/T'Modifiable/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="Cost/Sustained/T'NonModifiable"></a> `Cost/Sustained/T'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Cost/Sustained/T'NonModifiable/tag">See details</a>
`minimum?` | A minimum cost value. It may be rendered relative to the actual cost `value` and cost interval or may be an absolute value, affecting the sum of the initial cost and the cost per interval. | <a href="#Cost/Sustained/T'NonModifiable/minimum">See details</a>
`value` |  | <a href="#Cost/Sustained/T'NonModifiable/value">See details</a>

#### <a name="Cost/Sustained/T'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="Cost/Sustained/T'NonModifiable/minimum"></a> `minimum?`

A minimum cost value. It may be rendered relative to the actual cost `value` and cost interval or may be an absolute value, affecting the sum of the initial cost and the cost per interval.

- **Type:** <a href="#Cost/Minimum">Cost/Minimum</a>

#### <a name="Cost/Sustained/T'NonModifiable/value"></a> `value`

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Range/T"></a> `Range/T`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#Range/T/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Range/T/translations">See details</a>

#### <a name="Range/T/value"></a> `value`

- **Type:** <a href="#Range/RangeValue">Range/RangeValue</a>

#### <a name="Range/T/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Range/T/translations[key]">Range/T/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Range/T/translations[key]"></a> `Range/T/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#Range/T/translations[key]/note">See details</a>

#### <a name="Range/T/translations[key]/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Range/RangeValue"></a> `Range/RangeValue`

- **Type:** Union
- **Cases:** <a href="#Range/RangeValue'Modifiable">Range/RangeValue'Modifiable</a> | <a href="#Range/RangeValue'Sight">Range/RangeValue'Sight</a> | <a href="#Range/RangeValue'Self">Range/RangeValue'Self</a> | <a href="#Range/RangeValue'Global">Range/RangeValue'Global</a> | <a href="#Range/RangeValue'Constant">Range/RangeValue'Constant</a> | <a href="#Range/RangeValue'MultipliedQualityLevel">Range/RangeValue'MultipliedQualityLevel</a>

---

### <a name="Range/RangeValue'Modifiable"></a> `Range/RangeValue'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Range/RangeValue'Modifiable/tag">See details</a>
`modification_id` | The skill modification increment identifier/level. | <a href="#Range/RangeValue'Modifiable/modification_id">See details</a>
`is_modifiable` | Is the casting time modifiable? | <a href="#Range/RangeValue'Modifiable/is_modifiable">See details</a>

#### <a name="Range/RangeValue'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="Range/RangeValue'Modifiable/modification_id"></a> `modification_id`

The skill modification increment identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="Range/RangeValue'Modifiable/is_modifiable"></a> `is_modifiable`

Is the casting time modifiable?

- **Type:** Boolean

---

### <a name="Range/RangeValue'Sight"></a> `Range/RangeValue'Sight`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Range/RangeValue'Sight/tag">See details</a>

#### <a name="Range/RangeValue'Sight/tag"></a> `tag`

- **Constant:** `"Sight"`

---

### <a name="Range/RangeValue'Self"></a> `Range/RangeValue'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Range/RangeValue'Self/tag">See details</a>

#### <a name="Range/RangeValue'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="Range/RangeValue'Global"></a> `Range/RangeValue'Global`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` | German: *dereumfassend* | <a href="#Range/RangeValue'Global/tag">See details</a>

#### <a name="Range/RangeValue'Global/tag"></a> `tag`

German: *dereumfassend*

- **Constant:** `"Global"`

---

### <a name="Range/RangeValue'Constant"></a> `Range/RangeValue'Constant`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Range/RangeValue'Constant/tag">See details</a>
`value` | The (unitless) range value. | <a href="#Range/RangeValue'Constant/value">See details</a>
`unit` | The unit of the `value`. | <a href="#Range/RangeValue'Constant/unit">See details</a>

#### <a name="Range/RangeValue'Constant/tag"></a> `tag`

- **Constant:** `"Constant"`

#### <a name="Range/RangeValue'Constant/value"></a> `value`

The (unitless) range value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Range/RangeValue'Constant/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#Range/Unit">Range/Unit</a>

---

### <a name="Range/RangeValue'MultipliedQualityLevel"></a> `Range/RangeValue'MultipliedQualityLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Range/RangeValue'MultipliedQualityLevel/tag">See details</a>
`multiplier` | The value that multiplies the quality level to form the final (unitless) range value. | <a href="#Range/RangeValue'MultipliedQualityLevel/multiplier">See details</a>
`unit` | The unit of the value resulting from multiplying the quality level with the `multiplier`. | <a href="#Range/RangeValue'MultipliedQualityLevel/unit">See details</a>

#### <a name="Range/RangeValue'MultipliedQualityLevel/tag"></a> `tag`

- **Constant:** `"MultipliedQualityLevel"`

#### <a name="Range/RangeValue'MultipliedQualityLevel/multiplier"></a> `multiplier`

The value that multiplies the quality level to form the final (unitless) range value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Range/RangeValue'MultipliedQualityLevel/unit"></a> `unit`

The unit of the value resulting from multiplying the quality level with the `multiplier`.

- **Type:** <a href="#Range/Unit">Range/Unit</a>

---

### <a name="Range/Unit"></a> `Range/Unit`

- **Possible values:** `"Steps"`, `"Miles"`

---

### <a name="Duration/OneTime/T"></a> `Duration/OneTime/T`

- **Type:** Union
- **Cases:** <a href="#Duration/OneTime/T'Immediate">Duration/OneTime/T'Immediate</a> | <a href="#Duration/OneTime/T'Permanent">Duration/OneTime/T'Permanent</a> | <a href="#Duration/OneTime/T'Numeric">Duration/OneTime/T'Numeric</a> | <a href="#Duration/OneTime/T'Indefinite">Duration/OneTime/T'Indefinite</a>

---

### <a name="Duration/OneTime/T'Immediate"></a> `Duration/OneTime/T'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/OneTime/T'Immediate/tag">See details</a>
`maximum?` | Specified if the duration has a maximum time span. | <a href="#Duration/OneTime/T'Immediate/maximum">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Duration/OneTime/T'Immediate/translations">See details</a>

#### <a name="Duration/OneTime/T'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

#### <a name="Duration/OneTime/T'Immediate/maximum"></a> `maximum?`

Specified if the duration has a maximum time span.

- **Type:** <a href="#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="Duration/OneTime/T'Immediate/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Duration/OneTime/T'Immediate/translations[key]">Duration/OneTime/T'Immediate/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Duration/OneTime/T'Immediate/translations[key]"></a> `Duration/OneTime/T'Immediate/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#Duration/OneTime/T'Immediate/translations[key]/replacement">See details</a>

#### <a name="Duration/OneTime/T'Immediate/translations[key]/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="#Duration/OneTime/T'Immediate/translations[key]/replacement">Object</a>

---

### <a name="Duration/OneTime/T'Immediate/translations[key]/replacement"></a> `Duration/OneTime/T'Immediate/translations[key]/replacement`

A replacement string.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Immediate/translations[key]/replacement/default">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Immediate/translations[key]/replacement/compressed">See details</a>

#### <a name="Duration/OneTime/T'Immediate/translations[key]/replacement/default"></a> `default`

The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

#### <a name="Duration/OneTime/T'Immediate/translations[key]/replacement/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

---

### <a name="Duration/OneTime/T'Permanent"></a> `Duration/OneTime/T'Permanent`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/OneTime/T'Permanent/tag">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Duration/OneTime/T'Permanent/translations">See details</a>

#### <a name="Duration/OneTime/T'Permanent/tag"></a> `tag`

- **Constant:** `"Permanent"`

#### <a name="Duration/OneTime/T'Permanent/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Duration/OneTime/T'Permanent/translations[key]">Duration/OneTime/T'Permanent/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Duration/OneTime/T'Permanent/translations[key]"></a> `Duration/OneTime/T'Permanent/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#Duration/OneTime/T'Permanent/translations[key]/replacement">See details</a>

#### <a name="Duration/OneTime/T'Permanent/translations[key]/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="#Duration/OneTime/T'Permanent/translations[key]/replacement">Object</a>

---

### <a name="Duration/OneTime/T'Permanent/translations[key]/replacement"></a> `Duration/OneTime/T'Permanent/translations[key]/replacement`

A replacement string.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Permanent/translations[key]/replacement/default">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Permanent/translations[key]/replacement/compressed">See details</a>

#### <a name="Duration/OneTime/T'Permanent/translations[key]/replacement/default"></a> `default`

The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

#### <a name="Duration/OneTime/T'Permanent/translations[key]/replacement/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

---

### <a name="Duration/OneTime/T'Numeric"></a> `Duration/OneTime/T'Numeric`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/OneTime/T'Numeric/tag">See details</a>
`value` | The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output. | <a href="#Duration/OneTime/T'Numeric/value">See details</a>
`check_result?` | If defined, the check result affects the duration in the defined way. | <a href="#Duration/OneTime/T'Numeric/check_result">See details</a>
`is_maximum?` | Is the duration indefinite, but has a maximum time span? | <a href="#Duration/OneTime/T'Numeric/is_maximum">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Duration/OneTime/T'Numeric/translations">See details</a>

#### <a name="Duration/OneTime/T'Numeric/tag"></a> `tag`

- **Constant:** `"Numeric"`

#### <a name="Duration/OneTime/T'Numeric/value"></a> `value`

The duration value. If `check_result` is defined and this is `1`, it is used as the unit for the value derived from the check result in rendered text output.

- **Type:** <a href="#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="Duration/OneTime/T'Numeric/check_result"></a> `check_result?`

If defined, the check result affects the duration in the defined way.

- **Type:** <a href="#Duration/CheckResult">Duration/CheckResult</a>

#### <a name="Duration/OneTime/T'Numeric/is_maximum"></a> `is_maximum?`

Is the duration indefinite, but has a maximum time span?

- **Type:** Boolean

#### <a name="Duration/OneTime/T'Numeric/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Duration/OneTime/T'Numeric/translations[key]">Duration/OneTime/T'Numeric/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Duration/OneTime/T'Numeric/translations[key]"></a> `Duration/OneTime/T'Numeric/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string. | <a href="#Duration/OneTime/T'Numeric/translations[key]/replacement">See details</a>

#### <a name="Duration/OneTime/T'Numeric/translations[key]/replacement"></a> `replacement`

A replacement string.

- **Type:** <a href="#Duration/OneTime/T'Numeric/translations[key]/replacement">Object</a>

---

### <a name="Duration/OneTime/T'Numeric/translations[key]/replacement"></a> `Duration/OneTime/T'Numeric/translations[key]/replacement`

A replacement string.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Numeric/translations[key]/replacement/default">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values. | <a href="#Duration/OneTime/T'Numeric/translations[key]/replacement/compressed">See details</a>

#### <a name="Duration/OneTime/T'Numeric/translations[key]/replacement/default"></a> `default`

The full replacement string. It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

#### <a name="Duration/OneTime/T'Numeric/translations[key]/replacement/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated duration string, so additional information can be provided without duplicating concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

---

### <a name="Duration/OneTime/T'Indefinite"></a> `Duration/OneTime/T'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/OneTime/T'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Duration/OneTime/T'Indefinite/translations">See details</a>

#### <a name="Duration/OneTime/T'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="Duration/OneTime/T'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Duration/OneTime/T'Indefinite/translations[key]">Duration/OneTime/T'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Duration/OneTime/T'Indefinite/translations[key]"></a> `Duration/OneTime/T'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#Duration/OneTime/T'Indefinite/translations[key]/description">See details</a>

#### <a name="Duration/OneTime/T'Indefinite/translations[key]/description"></a> `description`

A description of the duration.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Duration/CheckResult"></a> `Duration/CheckResult`

Defines how the check result affects the duration in the defined way.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` |  | <a href="#Duration/CheckResult/value">See details</a>
`arithmetic` |  | <a href="#Duration/CheckResult/arithmetic">See details</a>

#### <a name="Duration/CheckResult/value"></a> `value`

- **Type:** <a href="#Duration/CheckResultValue">Duration/CheckResultValue</a>

#### <a name="Duration/CheckResult/arithmetic"></a> `arithmetic`

- **Type:** <a href="#Duration/CheckResultArithmetic">Duration/CheckResultArithmetic</a>

---

### <a name="Duration/CheckResultValue"></a> `Duration/CheckResultValue`

Defines the derived (unitless) value.

- **Type:** Union
- **Cases:** <a href="#Duration/CheckResultValue'QualityLevels">Duration/CheckResultValue'QualityLevels</a> | <a href="#Duration/CheckResultValue'SkillPoints">Duration/CheckResultValue'SkillPoints</a>

---

### <a name="Duration/CheckResultValue'QualityLevels"></a> `Duration/CheckResultValue'QualityLevels`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/CheckResultValue'QualityLevels/tag">See details</a>

#### <a name="Duration/CheckResultValue'QualityLevels/tag"></a> `tag`

- **Constant:** `"QualityLevels"`

---

### <a name="Duration/CheckResultValue'SkillPoints"></a> `Duration/CheckResultValue'SkillPoints`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/CheckResultValue'SkillPoints/tag">See details</a>

#### <a name="Duration/CheckResultValue'SkillPoints/tag"></a> `tag`

- **Constant:** `"SkillPoints"`

---

### <a name="Duration/CheckResultArithmetic"></a> `Duration/CheckResultArithmetic`

Defines how the the `value` is set off against the check result.

- **Type:** Union
- **Cases:** <a href="#Duration/CheckResultArithmetic'Multiply">Duration/CheckResultArithmetic'Multiply</a> | <a href="#Duration/CheckResultArithmetic'Divide">Duration/CheckResultArithmetic'Divide</a>

---

### <a name="Duration/CheckResultArithmetic'Multiply"></a> `Duration/CheckResultArithmetic'Multiply`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/CheckResultArithmetic'Multiply/tag">See details</a>

#### <a name="Duration/CheckResultArithmetic'Multiply/tag"></a> `tag`

- **Constant:** `"Multiply"`

---

### <a name="Duration/CheckResultArithmetic'Divide"></a> `Duration/CheckResultArithmetic'Divide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Duration/CheckResultArithmetic'Divide/tag">See details</a>

#### <a name="Duration/CheckResultArithmetic'Divide/tag"></a> `tag`

- **Constant:** `"Divide"`

---

### <a name="Duration/Sustained/T"></a> `Duration/Sustained/T`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`interval` | The interval. | <a href="#Duration/Sustained/T/interval">See details</a>
`maximum?` | Specified if the sustained skill can be active a maximum amount of time. | <a href="#Duration/Sustained/T/maximum">See details</a>

#### <a name="Duration/Sustained/T/interval"></a> `interval`

The interval.

- **Type:** <a href="#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="Duration/Sustained/T/maximum"></a> `maximum?`

Specified if the sustained skill can be active a maximum amount of time.

- **Type:** <a href="#Duration/UnitValue">Duration/UnitValue</a>

---

### <a name="Duration/Unit"></a> `Duration/Unit`

- **Possible values:** `"Seconds"`, `"Minutes"`, `"Hours"`, `"Days"`, `"Weeks"`, `"Months"`, `"Years"`, `"CombatRounds"`

---

### <a name="Duration/UnitValue"></a> `Duration/UnitValue`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) duration value. | <a href="#Duration/UnitValue/value">See details</a>
`unit` | The unit of the `value`. | <a href="#Duration/UnitValue/unit">See details</a>

#### <a name="Duration/UnitValue/value"></a> `value`

The (unitless) duration value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Duration/UnitValue/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#Duration/Unit">Duration/Unit</a>

---

### <a name="TargetCategory/T"></a> `TargetCategory/T`

- **Type:** Union
- **Cases:** <a href="#TargetCategory/T'All">TargetCategory/T'All</a> | <a href="#TargetCategory/T'Specific">TargetCategory/T'Specific</a>

---

### <a name="TargetCategory/T'All"></a> `TargetCategory/T'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/T'All/tag">See details</a>

#### <a name="TargetCategory/T'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="TargetCategory/T'Specific"></a> `TargetCategory/T'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/T'Specific/tag">See details</a>
`list` |  | <a href="#TargetCategory/T'Specific/list">See details</a>

#### <a name="TargetCategory/T'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="TargetCategory/T'Specific/list"></a> `list`

- **Type:** List
- **Items:** <a href="#TargetCategory/T'Specific/list[]">TargetCategory/T'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="TargetCategory/T'Specific/list[]"></a> `TargetCategory/T'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#TargetCategory/T'Specific/list[]/id">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#TargetCategory/T'Specific/list[]/translations">See details</a>

#### <a name="TargetCategory/T'Specific/list[]/id"></a> `id`

- **Type:** <a href="#TargetCategory/Identifier">TargetCategory/Identifier</a>

#### <a name="TargetCategory/T'Specific/list[]/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#TargetCategory/T'Specific/list[]/translations[key]">TargetCategory/T'Specific/list[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="TargetCategory/T'Specific/list[]/translations[key]"></a> `TargetCategory/T'Specific/list[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`note` | A note, appended to the generated string in parenthesis. | <a href="#TargetCategory/T'Specific/list[]/translations[key]/note">See details</a>

#### <a name="TargetCategory/T'Specific/list[]/translations[key]/note"></a> `note`

A note, appended to the generated string in parenthesis.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="TargetCategory/Identifier"></a> `TargetCategory/Identifier`

- **Type:** Union
- **Cases:** <a href="#TargetCategory/Identifier'Self">TargetCategory/Identifier'Self</a> | <a href="#TargetCategory/Identifier'Zone">TargetCategory/Identifier'Zone</a> | <a href="#TargetCategory/Identifier'LiturgicalChantsAndCeremonies">TargetCategory/Identifier'LiturgicalChantsAndCeremonies</a> | <a href="#TargetCategory/Identifier'Predefined">TargetCategory/Identifier'Predefined</a>

---

### <a name="TargetCategory/Identifier'Self"></a> `TargetCategory/Identifier'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/Identifier'Self/tag">See details</a>

#### <a name="TargetCategory/Identifier'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="TargetCategory/Identifier'Zone"></a> `TargetCategory/Identifier'Zone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/Identifier'Zone/tag">See details</a>

#### <a name="TargetCategory/Identifier'Zone/tag"></a> `tag`

- **Constant:** `"Zone"`

---

### <a name="TargetCategory/Identifier'LiturgicalChantsAndCeremonies"></a> `TargetCategory/Identifier'LiturgicalChantsAndCeremonies`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/Identifier'LiturgicalChantsAndCeremonies/tag">See details</a>

#### <a name="TargetCategory/Identifier'LiturgicalChantsAndCeremonies/tag"></a> `tag`

- **Constant:** `"LiturgicalChantsAndCeremonies"`

---

### <a name="TargetCategory/Identifier'Predefined"></a> `TargetCategory/Identifier'Predefined`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#TargetCategory/Identifier'Predefined/tag">See details</a>
`id` | The target category reference identifier. | <a href="#TargetCategory/Identifier'Predefined/id">See details</a>

#### <a name="TargetCategory/Identifier'Predefined/tag"></a> `tag`

- **Constant:** `"Predefined"`

#### <a name="TargetCategory/Identifier'Predefined/id"></a> `id`

The target category reference identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `24`
