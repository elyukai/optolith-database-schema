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
`property` | The associated property. | <a href="#ElvenMagicalSong/property">See details</a>
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

- **Type:** <a href="#ElvenMagicalSongPerformanceParameters">ElvenMagicalSongPerformanceParameters</a>

#### <a name="ElvenMagicalSong/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="ElvenMagicalSong/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="ElvenMagicalSong/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ElvenMagicalSong/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ElvenMagicalSongTranslation">ElvenMagicalSongTranslation</a>&gt;

---

### <a name="ElvenMagicalSong/skill[]"></a> `ElvenMagicalSong/skill[]`

- **Type:** <a href="./_SkillReference.md#MusicalSkillReference">MusicalSkillReference</a>

---

### <a name="ElvenMagicalSongTranslation"></a> `ElvenMagicalSongTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the elven magical song. | <a href="#ElvenMagicalSongTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#ElvenMagicalSongTranslation/effect">See details</a>
`cost` |  | <a href="#ElvenMagicalSongTranslation/cost">See details</a>
`errata?` |  | <a href="#ElvenMagicalSongTranslation/errata">See details</a>

#### <a name="ElvenMagicalSongTranslation/name"></a> `name`

The name of the elven magical song.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ElvenMagicalSongTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="ElvenMagicalSongTranslation/cost"></a> `cost`

- **Type:** <a href="#ElvenMagicalSongTranslation/cost">Object</a>

#### <a name="ElvenMagicalSongTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="ElvenMagicalSongTranslation/cost"></a> `ElvenMagicalSongTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#ElvenMagicalSongTranslation/cost/full">See details</a>
`abbr` |  | <a href="#ElvenMagicalSongTranslation/cost/abbr">See details</a>

#### <a name="ElvenMagicalSongTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="ElvenMagicalSongTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="ElvenMagicalSongPerformanceParameters"></a> `ElvenMagicalSongPerformanceParameters`

Measurable parameters of an elven magical song.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`cost` | The AE cost. | <a href="#ElvenMagicalSongPerformanceParameters/cost">See details</a>

#### <a name="ElvenMagicalSongPerformanceParameters/cost"></a> `cost`

The AE cost.

- **Type:** <a href="#ElvenMagicalSongCost">ElvenMagicalSongCost</a>

---

### <a name="ElvenMagicalSongCost"></a> `ElvenMagicalSongCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value. | <a href="#ElvenMagicalSongCost/value">See details</a>
`interval?` | Specified if the AE cost `value` has to be paid for each time interval. | <a href="#ElvenMagicalSongCost/interval">See details</a>
`permanent?` | A permanent AE cost, independent from a possible interval. | <a href="#ElvenMagicalSongCost/permanent">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ElvenMagicalSongCost/translations">See details</a>

#### <a name="ElvenMagicalSongCost/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ElvenMagicalSongCost/interval"></a> `interval?`

Specified if the AE cost `value` has to be paid for each time interval.

- **Type:** <a href="../_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="ElvenMagicalSongCost/permanent"></a> `permanent?`

A permanent AE cost, independent from a possible interval.

- **Type:** <a href="#ElvenMagicalSongPermanentCost">ElvenMagicalSongPermanentCost</a>

#### <a name="ElvenMagicalSongCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ElvenMagicalSongCostTranslation">ElvenMagicalSongCostTranslation</a>&gt;

---

### <a name="ElvenMagicalSongPermanentCost"></a> `ElvenMagicalSongPermanentCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The permanent AE cost value. | <a href="#ElvenMagicalSongPermanentCost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ElvenMagicalSongPermanentCost/translations">See details</a>

#### <a name="ElvenMagicalSongPermanentCost/value"></a> `value`

The permanent AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ElvenMagicalSongPermanentCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ElvenMagicalSongPermanentCostTranslation">ElvenMagicalSongPermanentCostTranslation</a>&gt;

---

### <a name="ElvenMagicalSongPermanentCostTranslation"></a> `ElvenMagicalSongPermanentCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`replacement` | A replacement string for the permanent cost. | <a href="#ElvenMagicalSongPermanentCostTranslation/replacement">See details</a>

#### <a name="ElvenMagicalSongPermanentCostTranslation/replacement"></a> `replacement`

A replacement string for the permanent cost.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveTextReplace">ResponsiveTextReplace</a>

---

### <a name="ElvenMagicalSongCostTranslation"></a> `ElvenMagicalSongCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#ElvenMagicalSongCostTranslation/per">See details</a>

#### <a name="ElvenMagicalSongCostTranslation/per"></a> `per`

The cost have to be per a specific countable entity, e.g. `8 AE
per person`.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>
