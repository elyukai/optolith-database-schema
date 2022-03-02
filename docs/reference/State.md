# State

## Definitions

### <a name="State"></a> State (`State`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The state's identifier. An unique, increasing integer. | <a href="#State/id">See details</a>
`src` |  | <a href="#State/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#State/translations">See details</a>

#### <a name="State/id"></a> `id`

The state's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="State/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="State/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#State/translations[key]">State/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="State/translations[key]"></a> `State/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the state. | <a href="#State/translations[key]/name">See details</a>
`description` | The description of the state. | <a href="#State/translations[key]/description">See details</a>
`errata?` |  | <a href="#State/translations[key]/errata">See details</a>

#### <a name="State/translations[key]/name"></a> `name`

The name of the state.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="State/translations[key]/description"></a> `description`

The description of the state.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="State/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
