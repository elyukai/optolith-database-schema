# Supported locales

## Definitions

### <a name="Locales"></a> Supported locales

- **Type:** List

#### Items

- **Type:** <a href="#Locale">Locale</a>

---

### <a name="Locale"></a> Supported locale

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | IETF language tag (BCP47) | <a href="#Locale/id">See details</a>
`name` | Name of the language in it's language. | <a href="#Locale/name">See details</a>
`region` | Region in which the language is spoken in it's language. | <a href="#Locale/region">See details</a>
`is_missing_implementation?` | The language is not (fully) implemented and thus needs to be excluded from stable releases. | <a href="#Locale/is_missing_implementation">See details</a>

#### <a name="Locale/id"></a> `id`

IETF language tag (BCP47)

- **Type:** String
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`

#### <a name="Locale/name"></a> `name`

Name of the language in it's language.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Locale/region"></a> `region`

Region in which the language is spoken in it's language.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Locale/is_missing_implementation"></a> `is_missing_implementation?`

The language is not (fully) implemented and thus needs to be excluded from stable releases.

- **Type:** Boolean
