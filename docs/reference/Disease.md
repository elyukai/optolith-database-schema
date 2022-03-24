# Disease

## Definitions

### <a name="Disease"></a> Disease (`Disease`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The disease's identifier. An unique, increasing integer. | <a href="#Disease/id">See details</a>
`level` | The disease's level. | <a href="#Disease/level">See details</a>
`resistance` | Depending on the disease, apply Spirit or Toughness as a penalty to the disease roll. It may also happen that the lower of both is applied as a penalty. | <a href="#Disease/resistance">See details</a>
`cause` | What causes the disease? The GM rolls 1D20 to see if a character gets infected. If the infection check succeeds, the GM makes a disease check to determine the severity of the infection. | <a href="#Disease/cause">See details</a>
`src` |  | <a href="#Disease/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Disease/translations">See details</a>

#### <a name="Disease/id"></a> `id`

The disease's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Disease/level"></a> `level`

The disease's level.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Disease/resistance"></a> `resistance`

Depending on the disease, apply Spirit or Toughness as a penalty to the
disease roll. It may also happen that the lower of both is applied as a
penalty.

- **Type:** Union
- **Cases:** <a href="#Disease/resistance'Spirit">Disease/resistance'Spirit</a> | <a href="#Disease/resistance'Toughness">Disease/resistance'Toughness</a> | <a href="#Disease/resistance'LowerOfSpiritAndToughness">Disease/resistance'LowerOfSpiritAndToughness</a>

#### <a name="Disease/cause"></a> `cause`

What causes the disease? The GM rolls 1D20 to see if a character gets
infected. If the infection check succeeds, the GM makes a disease check to
determine the severity of the infection.

- **Type:** List
- **Items:** <a href="#Disease/cause[]">Disease/cause[]</a>
- **Minimum Items:** `1`

#### <a name="Disease/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Disease/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Disease/translations[key]">Disease/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Disease/resistance'Spirit"></a> `Disease/resistance'Spirit`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Disease/resistance'Spirit/tag">See details</a>

#### <a name="Disease/resistance'Spirit/tag"></a> `tag`

- **Constant:** `"Spirit"`

---

### <a name="Disease/resistance'Toughness"></a> `Disease/resistance'Toughness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Disease/resistance'Toughness/tag">See details</a>

#### <a name="Disease/resistance'Toughness/tag"></a> `tag`

- **Constant:** `"Toughness"`

---

### <a name="Disease/resistance'LowerOfSpiritAndToughness"></a> `Disease/resistance'LowerOfSpiritAndToughness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Disease/resistance'LowerOfSpiritAndToughness/tag">See details</a>

#### <a name="Disease/resistance'LowerOfSpiritAndToughness/tag"></a> `tag`

- **Constant:** `"LowerOfSpiritAndToughness"`

---

### <a name="Disease/cause[]"></a> `Disease/cause[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`chance?` | The chance to get infected by this cause, in percent. | <a href="#Disease/cause[]/chance">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Disease/cause[]/translations">See details</a>

#### <a name="Disease/cause[]/chance"></a> `chance?`

The chance to get infected by this cause, in percent.

- **Type:** Integer
- **Minimum:** `5`
- **Maximum:** `100`
- **Multiple of:** `5`

#### <a name="Disease/cause[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Disease/cause[]/translations[key]">Disease/cause[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Disease/cause[]/translations[key]"></a> `Disease/cause[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the cause. | <a href="#Disease/cause[]/translations[key]/name">See details</a>
`chance?` | The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time. | <a href="#Disease/cause[]/translations[key]/chance">See details</a>

#### <a name="Disease/cause[]/translations[key]/name"></a> `name`

The name of the cause.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Disease/cause[]/translations[key]/chance"></a> `chance?`

The chance to get infected by this cause. If present for this
language, this overrides the universal `chance` field; they cannot be
used at the same time.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Disease/translations[key]"></a> `Disease/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the disease. | <a href="#Disease/translations[key]/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#Disease/translations[key]/alternative_names">See details</a>
`progress` | The disease’s progress, in detail. | <a href="#Disease/translations[key]/progress">See details</a>
`incubation_time` | After infection, how much time passes before symptoms appear? | <a href="#Disease/translations[key]/incubation_time">See details</a>
`damage` | The damage caused by the disease. If the disease check fails, apply the lessened effects. | <a href="#Disease/translations[key]/damage">See details</a>
`duration` | The duration of the disease. If the disease check fails, use the lessened duration. | <a href="#Disease/translations[key]/duration">See details</a>
`special?` | Special information about the disease. | <a href="#Disease/translations[key]/special">See details</a>
`treatment` | Methods known to lessen the disease’s progress or relieve symptoms. | <a href="#Disease/translations[key]/treatment">See details</a>
`cure` | Known remedies for the disease. | <a href="#Disease/translations[key]/cure">See details</a>
`errata?` |  | <a href="#Disease/translations[key]/errata">See details</a>

#### <a name="Disease/translations[key]/name"></a> `name`

The name of the disease.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#Disease/translations[key]/alternative_names[]">Disease/translations[key]/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="Disease/translations[key]/progress"></a> `progress`

The disease’s progress, in detail.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/incubation_time"></a> `incubation_time`

After infection, how much time passes before symptoms appear?

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/damage"></a> `damage`

The damage caused by the disease. If the disease check fails, apply the
lessened effects.

- **Type:** <a href="#Disease/translations[key]/damage">Object</a>

#### <a name="Disease/translations[key]/duration"></a> `duration`

The duration of the disease. If the disease check fails, use the
lessened duration.

- **Type:** <a href="#Disease/translations[key]/duration">Object</a>

#### <a name="Disease/translations[key]/special"></a> `special?`

Special information about the disease.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/treatment"></a> `treatment`

Methods known to lessen the disease’s progress or relieve symptoms.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/cure"></a> `cure`

Known remedies for the disease.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Disease/translations[key]/alternative_names[]"></a> `Disease/translations[key]/alternative_names[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | An alternative name of the disease. | <a href="#Disease/translations[key]/alternative_names[]/name">See details</a>
`region?` | The region where this alternative name is used. | <a href="#Disease/translations[key]/alternative_names[]/region">See details</a>

#### <a name="Disease/translations[key]/alternative_names[]/name"></a> `name`

An alternative name of the disease.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/alternative_names[]/region"></a> `region?`

The region where this alternative name is used.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Disease/translations[key]/damage"></a> `Disease/translations[key]/damage`

The damage caused by the disease. If the disease check fails, apply the
lessened effects.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The disease’s default damage. In the source, it's the text before the slash. | <a href="#Disease/translations[key]/damage/default">See details</a>
`lessened?` | The disease’s lessened damage. In the source, it's the text after the slash. | <a href="#Disease/translations[key]/damage/lessened">See details</a>

#### <a name="Disease/translations[key]/damage/default"></a> `default`

The disease’s default damage. In the source, it's the text before the
slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/damage/lessened"></a> `lessened?`

The disease’s lessened damage. In the source, it's the text after the
slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

---

### <a name="Disease/translations[key]/duration"></a> `Disease/translations[key]/duration`

The duration of the disease. If the disease check fails, use the
lessened duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The default duration of the disease. In the source, it's the text before the slash. | <a href="#Disease/translations[key]/duration/default">See details</a>
`lessened?` | The lessened duration of the disease. In the source, it's the text after the slash. | <a href="#Disease/translations[key]/duration/lessened">See details</a>

#### <a name="Disease/translations[key]/duration/default"></a> `default`

The default duration of the disease. In the source, it's the text
before the slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Disease/translations[key]/duration/lessened"></a> `lessened?`

The lessened duration of the disease. In the source, it's the text
after the slash.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`
