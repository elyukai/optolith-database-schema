# Enhancements

## Definitions

### <a name="Enhancements"></a> `Enhancements`

A list of enhancements.

- **Type:** List
- **Items:** <a href="#Enhancements[]">Enhancements[]</a>
- **Minimum Items:** `3`
- **Maximum Items:** `5`

---

### <a name="Enhancements[]"></a> `Enhancements[]`

- **Type:** <a href="#Enhancement">Enhancement</a>

---

### <a name="Enhancement"></a> Enhancement (`Enhancement`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The enhancement's identifier. An unique, increasing integer. | <a href="#Enhancement/id">See details</a>
`skill_rating` | The skill rating required to learn this enhancement. | <a href="#Enhancement/skill_rating">See details</a>
`adventure_points_modifier` | The value to multiply with the numeric representation of the associated skill's improvement cost to form the final AP cost of this enhancement. | <a href="#Enhancement/adventure_points_modifier">See details</a>
`prerequisites?` |  | <a href="#Enhancement/prerequisites">See details</a>
`src?` | Only defined if different than the associated skill. | <a href="#Enhancement/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Enhancement/translations">See details</a>

#### <a name="Enhancement/id"></a> `id`

The enhancement's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Enhancement/skill_rating"></a> `skill_rating`

The skill rating required to learn this enhancement.

- **Type:** Integer
- **Minimum:** `8`
- **Maximum:** `16`

#### <a name="Enhancement/adventure_points_modifier"></a> `adventure_points_modifier`

The value to multiply with the numeric representation of the associated
skill's improvement cost to form the final AP cost of this enhancement.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Enhancement/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#Prerequisite/GroupCollection/Enhancement">Prerequisite/GroupCollection/Enhancement</a>

#### <a name="Enhancement/src"></a> `src?`

Only defined if different than the associated skill.

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Enhancement/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Enhancement/translations[key]">Enhancement/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Enhancement/translations[key]"></a> `Enhancement/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the enhancement. | <a href="#Enhancement/translations[key]/name">See details</a>
`effect` | The effect description. | <a href="#Enhancement/translations[key]/effect">See details</a>
`errata?` |  | <a href="#Enhancement/translations[key]/errata">See details</a>

#### <a name="Enhancement/translations[key]/name"></a> `name`

The name of the enhancement.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Enhancement/translations[key]/effect"></a> `effect`

The effect description.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="Enhancement/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
