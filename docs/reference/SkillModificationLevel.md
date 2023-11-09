# Skill Modification Level

## Definitions

### <a name="SkillModificationLevel"></a> Skill Modification Level (`SkillModificationLevel`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill modification level's identifier. | <a href="#SkillModificationLevel/id">See details</a>
`fast` | Configuration for this level for fast skills (spells, liturgical chants). | <a href="#SkillModificationLevel/fast">See details</a>
`slow` | Configuration for this level for slow skills (rituals, ceremonies). | <a href="#SkillModificationLevel/slow">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillModificationLevel/translations">See details</a>

#### <a name="SkillModificationLevel/id"></a> `id`

The skill modification level's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="SkillModificationLevel/fast"></a> `fast`

Configuration for this level for fast skills (spells, liturgical chants).

- **Type:** <a href="#FastSkillModificationLevelConfig">FastSkillModificationLevelConfig</a>

#### <a name="SkillModificationLevel/slow"></a> `slow`

Configuration for this level for slow skills (rituals, ceremonies).

- **Type:** <a href="#SlowSkillModificationLevelConfig">SlowSkillModificationLevelConfig</a>

#### <a name="SkillModificationLevel/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#SkillModificationLevelTranslation">SkillModificationLevelTranslation</a>&gt;

---

### <a name="FastSkillModificationLevelConfig"></a> `FastSkillModificationLevelConfig`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time in actions. | <a href="#FastSkillModificationLevelConfig/casting_time">See details</a>
`range` | The range in meters. | <a href="#FastSkillModificationLevelConfig/range">See details</a>
`cost` | The cost in AE/KP. | <a href="#FastSkillModificationLevelConfig/cost">See details</a>

#### <a name="FastSkillModificationLevelConfig/casting_time"></a> `casting_time`

The casting time in actions.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FastSkillModificationLevelConfig/range"></a> `range`

The range in meters.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FastSkillModificationLevelConfig/cost"></a> `cost`

The cost in AE/KP.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SlowSkillModificationLevelConfig"></a> `SlowSkillModificationLevelConfig`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#SlowSkillModificationLevelConfig/casting_time">See details</a>
`range` | The range in meters. | <a href="#SlowSkillModificationLevelConfig/range">See details</a>
`cost` | The cost in AE/KP. | <a href="#SlowSkillModificationLevelConfig/cost">See details</a>

#### <a name="SlowSkillModificationLevelConfig/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#SlowSkillCastingTime">SlowSkillCastingTime</a>

#### <a name="SlowSkillModificationLevelConfig/range"></a> `range`

The range in meters.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SlowSkillModificationLevelConfig/cost"></a> `cost`

The cost in AE/KP.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SlowSkillCastingTime"></a> `SlowSkillCastingTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time. | <a href="#SlowSkillCastingTime/value">See details</a>
`unit` | The unit for the `value`. | <a href="#SlowSkillCastingTime/unit">See details</a>

#### <a name="SlowSkillCastingTime/value"></a> `value`

The (unitless) casting time.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SlowSkillCastingTime/unit"></a> `unit`

The unit for the `value`.

- **Type:** <a href="#SlowSkillCastingTimeUnit">SlowSkillCastingTimeUnit</a>

---

### <a name="SlowSkillCastingTimeUnit"></a> `SlowSkillCastingTimeUnit`

- **Type:** Union
- **Cases:** <a href="#SlowSkillCastingTimeUnit'0">SlowSkillCastingTimeUnit'0</a> | <a href="#SlowSkillCastingTimeUnit'1">SlowSkillCastingTimeUnit'1</a>

---

### <a name="SlowSkillCastingTimeUnit'0"></a> `SlowSkillCastingTimeUnit'0`

- **Constant:** `"Minutes"`

---

### <a name="SlowSkillCastingTimeUnit'1"></a> `SlowSkillCastingTimeUnit'1`

- **Constant:** `"Hours"`

---

### <a name="SkillModificationLevelTranslation"></a> `SkillModificationLevelTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`fast?` | Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text. | <a href="#SkillModificationLevelTranslation/fast">See details</a>
`slow?` | Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text. | <a href="#SkillModificationLevelTranslation/slow">See details</a>

#### <a name="SkillModificationLevelTranslation/fast"></a> `fast?`

Configuration for this level for fast skills (spells, liturgical chants).
Values set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

#### <a name="SkillModificationLevelTranslation/slow"></a> `slow?`

Configuration for this level for slow skills (rituals, ceremonies). Values
set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

---

### <a name="LevelTypeConfigTranslation"></a> `LevelTypeConfigTranslation`

Configuration translation of a type for a level. Values set here override the
default generated text.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#LevelTypeConfigTranslation/range">See details</a>

#### <a name="LevelTypeConfigTranslation/range"></a> `range`

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
