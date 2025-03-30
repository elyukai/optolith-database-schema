# Continent

Continents are mostly referenced to in languages and scripts that occur on a specific continent.

## Definitions

### <a name="Continent"></a> Continent (`Continent`)

Continents are mostly referenced to in languages and scripts that occur on a specific continent.

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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ContinentTranslation">ContinentTranslation</a>&gt;

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
