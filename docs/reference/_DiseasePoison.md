# Disease (shared)

This file defines some shared types for different diseases and poisons.

## Definitions

### <a name="Resistance"></a> `Resistance`

Depending on the disease, apply Spirit or Toughness as a penalty to the
disease roll. It may also happen that the lower of both is applied as a
penalty.

- **Possible values:** `"Spirit"`, `"Toughness"`, `"LowerOfSpiritAndToughness"`

---

### <a name="Cause"></a> `Cause`

What causes the disease? The GM rolls 1D20 to see if a character gets
infected. If the infection check succeeds, the GM makes a disease check to
determine the severity of the infection.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`chance?` | The chance to get infected by this cause, in percent. | <a href="#Cause/chance">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Cause/translations">See details</a>

#### <a name="Cause/chance"></a> `chance?`

The chance to get infected by this cause, in percent.

- **Type:** Integer
- **Minimum:** `5`
- **Maximum:** `100`
- **Multiple of:** `5`

#### <a name="Cause/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Cause/translations[key]">Cause/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Cause/translations[key]"></a> `Cause/translations[key]`

- **Type:** <a href="#CauseTranslation">CauseTranslation</a>

---

### <a name="CauseTranslation"></a> `CauseTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the cause. | <a href="#CauseTranslation/name">See details</a>
`chance?` | The chance to get infected by this cause. If present for this language, this overrides the universal `chance` field; they cannot be used at the same time. | <a href="#CauseTranslation/chance">See details</a>
`note?` | An additional note about this cause. | <a href="#CauseTranslation/note">See details</a>

#### <a name="CauseTranslation/name"></a> `name`

The name of the cause.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="CauseTranslation/chance"></a> `chance?`

The chance to get infected by this cause. If present for this
language, this overrides the universal `chance` field; they cannot be
used at the same time.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="CauseTranslation/note"></a> `note?`

An additional note about this cause.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="DiseaseTranslation"></a> `DiseaseTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the disease. | <a href="#DiseaseTranslation/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#DiseaseTranslation/alternative_names">See details</a>
`progress` | The disease’s progress, in detail. | <a href="#DiseaseTranslation/progress">See details</a>
`incubation_time` | After infection, how much time passes before symptoms appear? | <a href="#DiseaseTranslation/incubation_time">See details</a>
`damage` | The damage caused by the disease. If the disease check fails, apply the lessened effects. | <a href="#DiseaseTranslation/damage">See details</a>
`duration` | The duration of the disease. If the disease check fails, use the lessened duration. | <a href="#DiseaseTranslation/duration">See details</a>
`special?` | Special information about the disease. | <a href="#DiseaseTranslation/special">See details</a>
`treatment` | Methods known to lessen the disease’s progress or relieve symptoms. | <a href="#DiseaseTranslation/treatment">See details</a>
`cure` | Known remedies for the disease. | <a href="#DiseaseTranslation/cure">See details</a>
`errata?` |  | <a href="#DiseaseTranslation/errata">See details</a>

#### <a name="DiseaseTranslation/name"></a> `name`

The name of the disease.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DiseaseTranslation/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#DiseaseTranslation/alternative_names[]">DiseaseTranslation/alternative_names[]</a>
- **Minimum Items:** `1`

#### <a name="DiseaseTranslation/progress"></a> `progress`

The disease’s progress, in detail.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DiseaseTranslation/incubation_time"></a> `incubation_time`

After infection, how much time passes before symptoms appear?

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="DiseaseTranslation/damage"></a> `damage`

The damage caused by the disease. If the disease check fails, apply the
lessened effects.

- **Type:** <a href="#Reduceable">Reduceable</a>

#### <a name="DiseaseTranslation/duration"></a> `duration`

The duration of the disease. If the disease check fails, use the
lessened duration.

- **Type:** <a href="#Reduceable">Reduceable</a>

#### <a name="DiseaseTranslation/special"></a> `special?`

Special information about the disease.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DiseaseTranslation/treatment"></a> `treatment`

Methods known to lessen the disease’s progress or relieve symptoms.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DiseaseTranslation/cure"></a> `cure`

Known remedies for the disease.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="DiseaseTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="DiseaseTranslation/alternative_names[]"></a> `DiseaseTranslation/alternative_names[]`

- **Type:** <a href="./_AlternativeNames.md#AlternativeName">AlternativeName</a>

---

### <a name="Reduceable"></a> `Reduceable`

An effect or other parameter that may be reduced by a failed disease check
for lessening or a degraded poison.

This streamlines the wording for diseases and poison by using a unified
wording for *lessened* (disease) and *degraded* (poison).

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The default value. In the source, it's the text before the slash. | <a href="#Reduceable/default">See details</a>
`reduced?` | The reduced value. In the source, it's the text after the slash. Some entries may not have a reduced value. | <a href="#Reduceable/reduced">See details</a>

#### <a name="Reduceable/default"></a> `default`

The default value. In the source, it's the text before the slash.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="Reduceable/reduced"></a> `reduced?`

The reduced value. In the source, it's the text after the slash. Some
entries may not have a reduced value.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>
