# Sex Practice

## Definitions

### <a name="SexPractice"></a> Sex Practice (`SexPractice`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The sex practice's identifier. An unique, increasing integer. | <a href="#SexPractice/id">See details</a>
`src` |  | <a href="#SexPractice/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SexPractice/translations">See details</a>

#### <a name="SexPractice/id"></a> `id`

The sex practice's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SexPractice/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="SexPractice/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SexPractice/translations[key]">SexPractice/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SexPractice/translations[key]"></a> `SexPractice/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The sex practice's name. | <a href="#SexPractice/translations[key]/name">See details</a>
`rules` | The rules of the sex practice. | <a href="#SexPractice/translations[key]/rules">See details</a>
`duration` | How long a round of this sex practice takes. | <a href="#SexPractice/translations[key]/duration">See details</a>
`prerequisites?` | Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites. | <a href="#SexPractice/translations[key]/prerequisites">See details</a>
`failed` | Effects of a failed *Seduction* check. | <a href="#SexPractice/translations[key]/failed">See details</a>

#### <a name="SexPractice/translations[key]/name"></a> `name`

The sex practice's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="SexPractice/translations[key]/rules"></a> `rules`

The rules of the sex practice.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="SexPractice/translations[key]/duration"></a> `duration`

How long a round of this sex practice takes.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="SexPractice/translations[key]/prerequisites"></a> `prerequisites?`

Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="SexPractice/translations[key]/failed"></a> `failed`

Effects of a failed *Seduction* check.

- **Type:** String
- **Minimum Length:** `1`
