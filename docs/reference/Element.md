# Element

## Definitions

### <a name="Element"></a> Element (`Element`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The element's identifier. An unique, increasing integer. | <a href="#Element/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Element/translations">See details</a>

#### <a name="Element/id"></a> `id`

The element's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Element/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Element/translations[key]">Element/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="Element/translations[key]"></a> `Element/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The element's name. | <a href="#Element/translations[key]/name">See details</a>

#### <a name="Element/translations[key]/name"></a> `name`

The element's name.

- **Type:** String
- **Minimum Length:** `1`
