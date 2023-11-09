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

- **Type:** <a href="./_LocaleMap.md#LocaleMap">LocaleMap</a>&lt;<a href="#ElementTranslation">ElementTranslation</a>&gt;

---

### <a name="ElementTranslation"></a> `ElementTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The element's name. | <a href="#ElementTranslation/name">See details</a>

#### <a name="ElementTranslation/name"></a> `name`

The element's name.

- **Type:** String
- **Minimum Length:** `1`
