# Ritual

## Definitions

### <a name="Ritual"></a> Ritual (`Ritual`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The ritual's identifier. An unique, increasing integer. | <a href="#Ritual/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#Ritual/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#Ritual/check_penalty">See details</a>
`parameters` | Measurable parameters of a ritual. | <a href="#Ritual/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Ritual/target">See details</a>
`property_id` | The property's identifier. | <a href="#Ritual/property_id">See details</a>
`traditions` | The tradition(s) the ritual is available for. It may be *generally* available to all traditions or it may be only familiar in specific traditions. | <a href="#Ritual/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Ritual/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#Ritual/prerequisites">See details</a>
`src` |  | <a href="#Ritual/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Ritual/translations">See details</a>
`enhancements?` |  | <a href="#Ritual/enhancements">See details</a>

#### <a name="Ritual/id"></a> `id`

The ritual's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Ritual/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="Ritual/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="Ritual/parameters"></a> `parameters`

Measurable parameters of a ritual.

- **Type:** <a href="./_ActivatableSkill.md#SlowPerformanceParameters">SlowPerformanceParameters</a>

#### <a name="Ritual/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="Ritual/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Ritual/traditions"></a> `traditions`

The tradition(s) the ritual is available for. It may be *generally*
available to all traditions or it may be only familiar in specific
traditions.

- **Type:** Union
- **Cases:** <a href="#Ritual/traditions'General">Ritual/traditions'General</a> | <a href="#Ritual/traditions'Specific">Ritual/traditions'Specific</a>

#### <a name="Ritual/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Ritual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/GroupCollection/Spellwork">Prerequisite/GroupCollection/Spellwork</a>

#### <a name="Ritual/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Ritual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Ritual/translations[key]">Ritual/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="Ritual/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="Ritual/traditions'General"></a> `Ritual/traditions'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Ritual/traditions'General/tag">See details</a>

#### <a name="Ritual/traditions'General/tag"></a> `tag`

- **Constant:** `"General"`

---

### <a name="Ritual/traditions'Specific"></a> `Ritual/traditions'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Ritual/traditions'Specific/tag">See details</a>
`list` | A list of specific traditions. | <a href="#Ritual/traditions'Specific/list">See details</a>

#### <a name="Ritual/traditions'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Ritual/traditions'Specific/list"></a> `list`

A list of specific traditions.

- **Type:** List
- **Items:** <a href="#Ritual/traditions'Specific/list[]">Ritual/traditions'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="Ritual/traditions'Specific/list[]"></a> `Ritual/traditions'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. If `is_placeholder` is `true` then this is the magical tradition's placeholder identifier instead. | <a href="#Ritual/traditions'Specific/list[]/id">See details</a>
`is_placeholder?` | If set to `true`, the tradition is not available as a special ability yet. | <a href="#Ritual/traditions'Specific/list[]/is_placeholder">See details</a>

#### <a name="Ritual/traditions'Specific/list[]/id"></a> `id`

The magical tradition's identifier. If `is_placeholder` is `true`
then this is the magical tradition's placeholder identifier
instead.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Ritual/traditions'Specific/list[]/is_placeholder"></a> `is_placeholder?`

If set to `true`, the tradition is not available as a special ability
yet.

- **Constant:** `true`

---

### <a name="Ritual/translations[key]"></a> `Ritual/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the ritual. | <a href="#Ritual/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#Ritual/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#Ritual/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#Ritual/translations[key]/cost">See details</a>
`range` |  | <a href="#Ritual/translations[key]/range">See details</a>
`duration` |  | <a href="#Ritual/translations[key]/duration">See details</a>
`target` |  | <a href="#Ritual/translations[key]/target">See details</a>
`errata?` |  | <a href="#Ritual/translations[key]/errata">See details</a>

#### <a name="Ritual/translations[key]/name"></a> `name`

The name of the ritual.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Ritual/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="./_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="Ritual/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#Ritual/translations[key]/casting_time">Object</a>

#### <a name="Ritual/translations[key]/cost"></a> `cost`

- **Type:** <a href="#Ritual/translations[key]/cost">Object</a>

#### <a name="Ritual/translations[key]/range"></a> `range`

- **Type:** <a href="#Ritual/translations[key]/range">Object</a>

#### <a name="Ritual/translations[key]/duration"></a> `duration`

- **Type:** <a href="#Ritual/translations[key]/duration">Object</a>

#### <a name="Ritual/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="Ritual/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Ritual/translations[key]/casting_time"></a> `Ritual/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Ritual/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#Ritual/translations[key]/casting_time/abbr">See details</a>

#### <a name="Ritual/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="Ritual/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Ritual/translations[key]/cost"></a> `Ritual/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Ritual/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#Ritual/translations[key]/cost/abbr">See details</a>

#### <a name="Ritual/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="Ritual/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Ritual/translations[key]/range"></a> `Ritual/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Ritual/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#Ritual/translations[key]/range/abbr">See details</a>

#### <a name="Ritual/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="Ritual/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Ritual/translations[key]/duration"></a> `Ritual/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Ritual/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#Ritual/translations[key]/duration/abbr">See details</a>

#### <a name="Ritual/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="Ritual/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String
