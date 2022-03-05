# Liturgical Chant

## Definitions

### <a name="LiturgicalChant"></a> Liturgical Chant (`LiturgicalChant`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The liturgical chant's identifier. An unique, increasing integer. | <a href="#LiturgicalChant/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#LiturgicalChant/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#LiturgicalChant/check_penalty">See details</a>
`parameters` | Measurable parameters of a liturgical chant. | <a href="#LiturgicalChant/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#LiturgicalChant/target">See details</a>
`traditions` | The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way. | <a href="#LiturgicalChant/traditions">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#LiturgicalChant/improvement_cost">See details</a>
`prerequisites?` |  | <a href="#LiturgicalChant/prerequisites">See details</a>
`src` |  | <a href="#LiturgicalChant/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#LiturgicalChant/translations">See details</a>
`enhancements?` |  | <a href="#LiturgicalChant/enhancements">See details</a>

#### <a name="LiturgicalChant/id"></a> `id`

The liturgical chant's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="LiturgicalChant/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="LiturgicalChant/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="./_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="LiturgicalChant/parameters"></a> `parameters`

Measurable parameters of a liturgical chant.

- **Type:** <a href="./_ActivatableSkill.md#FastPerformanceParameters">FastPerformanceParameters</a>

#### <a name="LiturgicalChant/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="LiturgicalChant/traditions"></a> `traditions`

The tradition(s) the liturgical chant is available for. Note that general aspects do not have an associated tradition and thus need to be defined in a special way.

- **Type:** List
- **Items:** <a href="#LiturgicalChant/traditions[]">LiturgicalChant/traditions[]</a>
- **Minimum Items:** `1`

#### <a name="LiturgicalChant/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="LiturgicalChant/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GroupCollection/Liturgy">GroupCollection/Liturgy</a>

#### <a name="LiturgicalChant/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="LiturgicalChant/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#LiturgicalChant/translations[key]">LiturgicalChant/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="LiturgicalChant/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="LiturgicalChant/traditions[]"></a> `LiturgicalChant/traditions[]`

- **Type:** <a href="#Tradition">Tradition</a>

---

### <a name="LiturgicalChant/translations[key]"></a> `LiturgicalChant/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the liturgical chant. | <a href="#LiturgicalChant/translations[key]/name">See details</a>
`name_compressed?` | A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet. | <a href="#LiturgicalChant/translations[key]/name_compressed">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#LiturgicalChant/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#LiturgicalChant/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#LiturgicalChant/translations[key]/cost">See details</a>
`range` |  | <a href="#LiturgicalChant/translations[key]/range">See details</a>
`duration` |  | <a href="#LiturgicalChant/translations[key]/duration">See details</a>
`target` |  | <a href="#LiturgicalChant/translations[key]/target">See details</a>
`errata?` |  | <a href="#LiturgicalChant/translations[key]/errata">See details</a>

#### <a name="LiturgicalChant/translations[key]/name"></a> `name`

The name of the liturgical chant.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="LiturgicalChant/translations[key]/name_compressed"></a> `name_compressed?`

A compressed name of the liturgical chant for use in small areas (e.g. on character sheet). Should only be defined if the `name` does not fit on character sheet.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="LiturgicalChant/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="./_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="LiturgicalChant/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#LiturgicalChant/translations[key]/casting_time">Object</a>

#### <a name="LiturgicalChant/translations[key]/cost"></a> `cost`

- **Type:** <a href="#LiturgicalChant/translations[key]/cost">Object</a>

#### <a name="LiturgicalChant/translations[key]/range"></a> `range`

- **Type:** <a href="#LiturgicalChant/translations[key]/range">Object</a>

#### <a name="LiturgicalChant/translations[key]/duration"></a> `duration`

- **Type:** <a href="#LiturgicalChant/translations[key]/duration">Object</a>

#### <a name="LiturgicalChant/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="LiturgicalChant/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="LiturgicalChant/translations[key]/casting_time"></a> `LiturgicalChant/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#LiturgicalChant/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#LiturgicalChant/translations[key]/casting_time/abbr">See details</a>

#### <a name="LiturgicalChant/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="LiturgicalChant/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="LiturgicalChant/translations[key]/cost"></a> `LiturgicalChant/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#LiturgicalChant/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#LiturgicalChant/translations[key]/cost/abbr">See details</a>

#### <a name="LiturgicalChant/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="LiturgicalChant/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="LiturgicalChant/translations[key]/range"></a> `LiturgicalChant/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#LiturgicalChant/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#LiturgicalChant/translations[key]/range/abbr">See details</a>

#### <a name="LiturgicalChant/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="LiturgicalChant/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="LiturgicalChant/translations[key]/duration"></a> `LiturgicalChant/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#LiturgicalChant/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#LiturgicalChant/translations[key]/duration/abbr">See details</a>

#### <a name="LiturgicalChant/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="LiturgicalChant/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Tradition"></a> `Tradition`

- **Type:** Union
- **Cases:** <a href="#Tradition'GeneralAspect">Tradition'GeneralAspect</a> | <a href="#Tradition'Tradition">Tradition'Tradition</a>

---

### <a name="Tradition'GeneralAspect"></a> `Tradition'GeneralAspect`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Tradition'GeneralAspect/tag">See details</a>
`id` | A general aspect's identifier. | <a href="#Tradition'GeneralAspect/id">See details</a>

#### <a name="Tradition'GeneralAspect/tag"></a> `tag`

- **Constant:** `"GeneralAspect"`

#### <a name="Tradition'GeneralAspect/id"></a> `id`

A general aspect's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Tradition'Tradition"></a> `Tradition'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Tradition'Tradition/tag">See details</a>
`id` | The blessed tradition's identifier. | <a href="#Tradition'Tradition/id">See details</a>
`aspects?` | The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. | <a href="#Tradition'Tradition/aspects">See details</a>

#### <a name="Tradition'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="Tradition'Tradition/id"></a> `id`

The blessed tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Tradition'Tradition/aspects"></a> `aspects?`

The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects.

- **Type:** List
- **Items:** <a href="#Tradition'Tradition/aspects[]">Tradition'Tradition/aspects[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`

---

### <a name="Tradition'Tradition/aspects[]"></a> `Tradition'Tradition/aspects[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The aspect's identifier. | <a href="#Tradition'Tradition/aspects[]/id">See details</a>

#### <a name="Tradition'Tradition/aspects[]/id"></a> `id`

The aspect's identifier.

- **Type:** Integer
- **Minimum:** `1`
