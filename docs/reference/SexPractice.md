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

- **Type:** <a href="#SexPracticeTranslation">SexPracticeTranslation</a>

---

### <a name="SexPracticeTranslation"></a> `SexPracticeTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The sex practice's name. | <a href="#SexPracticeTranslation/name">See details</a>
`rules` | The rules of the sex practice. | <a href="#SexPracticeTranslation/rules">See details</a>
`duration` | How long a round of this sex practice takes. | <a href="#SexPracticeTranslation/duration">See details</a>
`prerequisites?` | Prerequisites of participants and environment. Do not specify if the sex practice has no prerequisites. | <a href="#SexPracticeTranslation/prerequisites">See details</a>
`failed` | Effects of a failed *Seduction* check. | <a href="#SexPracticeTranslation/failed">See details</a>

#### <a name="SexPracticeTranslation/name"></a> `name`

The sex practice's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SexPracticeTranslation/rules"></a> `rules`

The rules of the sex practice.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SexPracticeTranslation/duration"></a> `duration`

How long a round of this sex practice takes.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SexPracticeTranslation/prerequisites"></a> `prerequisites?`

Prerequisites of participants and environment. Do not specify if the
sex practice has no prerequisites.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="SexPracticeTranslation/failed"></a> `failed`

Effects of a failed *Seduction* check.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
