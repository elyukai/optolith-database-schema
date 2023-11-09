# Influence

## Definitions

### <a name="Influence"></a> Influence (`Influence`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The influence's identifier. An unique, increasing integer. | <a href="#Influence/id">See details</a>
`prerequisites` |  | <a href="#Influence/prerequisites">See details</a>
`src` |  | <a href="#Influence/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Influence/translations">See details</a>

#### <a name="Influence/id"></a> `id`

The influence's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Influence/prerequisites"></a> `prerequisites`

- **Type:** <a href="./_Prerequisite.md#InfluencePrerequisites">InfluencePrerequisites</a>

#### <a name="Influence/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Influence/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#InfluenceTranslation">InfluenceTranslation</a>&gt;

---

### <a name="InfluenceTranslation"></a> `InfluenceTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The influence name. | <a href="#InfluenceTranslation/name">See details</a>
`effects` | The effects of the influence. They should be sorted like they are in the book. | <a href="#InfluenceTranslation/effects">See details</a>
`errata?` |  | <a href="#InfluenceTranslation/errata">See details</a>

#### <a name="InfluenceTranslation/name"></a> `name`

The influence name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="InfluenceTranslation/effects"></a> `effects`

The effects of the influence. They should be sorted like they are in
the book.

- **Type:** List
- **Items:** <a href="#InfluenceTranslation/effects[]">InfluenceTranslation/effects[]</a>
- **Minimum Items:** `1`

#### <a name="InfluenceTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="InfluenceTranslation/effects[]"></a> `InfluenceTranslation/effects[]`

- **Type:** <a href="#InfluenceEffect">InfluenceEffect</a>

---

### <a name="InfluenceEffect"></a> `InfluenceEffect`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label?` | An optional label that is displayed and placed before the actual text. | <a href="#InfluenceEffect/label">See details</a>
`text` | The effect text. | <a href="#InfluenceEffect/text">See details</a>

#### <a name="InfluenceEffect/label"></a> `label?`

An optional label that is displayed and placed before the actual
text.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="InfluenceEffect/text"></a> `text`

The effect text.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
