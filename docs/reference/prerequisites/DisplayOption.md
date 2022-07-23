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
`replace_with` |  | <a href="#DisplayOption'ReplaceWith/replace_with">See details</a>

#### <a name="DisplayOption'ReplaceWith/tag"></a> `tag`

- **Constant:** `"ReplaceWith"`

#### <a name="DisplayOption'ReplaceWith/replace_with"></a> `replace_with`

- **Type:** <a href="#ReplacementDisplayOption">ReplacementDisplayOption</a>

---

### <a name="ReplacementDisplayOption"></a> `ReplacementDisplayOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ReplacementDisplayOption/translations">See details</a>

#### <a name="ReplacementDisplayOption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ReplacementDisplayOption/translations[key]">ReplacementDisplayOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ReplacementDisplayOption/translations[key]"></a> `ReplacementDisplayOption/translations[key]`

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
