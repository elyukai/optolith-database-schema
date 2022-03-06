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

- **Type:** <a href="#SkillModificationLevel/fast">Object</a>

#### <a name="SkillModificationLevel/slow"></a> `slow`

Configuration for this level for slow skills (rituals, ceremonies).

- **Type:** <a href="#SkillModificationLevel/slow">Object</a>

#### <a name="SkillModificationLevel/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillModificationLevel/translations[key]">SkillModificationLevel/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillModificationLevel/fast"></a> `SkillModificationLevel/fast`

Configuration for this level for fast skills (spells, liturgical chants).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time in actions. | <a href="#SkillModificationLevel/fast/casting_time">See details</a>
`range` | The range in meters. | <a href="#SkillModificationLevel/fast/range">See details</a>
`cost` | The cost in AE/KP. | <a href="#SkillModificationLevel/fast/cost">See details</a>

#### <a name="SkillModificationLevel/fast/casting_time"></a> `casting_time`

The casting time in actions.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillModificationLevel/fast/range"></a> `range`

The range in meters.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillModificationLevel/fast/cost"></a> `cost`

The cost in AE/KP.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillModificationLevel/slow"></a> `SkillModificationLevel/slow`

Configuration for this level for slow skills (rituals, ceremonies).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | The casting time. | <a href="#SkillModificationLevel/slow/casting_time">See details</a>
`range` | The range in meters. | <a href="#SkillModificationLevel/slow/range">See details</a>
`cost` | The cost in AE/KP. | <a href="#SkillModificationLevel/slow/cost">See details</a>

#### <a name="SkillModificationLevel/slow/casting_time"></a> `casting_time`

The casting time.

- **Type:** <a href="#SkillModificationLevel/slow/casting_time">Object</a>

#### <a name="SkillModificationLevel/slow/range"></a> `range`

The range in meters.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillModificationLevel/slow/cost"></a> `cost`

The cost in AE/KP.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillModificationLevel/slow/casting_time"></a> `SkillModificationLevel/slow/casting_time`

The casting time.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (unitless) casting time. | <a href="#SkillModificationLevel/slow/casting_time/value">See details</a>
`unit` | The unit for the `value`. | <a href="#SkillModificationLevel/slow/casting_time/unit">See details</a>

#### <a name="SkillModificationLevel/slow/casting_time/value"></a> `value`

The (unitless) casting time.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillModificationLevel/slow/casting_time/unit"></a> `unit`

The unit for the `value`.

- **Type:** <a href="#SlowSkillCastingTimeUnit">SlowSkillCastingTimeUnit</a>

---

### <a name="SkillModificationLevel/translations[key]"></a> `SkillModificationLevel/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`fast?` | Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text. | <a href="#SkillModificationLevel/translations[key]/fast">See details</a>
`slow?` | Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text. | <a href="#SkillModificationLevel/translations[key]/slow">See details</a>

#### <a name="SkillModificationLevel/translations[key]/fast"></a> `fast?`

Configuration for this level for fast skills (spells, liturgical chants).
Values set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

#### <a name="SkillModificationLevel/translations[key]/slow"></a> `slow?`

Configuration for this level for slow skills (rituals, ceremonies). Values
set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

---

### <a name="SlowSkillCastingTimeUnit"></a> `SlowSkillCastingTimeUnit`

- **Possible values:** `"Minutes"`, `"Hours"`

---

### <a name="LevelTypeConfigTranslation"></a> `LevelTypeConfigTranslation`

Configuration translation of a type for a level. Values set here override the
default generated text.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#LevelTypeConfigTranslation/range">See details</a>

#### <a name="LevelTypeConfigTranslation/range"></a> `range`

- **Type:** String
- **Minimum Length:** `1`
