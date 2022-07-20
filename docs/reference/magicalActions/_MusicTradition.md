# [TITLE MISSING]

## Definitions

### <a name="MusicTraditionReference"></a> `MusicTraditionReference`

A reference to a music tradition with the music-tradition-specific name of
the entry

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The music tradition's identifier. | <a href="#MusicTraditionReference/id">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#MusicTraditionReference/translations">See details</a>

#### <a name="MusicTraditionReference/id"></a> `id`

The music tradition's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="MusicTraditionReference/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#MusicTraditionReference/translations[key]">MusicTraditionReference/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="MusicTraditionReference/translations[key]"></a> `MusicTraditionReference/translations[key]`

- **Type:** <a href="#MusicTraditionReferenceTranslation">MusicTraditionReferenceTranslation</a>

---

### <a name="MusicTraditionReferenceTranslation"></a> `MusicTraditionReferenceTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The music-tradition-specific name of the entry. | <a href="#MusicTraditionReferenceTranslation/name">See details</a>

#### <a name="MusicTraditionReferenceTranslation/name"></a> `name`

The music-tradition-specific name of the entry.

- **Type:** <a href="../_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="MusicDuration"></a> `MusicDuration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`length` |  | <a href="#MusicDuration/length">See details</a>
`reusability` |  | <a href="#MusicDuration/reusability">See details</a>

#### <a name="MusicDuration/length"></a> `length`

- **Type:** <a href="#MusicLength">MusicLength</a>

#### <a name="MusicDuration/reusability"></a> `reusability`

- **Type:** <a href="#MusicReusability">MusicReusability</a>

---

### <a name="MusicLength"></a> `MusicLength`

- **Type:** Union
- **Cases:** <a href="#MusicLength'Long">MusicLength'Long</a> | <a href="#MusicLength'Short">MusicLength'Short</a>

---

### <a name="MusicLength'Long"></a> `MusicLength'Long`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MusicLength'Long/tag">See details</a>

#### <a name="MusicLength'Long/tag"></a> `tag`

- **Constant:** `"Long"`

---

### <a name="MusicLength'Short"></a> `MusicLength'Short`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MusicLength'Short/tag">See details</a>

#### <a name="MusicLength'Short/tag"></a> `tag`

- **Constant:** `"Short"`

---

### <a name="MusicReusability"></a> `MusicReusability`

- **Type:** Union
- **Cases:** <a href="#MusicReusability'OneTime">MusicReusability'OneTime</a> | <a href="#MusicReusability'Sustainable">MusicReusability'Sustainable</a>

---

### <a name="MusicReusability'OneTime"></a> `MusicReusability'OneTime`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MusicReusability'OneTime/tag">See details</a>

#### <a name="MusicReusability'OneTime/tag"></a> `tag`

- **Constant:** `"OneTime"`

---

### <a name="MusicReusability'Sustainable"></a> `MusicReusability'Sustainable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#MusicReusability'Sustainable/tag">See details</a>

#### <a name="MusicReusability'Sustainable/tag"></a> `tag`

- **Constant:** `"Sustainable"`
