# Service of Summoned Creatures and Monstrosities

## Definitions

### <a name="Service"></a> Service of Summoned Creatures and Monstrosities (`Service`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The service's identifier. An unique, increasing integer. | <a href="#Service/id">See details</a>
`availability` | Defines for which creature type(s) the service is available. | <a href="#Service/availability">See details</a>
`src` |  | <a href="#Service/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Service/translations">See details</a>

#### <a name="Service/id"></a> `id`

The service's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Service/availability"></a> `availability`

Defines for which creature type(s) the service is available.

- **Type:** List
- **Items:** <a href="#Service/availability[]">Service/availability[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

#### <a name="Service/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Service/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Service/translations[key]">Service/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Service/availability[]"></a> `Service/availability[]`

- **Type:** <a href="#ServiceAvailability">ServiceAvailability</a>

---

### <a name="Service/translations[key]"></a> `Service/translations[key]`

- **Type:** <a href="#ServiceTranslation">ServiceTranslation</a>

---

### <a name="ServiceAvailability"></a> `ServiceAvailability`

- **Possible values:** `"SummonedCreatures"`, `"Monstrosities"`

---

### <a name="ServiceTranslation"></a> `ServiceTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the service. | <a href="#ServiceTranslation/name">See details</a>
`description` | The description of the service. | <a href="#ServiceTranslation/description">See details</a>
`errata?` |  | <a href="#ServiceTranslation/errata">See details</a>

#### <a name="ServiceTranslation/name"></a> `name`

The name of the service.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="ServiceTranslation/description"></a> `description`

The description of the service.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="ServiceTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
