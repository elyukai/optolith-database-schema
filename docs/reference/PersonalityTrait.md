# Personality Trait

## Definitions

### <a name="PersonalityTrait"></a> Personality Trait (`PersonalityTrait`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The personality trait's identifier. An unique, increasing integer. | <a href="#PersonalityTrait/id">See details</a>
`level` | The personality trait's level. | <a href="#PersonalityTrait/level">See details</a>
`prerequisites?` |  | <a href="#PersonalityTrait/prerequisites">See details</a>
`combination_options?` | The lower-level personality trait(s) this trait can be combined with. | <a href="#PersonalityTrait/combination_options">See details</a>
`src` |  | <a href="#PersonalityTrait/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PersonalityTrait/translations">See details</a>

#### <a name="PersonalityTrait/id"></a> `id`

The personality trait's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PersonalityTrait/level"></a> `level`

The personality trait's level.

- **Type:** Integer
- **Minimum:** `1`
- **Maximum:** `3`

#### <a name="PersonalityTrait/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#PersonalityTraitPrerequisites">PersonalityTraitPrerequisites</a>

#### <a name="PersonalityTrait/combination_options"></a> `combination_options?`

The lower-level personality trait(s) this trait can be combined with.

- **Type:** List
- **Items:** <a href="#PersonalityTrait/combination_options[]">PersonalityTrait/combination_options[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="PersonalityTrait/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="PersonalityTrait/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PersonalityTrait/translations[key]">PersonalityTrait/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PersonalityTrait/combination_options[]"></a> `PersonalityTrait/combination_options[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The referenced personality trait's identifier. | <a href="#PersonalityTrait/combination_options[]/id">See details</a>

#### <a name="PersonalityTrait/combination_options[]/id"></a> `id`

The referenced personality trait's identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PersonalityTrait/translations[key]"></a> `PersonalityTrait/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the personality trait. | <a href="#PersonalityTrait/translations[key]/name">See details</a>
`effects` | The effects of the personality trait. They should be sorted like they are in the book. | <a href="#PersonalityTrait/translations[key]/effects">See details</a>
`errata?` |  | <a href="#PersonalityTrait/translations[key]/errata">See details</a>

#### <a name="PersonalityTrait/translations[key]/name"></a> `name`

The name of the personality trait.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PersonalityTrait/translations[key]/effects"></a> `effects`

The effects of the personality trait. They should be sorted like they
are in the book.

- **Type:** List
- **Items:** <a href="#PersonalityTrait/translations[key]/effects[]">PersonalityTrait/translations[key]/effects[]</a>
- **Minimum Items:** `1`

#### <a name="PersonalityTrait/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="PersonalityTrait/translations[key]/effects[]"></a> `PersonalityTrait/translations[key]/effects[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label?` | A label that is displayed and placed before the actual text. | <a href="#PersonalityTrait/translations[key]/effects[]/label">See details</a>
`text` | The effect text. | <a href="#PersonalityTrait/translations[key]/effects[]/text">See details</a>

#### <a name="PersonalityTrait/translations[key]/effects[]/label"></a> `label?`

A label that is displayed and placed before the actual text.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PersonalityTrait/translations[key]/effects[]/text"></a> `text`

The effect text.

- **Type:** String
- **Minimum Length:** `1`
