# Magical Melody

## Definitions

### <a name="MagicalMelody"></a> Magical Melody (`MagicalMelody`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical melody's identifier. An unique, increasing integer. | <a href="#MagicalMelody/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#MagicalMelody/check">See details</a>
`check_penalty?` | In some cases, the target's Spirit or Toughness is applied as a penalty. | <a href="#MagicalMelody/check_penalty">See details</a>
`skill` | Arcane bards must make a *Singing (area of application)* or *Music (area of application)* check for each magical melody. | <a href="#MagicalMelody/skill">See details</a>
`parameters` | Measurable parameters of a magical melody. | <a href="#MagicalMelody/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#MagicalMelody/property_id">See details</a>
`music_tradition` | The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition. | <a href="#MagicalMelody/music_tradition">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#MagicalMelody/improvement_cost">See details</a>
`src` |  | <a href="#MagicalMelody/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalMelody/translations">See details</a>

#### <a name="MagicalMelody/id"></a> `id`

The magical melody's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalMelody/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="MagicalMelody/check_penalty"></a> `check_penalty?`

In some cases, the target's Spirit or Toughness is applied as a penalty.

- **Type:** <a href="../_SkillCheck.md#SkillCheckPenalty">SkillCheckPenalty</a>

#### <a name="MagicalMelody/skill"></a> `skill`

Arcane bards must make a *Singing (area of application)* or *Music (area of application)* check for each magical melody.

- **Type:** List
- **Items:** <a href="#MagicalMelody/skill[]">MagicalMelody/skill[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** Yes

#### <a name="MagicalMelody/parameters"></a> `parameters`

Measurable parameters of a magical melody.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="MagicalMelody/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalMelody/music_tradition"></a> `music_tradition`

The music tradition(s) the magical melody is available for. This also defines the different names in each music tradition.

- **Type:** List
- **Items:** <a href="#MagicalMelody/music_tradition[]">MagicalMelody/music_tradition[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalMelody/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="MagicalMelody/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalMelody/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalMelody/translations[key]">MagicalMelody/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalMelody/skill[]"></a> `MagicalMelody/skill[]`

- **Type:** <a href="./_SkillReference.md#SkillReference">SkillReference</a>

---

### <a name="MagicalMelody/music_tradition[]"></a> `MagicalMelody/music_tradition[]`

- **Type:** <a href="./_MusicTradition.md#MusicTraditionReference">MusicTraditionReference</a>

---

### <a name="MagicalMelody/translations[key]"></a> `MagicalMelody/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical melody. | <a href="#MagicalMelody/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalMelody/translations[key]/effect">See details</a>
`duration` |  | <a href="#MagicalMelody/translations[key]/duration">See details</a>
`cost` |  | <a href="#MagicalMelody/translations[key]/cost">See details</a>
`errata?` |  | <a href="#MagicalMelody/translations[key]/errata">See details</a>

#### <a name="MagicalMelody/translations[key]/name"></a> `name`

The name of the magical melody.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MagicalMelody/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="../_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="MagicalMelody/translations[key]/duration"></a> `duration`

- **Type:** <a href="#MagicalMelody/translations[key]/duration">Object</a>

#### <a name="MagicalMelody/translations[key]/cost"></a> `cost`

- **Type:** <a href="#MagicalMelody/translations[key]/cost">Object</a>

#### <a name="MagicalMelody/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalMelody/translations[key]/duration"></a> `MagicalMelody/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalMelody/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#MagicalMelody/translations[key]/duration/abbr">See details</a>

#### <a name="MagicalMelody/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="MagicalMelody/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalMelody/translations[key]/cost"></a> `MagicalMelody/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalMelody/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#MagicalMelody/translations[key]/cost/abbr">See details</a>

#### <a name="MagicalMelody/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="MagicalMelody/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a magical melody.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>
`cost` |  | <a href="#PerformanceParameters/cost">See details</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#PerformanceParameters/duration">Object</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/cost'Flat">PerformanceParameters/cost'Flat</a> | <a href="#PerformanceParameters/cost'FirstPerson">PerformanceParameters/cost'FirstPerson</a>

---

### <a name="PerformanceParameters/duration"></a> `PerformanceParameters/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`length` |  | <a href="#PerformanceParameters/duration/length">See details</a>
`reusability` |  | <a href="#PerformanceParameters/duration/reusability">See details</a>

#### <a name="PerformanceParameters/duration/length"></a> `length`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration/length'Long">PerformanceParameters/duration/length'Long</a> | <a href="#PerformanceParameters/duration/length'Short">PerformanceParameters/duration/length'Short</a>

#### <a name="PerformanceParameters/duration/reusability"></a> `reusability`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration/reusability'OneTime">PerformanceParameters/duration/reusability'OneTime</a> | <a href="#PerformanceParameters/duration/reusability'Sustainable">PerformanceParameters/duration/reusability'Sustainable</a>

---

### <a name="PerformanceParameters/duration/length'Long"></a> `PerformanceParameters/duration/length'Long`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/length'Long/tag">See details</a>

#### <a name="PerformanceParameters/duration/length'Long/tag"></a> `tag`

- **Constant:** `"Long"`

---

### <a name="PerformanceParameters/duration/length'Short"></a> `PerformanceParameters/duration/length'Short`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/length'Short/tag">See details</a>

#### <a name="PerformanceParameters/duration/length'Short/tag"></a> `tag`

- **Constant:** `"Short"`

---

### <a name="PerformanceParameters/duration/reusability'OneTime"></a> `PerformanceParameters/duration/reusability'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/reusability'OneTime/tag">See details</a>

#### <a name="PerformanceParameters/duration/reusability'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

---

### <a name="PerformanceParameters/duration/reusability'Sustainable"></a> `PerformanceParameters/duration/reusability'Sustainable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration/reusability'Sustainable/tag">See details</a>

#### <a name="PerformanceParameters/duration/reusability'Sustainable/tag"></a> `tag`

- **Constant:** `"Sustainable"`

---

### <a name="PerformanceParameters/cost'Flat"></a> `PerformanceParameters/cost'Flat`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Flat/tag">See details</a>
`temporary` | The (temporary) AE cost value. | <a href="#PerformanceParameters/cost'Flat/temporary">See details</a>

#### <a name="PerformanceParameters/cost'Flat/tag"></a> `tag`

- **Constant:** `"Flat"`

#### <a name="PerformanceParameters/cost'Flat/temporary"></a> `temporary`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/cost'FirstPerson"></a> `PerformanceParameters/cost'FirstPerson`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'FirstPerson/tag">See details</a>
`temporary` | The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value. | <a href="#PerformanceParameters/cost'FirstPerson/temporary">See details</a>

#### <a name="PerformanceParameters/cost'FirstPerson/tag"></a> `tag`

- **Constant:** `"FirstPerson"`

#### <a name="PerformanceParameters/cost'FirstPerson/temporary"></a> `temporary`

The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value.

- **Type:** Integer
- **Minimum:** `1`
- **Multiple of:** `2`
