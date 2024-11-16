# Activatable Skill

## Definitions

### <a name="OneTimePerformanceParameters"></a> `OneTimePerformanceParameters<CastingTime>`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#OneTimePerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#OneTimePerformanceParameters/cost">See details</a>
`range` |  | <a href="#OneTimePerformanceParameters/range">See details</a>
`duration` |  | <a href="#OneTimePerformanceParameters/duration">See details</a>

#### <a name="OneTimePerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="#CastingTime">CastingTime</a>

#### <a name="OneTimePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#OneTimeCost">OneTimeCost</a>

#### <a name="OneTimePerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="OneTimePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForOneTime">DurationForOneTime</a>

---

### <a name="SustainedPerformanceParameters"></a> `SustainedPerformanceParameters<CastingTime>`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` |  | <a href="#SustainedPerformanceParameters/casting_time">See details</a>
`cost` |  | <a href="#SustainedPerformanceParameters/cost">See details</a>
`range` |  | <a href="#SustainedPerformanceParameters/range">See details</a>
`duration?` |  | <a href="#SustainedPerformanceParameters/duration">See details</a>

#### <a name="SustainedPerformanceParameters/casting_time"></a> `casting_time`

- **Type:** <a href="#CastingTime">CastingTime</a>

#### <a name="SustainedPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="./_ActivatableSkillCost.md#SustainedCost">SustainedCost</a>

#### <a name="SustainedPerformanceParameters/range"></a> `range`

- **Type:** <a href="./_ActivatableSkillRange.md#Range">Range</a>

#### <a name="SustainedPerformanceParameters/duration"></a> `duration?`

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationForSustained">DurationForSustained</a>

---

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

- **Type:** <a href="#OneTimePerformanceParameters">OneTimePerformanceParameters</a>&lt;<a href="./_ActivatableSkillCastingTime.md#FastCastingTime">FastCastingTime</a>&gt;

---

### <a name="FastSustainedPerformanceParameters"></a> `FastSustainedPerformanceParameters`

- **Type:** <a href="#SustainedPerformanceParameters">SustainedPerformanceParameters</a>&lt;<a href="./_ActivatableSkillCastingTime.md#FastCastingTime">FastCastingTime</a>&gt;

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

- **Type:** <a href="#OneTimePerformanceParameters">OneTimePerformanceParameters</a>&lt;<a href="./_ActivatableSkillCastingTime.md#SlowCastingTime">SlowCastingTime</a>&gt;

---

### <a name="SlowSustainedPerformanceParameters"></a> `SlowSustainedPerformanceParameters`

- **Type:** <a href="#SustainedPerformanceParameters">SustainedPerformanceParameters</a>&lt;<a href="./_ActivatableSkillCastingTime.md#SlowCastingTime">SlowCastingTime</a>&gt;

---

### <a name="OldParameter"></a> `OldParameter`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#OldParameter/full">See details</a>
`abbr` |  | <a href="#OldParameter/abbr">See details</a>

#### <a name="OldParameter/full"></a> `full`

- **Type:** String

#### <a name="OldParameter/abbr"></a> `abbr`

- **Type:** String
