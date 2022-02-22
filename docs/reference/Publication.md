# Publication

## Definitions

### <a name="Publication"></a> Publication (`Publication`)

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
- **Items:** <a href="#Publication/prerequisites[]">Publication/prerequisites[]</a>

#### <a name="Publication/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Publication/translations[key]">Publication/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Publication/prerequisites[]"></a> `Publication/prerequisites[]`

- **Type:** <a href="#Prerequisite">Prerequisite</a>

---

### <a name="Publication/translations[key]"></a> `Publication/translations[key]`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Category"></a> `Category`

The publication category.

- **Type:** Union
- **Cases:** <a href="Category'CoreRules">Category'CoreRules</a> | <a href="Category'ExpansionRules">Category'ExpansionRules</a> | <a href="Category'Sourcebook">Category'Sourcebook</a> | <a href="Category'RegionalSourcebook">Category'RegionalSourcebook</a>

---

### <a name="Category'CoreRules"></a> `Category'CoreRules`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category'CoreRules/tag">See details</a>

#### <a name="Category'CoreRules/tag"></a> `tag`

- **Constant:** `"CoreRules"`

---

### <a name="Category'ExpansionRules"></a> `Category'ExpansionRules`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category'ExpansionRules/tag">See details</a>

#### <a name="Category'ExpansionRules/tag"></a> `tag`

- **Constant:** `"ExpansionRules"`

---

### <a name="Category'Sourcebook"></a> `Category'Sourcebook`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category'Sourcebook/tag">See details</a>

#### <a name="Category'Sourcebook/tag"></a> `tag`

- **Constant:** `"Sourcebook"`

---

### <a name="Category'RegionalSourcebook"></a> `Category'RegionalSourcebook`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Category'RegionalSourcebook/tag">See details</a>

#### <a name="Category'RegionalSourcebook/tag"></a> `tag`

- **Constant:** `"RegionalSourcebook"`

---

### <a name="AgeRestriction"></a> `AgeRestriction`

The age the content is restricted to.

- **Type:** Union
- **Cases:** <a href="AgeRestriction'Adult">AgeRestriction'Adult</a> | <a href="AgeRestriction'None">AgeRestriction'None</a>

---

### <a name="AgeRestriction'Adult"></a> `AgeRestriction'Adult`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AgeRestriction'Adult/tag">See details</a>

#### <a name="AgeRestriction'Adult/tag"></a> `tag`

- **Constant:** `"Adult"`

---

### <a name="AgeRestriction'None"></a> `AgeRestriction'None`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AgeRestriction'None/tag">See details</a>

#### <a name="AgeRestriction'None/tag"></a> `tag`

- **Constant:** `"None"`

---

### <a name="Prerequisite"></a> `Prerequisite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The publication identifier. | <a href="#Prerequisite/id">See details</a>

#### <a name="Prerequisite/id"></a> `id`

The publication identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="Translation"></a> `Translation`

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
