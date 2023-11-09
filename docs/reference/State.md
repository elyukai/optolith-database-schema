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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#StateTranslation">StateTranslation</a>&gt;

---

### <a name="StateTranslation"></a> `StateTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the state. | <a href="#StateTranslation/name">See details</a>
`description` | The description of the state. | <a href="#StateTranslation/description">See details</a>
`errata?` |  | <a href="#StateTranslation/errata">See details</a>

#### <a name="StateTranslation/name"></a> `name`

The name of the state.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="StateTranslation/description"></a> `description`

The description of the state.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

#### <a name="StateTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>
