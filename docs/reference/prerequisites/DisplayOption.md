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
`hide` |  | <a href="#DisplayOption'Hide/hide">See details</a>

#### <a name="DisplayOption'Hide/tag"></a> `tag`

- **Constant:** `"Hide"`

#### <a name="DisplayOption'Hide/hide"></a> `hide`

- **Type:** <a href="#DisplayOption'Hide/hide">Object</a>

---

### <a name="DisplayOption'Hide/hide"></a> `DisplayOption'Hide/hide`

- **Type:** Empty Object

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
`sentence_type?` | If the replacement text is a sentence or sentence-like fragment, this property ensures it is integrated into the prerequisite string correctly. | <a href="#ReplacementDisplayOption/sentence_type">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ReplacementDisplayOption/translations">See details</a>

#### <a name="ReplacementDisplayOption/sentence_type"></a> `sentence_type?`

If the replacement text is a sentence or sentence-like fragment, this
property ensures it is integrated into the prerequisite string correctly.

A standalone sentence is connected to the previous prerequisite string with
a period and a period is also added at the end of the sentence
automatically, if it is not present. A connected sentence is connected to
the previous prerequisite string with a semicolon and a period is not added
to the end of the sentence. In this case, if there are prerequisites after
this one, they will be connected using a semicolon again, unless a
different punctuation mark is present at the end of the given text.

- **Type:** <a href="./single/TextPrerequisite.md#SentenceType">SentenceType</a>

#### <a name="ReplacementDisplayOption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ReplacementDisplayOption/translations[key]">ReplacementDisplayOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ReplacementDisplayOption/translations[key]"></a> `ReplacementDisplayOption/translations[key]`

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>
