# Elven Magical Song

## Definitions

### <a name="ElvenMagicalSong"></a> Elven Magical Song (`ElvenMagicalSong`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The elven magical song's identifier. An unique, increasing integer. | <a href="#ElvenMagicalSong/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#ElvenMagicalSong/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#ElvenMagicalSong/check_penalty">See details</a>
`skill` | To enhance their songs, elves can make a check on either *Singing (Two-Voiced Singing)* or *Music (appropriate application)* before making the check for the song. | <a href="#ElvenMagicalSong/skill">See details</a>
`parameters` | Measurable parameters of an elven magical song. | <a href="#ElvenMagicalSong/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#ElvenMagicalSong/property_id">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#ElvenMagicalSong/improvement_cost">See details</a>
`src` |  | <a href="#ElvenMagicalSong/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ElvenMagicalSong/translations">See details</a>

#### <a name="ElvenMagicalSong/id"></a> `id`

The elven magical song's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ElvenMagicalSong/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="ElvenMagicalSong/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="ElvenMagicalSong/skill"></a> `skill`

To enhance their songs, elves can make a check on either *Singing
(Two-Voiced Singing)* or *Music (appropriate application)* before making
the check for the song.

- **Type:** List
- **Items:** <a href="#ElvenMagicalSong/skill[]">ElvenMagicalSong/skill[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** Yes

#### <a name="ElvenMagicalSong/parameters"></a> `parameters`

Measurable parameters of an elven magical song.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="ElvenMagicalSong/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ElvenMagicalSong/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="ElvenMagicalSong/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ElvenMagicalSong/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ElvenMagicalSong/translations[key]">ElvenMagicalSong/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ElvenMagicalSong/skill[]"></a> `ElvenMagicalSong/skill[]`

- **Type:** <a href="./_SkillReference.md#SkillReference">SkillReference</a>

---

### <a name="ElvenMagicalSong/translations[key]"></a> `ElvenMagicalSong/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the elven magical song. | <a href="#ElvenMagicalSong/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#ElvenMagicalSong/translations[key]/effect">See details</a>
`cost` |  | <a href="#ElvenMagicalSong/translations[key]/cost">See details</a>
`errata?` |  | <a href="#ElvenMagicalSong/translations[key]/errata">See details</a>

#### <a name="ElvenMagicalSong/translations[key]/name"></a> `name`

The name of the elven magical song.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ElvenMagicalSong/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="ElvenMagicalSong/translations[key]/cost"></a> `cost`

- **Type:** <a href="#ElvenMagicalSong/translations[key]/cost">Object</a>

#### <a name="ElvenMagicalSong/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ElvenMagicalSong/translations[key]/cost"></a> `ElvenMagicalSong/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ElvenMagicalSong/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#ElvenMagicalSong/translations[key]/cost/abbr">See details</a>

#### <a name="ElvenMagicalSong/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="ElvenMagicalSong/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of an elven magical song.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#PerformanceParameters/cost">See details</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#PerformanceParameters/cost">Object</a>

---

### <a name="PerformanceParameters/cost"></a> `PerformanceParameters/cost`

The AE cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value. | <a href="#PerformanceParameters/cost/value">See details</a>
`interval?` | Specified if the AE cost `value` has to be paid for each time interval. | <a href="#PerformanceParameters/cost/interval">See details</a>
`permanent?` | A permanent AE cost, independent from a possible interval. | <a href="#PerformanceParameters/cost/permanent">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost/translations">See details</a>

#### <a name="PerformanceParameters/cost/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/cost/interval"></a> `interval?`

Specified if the AE cost `value` has to be paid for each time interval.

- **Type:** <a href="../_ActivatableSkill.md#Duration/UnitValue">Duration/UnitValue</a>

#### <a name="PerformanceParameters/cost/permanent"></a> `permanent?`

A permanent AE cost, independent from a possible interval.

- **Type:** <a href="#PerformanceParameters/cost/permanent">Object</a>

#### <a name="PerformanceParameters/cost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost/translations[key]">PerformanceParameters/cost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost/permanent"></a> `PerformanceParameters/cost/permanent`

A permanent AE cost, independent from a possible interval.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The permanent AE cost value. | <a href="#PerformanceParameters/cost/permanent/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost/permanent/translations">See details</a>

#### <a name="PerformanceParameters/cost/permanent/value"></a> `value`

The permanent AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/cost/permanent/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost/permanent/translations[key]">PerformanceParameters/cost/permanent/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost/permanent/translations[key]"></a> `PerformanceParameters/cost/permanent/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string for the permanent cost. | <a href="#PerformanceParameters/cost/permanent/translations[key]/replacement">See details</a>

#### <a name="PerformanceParameters/cost/permanent/translations[key]/replacement"></a> `replacement`

A replacement string for the permanent cost.

- **Type:** <a href="#PerformanceParameters/cost/permanent/translations[key]/replacement">Object</a>

---

### <a name="PerformanceParameters/cost/permanent/translations[key]/replacement"></a> `PerformanceParameters/cost/permanent/translations[key]/replacement`

A replacement string for the permanent cost.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full replacement string. It must contain `$1`, which is going to be replaced with the generated AE cost string, so additional information can be provided without duplicating concrete numeric values. | <a href="#PerformanceParameters/cost/permanent/translations[key]/replacement/default">See details</a>
`compressed` | A compressed replacement string for use in small areas (e.g. on character sheet). It must contain `$1`, which is going to be replaced with the generated AE cost string, so additional information can be provided without duplicating concrete numeric values. | <a href="#PerformanceParameters/cost/permanent/translations[key]/replacement/compressed">See details</a>

#### <a name="PerformanceParameters/cost/permanent/translations[key]/replacement/default"></a> `default`

The full replacement string. It must contain `$1`, which is
going to be replaced with the generated AE cost string, so
additional information can be provided without duplicating
concrete numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

#### <a name="PerformanceParameters/cost/permanent/translations[key]/replacement/compressed"></a> `compressed`

A compressed replacement string for use in small areas (e.g. on
character sheet). It must contain `$1`, which is going to be
replaced with the generated AE cost string, so additional
information can be provided without duplicating concrete
numeric values.

- **Type:** String
- **Minimum Length:** `1`
- **Pattern:** `\$1`

---

### <a name="PerformanceParameters/cost/translations[key]"></a> `PerformanceParameters/cost/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#PerformanceParameters/cost/translations[key]/per">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 AE
per person`.

- **Type:** <a href="#PerformanceParameters/cost/translations[key]/per">Object</a>

---

### <a name="PerformanceParameters/cost/translations[key]/per"></a> `PerformanceParameters/cost/translations[key]/per`

The cost have to be per a specific countable entity, e.g. `8 AE
per person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#PerformanceParameters/cost/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#PerformanceParameters/cost/translations[key]/per/compressed">See details</a>

#### <a name="PerformanceParameters/cost/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`
