# Skill Modification Increment

## Definitions

### <a name="SkillModificationIncrement"></a> Skill Modification Increment (`SkillModificationIncrement`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill modification increment's identifier. It also represents the increment level. | <a href="#SkillModificationIncrement/id">See details</a>
`fast` | Configuration for this level for fast skills (spells, liturgical chants). | <a href="#SkillModificationIncrement/fast">See details</a>
`slow` | Configuration for this level for slow skills (rituals, ceremonies). | <a href="#SkillModificationIncrement/slow">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillModificationIncrement/translations">See details</a>

#### <a name="SkillModificationIncrement/id"></a> `id`

The skill modification increment's identifier. It also represents the increment level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `6`

#### <a name="SkillModificationIncrement/fast"></a> `fast`

Configuration for this level for fast skills (spells, liturgical chants).

- **Type:** <a href="#LevelTypeConfig">LevelTypeConfig</a>

#### <a name="SkillModificationIncrement/slow"></a> `slow`

Configuration for this level for slow skills (rituals, ceremonies).

- **Type:** <a href="#LevelTypeConfig">LevelTypeConfig</a>

#### <a name="SkillModificationIncrement/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillModificationIncrement/translations[key]">SkillModificationIncrement/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillModificationIncrement/translations[key]"></a> `SkillModificationIncrement/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`fast?` | Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text. | <a href="#SkillModificationIncrement/translations[key]/fast">See details</a>
`slow?` | Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text. | <a href="#SkillModificationIncrement/translations[key]/slow">See details</a>

#### <a name="SkillModificationIncrement/translations[key]/fast"></a> `fast?`

Configuration for this level for fast skills (spells, liturgical chants). Values set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

#### <a name="SkillModificationIncrement/translations[key]/slow"></a> `slow?`

Configuration for this level for slow skills (rituals, ceremonies). Values set here override the default generated text.

- **Type:** <a href="#LevelTypeConfigTranslation">LevelTypeConfigTranslation</a>

---

### <a name="LevelTypeConfig"></a> `LevelTypeConfig`

Configuration of a type for a level.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`casting_time` | Casting time in actions. | <a href="#LevelTypeConfig/casting_time">See details</a>
`range` | Range in meters. | <a href="#LevelTypeConfig/range">See details</a>
`cost` | Cost in AE/KP. | <a href="#LevelTypeConfig/cost">See details</a>

#### <a name="LevelTypeConfig/casting_time"></a> `casting_time`

Casting time in actions.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LevelTypeConfig/range"></a> `range`

Range in meters.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LevelTypeConfig/cost"></a> `cost`

Cost in AE/KP.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="LevelTypeConfigTranslation"></a> `LevelTypeConfigTranslation`

Configuration translation of a type for a level. Values set here override the default generated text.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#LevelTypeConfigTranslation/range">See details</a>

#### <a name="LevelTypeConfigTranslation/range"></a> `range`

- **Type:** String
- **Minimum Length:** `1`
