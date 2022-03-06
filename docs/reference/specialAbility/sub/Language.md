# Language

## Definitions

### <a name="Language"></a> Language (`Language`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The language's identifier. An unique, increasing integer. | <a href="#Language/id">See details</a>
`continent` | The continents this language is present on. | <a href="#Language/continent">See details</a>
`max_level?` | The maximum possible level of the language. Only specified if lower than default of 3. | <a href="#Language/max_level">See details</a>
`specializations` | Language-specific specializations. Either a list of possible options or a indefinite description of what may be a specialization. | <a href="#Language/specializations">See details</a>
`prerequisites?` |  | <a href="#Language/prerequisites">See details</a>
`src` |  | <a href="#Language/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Language/translations">See details</a>

#### <a name="Language/id"></a> `id`

The language's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Language/continent"></a> `continent`

The continents this language is present on.

- **Type:** List
- **Items:** <a href="#Language/continent[]">Language/continent[]</a>
- **Minimum Items:** `1`

#### <a name="Language/max_level"></a> `max_level?`

The maximum possible level of the language. Only specified if lower than
default of 3.

- **Type:** Number
- **Minimum:** `1`
- **Maximum:** `2`

#### <a name="Language/specializations"></a> `specializations`

Language-specific specializations. Either a list of possible options or a
indefinite description of what may be a specialization.

- **Type:** Union
- **Cases:** <a href="#Language/specializations'Specific">Language/specializations'Specific</a> | <a href="#Language/specializations'Indefinite">Language/specializations'Indefinite</a>

#### <a name="Language/prerequisites"></a> `prerequisites?`

- **Type:** <a href="../../_Prerequisite.md#GroupCollection/Language">GroupCollection/Language</a>

#### <a name="Language/src"></a> `src`

- **Type:** <a href="../../source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Language/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Language/translations[key]">Language/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Language/continent[]"></a> `Language/continent[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The continent's identifier. | <a href="#Language/continent[]/id">See details</a>
`is_extinct` | Is the language considered virtually extinct in this continent? | <a href="#Language/continent[]/is_extinct">See details</a>

#### <a name="Language/continent[]/id"></a> `id`

The continent's identifier.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `3`

#### <a name="Language/continent[]/is_extinct"></a> `is_extinct`

Is the language considered virtually extinct in this continent?

- **Type:** Boolean

---

### <a name="Language/specializations'Specific"></a> `Language/specializations'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Language/specializations'Specific/tag">See details</a>
`list` | A list of specific possible specializations. | <a href="#Language/specializations'Specific/list">See details</a>

#### <a name="Language/specializations'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="Language/specializations'Specific/list"></a> `list`

A list of specific possible specializations.

- **Type:** List
- **Items:** <a href="#Language/specializations'Specific/list[]">Language/specializations'Specific/list[]</a>

---

### <a name="Language/specializations'Specific/list[]"></a> `Language/specializations'Specific/list[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The specialization's identifier. An unique, increasing integer. | <a href="#Language/specializations'Specific/list[]/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Language/specializations'Specific/list[]/translations">See details</a>

#### <a name="Language/specializations'Specific/list[]/id"></a> `id`

The specialization's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Language/specializations'Specific/list[]/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Language/specializations'Specific/list[]/translations[key]">Language/specializations'Specific/list[]/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Language/specializations'Specific/list[]/translations[key]"></a> `Language/specializations'Specific/list[]/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the specialization. | <a href="#Language/specializations'Specific/list[]/translations[key]/name">See details</a>
`description?` | The specialization description. It will be appended to the name in parenthesis. | <a href="#Language/specializations'Specific/list[]/translations[key]/description">See details</a>

#### <a name="Language/specializations'Specific/list[]/translations[key]/name"></a> `name`

The name of the specialization.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Language/specializations'Specific/list[]/translations[key]/description"></a> `description?`

The specialization description. It will be appended to the name in
parenthesis.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Language/specializations'Indefinite"></a> `Language/specializations'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Language/specializations'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Language/specializations'Indefinite/translations">See details</a>

#### <a name="Language/specializations'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="Language/specializations'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Language/specializations'Indefinite/translations[key]">Language/specializations'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Language/specializations'Indefinite/translations[key]"></a> `Language/specializations'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | The specializations description. | <a href="#Language/specializations'Indefinite/translations[key]/description">See details</a>
`label?` | An input label or placeholder text for an UI element if it differs from the `description`. | <a href="#Language/specializations'Indefinite/translations[key]/label">See details</a>

#### <a name="Language/specializations'Indefinite/translations[key]/description"></a> `description`

The specializations description.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Language/specializations'Indefinite/translations[key]/label"></a> `label?`

An input label or placeholder text for an UI element if it differs
from the `description`.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Language/translations[key]"></a> `Language/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the language. | <a href="#Language/translations[key]/name">See details</a>
`alternative_names?` | A list of alternative names. | <a href="#Language/translations[key]/alternative_names">See details</a>
`description?` | The description of the language. | <a href="#Language/translations[key]/description">See details</a>
`errata?` |  | <a href="#Language/translations[key]/errata">See details</a>

#### <a name="Language/translations[key]/name"></a> `name`

The name of the language.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Language/translations[key]/alternative_names"></a> `alternative_names?`

A list of alternative names.

- **Type:** List
- **Items:** <a href="#Language/translations[key]/alternative_names[]">Language/translations[key]/alternative_names[]</a>

#### <a name="Language/translations[key]/description"></a> `description?`

The description of the language.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Language/translations[key]/errata"></a> `errata?`

- **Type:** <a href="../../source/_Erratum.md#Errata">Errata</a>

---

### <a name="Language/translations[key]/alternative_names[]"></a> `Language/translations[key]/alternative_names[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | An alternative name of the language. | <a href="#Language/translations[key]/alternative_names[]/name">See details</a>

#### <a name="Language/translations[key]/alternative_names[]/name"></a> `name`

An alternative name of the language.

- **Type:** String
- **Minimum Length:** `1`
