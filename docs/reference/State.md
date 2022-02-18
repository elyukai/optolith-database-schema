# State

## Definitions

### <a name="State"></a> State

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | An unique, increasing integer. | <a href="#State/id">See details</a>
`src` |  | <a href="#State/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#State/translations">See details</a>

#### <a name="State/id"></a> `id`

An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="State/src"></a> `src`

- **Type:** <a href="./_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="State/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

##### Values matching `^[a-z]{2}-[A-Z]{2}$`

- **Type:** <a href="#Translation">Translation</a>

---

### <a name="Translation"></a> Translation

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the state. | <a href="#Translation/name">See details</a>
`description` | The description of the state. | <a href="#Translation/description">See details</a>
`errata?` |  | <a href="#Translation/errata">See details</a>

#### <a name="Translation/name"></a> `name`

The name of the state.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Translation/description"></a> `description`

The description of the state.

- **Type:** Markdown-formatted String
- **Minimum Length:** `1`

#### <a name="Translation/errata"></a> `errata?`

- **Type:** <a href="./_Erratum.md#Errata">Errata</a>
