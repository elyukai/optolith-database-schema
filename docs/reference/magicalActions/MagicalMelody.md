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
`property` | The associated property. | <a href="#MagicalMelody/property">See details</a>
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

Arcane bards must make a *Singing (area of application)* or *Music (area of
application)* check for each magical melody.

- **Type:** List
- **Items:** <a href="#MagicalMelody/skill[]">MagicalMelody/skill[]</a>
- **Minimum Items:** `1`
- **Maximum Items:** `2`
- **Unique Items:** Yes

#### <a name="MagicalMelody/parameters"></a> `parameters`

Measurable parameters of a magical melody.

- **Type:** <a href="#MagicalMelodyPerformanceParameters">MagicalMelodyPerformanceParameters</a>

#### <a name="MagicalMelody/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="MagicalMelody/music_tradition"></a> `music_tradition`

The music tradition(s) the magical melody is available for. This also
defines the different names in each music tradition.

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

- **Type:** <a href="../_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#MagicalMelodyTranslation">MagicalMelodyTranslation</a>&gt;

---

### <a name="MagicalMelody/skill[]"></a> `MagicalMelody/skill[]`

- **Type:** <a href="./_SkillReference.md#MusicalSkillReference">MusicalSkillReference</a>

---

### <a name="MagicalMelody/music_tradition[]"></a> `MagicalMelody/music_tradition[]`

- **Type:** <a href="./_MusicTradition.md#MusicTraditionReference">MusicTraditionReference</a>

---

### <a name="MagicalMelodyTranslation"></a> `MagicalMelodyTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical melody. | <a href="#MagicalMelodyTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalMelodyTranslation/effect">See details</a>
`duration` |  | <a href="#MagicalMelodyTranslation/duration">See details</a>
`cost` |  | <a href="#MagicalMelodyTranslation/cost">See details</a>
`errata?` |  | <a href="#MagicalMelodyTranslation/errata">See details</a>

#### <a name="MagicalMelodyTranslation/name"></a> `name`

The name of the magical melody.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalMelodyTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#ActivatableSkillEffect">ActivatableSkillEffect</a>

#### <a name="MagicalMelodyTranslation/duration"></a> `duration`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="MagicalMelodyTranslation/cost"></a> `cost`

- **Type:** <a href="../_ActivatableSkill.md#OldParameter">OldParameter</a>

#### <a name="MagicalMelodyTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalMelodyPerformanceParameters"></a> `MagicalMelodyPerformanceParameters`

Measurable parameters of a magical melody.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`duration` |  | <a href="#MagicalMelodyPerformanceParameters/duration">See details</a>
`cost` |  | <a href="#MagicalMelodyPerformanceParameters/cost">See details</a>

#### <a name="MagicalMelodyPerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_MusicTradition.md#MusicDuration">MusicDuration</a>

#### <a name="MagicalMelodyPerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#MagicalMelodyCost">MagicalMelodyCost</a>

---

### <a name="MagicalMelodyCost"></a> `MagicalMelodyCost`

- **Type:** Union
- **Cases:** <a href="#MagicalMelodyCost'Fixed">MagicalMelodyCost'Fixed</a> | <a href="#MagicalMelodyCost'FirstPerson">MagicalMelodyCost'FirstPerson</a>

---

### <a name="MagicalMelodyCost'Fixed"></a> `MagicalMelodyCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalMelodyCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#MagicalMelodyCost'Fixed/fixed">See details</a>

#### <a name="MagicalMelodyCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="MagicalMelodyCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedMagicalMelodyCost">FixedMagicalMelodyCost</a>

---

### <a name="MagicalMelodyCost'FirstPerson"></a> `MagicalMelodyCost'FirstPerson`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalMelodyCost'FirstPerson/tag">See details</a>
`first_person` |  | <a href="#MagicalMelodyCost'FirstPerson/first_person">See details</a>

#### <a name="MagicalMelodyCost'FirstPerson/tag"></a> `tag`

- **Constant:** `"FirstPerson"`

#### <a name="MagicalMelodyCost'FirstPerson/first_person"></a> `first_person`

- **Type:** <a href="#FirstPersonMagicalMelodyCost">FirstPersonMagicalMelodyCost</a>

---

### <a name="FixedMagicalMelodyCost"></a> `FixedMagicalMelodyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value. | <a href="#FixedMagicalMelodyCost/value">See details</a>

#### <a name="FixedMagicalMelodyCost/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="FirstPersonMagicalMelodyCost"></a> `FirstPersonMagicalMelodyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value for the first targeted person. The AE cost for each additional person is half this value. | <a href="#FirstPersonMagicalMelodyCost/value">See details</a>

#### <a name="FirstPersonMagicalMelodyCost/value"></a> `value`

The (temporary) AE cost value for the first targeted person. The AE
cost for each additional person is half this value.

- **Type:** Integer
- **Minimum:** `1`
- **Multiple of:** `2`
