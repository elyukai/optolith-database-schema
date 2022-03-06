# Spell

## Definitions

### <a name="Spell"></a> Spell (`Spell`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The spell's identifier. An unique, increasing integer. | <a href="#Spell/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Spell/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Spell/check_penalty">See details</a>
`parameters` | Measurable parameters of a spell. | <a href="#Spell/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Spell/target">See details</a>
`property_id` | The property's identifier. | <a href="#Spell/property_id">See details</a>
`traditions` | The tradition(s) the spell is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions. | <a href="#Spell/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Spell/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#Spell/prerequisites">See details</a>
`src` |  | <a href="#Spell/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Spell/translations">See details</a>
`enhancements?` |  | <a href="#Spell/enhancements">See details</a>

#### <a name="Spell/id"></a> `id`

The spell's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Spell/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Spell/parameters"></a> `parameters`

Measurable parameters of a spell.

- **Type:** <a href="./_ActivatableSkill.md#FastPerformanceParameters">FastPerformanceParameters</a>

#### <a name="Spell/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="Spell/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/traditions"></a> `traditions`

The tradition(s) the spell is available for. It may be *generally*
available to all traditions or it may be only familiar in specific
traditions.

- **Type:** Union
- **Cases:** <a href="#Spell/traditions'General">Spell/traditions'General</a> | <a href="#Spell/traditions'Specific">Spell/traditions'Specific</a>

#### <a name="Spell/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Spell/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GroupCollection/Spellwork">GroupCollection/Spellwork</a>

#### <a name="Spell/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Spell/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Spell/translations[key]">Spell/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="Spell/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="Spell/traditions'General"></a> `Spell/traditions'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell/traditions'General/tag">See details</a>

#### <a name="Spell/traditions'General/tag"></a> `tag`

- **Constant:** `"General"`

---

### <a name="Spell/traditions'Specific"></a> `Spell/traditions'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell/traditions'Specific/tag">See details</a>
`list` | A list of specific traditions. | <a href="#Spell/traditions'Specific/list">See details</a>

#### <a name="Spell/traditions'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Spell/traditions'Specific/list"></a> `list`

A list of specific traditions.

- **Type:** List
- **Items:** <a href="#Spell/traditions'Specific/list[]">Spell/traditions'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="Spell/traditions'Specific/list[]"></a> `Spell/traditions'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. If `is_placeholder` is `true` then this is the magical tradition's placeholder identifier instead. | <a href="#Spell/traditions'Specific/list[]/id">See details</a>
`is_placeholder?` | If set to `true`, the tradition is not available as a special ability yet. | <a href="#Spell/traditions'Specific/list[]/is_placeholder">See details</a>

#### <a name="Spell/traditions'Specific/list[]/id"></a> `id`

The magical tradition's identifier. If `is_placeholder` is `true`
then this is the magical tradition's placeholder identifier
instead.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/traditions'Specific/list[]/is_placeholder"></a> `is_placeholder?`

If set to `true`, the tradition is not available as a special ability
yet.

- **Constant:** `true`

---

### <a name="Spell/translations[key]"></a> `Spell/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the spell. | <a href="#Spell/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#Spell/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#Spell/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#Spell/translations[key]/cost">See details</a>
`range` |  | <a href="#Spell/translations[key]/range">See details</a>
`duration` |  | <a href="#Spell/translations[key]/duration">See details</a>
`target` |  | <a href="#Spell/translations[key]/target">See details</a>
`errata?` |  | <a href="#Spell/translations[key]/errata">See details</a>

#### <a name="Spell/translations[key]/name"></a> `name`

The name of the spell.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Spell/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="./_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="Spell/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#Spell/translations[key]/casting_time">Object</a>

#### <a name="Spell/translations[key]/cost"></a> `cost`

- **Type:** <a href="#Spell/translations[key]/cost">Object</a>

#### <a name="Spell/translations[key]/range"></a> `range`

- **Type:** <a href="#Spell/translations[key]/range">Object</a>

#### <a name="Spell/translations[key]/duration"></a> `duration`

- **Type:** <a href="#Spell/translations[key]/duration">Object</a>

#### <a name="Spell/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="Spell/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Spell/translations[key]/casting_time"></a> `Spell/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/casting_time/abbr">See details</a>

#### <a name="Spell/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/cost"></a> `Spell/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/cost/abbr">See details</a>

#### <a name="Spell/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/range"></a> `Spell/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/range/abbr">See details</a>

#### <a name="Spell/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/duration"></a> `Spell/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/duration/abbr">See details</a>

#### <a name="Spell/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String
