# Publication

## Definitions

### <a name="Publication"></a> Publication

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#Publication/id">See details</a>
`category` | The publication category. | <a href="#Publication/category">See details</a>
`age_restriction` | The age the content is restricted to. | <a href="#Publication/age_restriction">See details</a>
`is_missing_implementation?` | The publication is not (fully) implemented and thus needs to be excluded from * stable releases. | <a href="#Publication/is_missing_implementation">See details</a>
`prerequisites?` | The specific other publications this publication depends on data from. | <a href="#Publication/prerequisites">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Publication/translations">See details</a>

#### <a name="Publication/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Publication/category"></a> `category`

The publication category.

- **Type:** <a href="#Category">Category</a>

#### <a name="Publication/age_restriction"></a> `age_restriction`

The age the content is restricted to.

- **Type:** <a href="#AgeRestriction">AgeRestriction</a>

#### <a name="Publication/is_missing_implementation"></a> `is_missing_implementation?`

The publication is not (fully) implemented and thus needs to be excluded from * stable releases.

- **Type:** Boolean

#### <a name="Publication/prerequisites"></a> `prerequisites?`

The specific other publications this publication depends on data from.

- **Type:** List

##### Items

- **Type:** <a href="#Prerequisite">Prerequisite</a>

#### <a name="Publication/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Category"></a> Category

The publication category.

- **Type:** Union

#### Case: CoreRules

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category`0/tag">See details</a>

##### <a name="Category`0/tag"></a> `tag`

- **Constant:** `"CoreRules"`

#### Case: ExpansionRules

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category`1/tag">See details</a>

##### <a name="Category`1/tag"></a> `tag`

- **Constant:** `"ExpansionRules"`

#### Case: Sourcebook

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category`2/tag">See details</a>

##### <a name="Category`2/tag"></a> `tag`

- **Constant:** `"Sourcebook"`

#### Case: RegionalSourcebook

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category`3/tag">See details</a>

##### <a name="Category`3/tag"></a> `tag`

- **Constant:** `"RegionalSourcebook"`

---

### <a name="AgeRestriction"></a> AgeRestriction

The age the content is restricted to.

- **Type:** Union

#### Case: Adult

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AgeRestriction`0/tag">See details</a>

##### <a name="AgeRestriction`0/tag"></a> `tag`

- **Constant:** `"Adult"`

#### Case: None

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AgeRestriction`1/tag">See details</a>

##### <a name="AgeRestriction`1/tag"></a> `tag`

- **Constant:** `"None"`

---

### <a name="Prerequisite"></a> Prerequisite

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The publication identifier. | <a href="#Prerequisite/id">See details</a>

#### <a name="Prerequisite/id"></a> `id`

The publication identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id?` | The publisher's publication identifier. | <a href="#Translation/id">See details</a>
`name` | The publication's name. | <a href="#Translation/name">See details</a>
`abbreviation` | The publication's abbreviation. | <a href="#Translation/abbreviation">See details</a>
`release_date?` | The publication's release date. | <a href="#Translation/release_date">See details</a>
`is_missing_implementation?` | This publication translation is not (fully) implemented and thus needs to be excluded from stable releases. | <a href="#Translation/is_missing_implementation">See details</a>

#### <a name="Translation/id"></a> `id?`

The publisher's publication identifier.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/name"></a> `name`

The publication's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/abbreviation"></a> `abbreviation`

The publication's abbreviation.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/release_date"></a> `release_date?`

The publication's release date.

- **Type:** String
- **Format:** `date`

#### <a name="Translation/is_missing_implementation"></a> `is_missing_implementation?`

This publication translation is not (fully) implemented and thus needs to be excluded from stable releases.

- **Type:** Boolean