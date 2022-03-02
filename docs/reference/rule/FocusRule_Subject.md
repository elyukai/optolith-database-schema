# Subject

Subjects or Subject Areas are the categories of Focus Rules.

## Definitions

### <a name="Subject"></a> Subject (`Subject`)

Subjects or Subject Areas are the categories of Focus Rules.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The subject's identifier. An unique, increasing integer. | <a href="#Subject/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Subject/translations">See details</a>

#### <a name="Subject/id"></a> `id`

The subject's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Subject/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Subject/translations[key]">Subject/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Subject/translations[key]"></a> `Subject/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The subject. | <a href="#Subject/translations[key]/name">See details</a>

#### <a name="Subject/translations[key]/name"></a> `name`

The subject.

- **Type:** String
- **Minimum Length:** `1`
