# Continent

Continents are mostly referenced to in languages and scripts that occur on a
specific continent.

## Definitions

### <a name="Continent"></a> Continent (`Continent`)

Continents are mostly referenced to in languages and scripts that occur on a
specific continent.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The continent's identifier. An unique, increasing integer. | <a href="#Continent/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Continent/translations">See details</a>

#### <a name="Continent/id"></a> `id`

The continent's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Continent/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Continent/translations[key]">Continent/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Continent/translations[key]"></a> `Continent/translations[key]`

- **Type:** <a href="#ContinentTranslation">ContinentTranslation</a>

---

### <a name="ContinentTranslation"></a> `ContinentTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The continent name. | <a href="#ContinentTranslation/name">See details</a>

#### <a name="ContinentTranslation/name"></a> `name`

The continent name.

- **Type:** String
- **Minimum Length:** `1`
