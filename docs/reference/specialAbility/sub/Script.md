# Script

## Definitions

### <a name="Script"></a> Script (`Script`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The script's identifier. An unique, increasing integer. | <a href="#Script/id">See details</a>
`ap_value` | The script's adventure point value. | <a href="#Script/ap_value">See details</a>
`associated_languages` | A list of languages that use this script. | <a href="#Script/associated_languages">See details</a>
`continent` | The continents this script is present on. | <a href="#Script/continent">See details</a>
`src` |  | <a href="#Script/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Script/translations">See details</a>

#### <a name="Script/id"></a> `id`

The script's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Script/ap_value"></a> `ap_value`

The script's adventure point value.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="Script/associated_languages"></a> `associated_languages`

A list of languages that use this script.

- **Type:** List
- **Items:** <a href="#Script/associated_languages[]">Script/associated_languages[]</a>

#### <a name="Script/continent"></a> `continent`

The continents this script is present on.

- **Type:** List
- **Items:** <a href="#Script/continent[]">Script/continent[]</a>
- **Minimum Items:** `1`

#### <a name="Script/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Script/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Script/translations[key]">Script/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Script/associated_languages[]"></a> `Script/associated_languages[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The language's identifier. | <a href="#Script/associated_languages[]/id">See details</a>

#### <a name="Script/associated_languages[]/id"></a> `id`

The language's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Script/continent[]"></a> `Script/continent[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The continent's identifier. | <a href="#Script/continent[]/id">See details</a>
`is_extinct` | Is the script considered virtually extinct in this continent? | <a href="#Script/continent[]/is_extinct">See details</a>

#### <a name="Script/continent[]/id"></a> `id`

The continent's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `3`

#### <a name="Script/continent[]/is_extinct"></a> `is_extinct`

Is the script considered virtually extinct in this continent?

- **Type:** Boolean

---

### <a name="Script/translations[key]"></a> `Script/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the language. | <a href="#Script/translations[key]/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#Script/translations[key]/alternative_names">See details</a>
`alphabet?` | The description of the alphabet. | <a href="#Script/translations[key]/alphabet">See details</a>
`errata?` |  | <a href="#Script/translations[key]/errata">See details</a>

#### <a name="Script/translations[key]/name"></a> `name`

The name of the language.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Script/translations[key]/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#Script/translations[key]/alternative_names[]">Script/translations[key]/alternative_names[]</a>

#### <a name="Script/translations[key]/alphabet"></a> `alphabet?`

The description of the alphabet.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Script/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Script/translations[key]/alternative_names[]"></a> `Script/translations[key]/alternative_names[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | An alternative name of the language. | <a href="#Script/translations[key]/alternative_names[]/name">See details</a>

#### <a name="Script/translations[key]/alternative_names[]/name"></a> `name`

An alternative name of the language.

- **Type:** String
- **Minimum Length:** `1`
