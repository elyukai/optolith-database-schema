# [TITLE MISSING]

## Definitions

### <a name="DisplayOption"></a> Display Option (`DisplayOption`)

- **Type:** Union
- **Cases:** <a href="#DisplayOption'Hide">DisplayOption'Hide</a> | <a href="#DisplayOption'ReplaceWith">DisplayOption'ReplaceWith</a>

---

### <a name="DisplayOption'Hide"></a> `DisplayOption'Hide`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DisplayOption'Hide/tag">See details</a>

#### <a name="DisplayOption'Hide/tag"></a> `tag`

- **Constant:** `"Hide"`

---

### <a name="DisplayOption'ReplaceWith"></a> `DisplayOption'ReplaceWith`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#DisplayOption'ReplaceWith/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#DisplayOption'ReplaceWith/translations">See details</a>

#### <a name="DisplayOption'ReplaceWith/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

#### <a name="DisplayOption'ReplaceWith/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#DisplayOption'ReplaceWith/translations[key]">DisplayOption'ReplaceWith/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="DisplayOption'ReplaceWith/translations[key]"></a> `DisplayOption'ReplaceWith/translations[key]`

- **Type:** <a href="#NonEmptyString">NonEmptyString</a>

---

### <a name="NonEmptyString"></a> `NonEmptyString`

- **Type:** String
- **Minimum Length:** `1`
