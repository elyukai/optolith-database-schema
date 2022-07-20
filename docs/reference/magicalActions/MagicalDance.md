# Magical Dance

## Definitions

### <a name="MagicalDance"></a> Magical Dance (`MagicalDance`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical dance's identifier. An unique, increasing integer. | <a href="#MagicalDance/id">See details</a>
`check` | Lists the linked three attributes used to make a skill check. | <a href="#MagicalDance/check">See details</a>
`parameters` | Measurable parameters of a magical dance. | <a href="#MagicalDance/parameters">See details</a>
`property_id` | The property's identifier. | <a href="#MagicalDance/property_id">See details</a>
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

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="MagicalDance/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

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

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the magical dance. | <a href="#MagicalDance/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#MagicalDance/translations[key]/effect">See details</a>
`duration` |  | <a href="#MagicalDance/translations[key]/duration">See details</a>
`cost` |  | <a href="#MagicalDance/translations[key]/cost">See details</a>
`errata?` |  | <a href="#MagicalDance/translations[key]/errata">See details</a>

#### <a name="MagicalDance/translations[key]/name"></a> `name`

The name of the magical dance.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="MagicalDance/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is
divided by a list of effects for each quality level. It may also be a
list for each two quality levels.

- **Type:** <a href="../_ActivatableSkillEffect.md#Effect">Effect</a>

#### <a name="MagicalDance/translations[key]/duration"></a> `duration`

- **Type:** <a href="#MagicalDance/translations[key]/duration">Object</a>

#### <a name="MagicalDance/translations[key]/cost"></a> `cost`

- **Type:** <a href="#MagicalDance/translations[key]/cost">Object</a>

#### <a name="MagicalDance/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../source/_Erratum.md#Errata">Errata</a>

---

### <a name="MagicalDance/translations[key]/duration"></a> `MagicalDance/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalDance/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#MagicalDance/translations[key]/duration/abbr">See details</a>

#### <a name="MagicalDance/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="MagicalDance/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="MagicalDance/translations[key]/cost"></a> `MagicalDance/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#MagicalDance/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#MagicalDance/translations[key]/cost/abbr">See details</a>

#### <a name="MagicalDance/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="MagicalDance/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a magical dance.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>
`cost` |  | <a href="#PerformanceParameters/cost">See details</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** <a href="#PerformanceParameters/duration">Object</a>

#### <a name="PerformanceParameters/cost"></a> `cost`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/cost'Fixed">PerformanceParameters/cost'Fixed</a> | <a href="#PerformanceParameters/cost'Indefinite">PerformanceParameters/cost'Indefinite</a>

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

### <a name="PerformanceParameters/cost'Fixed"></a> `PerformanceParameters/cost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Fixed/tag">See details</a>
`value` | The (temporary) AE cost value. | <a href="#PerformanceParameters/cost'Fixed/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost'Fixed/translations">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/cost'Fixed/value"></a> `value`

The (temporary) AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/cost'Fixed/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost'Fixed/translations[key]">PerformanceParameters/cost'Fixed/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost'Fixed/translations[key]"></a> `PerformanceParameters/cost'Fixed/translations[key]`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`per?` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per"></a> `per?`

The cost have to be per a specific countable entity, e.g. `8 AE per
person`.

- **Type:** <a href="#PerformanceParameters/cost'Fixed/translations[key]/per">Object</a>

---

### <a name="PerformanceParameters/cost'Fixed/translations[key]/per"></a> `PerformanceParameters/cost'Fixed/translations[key]/per`

The cost have to be per a specific countable entity, e.g. `8 AE per
person`.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full countable entity name. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per/default">See details</a>
`compressed` | The compressed countable entity name. | <a href="#PerformanceParameters/cost'Fixed/translations[key]/per/compressed">See details</a>

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per/default"></a> `default`

The full countable entity name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/cost'Fixed/translations[key]/per/compressed"></a> `compressed`

The compressed countable entity name.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="PerformanceParameters/cost'Indefinite"></a> `PerformanceParameters/cost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/cost'Indefinite/tag">See details</a>
`modifier?` | Specified if the indefinite description's result value is to be modified by a certain number. | <a href="#PerformanceParameters/cost'Indefinite/modifier">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/cost'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters/cost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters/cost'Indefinite/modifier"></a> `modifier?`

Specified if the indefinite description's result value is to be
modified by a certain number.

- **Type:** <a href="../_ActivatableSkillCheckResultBased.md#CheckResultBasedModifier">CheckResultBasedModifier</a>

#### <a name="PerformanceParameters/cost'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/cost'Indefinite/translations[key]">PerformanceParameters/cost'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/cost'Indefinite/translations[key]"></a> `PerformanceParameters/cost'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#PerformanceParameters/cost'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters/cost'Indefinite/translations[key]/description"></a> `description`

A description of the duration.

- **Type:** <a href="../_ResponsiveText.md#ResponsiveText">ResponsiveText</a>
