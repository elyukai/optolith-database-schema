# Publication

## Definitions

### <a name="Publication"></a> Publication (`Publication`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The publication's identifier. An unique, increasing integer. | <a href="#Publication/id">See details</a>
`category` | The publication category. | <a href="#Publication/category">See details</a>
`contains_adult_content` | If the publication may contain adult content. | <a href="#Publication/contains_adult_content">See details</a>
`is_missing_implementation` | If the publication is not (fully) implemented and thus needs to be excluded from * stable releases. | <a href="#Publication/is_missing_implementation">See details</a>
`prerequisites?` | The specific other publications this publication depends on data from. | <a href="#Publication/prerequisites">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Publication/translations">See details</a>

#### <a name="Publication/id"></a> `id`

The publication's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Publication/category"></a> `category`

The publication category.

- **Type:** <a href="#Category">Category</a>

#### <a name="Publication/contains_adult_content"></a> `contains_adult_content`

If the publication may contain adult content.

- **Type:** Boolean

#### <a name="Publication/is_missing_implementation"></a> `is_missing_implementation`

If the publication is not (fully) implemented and thus needs to be excluded
from * stable releases.

- **Type:** Boolean

#### <a name="Publication/prerequisites"></a> `prerequisites?`

The specific other publications this publication depends on data from.

- **Type:** <a href="../_Prerequisite.md#PublicationPrerequisites">PublicationPrerequisites</a>

#### <a name="Publication/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Publication/translations[key]">Publication/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Publication/translations[key]"></a> `Publication/translations[key]`

- **Type:** <a href="#PublicationTranslation">PublicationTranslation</a>

---

### <a name="PublicationTranslation"></a> `PublicationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id?` | The publisher's publication identifier. | <a href="#PublicationTranslation/id">See details</a>
`name` | The publication's name. | <a href="#PublicationTranslation/name">See details</a>
`abbreviation` | The publication's abbreviation. | <a href="#PublicationTranslation/abbreviation">See details</a>
`release_date?` | The publication's release date. | <a href="#PublicationTranslation/release_date">See details</a>
`is_missing_implementation` | If this publication translation is not (fully) implemented and thus needs to be excluded from stable releases. | <a href="#PublicationTranslation/is_missing_implementation">See details</a>

#### <a name="PublicationTranslation/id"></a> `id?`

The publisher's publication identifier.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PublicationTranslation/name"></a> `name`

The publication's name.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="PublicationTranslation/abbreviation"></a> `abbreviation`

The publication's abbreviation.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="PublicationTranslation/release_date"></a> `release_date?`

The publication's release date.

- **Type:** String
- **Format:** `date`

#### <a name="PublicationTranslation/is_missing_implementation"></a> `is_missing_implementation`

If this publication translation is not (fully) implemented and thus needs
to be excluded from stable releases.

- **Type:** Boolean

---

### <a name="Category"></a> `Category`

The publication category.

- **Possible values:** `"CoreRules"`, `"ExpansionRules"`, `"Sourcebook"`, `"RegionalSourcebook"`
