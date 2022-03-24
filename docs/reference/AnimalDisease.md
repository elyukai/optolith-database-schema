# Animal Disease

## Definitions

### <a name="AnimalDisease"></a> Animal Disease (`AnimalDisease`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal disease's identifier. An unique, increasing integer. | <a href="#AnimalDisease/id">See details</a>
`level` | The animal disease's level. | <a href="#AnimalDisease/level">See details</a>
`resistance` | Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty. | <a href="#AnimalDisease/resistance">See details</a>
`cause` | What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#AnimalDisease/cause">See details</a>
`animal_types` | The animal types this disease applies to. | <a href="#AnimalDisease/animal_types">See details</a>
`communicability_to_intelligent_creatures` |  | <a href="#AnimalDisease/communicability_to_intelligent_creatures">See details</a>
`src` |  | <a href="#AnimalDisease/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalDisease/translations">See details</a>

#### <a name="AnimalDisease/id"></a> `id`

The animal disease's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalDisease/level"></a> `level`

The animal disease's level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="AnimalDisease/resistance"></a> `resistance`

Depending on the disease, apply Spirit or Toughness as a penalty to the
disease roll. It may also happen that the lower of both is applied as a
penalty.

- **Type:** Union
- **Cases:** <a href="#AnimalDisease/resistance'Spirit">AnimalDisease/resistance'Spirit</a> | <a href="#AnimalDisease/resistance'Toughness">AnimalDisease/resistance'Toughness</a> | <a href="#AnimalDisease/resistance'LowerOfSpiritAndToughness">AnimalDisease/resistance'LowerOfSpiritAndToughness</a>

#### <a name="AnimalDisease/cause"></a> `cause`

What causes the disease? The GM rolls 1D20 to see if a character gets
infected. If the infection check succeeds, the GM makes a disease check to
determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#AnimalDisease/cause[]">AnimalDisease/cause[]</a>
- **Minimum Items:** `1`

#### <a name="AnimalDisease/animal_types"></a> `animal_types`

The animal types this disease applies to.

- **Type:** Union
- **Cases:** <a href="#AnimalDisease/animal_types'All">AnimalDisease/animal_types'All</a> | <a href="#AnimalDisease/animal_types'Specific">AnimalDisease/animal_types'Specific</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures"></a> `communicability_to_intelligent_creatures`

- **Type:** Union
- **Cases:** <a href="#AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable">AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable</a> | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable">AnimalDisease/communicability_to_intelligent_creatures'Communicable</a>

#### <a name="AnimalDisease/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="AnimalDisease/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalDisease/translations[key]">AnimalDisease/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalDisease/resistance'Spirit"></a> `AnimalDisease/resistance'Spirit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/resistance'Spirit/tag">See details</a>

#### <a name="AnimalDisease/resistance'Spirit/tag"></a> `tag`

- **Constant:** `"Spirit"`

---

### <a name="AnimalDisease/resistance'Toughness"></a> `AnimalDisease/resistance'Toughness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/resistance'Toughness/tag">See details</a>

#### <a name="AnimalDisease/resistance'Toughness/tag"></a> `tag`

- **Constant:** `"Toughness"`

---

### <a name="AnimalDisease/resistance'LowerOfSpiritAndToughness"></a> `AnimalDisease/resistance'LowerOfSpiritAndToughness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/resistance'LowerOfSpiritAndToughness/tag">See details</a>

#### <a name="AnimalDisease/resistance'LowerOfSpiritAndToughness/tag"></a> `tag`

- **Constant:** `"LowerOfSpiritAndToughness"`

---

### <a name="AnimalDisease/cause[]"></a> `AnimalDisease/cause[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`chance?` | The chance to get infected by this cause, in percent. | <a href="#AnimalDisease/cause[]/chance">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalDisease/cause[]/translations">See details</a>

#### <a name="AnimalDisease/cause[]/chance"></a> `chance?`

The chance to get infected by this cause, in percent.

- **Type:** Integer
- **Minimum:** `5`
- **Maximum:** `100`
- **Multiple of:** `5`

#### <a name="AnimalDisease/cause[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalDisease/cause[]/translations[key]">AnimalDisease/cause[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalDisease/cause[]/translations[key]"></a> `AnimalDisease/cause[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the cause. | <a href="#AnimalDisease/cause[]/translations[key]/name">See details</a>
`chance?` | The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time. | <a href="#AnimalDisease/cause[]/translations[key]/chance">See details</a>
`note?` | An additional note about this cause. | <a href="#AnimalDisease/cause[]/translations[key]/note">See details</a>

#### <a name="AnimalDisease/cause[]/translations[key]/name"></a> `name`

The name of the cause.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/cause[]/translations[key]/chance"></a> `chance?`

The chance to get infected by this cause. If present for this
language, this overrides the universal `chance` field; they cannot be
used at the same time.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/cause[]/translations[key]/note"></a> `note?`

An additional note about this cause.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AnimalDisease/animal_types'All"></a> `AnimalDisease/animal_types'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/animal_types'All/tag">See details</a>

#### <a name="AnimalDisease/animal_types'All/tag"></a> `tag`

- **Constant:** `"All"`

---

### <a name="AnimalDisease/animal_types'Specific"></a> `AnimalDisease/animal_types'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/animal_types'Specific/tag">See details</a>
`list` | The list of specific animal types this disease applies to. | <a href="#AnimalDisease/animal_types'Specific/list">See details</a>

#### <a name="AnimalDisease/animal_types'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="AnimalDisease/animal_types'Specific/list"></a> `list`

The list of specific animal types this disease applies to.

- **Type:** List
- **Items:** <a href="#AnimalDisease/animal_types'Specific/list[]">AnimalDisease/animal_types'Specific/list[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalDisease/animal_types'Specific/list[]"></a> `AnimalDisease/animal_types'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The animal type's identifier. | <a href="#AnimalDisease/animal_types'Specific/list[]/id">See details</a>

#### <a name="AnimalDisease/animal_types'Specific/list[]/id"></a> `id`

The animal type's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable"></a> `AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable/tag">See details</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'NonCommunicable/tag"></a> `tag`

- **Constant:** `"NonCommunicable"`

---

### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable"></a> `AnimalDisease/communicability_to_intelligent_creatures'Communicable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/tag">See details</a>
`cause` | What causes the communication? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause">See details</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/tag"></a> `tag`

- **Constant:** `"Communicable"`

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause"></a> `cause`

What causes the communication? The GM rolls 1D20 to see if a character
gets infected. If the infection check succeeds, the GM makes a disease
check to determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]">AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]</a>
- **Minimum Items:** `1`

---

### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]"></a> `AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`chance?` | The chance to get infected by this cause, in percent. | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/chance">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations">See details</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/chance"></a> `chance?`

The chance to get infected by this cause, in percent.

- **Type:** Integer
- **Minimum:** `5`
- **Maximum:** `100`
- **Multiple of:** `5`

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]">AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]"></a> `AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the cause. | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/name">See details</a>
`chance?` | The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time. | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/chance">See details</a>
`note?` | An additional note about this communication cause. | <a href="#AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/note">See details</a>

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/name"></a> `name`

The name of the cause.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/chance"></a> `chance?`

The chance to get infected by this cause. If present for this
language, this overrides the universal `chance` field; they
cannot be used at the same time.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/communicability_to_intelligent_creatures'Communicable/cause[]/translations[key]/note"></a> `note?`

An additional note about this communication cause.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AnimalDisease/translations[key]"></a> `AnimalDisease/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the animal disease. | <a href="#AnimalDisease/translations[key]/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#AnimalDisease/translations[key]/alternative_names">See details</a>
`progress` | The disease’s progress, in detail. | <a href="#AnimalDisease/translations[key]/progress">See details</a>
`incubation_time` | After infection, how much time passes before symptoms appear? | <a href="#AnimalDisease/translations[key]/incubation_time">See details</a>
`damage` | The damage caused by the disease. If the disease check fails, apply the lessened effects. | <a href="#AnimalDisease/translations[key]/damage">See details</a>
`duration` | The duration of the disease. If the disease check fails, use the lessened duration. | <a href="#AnimalDisease/translations[key]/duration">See details</a>
`special?` | Special information about the disease. | <a href="#AnimalDisease/translations[key]/special">See details</a>
`treatment` | Methods known to lessen the disease’s progress or relieve symptoms. | <a href="#AnimalDisease/translations[key]/treatment">See details</a>
`cure` | Known remedies for the disease. | <a href="#AnimalDisease/translations[key]/cure">See details</a>
`errata?` |  | <a href="#AnimalDisease/translations[key]/errata">See details</a>

#### <a name="AnimalDisease/translations[key]/name"></a> `name`

The name of the animal disease.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#AnimalDisease/translations[key]/alternative_names[]">AnimalDisease/translations[key]/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="AnimalDisease/translations[key]/progress"></a> `progress`

The disease’s progress, in detail.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/incubation_time"></a> `incubation_time`

After infection, how much time passes before symptoms appear?

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/damage"></a> `damage`

The damage caused by the disease. If the disease check fails, apply the
lessened effects.

- **Type:** <a href="#AnimalDisease/translations[key]/damage">Object</a>

#### <a name="AnimalDisease/translations[key]/duration"></a> `duration`

The duration of the disease. If the disease check fails, use the
lessened duration.

- **Type:** <a href="#AnimalDisease/translations[key]/duration">Object</a>

#### <a name="AnimalDisease/translations[key]/special"></a> `special?`

Special information about the disease.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/treatment"></a> `treatment`

Methods known to lessen the disease’s progress or relieve symptoms.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/cure"></a> `cure`

Known remedies for the disease.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="AnimalDisease/translations[key]/alternative_names[]"></a> `AnimalDisease/translations[key]/alternative_names[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | An alternative name of the animal disease. | <a href="#AnimalDisease/translations[key]/alternative_names[]/name">See details</a>
`region?` | The region where this alternative name is used. | <a href="#AnimalDisease/translations[key]/alternative_names[]/region">See details</a>

#### <a name="AnimalDisease/translations[key]/alternative_names[]/name"></a> `name`

An alternative name of the animal disease.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/alternative_names[]/region"></a> `region?`

The region where this alternative name is used.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="AnimalDisease/translations[key]/damage"></a> `AnimalDisease/translations[key]/damage`

The damage caused by the disease. If the disease check fails, apply the
lessened effects.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The disease’s default damage. In the source, it's the text before the slash. | <a href="#AnimalDisease/translations[key]/damage/default">See details</a>
`lessened?` | The disease’s lessened damage. In the source, it's the text after the slash. | <a href="#AnimalDisease/translations[key]/damage/lessened">See details</a>

#### <a name="AnimalDisease/translations[key]/damage/default"></a> `default`

The disease’s default damage. In the source, it's the text before the
slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/damage/lessened"></a> `lessened?`

The disease’s lessened damage. In the source, it's the text after the
slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="AnimalDisease/translations[key]/duration"></a> `AnimalDisease/translations[key]/duration`

The duration of the disease. If the disease check fails, use the
lessened duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The default duration of the disease. In the source, it's the text before the slash. | <a href="#AnimalDisease/translations[key]/duration/default">See details</a>
`lessened?` | The lessened duration of the disease. In the source, it's the text after the slash. | <a href="#AnimalDisease/translations[key]/duration/lessened">See details</a>

#### <a name="AnimalDisease/translations[key]/duration/default"></a> `default`

The default duration of the disease. In the source, it's the text
before the slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="AnimalDisease/translations[key]/duration/lessened"></a> `lessened?`

The lessened duration of the disease. In the source, it's the text
after the slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`
