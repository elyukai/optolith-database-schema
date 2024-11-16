# [TITLE MISSING]

## Definitions

### <a name="CastingTime"></a> `CastingTime<NonModifiable extends Object>`

- **Type:** Union
- **Cases:** <a href="#CastingTime'Modifiable">CastingTime'Modifiable</a> | <a href="#CastingTime'NonModifiable">CastingTime'NonModifiable</a>

---

### <a name="CastingTime'Modifiable"></a> `CastingTime'Modifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CastingTime'Modifiable/tag">See details</a>
`modifiable` |  | <a href="#CastingTime'Modifiable/modifiable">See details</a>

#### <a name="CastingTime'Modifiable/tag"></a> `tag`

- **Constant:** `"Modifiable"`

#### <a name="CastingTime'Modifiable/modifiable"></a> `modifiable`

- **Type:** <a href="#ModifiableCastingTime">ModifiableCastingTime</a>

---

### <a name="CastingTime'NonModifiable"></a> `CastingTime'NonModifiable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CastingTime'NonModifiable/tag">See details</a>
`non_modifiable` |  | <a href="#CastingTime'NonModifiable/non_modifiable">See details</a>

#### <a name="CastingTime'NonModifiable/tag"></a> `tag`

- **Constant:** `"NonModifiable"`

#### <a name="CastingTime'NonModifiable/non_modifiable"></a> `non_modifiable`

- **Type:** <a href="#NonModifiable">NonModifiable</a>

---

### <a name="ModifiableCastingTime"></a> `ModifiableCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`initial_modification_level` | The initial skill modification identifier/level. | <a href="#ModifiableCastingTime/initial_modification_level">See details</a>

#### <a name="ModifiableCastingTime/initial_modification_level"></a> `initial_modification_level`

The initial skill modification identifier/level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

---

### <a name="CastingTimeIncludingLovemaking"></a> `CastingTimeIncludingLovemaking<NonModifiable extends Object>`

The casting time may have two different values: One for use in “normal” time, i. e. actions, combat rounds and others, and one for use during lovemaking, which is a rule set from Aventurian Intimacy.

There must always be at least one casting time value.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`default?` | The default casting time definition. | <a href="#CastingTimeIncludingLovemaking/default">See details</a>
`during_lovemaking?` | The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking. | <a href="#CastingTimeIncludingLovemaking/during_lovemaking">See details</a>

#### <a name="CastingTimeIncludingLovemaking/default"></a> `default?`

The default casting time definition.

- **Type:** <a href="#CastingTime">CastingTime</a>&lt;<a href="#NonModifiable">NonModifiable</a>&gt;

#### <a name="CastingTimeIncludingLovemaking/during_lovemaking"></a> `during_lovemaking?`

The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.

- **Type:** <a href="#CastingTimeDuringLovemaking">CastingTimeDuringLovemaking</a>

---

### <a name="CastingTimeDuringLovemaking"></a> `CastingTimeDuringLovemaking`

The casting time during lovemaking. In Aventurian Intimacy, you may only use an activatable skill during lovemaking if it has a casting time used during lovemaking.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time value. | <a href="#CastingTimeDuringLovemaking/value">See details</a>
`unit` | The unit of the `value`. | <a href="#CastingTimeDuringLovemaking/unit">See details</a>

#### <a name="CastingTimeDuringLovemaking/value"></a> `value`

The (unitless) casting time value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="CastingTimeDuringLovemaking/unit"></a> `unit`

The unit of the `value`.

- **Type:** <a href="#CastingTimeDuringLovemakingUnit">CastingTimeDuringLovemakingUnit</a>

---

### <a name="CastingTimeDuringLovemakingUnit"></a> `CastingTimeDuringLovemakingUnit`

- **Type:** Union
- **Cases:** <a href="#CastingTimeDuringLovemakingUnit'0">CastingTimeDuringLovemakingUnit'0</a> | <a href="#CastingTimeDuringLovemakingUnit'1">CastingTimeDuringLovemakingUnit'1</a>

---

### <a name="CastingTimeDuringLovemakingUnit'0"></a> `CastingTimeDuringLovemakingUnit'0`

- **Constant:** `"SeductionActions"`

---

### <a name="CastingTimeDuringLovemakingUnit'1"></a> `CastingTimeDuringLovemakingUnit'1`

- **Constant:** `"Rounds"`

---

### <a name="FastSkillNonModifiableCastingTime"></a> `FastSkillNonModifiableCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`actions` | The casting time value in actions. | <a href="#FastSkillNonModifiableCastingTime/actions">See details</a>

#### <a name="FastSkillNonModifiableCastingTime/actions"></a> `actions`

The casting time value in actions.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SlowSkillNonModifiableCastingTime"></a> `SlowSkillNonModifiableCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time value. | <a href="#SlowSkillNonModifiableCastingTime/value">See details</a>
`unit` |  | <a href="#SlowSkillNonModifiableCastingTime/unit">See details</a>

#### <a name="SlowSkillNonModifiableCastingTime/value"></a> `value`

The (unitless) casting time value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SlowSkillNonModifiableCastingTime/unit"></a> `unit`

- **Type:** <a href="./SkillModificationLevel.md#SlowSkillCastingTimeUnit">SlowSkillCastingTimeUnit</a>

---

### <a name="FastCastingTime"></a> `FastCastingTime`

- **Type:** <a href="#CastingTimeIncludingLovemaking">CastingTimeIncludingLovemaking</a>&lt;<a href="#FastSkillNonModifiableCastingTime">FastSkillNonModifiableCastingTime</a>&gt;

---

### <a name="SlowCastingTime"></a> `SlowCastingTime`

- **Type:** <a href="#CastingTimeIncludingLovemaking">CastingTimeIncludingLovemaking</a>&lt;<a href="#SlowSkillNonModifiableCastingTime">SlowSkillNonModifiableCastingTime</a>&gt;
