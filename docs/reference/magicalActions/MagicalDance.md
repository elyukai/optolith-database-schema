# Magical Dance

## Definitions

### <a name="MagicalDance"></a> Magical Dance (`MagicalDance`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical dance's identifier. An unique, increasing integer. | <a href="#MagicalDance/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#MagicalDance/check">See details</a>
`parameters` | Measurable parameters of a magical dance. | <a href="#MagicalDance/parameters">See details</a>
`property` | The associated property. | <a href="#MagicalDance/property">See details</a>
`music_tradition` | The music tradition(s) the magical dance is available for. This also defines the different names in each music tradition. | <a href="#MagicalDance/music_tradition">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#MagicalDance/improvement_cost">See details</a>
`src` |  | <a href="#MagicalDance/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MagicalDance/translations">See details</a>

#### <a name="MagicalDance/id"></a> `id`

The magical dance's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MagicalDance/check"></a> `check`

Lists the linked three attributes used to make a skill check.

- **Type:** <a href="../_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="MagicalDance/parameters"></a> `parameters`

Measurable parameters of a magical dance.

- **Type:** <a href="#MagicalDancePerformanceParameters">MagicalDancePerformanceParameters</a>

#### <a name="MagicalDance/property"></a> `property`

The associated property.

- **Type:** <a href="../_SimpleReferences.md#PropertyReference">PropertyReference</a>

#### <a name="MagicalDance/music_tradition"></a> `music_tradition`

The music tradition(s) the magical dance is available for. This also
defines the different names in each music tradition.

- **Type:** List
- **Items:** <a href="#MagicalDance/music_tradition[]">MagicalDance/music_tradition[]</a>
- **Minimum Items:** `1`

#### <a name="MagicalDance/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="../_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="MagicalDance/src"></a> `src`

- **Type:** <a href="../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="MagicalDance/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MagicalDance/translations[key]">MagicalDance/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MagicalDance/music_tradition[]"></a> `MagicalDance/music_tradition[]`

- **Type:** <a href="./_MusicTradition.md#MusicTraditionReference">MusicTraditionReference</a>

---

### <a name="MagicalDance/translations[key]"></a> `MagicalDance/translations[key]`

- **Type:** <a href="#MagicalDanceTranslation">MagicalDanceTranslation</a>

---

### <a name="MagicalDanceTranslation"></a> `MagicalDanceTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical dance. | <a href="#MagicalDanceTranslation/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalDanceTranslation/effect">See details</a>
`duration` |  | <a href="#MagicalDanceTranslation/duration">See details</a>
`cost` |  | <a href="#MagicalDanceTranslation/cost">See details</a>
`errata?` |  | <a href="#MagicalDanceTranslation/errata">See details</a>

#### <a name="MagicalDanceTranslation/name"></a> `name`

The name of the magical dance.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="MagicalDanceTranslation/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="MagicalDanceTranslation/duration"></a> `duration`

- **Type:** <a href="#MagicalDanceTranslation/duration">Object</a>

#### <a name="MagicalDanceTranslation/cost"></a> `cost`

- **Type:** <a href="#MagicalDanceTranslation/cost">Object</a>

#### <a name="MagicalDanceTranslation/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalDanceTranslation/duration"></a> `MagicalDanceTranslation/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalDanceTranslation/duration/full">See details</a>
`abbr` |  | <a href="#MagicalDanceTranslation/duration/abbr">See details</a>

#### <a name="MagicalDanceTranslation/duration/full"></a> `full`

- **Type:** String

#### <a name="MagicalDanceTranslation/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalDanceTranslation/cost"></a> `MagicalDanceTranslation/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalDanceTranslation/cost/full">See details</a>
`abbr` |  | <a href="#MagicalDanceTranslation/cost/abbr">See details</a>

#### <a name="MagicalDanceTranslation/cost/full"></a> `full`

- **Type:** String

#### <a name="MagicalDanceTranslation/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalDancePerformanceParameters"></a> `MagicalDancePerformanceParameters`

Measurable parameters of a magical dance.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`duration` |  | <a href="#MagicalDancePerformanceParameters/duration">See details</a>
`cost` |  | <a href="#MagicalDancePerformanceParameters/cost">See details</a>

#### <a name="MagicalDancePerformanceParameters/duration"></a> `duration`

- **Type:** <a href="./_MusicTradition.md#MusicDuration">MusicDuration</a>

#### <a name="MagicalDancePerformanceParameters/cost"></a> `cost`

- **Type:** <a href="#MagicalDanceCost">MagicalDanceCost</a>

---

### <a name="MagicalDanceCost"></a> `MagicalDanceCost`

- **Type:** Union
- **Cases:** <a href="#MagicalDanceCost'Fixed">MagicalDanceCost'Fixed</a> | <a href="#MagicalDanceCost'Indefinite">MagicalDanceCost'Indefinite</a>

---

### <a name="MagicalDanceCost'Fixed"></a> `MagicalDanceCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalDanceCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#MagicalDanceCost'Fixed/fixed">See details</a>

#### <a name="MagicalDanceCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="MagicalDanceCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedMagicalDanceCost">FixedMagicalDanceCost</a>

---

### <a name="MagicalDanceCost'Indefinite"></a> `MagicalDanceCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MagicalDanceCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#MagicalDanceCost'Indefinite/indefinite">See details</a>

#### <a name="MagicalDanceCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="MagicalDanceCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteMagicalDanceCost">IndefiniteMagicalDanceCost</a>

---

### <a name="FixedMagicalDanceCost"></a> `FixedMagicalDanceCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The (temporary) AE cost value. | <a href="#FixedMagicalDanceCost/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedMagicalDanceCost/translations">See details</a>

#### <a name="FixedMagicalDanceCost/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedMagicalDanceCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FixedMagicalDanceCost/translations[key]">FixedMagicalDanceCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedMagicalDanceCost/translations[key]"></a> `FixedMagicalDanceCost/translations[key]`

- **Type:** <a href="../FamiliarsTrick.md#FixedOneTimeCostTranslation">FixedOneTimeCostTranslation</a>

---

### <a name="IndefiniteMagicalDanceCost"></a> `IndefiniteMagicalDanceCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modifier?` | Specified if the indefinite description's result value is to be modified by a certain number. | <a href="#IndefiniteMagicalDanceCost/modifier">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteMagicalDanceCost/translations">See details</a>

#### <a name="IndefiniteMagicalDanceCost/modifier"></a> `modifier?`

Specified if the indefinite description's result value is to be
modified by a certain number.

- **Type:** <a href="../_ActivatableSkillCheckResultBased.md#CheckResultBasedModifier">CheckResultBasedModifier</a>

#### <a name="IndefiniteMagicalDanceCost/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteMagicalDanceCost/translations[key]">IndefiniteMagicalDanceCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteMagicalDanceCost/translations[key]"></a> `IndefiniteMagicalDanceCost/translations[key]`

- **Type:** <a href="../_ActivatableSkillCost.md#IndefiniteOneTimeCostTranslation">IndefiniteOneTimeCostTranslation</a>
