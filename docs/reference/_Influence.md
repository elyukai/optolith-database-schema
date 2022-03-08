# Influence

## Definitions

### <a name="Influence"></a> Influence (`Influence`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The influence's identifier. An unique, increasing integer. | <a href="#Influence/id">See details</a>
`src` |  | <a href="#Influence/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Influence/translations">See details</a>

#### <a name="Influence/id"></a> `id`

The influence's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Influence/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Influence/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Influence/translations[key]">Influence/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Influence/translations[key]"></a> `Influence/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The influence name. | <a href="#Influence/translations[key]/name">See details</a>
`effects` | The effects of the influence. They should be sorted like they are in the book. | <a href="#Influence/translations[key]/effects">See details</a>
`errata?` |  | <a href="#Influence/translations[key]/errata">See details</a>

#### <a name="Influence/translations[key]/name"></a> `name`

The influence name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Influence/translations[key]/effects"></a> `effects`

The effects of the influence. They should be sorted like they are in
the book.

- **Type:** List
- **Items:** <a href="#Influence/translations[key]/effects[]">Influence/translations[key]/effects[]</a>
- **Minimum Items:** `1`

#### <a name="Influence/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Influence/translations[key]/effects[]"></a> `Influence/translations[key]/effects[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label?` | An optional label that is displayed and placed before the actual text. | <a href="#Influence/translations[key]/effects[]/label">See details</a>
`text` | The effect text. | <a href="#Influence/translations[key]/effects[]/text">See details</a>

#### <a name="Influence/translations[key]/effects[]/label"></a> `label?`

An optional label that is displayed and placed before the actual
text.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Influence/translations[key]/effects[]/text"></a> `text`

The effect text.

- **Type:** String
- **Minimum Length:** `1`
