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
`property` | The associated property. | <a href="#Ritual/property">See details</a>
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

- **Type:** <a href="./_ActivatableSkillTargetCategory.md#TargetCategory">TargetCategory</a>

#### <a name="Ritual/property"></a> `property`

The associated property.

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="Ritual/traditions"></a> `traditions`

The tradition(s) the ritual is available for. It may be *generally*
available to all traditions or it may be only familiar in specific
traditions.

- **Type:** <a href="./_Spellwork.md#Traditions">Traditions</a>

#### <a name="Ritual/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Ritual/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#SpellworkPrerequisites">SpellworkPrerequisites</a>

#### <a name="Ritual/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Ritual/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#RitualTranslation">RitualTranslation</a>&gt;

#### <a name="Ritual/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="RitualTranslation"></a> `RitualTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the ritual. | <a href="#RitualTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#RitualTranslation/effect">See details</a>
`casting_time` |  | <a href="#RitualTranslation/casting_time">See details</a>
`cost` |  | <a href="#RitualTranslation/cost">See details</a>
`range` |  | <a href="#RitualTranslation/range">See details</a>
`duration` |  | <a href="#RitualTranslation/duration">See details</a>
`target` |  | <a href="#RitualTranslation/target">See details</a>
`errata?` |  | <a href="#RitualTranslation/errata">See details</a>

#### <a name="RitualTranslation/name"></a> `name`

The name of the ritual.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="RitualTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="./_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="RitualTranslation/casting_time"></a> `casting_time`

- **Type:** <a href="#RitualTranslation/casting_time">Object</a>

#### <a name="RitualTranslation/cost"></a> `cost`

- **Type:** <a href="#RitualTranslation/cost">Object</a>

#### <a name="RitualTranslation/range"></a> `range`

- **Type:** <a href="#RitualTranslation/range">Object</a>

#### <a name="RitualTranslation/duration"></a> `duration`

- **Type:** <a href="#RitualTranslation/duration">Object</a>

#### <a name="RitualTranslation/target"></a> `target`

- **Type:** String

#### <a name="RitualTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="RitualTranslation/casting_time"></a> `RitualTranslation/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#RitualTranslation/casting_time/full">See details</a>
`abbr` |  | <a href="#RitualTranslation/casting_time/abbr">See details</a>

#### <a name="RitualTranslation/casting_time/full"></a> `full`

- **Type:** String

#### <a name="RitualTranslation/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="RitualTranslation/cost"></a> `RitualTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#RitualTranslation/cost/full">See details</a>
`abbr` |  | <a href="#RitualTranslation/cost/abbr">See details</a>

#### <a name="RitualTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="RitualTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="RitualTranslation/range"></a> `RitualTranslation/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#RitualTranslation/range/full">See details</a>
`abbr` |  | <a href="#RitualTranslation/range/abbr">See details</a>

#### <a name="RitualTranslation/range/full"></a> `full`

- **Type:** String

#### <a name="RitualTranslation/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="RitualTranslation/duration"></a> `RitualTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#RitualTranslation/duration/full">See details</a>
`abbr` |  | <a href="#RitualTranslation/duration/abbr">See details</a>

#### <a name="RitualTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="RitualTranslation/duration/abbr"></a> `abbr`

- **Type:** String
