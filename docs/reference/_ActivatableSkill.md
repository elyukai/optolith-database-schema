# Activatable Skill

## Definitions

### <a name="FastPerformanceParameters"></a> `FastPerformanceParameters`

- **Type:** Union
- **Cases:** <a href="#FastPerformanceParameters'OneTime">FastPerformanceParameters'OneTime</a> | <a href="#FastPerformanceParameters'Sustained">FastPerformanceParameters'Sustained</a>

---

### <a name="FastPerformanceParameters'OneTime"></a> `FastPerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FastPerformanceParameters'OneTime/tag">See details</a>
`one_time` |  | <a href="#FastPerformanceParameters'OneTime/one_time">See details</a>

#### <a name="FastPerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="FastPerformanceParameters'OneTime/one_time"></a> `one_time`

- **Type:** <a href="#FastOneTimePerformanceParameters">FastOneTimePerformanceParameters</a>

---

### <a name="FastPerformanceParameters'Sustained"></a> `FastPerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#FastPerformanceParameters'Sustained/tag">See details</a>
`sustained` |  | <a href="#FastPerformanceParameters'Sustained/sustained">See details</a>

#### <a name="FastPerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="FastPerformanceParameters'Sustained/sustained"></a> `sustained`

- **Type:** <a href="#FastSustainedPerformanceParameters">FastSustainedPerformanceParameters</a>

---

### <a name="FastOneTimePerformanceParameters"></a> `FastOneTimePerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#FastOneTimePerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#FastOneTimePerformanceParameters/cost">See details</a>
`range` |  | <a href="#FastOneTimePerformanceParameters/range">See details</a>
`duration` |  | <a href="#FastOneTimePerformanceParameters/duration">See details</a>

#### <a name="FastOneTimePerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkillCastingTime.md#FastCastingTime">FastCastingTime</a>

#### <a name="FastOneTimePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#OneTimeCost">OneTimeCost</a>

#### <a name="FastOneTimePerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="FastOneTimePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForOneTime">DurationForOneTime</a>

---

### <a name="FastSustainedPerformanceParameters"></a> `FastSustainedPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#FastSustainedPerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#FastSustainedPerformanceParameters/cost">See details</a>
`range` |  | <a href="#FastSustainedPerformanceParameters/range">See details</a>
`duration?` |  | <a href="#FastSustainedPerformanceParameters/duration">See details</a>

#### <a name="FastSustainedPerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkillCastingTime.md#FastCastingTime">FastCastingTime</a>

#### <a name="FastSustainedPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#SustainedCost">SustainedCost</a>

#### <a name="FastSustainedPerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="FastSustainedPerformanceParameters/duration"></a> `duration?`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForSustained">DurationForSustained</a>

---

### <a name="SlowPerformanceParameters"></a> `SlowPerformanceParameters`

- **Type:** Union
- **Cases:** <a href="#SlowPerformanceParameters'OneTime">SlowPerformanceParameters'OneTime</a> | <a href="#SlowPerformanceParameters'Sustained">SlowPerformanceParameters'Sustained</a>

---

### <a name="SlowPerformanceParameters'OneTime"></a> `SlowPerformanceParameters'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SlowPerformanceParameters'OneTime/tag">See details</a>
`one_time` |  | <a href="#SlowPerformanceParameters'OneTime/one_time">See details</a>

#### <a name="SlowPerformanceParameters'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

#### <a name="SlowPerformanceParameters'OneTime/one_time"></a> `one_time`

- **Type:** <a href="#SlowOneTimePerformanceParameters">SlowOneTimePerformanceParameters</a>

---

### <a name="SlowPerformanceParameters'Sustained"></a> `SlowPerformanceParameters'Sustained`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SlowPerformanceParameters'Sustained/tag">See details</a>
`sustained` |  | <a href="#SlowPerformanceParameters'Sustained/sustained">See details</a>

#### <a name="SlowPerformanceParameters'Sustained/tag"></a> `tag`

- **Constant:** `"Sustained"`

#### <a name="SlowPerformanceParameters'Sustained/sustained"></a> `sustained`

- **Type:** <a href="#SlowSustainedPerformanceParameters">SlowSustainedPerformanceParameters</a>

---

### <a name="SlowOneTimePerformanceParameters"></a> `SlowOneTimePerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#SlowOneTimePerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#SlowOneTimePerformanceParameters/cost">See details</a>
`range` |  | <a href="#SlowOneTimePerformanceParameters/range">See details</a>
`duration` |  | <a href="#SlowOneTimePerformanceParameters/duration">See details</a>

#### <a name="SlowOneTimePerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkillCastingTime.md#SlowCastingTime">SlowCastingTime</a>

#### <a name="SlowOneTimePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#OneTimeCost">OneTimeCost</a>

#### <a name="SlowOneTimePerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="SlowOneTimePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForOneTime">DurationForOneTime</a>

---

### <a name="SlowSustainedPerformanceParameters"></a> `SlowSustainedPerformanceParameters`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#SlowSustainedPerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#SlowSustainedPerformanceParameters/cost">See details</a>
`range` |  | <a href="#SlowSustainedPerformanceParameters/range">See details</a>
`duration?` |  | <a href="#SlowSustainedPerformanceParameters/duration">See details</a>

#### <a name="SlowSustainedPerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="./_ActivatableSkillCastingTime.md#SlowCastingTime">SlowCastingTime</a>

#### <a name="SlowSustainedPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#SustainedCost">SustainedCost</a>

#### <a name="SlowSustainedPerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="SlowSustainedPerformanceParameters/duration"></a> `duration?`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForSustained">DurationForSustained</a>
